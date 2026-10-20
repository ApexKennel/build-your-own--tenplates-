import React, { useState, useEffect, useRef } from 'react';
import { Box, Play, Sparkles, Sliders, RefreshCw } from 'lucide-react';

interface Sphere {
  center: [number, number, number];
  radius: number;
  color: [number, number, number];
  specular: number;
  reflective: number;
}

export const RaytracerPlayground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [lightPos, setLightPos] = useState<[number, number, number]>([2, 3, -1]);
  const [sphereColor, setSphereColor] = useState<string>('#3b82f6'); // blue
  const [specularPower, setSpecularPower] = useState<number>(50);
  const [renderTime, setRenderTime] = useState<number>(0);
  const [showWireframe, setShowWireframe] = useState<boolean>(false);

  // Render raytraced scene
  const renderScene = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const startTime = performance.now();
    const width = canvas.width;
    const height = canvas.height;
    const imgData = ctx.createImageData(width, height);
    const data = imgData.data;

    // Convert hex color to rgb
    const r = parseInt(sphereColor.slice(1, 3), 16);
    const g = parseInt(sphereColor.slice(3, 5), 16);
    const b = parseInt(sphereColor.slice(5, 7), 16);

    const spheres: Sphere[] = [
      { center: [0, -1, 3], radius: 1, color: [r, g, b], specular: specularPower, reflective: 0.2 },
      { center: [2, 0, 4], radius: 1, color: [239, 68, 68], specular: 100, reflective: 0.3 }, // red
      { center: [-2, 0, 4], radius: 1, color: [16, 185, 129], specular: 10, reflective: 0.1 }, // emerald
      { center: [0, -5001, 0], radius: 5000, color: [100, 116, 139], specular: 1000, reflective: 0.1 } // ground floor
    ];

    const cameraPos: [number, number, number] = [0, 0, 0];

    // Helper functions
    const dot = (v1: number[], v2: number[]) => v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
    const sub = (v1: number[], v2: number[]) => [v1[0] - v2[0], v1[1] - v2[1], v1[2] - v2[2]];
    const length = (v: number[]) => Math.sqrt(dot(v, v));
    const normalize = (v: number[]) => {
      const l = length(v);
      return [v[0] / l, v[1] / l, v[2] / l];
    };

    // Ray-Sphere intersection
    const intersectSphere = (origin: number[], dir: number[], sphere: Sphere): [number, number] => {
      const oc = sub(origin, sphere.center);
      const k1 = dot(dir, dir);
      const k2 = 2 * dot(oc, dir);
      const k3 = dot(oc, oc) - sphere.radius * sphere.radius;
      const discriminant = k2 * k2 - 4 * k1 * k3;

      if (discriminant < 0) return [Infinity, Infinity];
      const t1 = (-k2 + Math.sqrt(discriminant)) / (2 * k1);
      const t2 = (-k2 - Math.sqrt(discriminant)) / (2 * k1);
      return [t1, t2];
    };

    // Trace ray
    const traceRay = (origin: number[], dir: number[], minT: number, maxT: number): [number, number, number] => {
      let closestT = Infinity;
      let closestSphere: Sphere | null = null;

      for (const sphere of spheres) {
        const [t1, t2] = intersectSphere(origin, dir, sphere);
        if (t1 >= minT && t1 <= maxT && t1 < closestT) {
          closestT = t1;
          closestSphere = sphere;
        }
        if (t2 >= minT && t2 <= maxT && t2 < closestT) {
          closestT = t2;
          closestSphere = sphere;
        }
      }

      if (!closestSphere) {
        // Sky gradient
        const t = 0.5 * (dir[1] + 1.0);
        return [
          Math.floor((1.0 - t) * 15 + t * 30),
          Math.floor((1.0 - t) * 23 + t * 45),
          Math.floor((1.0 - t) * 42 + t * 70)
        ];
      }

      // Compute intersection point and normal
      const P = [origin[0] + closestT * dir[0], origin[1] + closestT * dir[1], origin[2] + closestT * dir[2]];
      const N = normalize(sub(P, closestSphere.center));

      // Lighting computation: Ambient + Diffuse + Specular
      let intensity = 0.2; // Ambient
      const lightDir = normalize(sub(lightPos, P));
      const nDotL = dot(N, lightDir);

      // Shadow check
      let inShadow = false;
      for (const s of spheres) {
        const [st1, st2] = intersectSphere(P, lightDir, s);
        if ((st1 > 0.001 && st1 < 1.0) || (st2 > 0.001 && st2 < 1.0)) {
          inShadow = true;
          break;
        }
      }

      if (!inShadow && nDotL > 0) {
        // Diffuse
        intensity += nDotL * 0.7;

        // Specular (Phong model)
        if (closestSphere.specular > 0) {
          const viewDir = normalize(sub(cameraPos, P));
          // R = 2*(N.L)*N - L
          const R = [2 * nDotL * N[0] - lightDir[0], 2 * nDotL * N[1] - lightDir[1], 2 * nDotL * N[2] - lightDir[2]];
          const rDotV = dot(R, viewDir);
          if (rDotV > 0) {
            intensity += Math.pow(rDotV, closestSphere.specular) * 0.6;
          }
        }
      }

      const cr = Math.min(255, Math.floor(closestSphere.color[0] * intensity));
      const cg = Math.min(255, Math.floor(closestSphere.color[1] * intensity));
      const cb = Math.min(255, Math.floor(closestSphere.color[2] * intensity));

      return [cr, cg, cb];
    };

    // Canvas coordinate mapping
    const d = 1.0;
    const aspect = width / height;

    for (let cy = 0; cy < height; cy++) {
      for (let cx = 0; cx < width; cx++) {
        // Map pixel to viewport (-aspect..aspect, -1..1)
        const vx = ((cx + 0.5) / width * 2 - 1) * aspect;
        const vy = -((cy + 0.5) / height * 2 - 1); // invert Y
        const dir = normalize([vx, vy, d]);

        const [rVal, gVal, bVal] = traceRay(cameraPos, dir, 1.0, Infinity);

        const pIdx = (cy * width + cx) * 4;
        data[pIdx] = rVal;
        data[pIdx + 1] = gVal;
        data[pIdx + 2] = bVal;
        data[pIdx + 3] = 255;
      }
    }

    ctx.putImageData(imgData, 0, 0);
    setRenderTime(Math.round(performance.now() - startTime));
  };

  useEffect(() => {
    renderScene();
  }, [lightPos, sphereColor, specularPower]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col my-6">
      {/* Header bar */}
      <div className="bg-slate-950 px-5 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-pink-500/20 text-pink-400">
            <Box className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm">Build Your Own 3D Renderer / Ray Tracer</h4>
            <p className="text-slate-400 text-xs">Simulating ray-sphere intersections, Phong specular highlights, and hard shadows</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="px-2 py-0.5 rounded bg-slate-800 text-emerald-400">
            Rendered in {renderTime}ms
          </span>
          <button
            onClick={renderScene}
            className="flex items-center gap-1 px-3 py-1 bg-pink-600 hover:bg-pink-500 text-white rounded text-xs font-semibold"
          >
            <RefreshCw className="w-3 h-3" />
            Re-render
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
        {/* Canvas Display */}
        <div className="lg:col-span-7 p-6 bg-slate-950/90 flex flex-col items-center justify-center">
          <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
            <canvas
              ref={canvasRef}
              width={340}
              height={240}
              className="block bg-slate-950"
            />
            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur text-[10px] font-mono text-slate-300 border border-slate-800">
              340x240 px • 81,600 Primary Rays Traced
            </div>
          </div>
        </div>

        {/* Interactive Controls & Math */}
        <div className="lg:col-span-5 p-6 bg-slate-950/80 flex flex-col space-y-4">
          <div className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-1.5">
            <Sliders className="w-4 h-4 text-pink-400" />
            Scene & Light Controls
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Light X Position</span>
                <span className="font-mono text-pink-400">{lightPos[0]}</span>
              </div>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.5"
                value={lightPos[0]}
                onChange={e => setLightPos([parseFloat(e.target.value), lightPos[1], lightPos[2]])}
                className="w-full accent-pink-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Light Y Position (Height)</span>
                <span className="font-mono text-pink-400">{lightPos[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="8"
                step="0.5"
                value={lightPos[1]}
                onChange={e => setLightPos([lightPos[0], parseFloat(e.target.value), lightPos[2]])}
                className="w-full accent-pink-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Center Sphere Color</span>
                <span className="font-mono text-pink-400">{sphereColor}</span>
              </div>
              <div className="flex gap-2">
                {['#3b82f6', '#ec4899', '#eab308', '#a855f7', '#14b8a6'].map(c => (
                  <button
                    key={c}
                    onClick={() => setSphereColor(c)}
                    style={{ backgroundColor: c }}
                    className={`w-6 h-6 rounded-full border-2 transition-transform ${
                      sphereColor === c ? 'scale-110 border-white' : 'border-transparent'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Specular Shininess (Exponent)</span>
                <span className="font-mono text-pink-400">{specularPower}</span>
              </div>
              <input
                type="range"
                min="5"
                max="200"
                step="5"
                value={specularPower}
                onChange={e => setSpecularPower(parseInt(e.target.value, 10))}
                className="w-full accent-pink-500"
              />
            </div>
          </div>

          {/* Math Card */}
          <div className="mt-4 p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1">
            <div className="text-pink-300 font-semibold text-xs mb-1">📐 Ray-Sphere Quadratic Formula:</div>
            <div>t²(d·d) + 2t(oc·d) + (oc·oc - r²) = 0</div>
            <div className="text-slate-400">Discriminant &gt; 0 =&gt; 2 hit points (enter/exit)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

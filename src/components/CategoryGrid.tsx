import React from 'react';
import {
  Network, Box, Brain, Glasses, Share2, Coins, Bot, Terminal,
  Database, Container, Cpu, Layout, Gamepad2, GitBranch, Binary,
  Radio, Sparkles, HardDrive, Orbit, Microchip, Code, SearchCode,
  Search, SquareTerminal, FileCode2, FileEdit, Eye, Boxes, Globe,
  Server, Sparkle
} from 'lucide-react';
import { CATEGORIES_META } from '../data/tutorialsData';

interface CategoryGridProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

// Icon mapper
const ICON_MAP: Record<string, React.ReactNode> = {
  Network: <Network className="w-5 h-5" />,
  Box: <Box className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Glasses: <Glasses className="w-5 h-5" />,
  Share2: <Share2 className="w-5 h-5" />,
  Coins: <Coins className="w-5 h-5" />,
  Bot: <Bot className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Container: <Container className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  Gamepad2: <Gamepad2 className="w-5 h-5" />,
  GitBranch: <GitBranch className="w-5 h-5" />,
  Binary: <Binary className="w-5 h-5" />,
  Radio: <Radio className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  HardDrive: <HardDrive className="w-5 h-5" />,
  Orbit: <Orbit className="w-5 h-5" />,
  Microchip: <Microchip className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />,
  SearchCode: <SearchCode className="w-5 h-5" />,
  Search: <Search className="w-5 h-5" />,
  SquareTerminal: <SquareTerminal className="w-5 h-5" />,
  FileCode2: <FileCode2 className="w-5 h-5" />,
  FileEdit: <FileEdit className="w-5 h-5" />,
  Eye: <Eye className="w-5 h-5" />,
  Boxes: <Boxes className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Sparkle: <Sparkle className="w-5 h-5" />
};

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <div className="my-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-white">Explore by Technology Category</h3>
          <p className="text-slate-400 text-xs">Pick an architecture domain to discover focused tutorials.</p>
        </div>
        {selectedCategory !== 'all' && (
          <button
            onClick={() => onSelectCategory('all')}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
          >
            Show All Categories
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {Object.entries(CATEGORIES_META).map(([name, meta]) => {
          const isSelected = selectedCategory === name;
          const iconNode = ICON_MAP[meta.icon] || <Code className="w-5 h-5" />;

          return (
            <button
              key={name}
              onClick={() => onSelectCategory(isSelected ? 'all' : name)}
              className={`p-3.5 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between group ${
                isSelected
                  ? 'bg-indigo-600/20 border-indigo-500 shadow-lg shadow-indigo-600/20'
                  : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div
                  className={`p-2 rounded-xl text-white ${
                    isSelected
                      ? 'bg-indigo-600'
                      : 'bg-slate-800 text-indigo-400 group-hover:text-white group-hover:bg-indigo-600'
                  } transition-colors`}
                >
                  {iconNode}
                </div>
                <span className="font-mono text-xs text-slate-400 font-medium">
                  {meta.count}
                </span>
              </div>

              <div>
                <div className="text-xs font-bold text-slate-100 group-hover:text-indigo-300 line-clamp-1">
                  {name}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5 truncate">
                  {meta.level}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

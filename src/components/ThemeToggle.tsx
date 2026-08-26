import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center gap-1.5 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 border ${
        isDark
          ? 'bg-navy-900/90 border-white/15 text-slate-200 hover:text-flexo-yellow hover:border-flexo-yellow/40 hover:bg-navy-800'
          : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-amber-600 hover:border-amber-500/50 hover:bg-white shadow-sm'
      } ${className}`}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDark ? (
        <>
          <Sun className="w-4 h-4 text-flexo-yellow animate-spin-slow shrink-0" />
          <span className="hidden sm:inline">Light</span>
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 text-indigo-600 shrink-0" />
          <span className="hidden sm:inline">Dark</span>
        </>
      )}
    </button>
  );
};

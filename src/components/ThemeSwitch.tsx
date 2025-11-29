import React, { useState } from 'react';
import { Palette, ChevronDown } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeSwitch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { availableThemes, currentTheme, switchTheme } = useTheme();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-[var(--card-bg-color)] 
                   border border-[var(--primary-color)] rounded-lg hover:bg-opacity-80 
                   transition-all duration-300 hover:scale-105"
      >
        <Palette size={16} className="text-[var(--primary-color)]" />
        <span className="text-[var(--text-color)] text-sm hidden sm:inline">
          {availableThemes[currentTheme].name}
        </span>
        <ChevronDown 
          size={16} 
          className={`text-[var(--primary-color)] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-[var(--card-bg-color)] 
                        border border-[var(--primary-color)] rounded-lg shadow-lg 
                        min-w-48 z-50 animate-fade-in">
          {Object.entries(availableThemes).map(([key, theme]) => (
            <button
              key={key}
              onClick={() => {
                switchTheme(key);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-opacity-20 
                         hover:bg-[var(--primary-color)] transition-all duration-200 
                         first:rounded-t-lg last:rounded-b-lg ${
                currentTheme === key ? 'bg-[var(--primary-color)] bg-opacity-20' : ''
              }`}
            >
              <div 
                className="w-4 h-4 rounded-full border-2 border-gray-600"
                style={{ backgroundColor: theme.primary }}
              />
              <span className="text-[var(--text-color)] text-sm">
                {theme.name}
              </span>
              {currentTheme === key && (
                <div className="ml-auto w-2 h-2 bg-[var(--primary-color)] rounded-full" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitch;
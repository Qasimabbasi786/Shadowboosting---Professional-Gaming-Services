import { useState, useEffect, useCallback } from 'react';
import { themes, Theme } from '../types/theme';

// Utility function to convert hex to RGB
const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `${r}, ${g}, ${b}`;
  }
  return '0, 210, 255'; // fallback
};

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<string>('electric-blue');

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('gaming-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply CSS variables
    const theme = themes[currentTheme];
    const root = document.documentElement;
    
    root.style.setProperty('--primary-color', theme.primary);
    root.style.setProperty('--secondary-color', theme.secondary);
    root.style.setProperty('--accent-color', theme.accent);
    root.style.setProperty('--background-color', theme.background);
    root.style.setProperty('--card-bg-color', theme.cardBg);
    root.style.setProperty('--text-color', theme.text);
    root.style.setProperty('--text-secondary-color', theme.textSecondary);
    root.style.setProperty('--primary-color-rgb', hexToRgb(theme.primary));

    // Save theme to localStorage
    localStorage.setItem('gaming-theme', currentTheme);
  }, [currentTheme]);

  const switchTheme = useCallback((themeKey: string) => {
    if (themes[themeKey]) {
      setCurrentTheme(themeKey);
    }
  }, []);

  return {
    currentTheme,
    theme: themes[currentTheme],
    primaryColorRgb: hexToRgb(themes[currentTheme].primary),
    availableThemes: themes,
    switchTheme
  };
};
import React, { useEffect, useState } from 'react';
import SBLogo from './SBLogo';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');

  useEffect(() => {
    const texts = [
      'Initializing...',
      'Loading Assets...',
      'Connecting to Server...',
      'Optimizing Performance...',
      'Ready to Game!'
    ];

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        if (newProgress >= 100) {
          setLoadingText('Ready to Game!');
          setTimeout(onLoadComplete, 500);
          return 100;
        }
        
        const textIndex = Math.floor((newProgress / 100) * (texts.length - 1));
        setLoadingText(texts[textIndex]);
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--background-color)] transition-opacity duration-500">
      <div className="text-center">
        <div className="mb-8">
          <div className="mx-auto mb-4 animate-pulse">
            <SBLogo size={80} showText={false} />
          </div>
          <h1 className="text-4xl font-gaming text-[var(--text-color)] mb-2 animate-fade-in">
            Shadowboosting
          </h1>
          <p className="text-[var(--text-secondary-color)] font-futuristic animate-fade-in-delay">
            {loadingText}
          </p>
        </div>
        
        <div className="w-80 mx-auto">
          <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[var(--primary-color)] text-sm mt-2 font-gaming">
            {Math.round(progress)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
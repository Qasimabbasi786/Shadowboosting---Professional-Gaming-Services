import React from 'react';

interface SBLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

const SBLogo: React.FC<SBLogoProps> = ({ size = 32, className = '', showText = true }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* SB Logo Icon */}
      <div className="relative group">
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 64 64" 
          className="transition-all duration-300 group-hover:scale-110"
        >
          {/* Background Circle with Gradient */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary-color)" />
              <stop offset="50%" stopColor="var(--secondary-color)" />
              <stop offset="100%" stopColor="var(--primary-color)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Outer Ring */}
          <circle 
            cx="32" 
            cy="32" 
            r="30" 
            fill="none" 
            stroke="url(#logoGradient)" 
            strokeWidth="2"
            className="opacity-60"
          />
          
          {/* Inner Background */}
          <circle 
            cx="32" 
            cy="32" 
            r="28" 
            fill="var(--card-bg-color)"
            className="opacity-90"
          />
          
          {/* S Letter */}
          <path 
            d="M 18 20 
               Q 18 16 22 16 
               L 28 16 
               Q 32 16 32 20 
               Q 32 24 28 24 
               L 24 24 
               Q 20 24 20 28 
               Q 20 32 24 32 
               L 30 32 
               Q 34 32 34 36 
               Q 34 40 30 40 
               L 22 40 
               Q 18 40 18 36"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#glow)"
            className="drop-shadow-lg"
          />
          
          {/* B Letter */}
          <path 
            d="M 38 16 
               L 38 48 
               M 38 16 
               L 48 16 
               Q 52 16 52 20 
               Q 52 24 48 24 
               L 38 24 
               M 38 24 
               L 50 24 
               Q 54 24 54 28 
               Q 54 32 50 32 
               L 38 32"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#glow)"
            className="drop-shadow-lg"
          />
          
          {/* Gaming Elements - Small Dots */}
          <circle cx="16" cy="16" r="1.5" fill="var(--primary-color)" className="opacity-60 animate-pulse" />
          <circle cx="48" cy="16" r="1.5" fill="var(--primary-color)" className="opacity-60 animate-pulse" style={{animationDelay: '0.5s'}} />
          <circle cx="16" cy="48" r="1.5" fill="var(--primary-color)" className="opacity-60 animate-pulse" style={{animationDelay: '1s'}} />
          <circle cx="48" cy="48" r="1.5" fill="var(--primary-color)" className="opacity-60 animate-pulse" style={{animationDelay: '1.5s'}} />
        </svg>
        
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-[var(--primary-color)] rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />
      </div>
      
      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-[var(--text-color)] font-gaming tracking-wider group-hover:text-[var(--primary-color)] transition-colors duration-300">
            Shadowboosting
          </span>
          <span className="text-[var(--text-secondary-color)] text-xs font-futuristic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Level Up Your Game
          </span>
        </div>
      )}
    </div>
  );
};

export default SBLogo;
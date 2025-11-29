import React, { useEffect, useState } from 'react';
import { Play, ArrowRight, Zap, Shield, Clock, Trophy, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [currentSlogan, setCurrentSlogan] = useState(0);
  
  const slogans = [
    'Level Up Your Gaming Experience',
    'Dominate Every Match',
    'Unlock Your True Potential',
    'Rise Through The Ranks'
  ];
  
  useEffect(() => {
    const fullText = slogans[currentSlogan];
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        // Switch to next slogan after 3 seconds
        setTimeout(() => {
          setCurrentSlogan((prev) => (prev + 1) % slogans.length);
          setTypedText('');
        }, 3000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentSlogan]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background-color)] 
                      via-[var(--card-bg-color)] to-[var(--background-color)] 
                      opacity-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute ${i % 4 === 0 ? 'w-6 h-6' : i % 4 === 1 ? 'w-3 h-3' : i % 4 === 2 ? 'w-8 h-8' : 'w-2 h-2'} 
                       border border-[var(--primary-color)] 
                       ${i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rounded-lg rotate-45' : 'rounded-sm'} 
                       animate-float-${i % 3 + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[var(--primary-color)]/10 
                        border border-[var(--primary-color)]/30 rounded-full mb-8 animate-fade-in">
          <div className="w-4 h-4">
            <svg viewBox="0 0 16 16" className="w-full h-full">
              <circle cx="8" cy="8" r="6" fill="none" stroke="var(--primary-color)" strokeWidth="1"/>
              <text x="8" y="11" textAnchor="middle" fontSize="8" fill="var(--primary-color)" className="font-gaming">SB</text>
            </svg>
          </div>
          <span className="text-[var(--primary-color)] font-futuristic text-sm">
            Trusted by 25,000+ Gamers Worldwide
          </span>
        </div>

        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-gaming text-[var(--text-color)] mb-6 
                         leading-tight animate-fade-in-up tracking-wider">
            {typedText}
            <span className="animate-pulse text-[var(--primary-color)]">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-futuristic text-[var(--text-secondary-color)] mb-8 
                        animate-fade-in-up-delay max-w-2xl mx-auto">
            Professional gaming services, rank boosting, and expert coaching to dominate 
            competitive gaming across 50+ titles with guaranteed results
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 animate-fade-in-up-delay">
          <div className="flex items-center space-x-2 text-[var(--text-secondary-color)]">
            <Clock size={16} className="text-[var(--primary-color)]" />
            <span className="font-futuristic text-sm">24/7 Support</span>
          </div>
          <div className="flex items-center space-x-2 text-[var(--text-secondary-color)]">
            <Shield size={16} className="text-green-500" />
            <span className="font-futuristic text-sm">100% Safe</span>
          </div>
          <div className="flex items-center space-x-2 text-[var(--text-secondary-color)]">
            <Trophy size={16} className="text-yellow-500" />
            <span className="font-futuristic text-sm">99.9% Success Rate</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <button className="group relative px-8 py-4 bg-[var(--primary-color)] 
                           text-[var(--background-color)] rounded-lg font-futuristic-bold 
                           text-lg hover:scale-105 transition-all duration-300 
                           hover:shadow-lg hover:shadow-[var(--primary-color)]/25
                           animate-fade-in-up-delay-2 overflow-hidden">
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="flex items-center space-x-2">
              <Play size={20} />
              <span>Start Boosting Now</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button className="group px-8 py-4 border-2 border-[var(--primary-color)] 
                           text-[var(--primary-color)] rounded-lg font-futuristic-bold text-lg 
                           hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] 
                           transition-all duration-300 hover:scale-105
                           animate-fade-in-up-delay-3">
            <span className="flex items-center space-x-2">
              <Zap size={20} />
              <span>Browse Games</span>
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up-delay-4">
          {[
            { label: 'Orders Completed', value: '25,847+', icon: Trophy },
            { label: 'Happy Clients', value: '15,420+', icon: Users },
            { label: 'Success Rate', value: '99.9%', icon: Shield },
            { label: 'Expert Boosters', value: '847+', icon: Zap },
          ].map((stat, index) => (
            <div key={index} className="text-center group hover:scale-110 transition-all duration-300 
                                      bg-[var(--card-bg-color)]/30 rounded-xl p-4 border border-[var(--primary-color)]/20 
                                      hover:border-[var(--primary-color)]/60 hover:bg-[var(--card-bg-color)]/50">
              <stat.icon size={24} className="text-[var(--primary-color)] mx-auto mb-2 group-hover:animate-pulse" />
              <div className="text-3xl md:text-4xl font-gaming text-[var(--primary-color)] mb-2 
                            group-hover:animate-pulse">
                {stat.value}
              </div>
              <div className="text-[var(--text-secondary-color)] font-futuristic">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Live Activity Feed */}
        <div className="mt-16 max-w-2xl mx-auto animate-fade-in-up-delay-4">
          <div className="bg-[var(--card-bg-color)]/40 backdrop-blur-sm rounded-xl p-6 border border-[var(--primary-color)]/20">
            <h3 className="text-lg font-gaming-light text-[var(--text-color)] mb-4 flex items-center justify-center">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" />
              Live Activity
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between text-[var(--text-secondary-color)] font-futuristic">
                <span>🎮 Alex just reached Diamond in Valorant</span>
                <span className="text-[var(--primary-color)]">2m ago</span>
              </div>
              <div className="flex items-center justify-between text-[var(--text-secondary-color)] font-futuristic">
                <span>🏆 Sarah completed Apex Legends boost</span>
                <span className="text-[var(--primary-color)]">5m ago</span>
              </div>
              <div className="flex items-center justify-between text-[var(--text-secondary-color)] font-futuristic">
                <span>⚡ Mike started Fortnite coaching session</span>
                <span className="text-[var(--primary-color)]">8m ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
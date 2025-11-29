import React, { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, Trophy, Clock, Shield, Star, Zap, Target } from 'lucide-react';

const Statistics: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const stats = [
    { icon: Users, label: 'Active Players', value: 15420, suffix: '+', color: 'from-blue-500 to-cyan-500' },
    { icon: Trophy, label: 'Completed Orders', value: 25847, suffix: '+', color: 'from-yellow-500 to-orange-500' },
    { icon: TrendingUp, label: 'Success Rate', value: 99.9, suffix: '%', color: 'from-green-500 to-emerald-500' },
    { icon: Clock, label: 'Avg. Completion Time', value: 18, suffix: 'h', color: 'from-purple-500 to-pink-500' }
  ];

  const additionalStats = [
    { icon: Shield, label: 'Account Safety', value: 100, suffix: '%', description: 'Zero permanent bans in our history' },
    { icon: Star, label: 'Customer Rating', value: 4.9, suffix: '/5', description: 'Based on 12,000+ reviews' },
    { icon: Zap, label: 'Expert Boosters', value: 847, suffix: '+', description: 'Professional players worldwide' },
    { icon: Target, label: 'Games Supported', value: 50, suffix: '+', description: 'All major competitive titles' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CountUp: React.FC<{ end: number; duration?: number }> = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!inView) return;

      let startTime: number;
      const startCount = 0;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(startCount + (end - startCount) * easeOutQuart));

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }, [end, duration, inView]);

    return <>{count}</>;
  };

  return (
    <section ref={sectionRef} className="py-20 bg-[var(--card-bg-color)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gaming text-[var(--text-color)] mb-6">
            Impressive Statistics
          </h2>
          <p className="text-xl font-futuristic text-[var(--text-secondary-color)] max-w-3xl mx-auto">
            Numbers that speak for our dedication to excellence in gaming services. 
            Join thousands of satisfied customers who trust us with their gaming goals.
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-110 transition-all duration-500 
                         bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20 
                         hover:border-[var(--primary-color)]/60 hover:shadow-lg hover:shadow-[var(--primary-color)]/10"
            >
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 rounded-full blur-xl 
                               group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="relative inline-flex p-6 rounded-full bg-[var(--background-color)] 
                              border border-[var(--primary-color)]/30 
                              group-hover:border-[var(--primary-color)] 
                              group-hover:shadow-lg group-hover:shadow-[var(--primary-color)]/25
                              transition-all duration-500">
                  <stat.icon 
                    size={48} 
                    className="text-[var(--primary-color)] group-hover:animate-pulse" 
                  />
                </div>
              </div>
              
              <div className="text-4xl md:text-5xl font-gaming text-[var(--primary-color)] 
                            mb-2 font-mono">
                <CountUp end={stat.value} />
                {stat.suffix}
              </div>
              
              <div className="text-[var(--text-secondary-color)] font-futuristic text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {additionalStats.map((stat, index) => (
            <div
              key={index}
              className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20 
                         hover:border-[var(--primary-color)]/60 transition-all duration-300 
                         hover:scale-105 group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-[var(--primary-color)]/10 rounded-lg group-hover:bg-[var(--primary-color)]/20 
                              transition-colors duration-300">
                  <stat.icon size={24} className="text-[var(--primary-color)]" />
                </div>
                <div>
                  <div className="text-2xl font-gaming text-[var(--primary-color)]">
                    <CountUp end={stat.value} />
                    {stat.suffix}
                  </div>
                  <div className="text-[var(--text-color)] font-futuristic-bold text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
              <p className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        {/* Progress Bars */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-gaming-light text-[var(--text-color)] text-center mb-8">
            Service Quality Metrics
          </h3>
          
          <div className="space-y-6">
            {[
              { label: 'Customer Satisfaction', percentage: 98, color: 'from-green-500 to-emerald-500' },
              { label: 'Order Completion Rate', percentage: 99, color: 'from-blue-500 to-cyan-500' },
              { label: 'Response Time Quality', percentage: 95, color: 'from-purple-500 to-pink-500' },
              { label: 'Security & Safety Rating', percentage: 100, color: 'from-yellow-500 to-orange-500' }
            ].map((metric, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-[var(--text-color)] font-futuristic font-medium">
                    {metric.label}
                  </span>
                  <span className="text-[var(--primary-color)] font-gaming">
                    {metric.percentage}%
                  </span>
                </div>
                
                <div className="w-full bg-[var(--card-bg-color)] rounded-full h-4 overflow-hidden border border-[var(--primary-color)]/20">
                  <div 
                    className={`h-full bg-gradient-to-r ${metric.color} rounded-full transition-all 
                              duration-1000 relative overflow-hidden ${inView ? '' : 'w-0'}`}
                    style={{ 
                      width: inView ? `${metric.percentage}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                  transform -translate-x-full animate-pulse" 
                         style={{ animationDelay: `${index * 0.5}s` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Stats */}
        <div className="mt-16">
          <div className="bg-[var(--card-bg-color)] rounded-2xl p-8 border border-[var(--primary-color)]/30">
            <h3 className="text-2xl font-gaming-light text-[var(--text-color)] text-center mb-8">
              Live Statistics
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[var(--text-color)] font-futuristic-bold">Online Now</span>
                </div>
                <div className="text-3xl font-gaming text-[var(--primary-color)] mb-2">
                  <CountUp end={234} />
                </div>
                <div className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                  Active boosters working on orders
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-[var(--text-color)] font-futuristic-bold">This Week</span>
                </div>
                <div className="text-3xl font-gaming text-[var(--primary-color)] mb-2">
                  <CountUp end={1847} />
                </div>
                <div className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                  Orders completed successfully
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
                  <span className="text-[var(--text-color)] font-futuristic-bold">Average</span>
                </div>
                <div className="text-3xl font-gaming text-[var(--primary-color)] mb-2">
                  <CountUp end={12} />m
                </div>
                <div className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                  Response time to customer inquiries
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
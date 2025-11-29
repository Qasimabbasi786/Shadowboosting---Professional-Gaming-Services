import React from 'react';
import { Shield, Trophy, Target, Users, Gamepad2, Star } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Trophy,
      title: 'Rank Boosting',
      description: 'Professional rank boosting services for all major competitive games',
      features: ['Fast & Secure', 'Professional Players', '24/7 Support']
    },
    {
      icon: Target,
      title: 'Skill Coaching',
      description: 'One-on-one coaching sessions with professional gamers',
      features: ['Personalized Training', 'VOD Reviews', 'Strategy Development']
    },
    {
      icon: Shield,
      title: 'Account Security',
      description: 'Secure boosting with advanced security measures',
      features: ['VPN Protection', 'Offline Mode', 'Account Insurance']
    },
    {
      icon: Users,
      title: 'Team Services',
      description: 'Comprehensive team boosting and training services',
      features: ['Team Coordination', 'Group Discounts', 'Custom Strategies']
    },
    {
      icon: Gamepad2,
      title: 'Game Mastery',
      description: 'Complete game mastery programs for competitive titles',
      features: ['All Game Modes', 'Achievement Unlocking', 'Meta Analysis']
    },
    {
      icon: Star,
      title: 'Premium Support',
      description: '24/7 premium support for all your gaming needs',
      features: ['Live Chat', 'Priority Queue', 'Dedicated Manager']
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gaming text-[var(--text-color)] mb-6 
                         animate-fade-in-up">
            Our Gaming Services
          </h2>
          <p className="text-xl font-futuristic text-[var(--text-secondary-color)] max-w-3xl mx-auto 
                        animate-fade-in-up-delay">
            Professional gaming services designed to elevate your competitive experience 
            across all major gaming platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[var(--card-bg-color)] border border-[var(--primary-color)] 
                         border-opacity-30 rounded-xl p-8 hover:border-opacity-100 
                         transition-all duration-500 hover:scale-105 hover:shadow-lg 
                         hover:shadow-[var(--primary-color)]/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br 
                            from-[var(--primary-color)]/5 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-[var(--primary-color)]/10 
                                group-hover:bg-[var(--primary-color)]/20 
                                transition-colors duration-300">
                    <service.icon 
                      size={32} 
                      className="text-[var(--primary-color)] group-hover:scale-110 
                               transition-transform duration-300" 
                    />
                  </div>
                  <h3 className="text-2xl font-gaming-light text-[var(--text-color)] ml-4">
                    {service.title}
                  </h3>
                </div>

                <p className="text-[var(--text-secondary-color)] font-futuristic mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center font-futuristic text-[var(--text-secondary-color)] 
                               group-hover:text-[var(--text-color)] transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mr-3 
                                    group-hover:scale-150 transition-transform duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-8 w-full px-6 py-3 border border-[var(--primary-color)] 
                                 text-[var(--primary-color)] rounded-lg font-semibold 
                                 font-futuristic-bold hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] 
                                 transition-all duration-300 group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
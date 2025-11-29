import React from 'react';
import { Shield, Trophy, Target, Users, Gamepad2, Star, Award, Zap, Clock, CheckCircle, TrendingUp } from 'lucide-react';

const ServiceCards: React.FC = () => {
  const services = [
    {
      icon: Trophy,
      title: 'Rank Coaching',
      description: 'Professional rank boosting with guaranteed results in Solo or Duo mode',
      features: ['Professional Coaches', 'Rank Guarantee', 'Fast Results'],
      color: 'from-blue-500 to-cyan-500',
      comingSoon: false,
      price: 'From $19',
      duration: '1-3 days',
      popularity: 98,
      orders: 1247
    },
    {
      icon: Award,
      title: 'Badge Guide',
      description: 'Unlock rare badges and achievements for your favorite characters',
      features: ['All Legends', 'Badge Unlock', 'Expert Guide'],
      color: 'from-yellow-500 to-orange-500',
      comingSoon: false,
      price: 'From $15',
      duration: '2-4 hours',
      popularity: 85,
      orders: 892
    },
    {
      icon: Target,
      title: 'Unranked Wins',
      description: 'Guaranteed wins in unranked matches with your preferred character',
      features: ['Win Guarantee', 'Legend Choice', 'Quick Service'],
      color: 'from-orange-500 to-red-500',
      comingSoon: false,
      price: 'From $8',
      duration: '1-2 hours',
      popularity: 92,
      orders: 2156
    },
    {
      icon: Gamepad2,
      title: 'Battle Pass',
      description: 'Complete battle pass tiers and unlock all exclusive rewards',
      features: ['Full Unlock', 'All Rewards', 'Time Saving'],
      color: 'from-purple-500 to-pink-500',
      comingSoon: false,
      price: 'From $25',
      duration: '3-7 days',
      popularity: 78,
      orders: 634
    },
    {
      icon: Shield,
      title: 'Challenges',
      description: 'Complete daily, weekly, and special event challenges efficiently',
      features: ['All Challenges', 'Event Completion', 'Daily Tasks'],
      color: 'from-green-500 to-teal-500',
      comingSoon: false,
      price: 'From $12',
      duration: '1-3 days',
      popularity: 88,
      orders: 1089
    },
    {
      icon: Users,
      title: 'Account Level',
      description: 'Level up your account to unlock cosmetics and rewards',
      features: ['Level Boost', 'Apex Packs', 'Cosmetics'],
      color: 'from-indigo-500 to-purple-500',
      comingSoon: false,
      price: 'From $18',
      duration: '2-5 days',
      popularity: 82,
      orders: 756
    },
    {
      icon: Star,
      title: 'VOD Review',
      description: 'Professional gameplay analysis and personalized improvement tips',
      features: ['Pro Analysis', 'Skill Improvement', 'Personal Feedback'],
      color: 'from-pink-500 to-rose-500',
      comingSoon: false,
      price: 'From $35',
      duration: '24 hours',
      popularity: 95,
      orders: 423
    },
    {
      icon: Zap,
      title: 'Custom Order',
      description: "Custom gaming services tailored to your specific needs and goals",
      features: ['Custom Service', 'Flexible Options', 'Personal Request'],
      color: 'from-cyan-500 to-blue-500',
      comingSoon: false,
      price: 'Quote',
      duration: 'Varies',
      popularity: 90,
      orders: 312
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gaming text-[var(--text-color)] mb-6 
                         animate-fade-in-up">
            Our Gaming Services
          </h2>
          <p className="text-xl font-futuristic text-[var(--text-secondary-color)] max-w-3xl mx-auto 
                        animate-fade-in-up-delay">
            Professional gaming services designed to elevate your competitive experience with guaranteed results, 
            expert boosters, and 24/7 support across all major gaming platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              id={service.title.toLowerCase().replace(/\s+/g, '-')}
              key={index}
              className="group relative bg-[#1a2332] rounded-xl overflow-hidden 
                         border border-[#2a3441] hover:border-[var(--primary-color)]/60
                         transition-all duration-500 hover:scale-105 hover:-translate-y-2
                         cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Coming Soon Badge */}
              {service.comingSoon && (
                <div className="absolute top-3 right-3 z-20">
                  <span className="px-2 py-1 bg-[var(--primary-color)]/20 text-[var(--primary-color)] 
                                 text-xs font-futuristic-bold rounded-full border border-[var(--primary-color)]/40">
                    COMING SOON
                  </span>
                </div>
              )}

              {/* Popularity Badge */}
              {service.popularity >= 90 && (
                <div className="absolute top-3 left-3 z-20">
                  <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 
                                 text-white text-xs font-futuristic-bold rounded-full 
                                 shadow-lg animate-pulse">
                    HOT
                  </span>
                </div>
              )}

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} 
                             opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500 pointer-events-none
                            shadow-lg shadow-[var(--primary-color)]/20" />

              <div className="relative z-10 p-6 h-full flex flex-col">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color} 
                                 group-hover:scale-110 transition-transform duration-300
                                 shadow-lg`}>
                    <service.icon 
                      size={32} 
                      className="text-white" 
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-gaming-light text-[var(--text-color)] text-center mb-3
                             group-hover:text-[var(--primary-color)] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm text-center mb-4 
                             leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-[var(--background-color)]/30 rounded-lg p-2 text-center">
                    <div className="text-[var(--primary-color)] font-gaming text-xs">
                      {service.orders}
                    </div>
                    <div className="text-[var(--text-secondary-color)] font-futuristic text-xs">
                      Orders
                    </div>
                  </div>
                  <div className="bg-[var(--background-color)]/30 rounded-lg p-2 text-center">
                    <div className="text-[var(--primary-color)] font-gaming text-xs">
                      {service.popularity}%
                    </div>
                    <div className="text-[var(--text-secondary-color)] font-futuristic text-xs">
                      Rating
                    </div>
                  </div>
                </div>

                {/* Price & Duration */}
                <div className="flex justify-between items-center mb-4 p-3 bg-[var(--background-color)]/20 rounded-lg">
                  <div className="text-center">
                    <div className="text-[var(--primary-color)] font-gaming text-sm">
                      {service.price}
                    </div>
                    <div className="text-[var(--text-secondary-color)] font-futuristic text-xs">
                      Price
                    </div>
                  </div>
                  <div className="w-px h-8 bg-[var(--primary-color)]/30" />
                  <div className="text-center">
                    <div className="text-[var(--primary-color)] font-gaming text-sm">
                      {service.duration}
                    </div>
                    <div className="text-[var(--text-secondary-color)] font-futuristic text-xs">
                      Duration
                    </div>
                  </div>
                </div>
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center justify-center font-futuristic text-xs
                               text-[var(--text-secondary-color)] group-hover:text-[var(--text-color)] 
                               transition-colors duration-300"
                    >
                      <CheckCircle size={12} className="text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button className={`w-full py-3 rounded-lg font-futuristic-bold text-sm
                                  transition-all duration-300 group-hover:scale-105
                                  ${service.comingSoon 
                                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                                    : 'bg-[var(--primary-color)]/20 border border-[var(--primary-color)]/40 text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]'
                                  }`}
                      disabled={service.comingSoon}
                >
                  {service.comingSoon ? 'Coming Soon' : 'Select Service'}
                </button>
              </div>

              {/* Bottom Border Accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Popularity Indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gray-700">
                <div 
                  className={`h-full bg-gradient-to-r ${service.color} transition-all duration-1000`}
                  style={{ width: `${service.popularity}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Service Guarantees */}
        <div className="mt-16">
          <div className="bg-[var(--card-bg-color)] rounded-2xl p-8 border border-[var(--primary-color)]/30">
            <h3 className="text-2xl font-gaming-light text-[var(--text-color)] text-center mb-8">
              Our Service Guarantees
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="p-4 bg-[var(--primary-color)]/10 rounded-full w-16 h-16 mx-auto mb-4 
                              flex items-center justify-center group-hover:bg-[var(--primary-color)]/20 
                              transition-colors duration-300">
                  <Shield className="text-[var(--primary-color)]" size={24} />
                </div>
                <h4 className="text-[var(--text-color)] font-futuristic-bold mb-2">100% Safe & Secure</h4>
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                  VPN protection, offline mode, and account insurance included with every order
                </p>
              </div>
              
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="p-4 bg-[var(--primary-color)]/10 rounded-full w-16 h-16 mx-auto mb-4 
                              flex items-center justify-center group-hover:bg-[var(--primary-color)]/20 
                              transition-colors duration-300">
                  <Clock className="text-[var(--primary-color)]" size={24} />
                </div>
                <h4 className="text-[var(--text-color)] font-futuristic-bold mb-2">Fast Completion</h4>
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                  Most orders completed within 1-5 days with real-time progress tracking
                </p>
              </div>
              
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="p-4 bg-[var(--primary-color)]/10 rounded-full w-16 h-16 mx-auto mb-4 
                              flex items-center justify-center group-hover:bg-[var(--primary-color)]/20 
                              transition-colors duration-300">
                  <Trophy className="text-[var(--primary-color)]" size={24} />
                </div>
                <h4 className="text-[var(--text-color)] font-futuristic-bold mb-2">Results Guaranteed</h4>
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                  Achieve your desired rank or get a full refund - no questions asked
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
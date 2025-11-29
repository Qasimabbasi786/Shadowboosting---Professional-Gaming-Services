import React from 'react';
import { Trophy, Shield, Clock, Star, CheckCircle, Users, Zap, Target } from 'lucide-react';

const RankBoostingPage: React.FC = () => {
  const features = [
    { icon: Shield, title: '100% Safe', description: 'VPN protection and offline mode' },
    { icon: Clock, title: 'Fast Results', description: 'Most orders completed in 1-3 days' },
    { icon: Trophy, title: 'Guaranteed', description: 'Achieve your rank or get refunded' },
    { icon: Users, title: 'Expert Boosters', description: 'Professional players only' }
  ];

  const packages = [
    {
      name: 'Bronze to Silver',
      price: '$19',
      duration: '1-2 days',
      features: ['Solo or Duo', 'Live Tracking', '24/7 Support', 'VPN Protection']
    },
    {
      name: 'Silver to Gold',
      price: '$29',
      duration: '2-3 days',
      features: ['Solo or Duo', 'Live Tracking', '24/7 Support', 'VPN Protection', 'Priority Queue']
    },
    {
      name: 'Gold to Platinum',
      price: '$49',
      duration: '3-4 days',
      features: ['Solo or Duo', 'Live Tracking', '24/7 Support', 'VPN Protection', 'Priority Queue', 'VOD Review']
    },
    {
      name: 'Platinum to Diamond',
      price: '$89',
      duration: '4-5 days',
      features: ['Solo or Duo', 'Live Tracking', '24/7 Support', 'VPN Protection', 'Priority Queue', 'VOD Review', 'Personal Coach']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--background-color)] to-[var(--card-bg-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[var(--primary-color)]/10 
                            border border-[var(--primary-color)]/30 rounded-full mb-8">
              <Trophy size={16} className="text-[var(--primary-color)]" />
              <span className="text-[var(--primary-color)] font-futuristic text-sm">
                Most Popular Service
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-gaming text-[var(--text-color)] mb-6">
              Rank Boosting
            </h1>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)] max-w-3xl mx-auto">
              Professional rank boosting services with guaranteed results. Climb the competitive ladder 
              safely and efficiently with our expert boosters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20 
                                        hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105">
                <div className="p-3 bg-[var(--primary-color)]/10 rounded-lg w-fit mb-4">
                  <feature.icon size={24} className="text-[var(--primary-color)]" />
                </div>
                <h3 className="text-lg font-gaming-light text-[var(--text-color)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Choose Your Package
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Select the perfect boosting package for your current rank
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20 
                                        hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-gaming-light text-[var(--text-color)] mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-gaming text-[var(--primary-color)] mb-2">
                    {pkg.price}
                  </div>
                  <div className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                    {pkg.duration}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 bg-[var(--primary-color)] text-[var(--background-color)] 
                                 rounded-lg font-futuristic-bold hover:scale-105 transition-all duration-300">
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[var(--card-bg-color)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              How It Works
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Simple 4-step process to get your rank boosted
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Choose Package', description: 'Select your current and desired rank' },
              { step: '2', title: 'Secure Payment', description: 'Pay safely with multiple payment options' },
              { step: '3', title: 'Expert Booster', description: 'Professional player starts your order' },
              { step: '4', title: 'Enjoy Results', description: 'Track progress and enjoy your new rank' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center 
                              text-[var(--background-color)] font-gaming text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-gaming-light text-[var(--text-color)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RankBoostingPage;
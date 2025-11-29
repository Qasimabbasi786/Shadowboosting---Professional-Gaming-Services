import React from 'react';
import { Target, Trophy, Zap, Shield, CheckCircle, Star, Award, Users } from 'lucide-react';

const ValorantPage: React.FC = () => {
  const services = [
    {
      icon: Trophy,
      title: 'Rank Boosting',
      price: 'From $19',
      description: 'Professional rank boosting from Iron to Radiant',
      features: ['Solo or Duo', 'Live tracking', 'VPN protection', '24/7 support']
    },
    {
      icon: Target,
      title: 'Placement Matches',
      price: 'From $35',
      description: 'Get the best possible placement rank',
      features: ['10 placement games', 'Expert players', 'Rank guarantee', 'Fast completion']
    },
    {
      icon: Award,
      title: 'Agent Contracts',
      price: 'From $25',
      description: 'Unlock specific agents and their contracts',
      features: ['Any agent', 'Full contract', 'Cosmetic unlocks', 'XP optimization']
    },
    {
      icon: Zap,
      title: 'Battle Pass',
      price: 'From $45',
      description: 'Complete battle pass tiers and unlock rewards',
      features: ['All tiers', 'Exclusive skins', 'Radianite points', 'Time efficient']
    }
  ];

  const ranks = [
    { name: 'Iron', color: 'from-gray-600 to-gray-800', price: '$19' },
    { name: 'Bronze', color: 'from-orange-600 to-orange-800', price: '$25' },
    { name: 'Silver', color: 'from-gray-400 to-gray-600', price: '$35' },
    { name: 'Gold', color: 'from-yellow-400 to-yellow-600', price: '$49' },
    { name: 'Platinum', color: 'from-cyan-400 to-cyan-600', price: '$75' },
    { name: 'Diamond', color: 'from-purple-400 to-purple-600', price: '$125' },
    { name: 'Immortal', color: 'from-red-500 to-red-700', price: '$199' },
    { name: 'Radiant', color: 'from-yellow-300 to-yellow-500', price: '$349' }
  ];

  const agents = [
    { name: 'Jett', role: 'Duelist', difficulty: 'Medium' },
    { name: 'Reyna', role: 'Duelist', difficulty: 'Hard' },
    { name: 'Phoenix', role: 'Duelist', difficulty: 'Easy' },
    { name: 'Sage', role: 'Sentinel', difficulty: 'Easy' },
    { name: 'Sova', role: 'Initiator', difficulty: 'Hard' },
    { name: 'Omen', role: 'Controller', difficulty: 'Medium' },
    { name: 'Viper', role: 'Controller', difficulty: 'Hard' },
    { name: 'Cypher', role: 'Sentinel', difficulty: 'Medium' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--background-color)] to-[var(--card-bg-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[var(--primary-color)]/10 
                            border border-[var(--primary-color)]/30 rounded-full mb-8">
              <Target size={16} className="text-[var(--primary-color)]" />
              <span className="text-[var(--primary-color)] font-futuristic text-sm">
                Most Popular Game
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-gaming text-[var(--text-color)] mb-6">
              Valorant Boosting
            </h1>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)] max-w-3xl mx-auto">
              Professional Valorant boosting services. Climb from Iron to Radiant with our expert players. 
              Fast, safe, and guaranteed results with 24/7 support.
            </p>
          </div>

          {/* Game Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Orders Completed', value: '8,247+' },
              { label: 'Average Rating', value: '4.9/5' },
              { label: 'Success Rate', value: '99.8%' },
              { label: 'Active Boosters', value: '156+' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-gaming text-[var(--primary-color)] mb-2">
                  {stat.value}
                </div>
                <div className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Valorant Services
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Complete range of Valorant boosting and coaching services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20 
                                        hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105">
                <div className="p-3 bg-[var(--primary-color)]/10 rounded-lg w-fit mb-4">
                  <service.icon size={32} className="text-[var(--primary-color)]" />
                </div>
                
                <h3 className="text-xl font-gaming-light text-[var(--text-color)] mb-2">
                  {service.title}
                </h3>
                
                <div className="text-2xl font-gaming text-[var(--primary-color)] mb-4">
                  {service.price}
                </div>
                
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle size={14} className="text-green-500" />
                      <span className="text-[var(--text-secondary-color)] font-futuristic text-xs">
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

      {/* Rank Pricing */}
      <section className="py-20 bg-[var(--card-bg-color)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Rank Pricing
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Transparent pricing for all Valorant ranks
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {ranks.map((rank, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-4 border border-[var(--primary-color)]/20 
                                        hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105 text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${rank.color} mx-auto mb-3 
                               flex items-center justify-center text-white font-gaming text-xs`}>
                  {rank.name[0]}
                </div>
                <h3 className="text-[var(--text-color)] font-gaming-light text-sm mb-2">
                  {rank.name}
                </h3>
                <div className="text-[var(--primary-color)] font-gaming text-lg">
                  {rank.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Mastery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Agent Mastery
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Our boosters are experts with all Valorant agents
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {agents.map((agent, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-4 border border-[var(--primary-color)]/20 
                                        hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105 text-center">
                <div className="w-12 h-12 bg-[var(--primary-color)]/20 rounded-full mx-auto mb-3 
                              flex items-center justify-center">
                  <Users size={20} className="text-[var(--primary-color)]" />
                </div>
                <h3 className="text-[var(--text-color)] font-futuristic-bold text-sm mb-1">
                  {agent.name}
                </h3>
                <div className="text-[var(--text-secondary-color)] font-futuristic text-xs mb-1">
                  {agent.role}
                </div>
                <div className={`text-xs font-futuristic ${
                  agent.difficulty === 'Easy' ? 'text-green-500' : 
                  agent.difficulty === 'Medium' ? 'text-yellow-500' : 'text-red-500'
                }`}>
                  {agent.difficulty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[var(--card-bg-color)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Why Choose Our Valorant Service?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Account Safety', description: 'VPN protection and offline mode for maximum security' },
              { icon: Trophy, title: 'Expert Players', description: 'Radiant and Immortal players with proven track records' },
              { icon: Zap, title: 'Fast Completion', description: 'Most orders completed within 1-3 days' },
              { icon: Star, title: 'Live Tracking', description: 'Real-time progress updates and match history' }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-[var(--primary-color)]/10 rounded-full w-fit mx-auto mb-4">
                  <feature.icon size={32} className="text-[var(--primary-color)]" />
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[var(--card-bg-color)] rounded-2xl p-8 border border-[var(--primary-color)]/30">
            <h2 className="text-3xl font-gaming text-[var(--text-color)] mb-6">
              Ready to Climb the Ranks?
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)] mb-8">
              Start your Valorant boosting journey today and reach your dream rank
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[var(--primary-color)] text-[var(--background-color)] 
                               rounded-lg font-futuristic-bold hover:scale-105 transition-all duration-300">
                Start Boosting Now
              </button>
              <button className="px-8 py-4 border border-[var(--primary-color)] text-[var(--primary-color)] 
                               rounded-lg font-futuristic-bold hover:bg-[var(--primary-color)] 
                               hover:text-[var(--background-color)] transition-all duration-300">
                View Pricing Calculator
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValorantPage;
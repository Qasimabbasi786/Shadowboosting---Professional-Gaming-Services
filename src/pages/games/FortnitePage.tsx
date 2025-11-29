import React from 'react';
import { Zap, Trophy, Target, Award, CheckCircle, Star, Shield, Users } from 'lucide-react';

const FortnitePage: React.FC = () => {
  const services = [
    {
      icon: Trophy,
      title: 'Arena Ranking',
      price: 'From $25',
      description: 'Climb the Arena ranks and reach Champion League',
      features: ['All divisions', 'Hype farming', 'Tournament ready', 'Fast progression']
    },
    {
      icon: Target,
      title: 'Battle Royale Wins',
      price: 'From $15',
      description: 'Guaranteed Victory Royales in any game mode',
      features: ['Solo/Duo/Squad', 'High K/D', 'Win guarantee', 'Stat improvement']
    },
    {
      icon: Award,
      title: 'Battle Pass',
      price: 'From $35',
      description: 'Complete battle pass tiers and unlock all rewards',
      features: ['All tiers', 'Exclusive skins', 'V-Bucks included', 'Bonus rewards']
    },
    {
      icon: Zap,
      title: 'Level Boosting',
      price: 'From $20',
      description: 'Level up your account and unlock cosmetics',
      features: ['Fast XP gain', 'Challenge completion', 'Milestone rewards', 'Efficient grinding']
    }
  ];

  const ranks = [
    { name: 'Open League', division: 'I-VII', hype: '0-1,999', price: '$25' },
    { name: 'Bronze League', division: 'I-III', hype: '2,000-3,999', price: '$35' },
    { name: 'Silver League', division: 'I-III', hype: '4,000-5,999', price: '$45' },
    { name: 'Gold League', division: 'I-III', hype: '6,000-7,999', price: '$65' },
    { name: 'Platinum League', division: 'I-III', hype: '8,000-9,999', price: '$85' },
    { name: 'Diamond League', division: 'I-III', hype: '10,000-11,999', price: '$125' },
    { name: 'Elite League', division: 'I-III', hype: '12,000-13,999', price: '$175' },
    { name: 'Champion League', division: 'I-III', hype: '14,000-15,999', price: '$249' },
    { name: 'Unreal League', division: '-', hype: '16,000+', price: '$399' }
  ];

  const gameModes = [
    { name: 'Solo', description: 'Individual skill showcase', difficulty: 'Medium' },
    { name: 'Duos', description: 'Team coordination', difficulty: 'Easy' },
    { name: 'Squads', description: 'Full team strategy', difficulty: 'Easy' },
    { name: 'Zero Build', description: 'Pure gunplay focus', difficulty: 'Hard' },
    { name: 'Arena', description: 'Competitive ranking', difficulty: 'Hard' },
    { name: 'Creative', description: 'Custom game modes', difficulty: 'Medium' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--background-color)] to-[var(--card-bg-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[var(--primary-color)]/10 
                            border border-[var(--primary-color)]/30 rounded-full mb-8">
              <Zap size={16} className="text-[var(--primary-color)]" />
              <span className="text-[var(--primary-color)] font-futuristic text-sm">
                Battle Royale Champion
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-gaming text-[var(--text-color)] mb-6">
              Fortnite Boosting
            </h1>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)] max-w-3xl mx-auto">
              Professional Fortnite boosting services. Dominate Arena, get Victory Royales, and unlock 
              exclusive rewards with our expert players.
            </p>
          </div>

          {/* Game Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Victory Royales', value: '12,456+' },
              { label: 'Arena Points', value: '2.8M+' },
              { label: 'Win Rate', value: '78%' },
              { label: 'Pro Players', value: '89+' }
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
              Fortnite Services
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Complete range of Fortnite boosting and achievement services
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

      {/* Arena Ranks */}
      <section className="py-20 bg-[var(--card-bg-color)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Arena Ranking System
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Professional Arena boosting for all leagues and divisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ranks.map((rank, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20 
                                        hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-gaming-light text-[var(--text-color)] mb-2">
                    {rank.name}
                  </h3>
                  <div className="text-[var(--text-secondary-color)] font-futuristic text-sm mb-2">
                    Division {rank.division}
                  </div>
                  <div className="text-[var(--text-secondary-color)] font-futuristic text-xs mb-4">
                    {rank.hype} Hype
                  </div>
                  <div className="text-2xl font-gaming text-[var(--primary-color)]">
                    {rank.price}
                  </div>
                </div>
                <button className="w-full py-2 border border-[var(--primary-color)] text-[var(--primary-color)] 
                                 rounded-lg font-futuristic-bold hover:bg-[var(--primary-color)] 
                                 hover:text-[var(--background-color)] transition-all duration-300 text-sm">
                  Boost to {rank.name.split(' ')[0]}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Modes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Game Modes We Cover
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Expert boosting across all Fortnite game modes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {gameModes.map((mode, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-4 border border-[var(--primary-color)]/20 
                                        hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105 text-center">
                <div className="w-12 h-12 bg-[var(--primary-color)]/20 rounded-full mx-auto mb-3 
                              flex items-center justify-center">
                  <Target size={20} className="text-[var(--primary-color)]" />
                </div>
                <h3 className="text-[var(--text-color)] font-futuristic-bold text-sm mb-2">
                  {mode.name}
                </h3>
                <p className="text-[var(--text-secondary-color)] font-futuristic text-xs mb-2">
                  {mode.description}
                </p>
                <div className={`text-xs font-futuristic ${
                  mode.difficulty === 'Easy' ? 'text-green-500' : 
                  mode.difficulty === 'Medium' ? 'text-yellow-500' : 'text-red-500'
                }`}>
                  {mode.difficulty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Battle Pass Rewards */}
      <section className="py-20 bg-[var(--card-bg-color)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Battle Pass Completion
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Unlock all battle pass rewards efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tier: 'Tier 1-50',
                price: '$35',
                rewards: ['Character Skins', 'Emotes', 'Wraps', 'V-Bucks'],
                time: '3-5 days'
              },
              {
                tier: 'Tier 51-100',
                price: '$55',
                rewards: ['Legendary Skins', 'Pickaxes', 'Gliders', 'More V-Bucks'],
                time: '5-7 days'
              },
              {
                tier: 'Full Pass (1-100)',
                price: '$75',
                rewards: ['All Rewards', 'Bonus Styles', 'Secret Skins', 'Maximum V-Bucks'],
                time: '7-10 days'
              }
            ].map((pass, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20 
                                        hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-gaming-light text-[var(--text-color)] mb-2">
                    {pass.tier}
                  </h3>
                  <div className="text-3xl font-gaming text-[var(--primary-color)] mb-2">
                    {pass.price}
                  </div>
                  <div className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                    Completion time: {pass.time}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-[var(--text-color)] font-futuristic-bold text-sm mb-3">
                    Includes:
                  </h4>
                  <ul className="space-y-2">
                    {pass.rewards.map((reward, rewardIndex) => (
                      <li key={rewardIndex} className="flex items-center space-x-2">
                        <CheckCircle size={14} className="text-green-500" />
                        <span className="text-[var(--text-secondary-color)] font-futuristic text-xs">
                          {reward}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full py-3 bg-[var(--primary-color)] text-[var(--background-color)] 
                                 rounded-lg font-futuristic-bold hover:scale-105 transition-all duration-300">
                  Complete Battle Pass
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Why Choose Our Fortnite Service?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Account Safety', description: 'Secure boosting with VPN protection' },
              { icon: Trophy, title: 'Pro Players', description: 'Champion League players with high win rates' },
              { icon: Zap, title: 'Fast Results', description: 'Quick completion with efficient strategies' },
              { icon: Star, title: 'Live Updates', description: 'Real-time progress tracking and screenshots' }
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
      <section className="py-20 bg-[var(--card-bg-color)]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[var(--card-bg-color)] rounded-2xl p-8 border border-[var(--primary-color)]/30">
            <h2 className="text-3xl font-gaming text-[var(--text-color)] mb-6">
              Ready for Victory Royale?
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)] mb-8">
              Start dominating Fortnite today with our professional boosting services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[var(--primary-color)] text-[var(--background-color)] 
                               rounded-lg font-futuristic-bold hover:scale-105 transition-all duration-300">
                Start Boosting Now
              </button>
              <button className="px-8 py-4 border border-[var(--primary-color)] text-[var(--primary-color)] 
                               rounded-lg font-futuristic-bold hover:bg-[var(--primary-color)] 
                               hover:text-[var(--background-color)] transition-all duration-300">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FortnitePage;
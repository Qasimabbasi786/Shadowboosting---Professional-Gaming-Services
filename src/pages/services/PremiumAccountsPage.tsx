import React from 'react';
import { Crown, Star, Shield, Zap, CheckCircle, Trophy, Award, Target } from 'lucide-react';

const PremiumAccountsPage: React.FC = () => {
  const accountTypes = [
    {
      icon: Star,
      title: 'Starter Accounts',
      priceRange: '$25 - $75',
      description: 'Fresh accounts with basic unlocks and decent ranks',
      features: ['Level 30+', 'Basic skins', 'Silver-Gold rank', 'Clean history', '30-day warranty']
    },
    {
      icon: Trophy,
      title: 'Premium Accounts',
      priceRange: '$100 - $300',
      description: 'High-level accounts with rare items and good ranks',
      features: ['Level 100+', 'Rare skins', 'Platinum-Diamond', 'Battle passes', '60-day warranty']
    },
    {
      icon: Crown,
      title: 'Elite Accounts',
      priceRange: '$400 - $1000',
      description: 'Top-tier accounts with exclusive items and high ranks',
      features: ['Max level', 'Legendary skins', 'Master+ rank', 'All unlocks', '90-day warranty']
    },
    {
      icon: Award,
      title: 'Custom Orders',
      priceRange: 'Quote',
      description: 'Tailored accounts built to your exact specifications',
      features: ['Your requirements', 'Specific items', 'Desired rank', 'Custom timeline', 'Full warranty']
    }
  ];

  const gameAccounts = [
    {
      game: 'Valorant',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=300',
      ranks: ['Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Immortal', 'Radiant'],
      startingPrice: '$35',
      popular: true
    },
    {
      game: 'Fortnite',
      image: 'https://images.pexels.com/photos/1293269/pexels-photo-1293269.jpeg?auto=compress&cs=tinysrgb&w=300',
      ranks: ['Open', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Elite', 'Champion'],
      startingPrice: '$45',
      popular: true
    },
    {
      game: 'Apex Legends',
      image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=300',
      ranks: ['Rookie', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master', 'Predator'],
      startingPrice: '$40',
      popular: false
    },
    {
      game: 'Overwatch',
      image: 'https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=300',
      ranks: ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master', 'Grandmaster'],
      startingPrice: '$30',
      popular: false
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
              <Crown size={16} className="text-[var(--primary-color)]" />
              <span className="text-[var(--primary-color)] font-futuristic text-sm">
                Premium Quality
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-gaming text-[var(--text-color)] mb-6">
              Premium Accounts
            </h1>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)] max-w-3xl mx-auto">
              Skip the grind with premium gaming accounts. High ranks, rare skins, and exclusive items 
              ready to play. All accounts come with full warranty and secure transfer.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Secure Transfer', description: 'Safe account delivery' },
              { icon: Star, title: 'Verified Items', description: 'Authentic rare content' },
              { icon: Trophy, title: 'High Ranks', description: 'Competitive ready' },
              { icon: Zap, title: 'Instant Access', description: 'Play immediately' }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="p-3 bg-[var(--primary-color)]/10 rounded-lg w-fit mx-auto mb-4">
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

      {/* Account Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Account Categories
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Choose the perfect account tier for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accountTypes.map((type, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20 
                                        hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105">
                <div className="p-3 bg-[var(--primary-color)]/10 rounded-lg w-fit mb-4">
                  <type.icon size={32} className="text-[var(--primary-color)]" />
                </div>
                
                <h3 className="text-xl font-gaming-light text-[var(--text-color)] mb-2">
                  {type.title}
                </h3>
                
                <div className="text-2xl font-gaming text-[var(--primary-color)] mb-4">
                  {type.priceRange}
                </div>
                
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm mb-6">
                  {type.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, featureIndex) => (
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
                  Browse Accounts
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Accounts */}
      <section className="py-20 bg-[var(--card-bg-color)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Available Games
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Premium accounts for the most popular competitive games
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gameAccounts.map((game, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl overflow-hidden border border-[var(--primary-color)]/20 
                                        hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105 relative">
                {game.popular && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 
                                   text-white text-xs font-futuristic-bold rounded-full">
                      POPULAR
                    </span>
                  </div>
                )}

                <div className="relative h-48">
                  <img 
                    src={game.image} 
                    alt={game.game}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-gaming-light text-white mb-1">
                      {game.game}
                    </h3>
                    <div className="text-[var(--primary-color)] font-gaming">
                      From {game.startingPrice}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-[var(--text-color)] font-futuristic-bold text-sm mb-2">
                      Available Ranks:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {game.ranks.slice(0, 4).map((rank, rankIndex) => (
                        <span 
                          key={rankIndex}
                          className="px-2 py-1 bg-[var(--primary-color)]/20 text-[var(--primary-color)] 
                                   text-xs rounded-full font-futuristic"
                        >
                          {rank}
                        </span>
                      ))}
                      {game.ranks.length > 4 && (
                        <span className="px-2 py-1 bg-[var(--card-bg-color)] text-[var(--text-secondary-color)] 
                                       text-xs rounded-full font-futuristic">
                          +{game.ranks.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <button className="w-full py-3 border border-[var(--primary-color)] text-[var(--primary-color)] 
                                   rounded-lg font-futuristic-bold hover:bg-[var(--primary-color)] 
                                   hover:text-[var(--background-color)] transition-all duration-300">
                    View Accounts
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Warranty */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Security & Warranty
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Your investment is protected with our comprehensive warranty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Account Verification',
                description: 'Every account is thoroughly verified for authenticity and security before sale',
                features: ['Clean history check', 'No previous violations', 'Legitimate progression', 'Secure credentials']
              },
              {
                title: 'Safe Transfer',
                description: 'Secure account transfer process with full documentation and support',
                features: ['Encrypted delivery', 'Step-by-step guide', 'Live support', 'Backup recovery']
              },
              {
                title: 'Warranty Protection',
                description: 'Comprehensive warranty coverage for peace of mind after purchase',
                features: ['30-90 day warranty', 'Replacement guarantee', 'Technical support', 'Money-back option']
              }
            ].map((item, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20">
                <h3 className="text-xl font-gaming-light text-[var(--text-color)] mb-4">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm mb-6">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle size={14} className="text-green-500" />
                      <span className="text-[var(--text-secondary-color)] font-futuristic text-xs">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
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
              Ready to Skip the Grind?
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)] mb-8">
              Browse our premium account collection and start playing at your desired level today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[var(--primary-color)] text-[var(--background-color)] 
                               rounded-lg font-futuristic-bold hover:scale-105 transition-all duration-300">
                Browse All Accounts
              </button>
              <button className="px-8 py-4 border border-[var(--primary-color)] text-[var(--primary-color)] 
                               rounded-lg font-futuristic-bold hover:bg-[var(--primary-color)] 
                               hover:text-[var(--background-color)] transition-all duration-300">
                Custom Account Request
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumAccountsPage;
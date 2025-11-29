import React from 'react';
import { ExternalLink, Trophy, Star, Zap, Users, Clock, Shield, TrendingUp } from 'lucide-react';
import GameModal from './GameModal';

const FeaturedGames: React.FC = () => {
  const [selectedGame, setSelectedGame] = React.useState<any>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const games = [
    {
      name: 'Marvel Rivals',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Hero-based team shooter with unique ranking system',
      ranks: ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Grandmaster'],
      color: 'from-red-500 to-yellow-500',
      popularity: 95,
      avgTime: '2-4 days',
      startingPrice: 29,
      activeOrders: 234,
      featured: true
    },
    {
      name: 'Valorant',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Tactical FPS with competitive ranking ladder',
      ranks: ['Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Immortal', 'Radiant'],
      color: 'from-pink-500 to-red-500',
      popularity: 98,
      avgTime: '1-3 days',
      startingPrice: 19,
      activeOrders: 456,
      featured: true
    },
    {
      name: 'Fortnite',
      image: 'https://images.pexels.com/photos/1293269/pexels-photo-1293269.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Battle Royale with Arena and Ranked modes',
      ranks: ['Open', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Elite', 'Champion', 'Unreal'],
      color: 'from-blue-500 to-purple-500',
      popularity: 92,
      avgTime: '3-5 days',
      startingPrice: 25,
      activeOrders: 189,
      featured: true
    },
    {
      name: 'Overwatch',
      image: 'https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Team-based multiplayer hero shooter',
      ranks: ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master', 'Grandmaster', 'Top 500'],
      color: 'from-orange-500 to-red-500',
      popularity: 88,
      avgTime: '2-4 days',
      startingPrice: 22,
      activeOrders: 167,
      featured: false
    },
    {
      name: 'Apex Legends',
      image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Battle Royale with Ranked League system',
      ranks: ['Rookie', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master', 'Predator'],
      color: 'from-yellow-500 to-orange-500',
      popularity: 85,
      avgTime: '2-5 days',
      startingPrice: 27,
      activeOrders: 143,
      featured: false
    },
    {
      name: 'Roblox',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Multiple games with various ranking systems',
      ranks: ['Beginner', 'Amateur', 'Semi-Pro', 'Professional', 'Expert', 'Master'],
      color: 'from-green-500 to-blue-500',
      popularity: 78,
      avgTime: '1-2 days',
      startingPrice: 15,
      activeOrders: 89,
      featured: false
    },
    {
      name: 'Rocket League',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Vehicular soccer with competitive seasons',
      ranks: ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Champion', 'Grand Champion', 'Supersonic Legend'],
      color: 'from-cyan-500 to-blue-500',
      popularity: 82,
      avgTime: '3-6 days',
      startingPrice: 24,
      activeOrders: 112,
      featured: false
    },
    {
      name: 'Rainbow Six Siege',
      image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Tactical shooter with ranked system',
      ranks: ['Copper', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Champion'],
      color: 'from-gray-500 to-blue-500',
      popularity: 76,
      avgTime: '2-4 days',
      startingPrice: 21,
      activeOrders: 78,
      featured: false
    }
  ];

  const handleGameClick = (game: any) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedGame(null);
  };

  return (
    <section id="games" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gaming text-[var(--text-color)] mb-6 
                         animate-fade-in-up">
            Featured Games
          </h2>
          <p className="text-xl font-futuristic text-[var(--text-secondary-color)] max-w-3xl mx-auto 
                        animate-fade-in-up-delay">
            Professional boosting services for the most popular competitive games with real-time tracking, 
            guaranteed results, and expert boosters available 24/7 across all regions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <div
              key={index}
              className="group relative bg-[var(--card-bg-color)] rounded-xl overflow-hidden 
                         border border-[var(--primary-color)]/20 hover:border-[var(--primary-color)]/60
                         transition-all duration-500 hover:scale-105 hover:rotate-1
                         animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleGameClick(game)}
            >
              {/* Featured Badge */}
              {game.featured && (
                <div className="absolute top-3 left-3 z-20">
                  <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 
                                 text-white text-xs font-futuristic-bold rounded-full 
                                 shadow-lg animate-pulse">
                    HOT
                  </span>
                </div>
              )}

              {/* Background Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.name}
                  className="w-full h-full object-cover transition-transform duration-700 
                           group-hover:scale-110 group-hover:rotate-2"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${game.color} 
                               opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                
                {/* Stats Overlay */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 
                              transition-all duration-500 transform translate-y-2 
                              group-hover:translate-y-0 space-y-2">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2 text-white text-xs font-futuristic">
                    <div className="flex items-center space-x-1">
                      <TrendingUp size={12} />
                      <span>{game.popularity}% Popular</span>
                    </div>
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2 text-white text-xs font-futuristic">
                    <div className="flex items-center space-x-1">
                      <Users size={12} />
                      <span>{game.activeOrders} active</span>
                    </div>
                  </div>
                </div>

                {/* Game Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 
                              bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-xl font-gaming-light mb-1 
                               transform transition-transform duration-300 
                               group-hover:scale-105">
                    {game.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-gray-300">
                    <Clock size={12} />
                    <span>{game.avgTime}</span>
                    <span>•</span>
                    <span>From ${game.startingPrice}</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 relative">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 
                              transition-opacity duration-500">
                  <div className="absolute inset-0 bg-[var(--primary-color)] 
                                transform rotate-45 scale-150 translate-x-full 
                                group-hover:translate-x-0 transition-transform duration-700" />
                </div>

                <div className="relative z-10">
                  <p className="text-[var(--text-secondary-color)] font-futuristic text-sm mb-4 
                               group-hover:text-[var(--text-color)] transition-colors duration-300">
                    {game.description}
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-[var(--background-color)]/30 rounded-lg p-2 text-center">
                      <div className="text-[var(--primary-color)] font-gaming text-sm">
                        {game.activeOrders}
                      </div>
                      <div className="text-[var(--text-secondary-color)] font-futuristic text-xs">
                        Active Orders
                      </div>
                    </div>
                    <div className="bg-[var(--background-color)]/30 rounded-lg p-2 text-center">
                      <div className="text-[var(--primary-color)] font-gaming text-sm">
                        ${game.startingPrice}+
                      </div>
                      <div className="text-[var(--text-secondary-color)] font-futuristic text-xs">
                        Starting Price
                      </div>
                    </div>
                  </div>
                  {/* Rank Pills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {game.ranks.slice(0, 4).map((rank, rankIndex) => (
                      <span
                        key={rankIndex}
                        className="px-2 py-1 text-xs bg-[var(--primary-color)]/20 
                                 text-[var(--primary-color)] rounded-full border 
                                 border-[var(--primary-color)]/30 
                                 transform transition-all duration-300 hover:scale-110
                                 group-hover:bg-[var(--primary-color)]/30"
                        style={{ 
                          animationDelay: `${rankIndex * 0.1}s`,
                          transform: `translateY(${Math.sin(rankIndex) * 2}px)`
                        }}
                      >
                        {rank}
                      </span>
                    ))}
                    {game.ranks.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-[var(--card-bg-color)] 
                                     text-[var(--text-secondary-color)] rounded-full 
                                     border border-[var(--primary-color)]/30">
                        +{game.ranks.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <button className="w-full px-4 py-2 bg-transparent border 
                                   border-[var(--primary-color)]/50 text-[var(--primary-color)] 
                                   rounded-lg font-futuristic-bold text-sm
                                   hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] 
                                   transition-all duration-300 
                                   transform hover:scale-105 hover:shadow-lg 
                                   hover:shadow-[var(--primary-color)]/25
                                   group-hover:border-[var(--primary-color)]
                                   flex items-center justify-center space-x-2">
                    <Zap size={16} className="group-hover:animate-pulse" />
                    <span>Boost Now</span>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 
                                                    transition-opacity duration-300" />
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 pointer-events-none
                              bg-gradient-to-r from-[var(--primary-color)]/5 to-transparent" />
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] 
                            border-l-transparent border-t-[30px] border-t-[var(--primary-color)] 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Popularity Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                <div 
                  className={`h-full bg-gradient-to-r ${game.color} transition-all duration-1000`}
                  style={{ width: `${game.popularity}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <div className="bg-[var(--card-bg-color)] rounded-2xl p-8 border border-[var(--primary-color)]/30">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-gaming-light text-[var(--text-color)] mb-4">
                Don't See Your Game?
              </h3>
              <p className="text-[var(--text-secondary-color)] font-futuristic mb-6">
                We support 50+ competitive titles across all platforms. Custom orders available for any game!
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <Shield className="text-[var(--primary-color)] mx-auto mb-2" size={24} />
                <div className="text-[var(--text-color)] font-futuristic-bold text-sm">100% Safe</div>
                <div className="text-[var(--text-secondary-color)] font-futuristic text-xs">VPN Protected</div>
              </div>
              <div className="text-center">
                <Clock className="text-[var(--primary-color)] mx-auto mb-2" size={24} />
                <div className="text-[var(--text-color)] font-futuristic-bold text-sm">Fast Delivery</div>
                <div className="text-[var(--text-secondary-color)] font-futuristic text-xs">1-5 Days Average</div>
              </div>
              <div className="text-center">
                <Users className="text-[var(--primary-color)] mx-auto mb-2" size={24} />
                <div className="text-[var(--text-color)] font-futuristic-bold text-sm">Expert Team</div>
                <div className="text-[var(--text-secondary-color)] font-futuristic text-xs">847+ Boosters</div>
              </div>
              <div className="text-center">
                <Trophy className="text-[var(--primary-color)] mx-auto mb-2" size={24} />
                <div className="text-[var(--text-color)] font-futuristic-bold text-sm">Guaranteed</div>
                <div className="text-[var(--text-secondary-color)] font-futuristic text-xs">Results or Refund</div>
              </div>
            </div>
            
            <div className="text-center">
              <button
                className="inline-flex items-center space-x-2 px-8 py-4 
                         bg-[var(--primary-color)] text-[var(--background-color)] 
                         rounded-lg font-futuristic-bold hover:scale-105 transition-all duration-300 
                         hover:shadow-lg hover:shadow-[var(--primary-color)]/25"
              >
                <span>View All 50+ Games</span>
                <ExternalLink size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Game Modal */}
      {selectedGame && (
        <GameModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          game={selectedGame}
        />
      )}
    </section>
  );
};

export default FeaturedGames;
import React, { useState } from 'react';
import { X, Shield, Trophy, Award, Target, Users, Gamepad2, Star, Zap, CheckCircle } from 'lucide-react';

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
  game: {
    name: string;
    image: string;
    description: string;
    ranks: string[];
    color: string;
    popularity: number;
    avgTime: string;
    startingPrice: number;
    activeOrders: number;
    featured: boolean;
  };
}

const GameModal: React.FC<GameModalProps> = ({ isOpen, onClose, game }) => {
  const [selectedPlatform, setSelectedPlatform] = useState('PC');
  const [selectedCurrentRank, setSelectedCurrentRank] = useState('');
  const [selectedDesiredRank, setSelectedDesiredRank] = useState('');
  const [selectedService, setSelectedService] = useState('rank-boosting');
  const [selectedOptions, setSelectedOptions] = useState({
    duoQueue: false,
    streaming: false,
    priorityCompletion: false,
    heroPreferences: false,
    playOffline: true
  });

  if (!isOpen) return null;

  const services = [
    { id: 'rank-boosting', name: 'RANK BOOSTING', icon: Shield, color: 'text-red-500' },
    { id: 'badge-boosting', name: 'BADGE BOOSTING', icon: Award, color: 'text-purple-500' },
    { id: 'kills-farming', name: 'KILLS FARMING', icon: Target, color: 'text-green-500' },
    { id: 'ranked-rumble', name: 'RANKED RUMBLE', icon: Zap, color: 'text-blue-500' },
    { id: 'predator-rp', name: 'PREDATOR RP POINTS', icon: Trophy, color: 'text-orange-500' },
    { id: 'prestige-skins', name: 'PRESTIGE SKINS', icon: Star, color: 'text-pink-500' },
    { id: 'legends-unlocking', name: 'LEGENDS UNLOCKING', icon: Gamepad2, color: 'text-purple-500' },
    { id: 'coaching', name: `${game.name.toUpperCase()} COACHING`, icon: Users, color: 'text-cyan-500' }
  ];

  const platforms = ['PC', 'PS4/PS5', 'XBOX'];

  const calculatePrice = () => {
    let basePrice = game.startingPrice;
    
    // Add service multipliers
    const serviceMultipliers = {
      'rank-boosting': 1,
      'badge-boosting': 0.8,
      'kills-farming': 0.6,
      'ranked-rumble': 1.2,
      'predator-rp': 2.5,
      'prestige-skins': 1.5,
      'legends-unlocking': 0.7,
      'coaching': 2.0
    };

    basePrice *= serviceMultipliers[selectedService as keyof typeof serviceMultipliers] || 1;

    // Add rank difference multiplier
    if (selectedCurrentRank && selectedDesiredRank) {
      const currentIndex = game.ranks.indexOf(selectedCurrentRank);
      const desiredIndex = game.ranks.indexOf(selectedDesiredRank);
      const rankDifference = Math.max(0, desiredIndex - currentIndex);
      basePrice += rankDifference * 15;
    }

    // Add option costs
    if (selectedOptions.duoQueue) basePrice += 20;
    if (selectedOptions.streaming) basePrice += 15;
    if (selectedOptions.priorityCompletion) basePrice += 25;
    if (selectedOptions.heroPreferences) basePrice += 0; // Free

    return Math.max(basePrice, game.startingPrice);
  };

  const toggleOption = (option: keyof typeof selectedOptions) => {
    setSelectedOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-[var(--card-bg-color)] 
                      rounded-2xl border border-[var(--primary-color)]/30 shadow-2xl">
        
        {/* Header */}
        <div className={`relative h-32 bg-gradient-to-r ${game.color} overflow-hidden`}>
          <img 
            src={game.image} 
            alt={game.name}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 
                     transition-colors duration-300"
          >
            <X size={24} className="text-white" />
          </button>
          
          <div className="absolute bottom-4 left-6">
            <h2 className="text-3xl font-gaming text-white mb-2">
              {game.name.toUpperCase()} RANK BOOSTING
            </h2>
            <p className="text-white/80 font-futuristic">
              Top 250 Predators Boosters Available to Increase Your Rank
            </p>
          </div>
        </div>

        <div className="p-6">
          {/* Service Categories */}
          <div className="mb-8">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-6">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-300 
                            hover:scale-105 ${
                    selectedService === service.id
                      ? 'border-[var(--primary-color)] bg-[var(--primary-color)]/10'
                      : 'border-gray-600 hover:border-[var(--primary-color)]/50'
                  }`}
                >
                  <div className={`p-3 rounded-full bg-gray-100 mb-2 ${service.color}`}>
                    <service.icon size={24} />
                  </div>
                  <span className="text-[var(--text-color)] font-futuristic text-xs text-center leading-tight">
                    {service.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Configuration */}
            <div className="lg:col-span-2 space-y-6">
              {/* Platform Selection */}
              <div>
                <h3 className="text-[var(--text-color)] font-gaming text-lg mb-4">SERVER</h3>
                <div className="flex gap-3">
                  {platforms.map((platform) => (
                    <button
                      key={platform}
                      onClick={() => setSelectedPlatform(platform)}
                      className={`px-6 py-3 rounded-full font-futuristic-bold transition-all duration-300 ${
                        selectedPlatform === platform
                          ? 'bg-[var(--primary-color)] text-white'
                          : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                      }`}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rank Selection */}
              <div>
                <h3 className="text-[var(--text-color)] font-gaming text-lg mb-4">ORDER</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Current Rank */}
                  <div className="text-center">
                    <h4 className="text-[var(--text-secondary-color)] font-futuristic mb-4">Current Rank</h4>
                    <div className="relative">
                      <select
                        value={selectedCurrentRank}
                        onChange={(e) => setSelectedCurrentRank(e.target.value)}
                        className="w-full p-4 bg-[var(--primary-color)] text-white rounded-full 
                                 font-futuristic-bold text-center appearance-none cursor-pointer
                                 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]/50"
                      >
                        <option value="">Select Rank</option>
                        {game.ranks.map((rank) => (
                          <option key={rank} value={rank}>{rank}</option>
                        ))}
                      </select>
                    </div>
                    
                    {/* Rank Divisions */}
                    {selectedCurrentRank && (
                      <div className="flex justify-center gap-2 mt-4">
                        {['IV', 'III', 'II', 'I'].map((division) => (
                          <button
                            key={division}
                            className="w-12 h-12 rounded-full bg-[var(--primary-color)] text-white 
                                     font-gaming hover:scale-110 transition-transform duration-300"
                          >
                            {division}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Desired Rank */}
                  <div className="text-center">
                    <h4 className="text-[var(--text-secondary-color)] font-futuristic mb-4">Desired Rank</h4>
                    <div className="relative">
                      <select
                        value={selectedDesiredRank}
                        onChange={(e) => setSelectedDesiredRank(e.target.value)}
                        className="w-full p-4 bg-[var(--primary-color)] text-white rounded-full 
                                 font-futuristic-bold text-center appearance-none cursor-pointer
                                 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]/50"
                      >
                        <option value="">Select Rank</option>
                        {game.ranks.map((rank) => (
                          <option key={rank} value={rank}>{rank}</option>
                        ))}
                      </select>
                    </div>
                    
                    {/* Rank Divisions */}
                    {selectedDesiredRank && (
                      <div className="flex justify-center gap-2 mt-4">
                        {['IV', 'III', 'II', 'I'].map((division) => (
                          <button
                            key={division}
                            className="w-12 h-12 rounded-full bg-[var(--primary-color)] text-white 
                                     font-gaming hover:scale-110 transition-transform duration-300"
                          >
                            {division}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Options */}
              <div>
                <h3 className="text-[var(--text-color)] font-gaming text-lg mb-4">OPTIONS</h3>
                <div className="space-y-3">
                  {[
                    { key: 'duoQueue', label: 'Duo Queue', price: '+$20', description: 'Play together with our booster' },
                    { key: 'streaming', label: 'Streaming', price: '+$15', description: 'Watch your games live' },
                    { key: 'priorityCompletion', label: 'Priority Completion', price: '+$25', description: 'Get your order completed faster' },
                    { key: 'heroPreferences', label: 'Hero Preferences', price: 'FREE', description: 'Choose preferred characters' },
                    { key: 'playOffline', label: 'Play Offline', price: '', description: 'Appear offline during boost' }
                  ].map((option) => (
                    <div key={option.key} className="flex items-center justify-between p-4 bg-[var(--background-color)]/30 
                                                   rounded-lg border border-[var(--primary-color)]/20">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                          <Users size={20} className="text-[var(--primary-color)]" />
                          <span className="text-[var(--text-color)] font-futuristic-bold">
                            {option.label}
                          </span>
                          {option.price && (
                            <span className={`text-sm font-futuristic ${
                              option.price === 'FREE' ? 'text-green-500' : 'text-[var(--primary-color)]'
                            }`}>
                              ({option.price})
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                          {option.description}
                        </span>
                        <button
                          onClick={() => toggleOption(option.key as keyof typeof selectedOptions)}
                          className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                            selectedOptions[option.key as keyof typeof selectedOptions]
                              ? 'bg-green-500'
                              : 'bg-gray-600'
                          }`}
                        >
                          <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                            selectedOptions[option.key as keyof typeof selectedOptions]
                              ? 'translate-x-7'
                              : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="space-y-6">
              {/* Money Back Guarantee */}
              <div className="bg-[var(--background-color)]/50 rounded-xl p-6 border border-[var(--primary-color)]/30">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield size={24} className="text-blue-500" />
                  <h3 className="text-[var(--text-color)] font-gaming text-lg">100% Money Back Guarantee</h3>
                </div>
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm mb-4">
                  Risk-free service with full refund protection
                </p>
                <button className="w-full py-3 bg-blue-500 text-white rounded-lg font-futuristic-bold 
                                 hover:bg-blue-600 transition-colors duration-300">
                  ✓ Your Order is Protected
                </button>
                <p className="text-[var(--text-secondary-color)] font-futuristic text-xs text-center mt-2">
                  No questions asked refund policy
                </p>
              </div>

              {/* Order Summary */}
              <div className="bg-[var(--background-color)]/50 rounded-xl p-6 border border-[var(--primary-color)]/30">
                <h3 className="text-[var(--text-color)] font-gaming text-lg mb-4">
                  {selectedCurrentRank && selectedDesiredRank 
                    ? `${selectedCurrentRank} to ${selectedDesiredRank}`
                    : 'Select Ranks'
                  }
                </h3>
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm mb-6">
                  Approximate completion time: {game.avgTime}
                </p>

                {/* Selected Options Summary */}
                <div className="space-y-3 mb-6">
                  {Object.entries(selectedOptions).map(([key, value]) => {
                    if (!value) return null;
                    const optionLabels = {
                      duoQueue: 'Duo Queue (+$20)',
                      streaming: 'Streaming (+$15)',
                      priorityCompletion: 'Priority Completion (+$25)',
                      heroPreferences: 'Hero Preferences (FREE)',
                      playOffline: 'Play Offline'
                    };
                    
                    return (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-[var(--text-color)] font-futuristic text-sm">
                          {optionLabels[key as keyof typeof optionLabels]}
                        </span>
                        <span className="text-green-500 font-futuristic text-sm">
                          {key === 'playOffline' ? 'ON' : '✓'}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Discount */}
                <div className="border-t border-[var(--primary-color)]/20 pt-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[var(--text-secondary-color)] font-futuristic">DISCOUNT</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--text-secondary-color)] font-futuristic text-sm">GET50OFF</span>
                    <span className="text-green-500 font-futuristic text-sm">GET50OFF code applied</span>
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-[var(--primary-color)]/20 pt-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[var(--text-color)] font-gaming text-lg">TOTAL</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--text-secondary-color)] line-through">
                      ${(calculatePrice() * 2).toFixed(2)}
                    </span>
                    <span className="text-[var(--primary-color)] font-gaming text-2xl">
                      ${calculatePrice().toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="w-full py-4 bg-[var(--primary-color)] text-white rounded-lg 
                                 font-futuristic-bold text-lg hover:scale-105 transition-all duration-300
                                 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!selectedCurrentRank || !selectedDesiredRank}>
                  Checkout
                </button>

                {/* Payment Methods */}
                <div className="mt-4 flex flex-wrap justify-center gap-2 opacity-60">
                  <div className="text-xs text-[var(--text-secondary-color)] font-futuristic">
                    VISA • MasterCard • PayPal • Crypto • Apple Pay
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                  1,069 Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameModal;
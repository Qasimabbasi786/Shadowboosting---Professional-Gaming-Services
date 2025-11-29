import React, { useState, useEffect } from 'react';
import { Star, Quote, User, Trophy, Shield } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Alex Chen',
      username: '@alexgamer2024',
      game: 'Valorant',
      service: 'Rank Boosting',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      text: 'Incredible service! Got boosted from Gold to Diamond in just 3 days. The booster was professional, kept me updated throughout the process, and even gave me tips to maintain my rank. Highly recommend!',
      beforeRank: 'Gold 2',
      afterRank: 'Diamond 1',
      verified: true,
      service: 'Rank Boosting',
      completionTime: '3 days',
      boosterRating: 5.0
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      username: '@sarahplays',
      game: 'Fortnite',
      service: 'Account Purchase',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
      text: 'Bought a Champion rank account and it was exactly as described. All the rare skins were there, the transfer was smooth, and customer support was amazing. The account even had more skins than advertised!',
      beforeRank: 'Unranked',
      afterRank: 'Champion',
      verified: true,
      service: 'Account Purchase',
      completionTime: '5 minutes',
      boosterRating: 4.9
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      username: '@miketheking',
      game: 'Apex Legends',
      service: 'Coaching',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      text: 'The coaching sessions were amazing! My coach helped me understand positioning, game sense, and advanced strategies. Went from Platinum to Master in 2 weeks and learned so much!',
      beforeRank: 'Platinum 4',
      afterRank: 'Master',
      verified: true,
      service: 'Coaching',
      completionTime: '2 weeks',
      boosterRating: 5.0
    },
    {
      id: 4,
      name: 'Emma Wilson',
      username: '@emmawins',
      game: 'Overwatch',
      service: 'Duo Boosting',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      text: 'Duo boosting was perfect! I learned so much while climbing ranks. The booster was patient, taught me advanced strategies, and we had great chemistry. Worth every penny!',
      beforeRank: 'Silver 3',
      afterRank: 'Diamond 2',
      verified: true,
      service: 'Duo Boosting',
      completionTime: '5 days',
      boosterRating: 4.8
    },
    {
      id: 5,
      name: 'David Kim',
      username: '@davidpro',
      game: 'Rocket League',
      service: 'Account Recovery',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      text: 'Lost access to my Grand Champion account and they helped me recover it safely. Professional service with great communication throughout. They even improved my security settings!',
      beforeRank: 'Lost Account',
      afterRank: 'Grand Champion',
      verified: true,
      service: 'Account Recovery',
      completionTime: '2 days',
      boosterRating: 4.9
    },
    {
      id: 6,
      name: 'Lisa Park',
      username: '@lisagaming',
      game: 'Valorant',
      service: 'Badge Unlock',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      text: 'Needed specific badges for my favorite agent and they delivered perfectly. Fast service, exactly what I wanted, and they even unlocked some bonus achievements. Will definitely use again!',
      beforeRank: 'No Badges',
      afterRank: 'All Badges',
      verified: true,
      service: 'Badge Unlock',
      completionTime: '4 hours',
      boosterRating: 5.0
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="community" className="py-20 bg-[var(--card-bg-color)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gaming text-[var(--text-color)] mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl font-futuristic text-[var(--text-secondary-color)] max-w-3xl mx-auto">
            Join thousands of satisfied gamers who have elevated their gaming experience with our services
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-[var(--card-bg-color)] rounded-2xl p-8 border border-[var(--primary-color)]/30 
                          hover:border-[var(--primary-color)]/60 transition-all duration-500 
                          shadow-lg hover:shadow-[var(--primary-color)]/10">
            
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8">
              <div className="p-3 bg-[var(--primary-color)] rounded-full">
                <Quote size={24} className="text-[var(--background-color)]" />
              </div>
            </div>

            <div className="pt-6">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={24} 
                    className="text-yellow-500 fill-current mx-1" 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl font-futuristic text-[var(--text-color)] text-center mb-8 
                                   leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonials[currentTestimonial].avatar} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full border-2 border-[var(--primary-color)]/50"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-[var(--text-color)] font-gaming-light text-lg">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      {testimonials[currentTestimonial].verified && (
                        <Shield size={16} className="text-green-500" />
                      )}
                    </div>
                    <p className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                      {testimonials[currentTestimonial].username}
                    </p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star size={12} className="text-yellow-500 fill-current" />
                      <span className="text-[var(--text-secondary-color)] font-futuristic text-xs">
                        Booster Rating: {testimonials[currentTestimonial].boosterRating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Service Info */}
                <div className="hidden md:block w-px h-16 bg-[var(--primary-color)]/30" />
                
                <div className="text-center">
                  <div className="text-[var(--primary-color)] font-gaming text-lg mb-1">
                    {testimonials[currentTestimonial].game}
                  </div>
                  <div className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                    {testimonials[currentTestimonial].service}
                  </div>
                  <div className="text-[var(--text-secondary-color)] font-futuristic text-xs mt-1">
                    Completed in {testimonials[currentTestimonial].completionTime}
                  </div>
                </div>

                {/* Rank Progress */}
                <div className="hidden lg:block w-px h-16 bg-[var(--primary-color)]/30" />
                
                <div className="hidden lg:flex items-center space-x-3">
                  <div className="text-center">
                    <div className="text-[var(--text-secondary-color)] font-futuristic text-xs mb-1">
                      Before
                    </div>
                    <div className="text-[var(--text-color)] font-gaming text-sm">
                      {testimonials[currentTestimonial].beforeRank}
                    </div>
                  </div>
                  <Trophy size={20} className="text-[var(--primary-color)]" />
                  <div className="text-center">
                    <div className="text-[var(--text-secondary-color)] font-futuristic text-xs mb-1">
                      After
                    </div>
                    <div className="text-[var(--primary-color)] font-gaming text-sm">
                      {testimonials[currentTestimonial].afterRank}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-[var(--primary-color)] scale-125'
                  : 'bg-[var(--primary-color)]/30 hover:bg-[var(--primary-color)]/60'
              }`}
            />
          ))}
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20 
                         hover:border-[var(--primary-color)]/60 transition-all duration-300 
                         hover:scale-105 cursor-pointer group"
              onClick={() => setCurrentTestimonial(index)}
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[var(--text-secondary-color)] font-futuristic text-sm mb-4 
                           line-clamp-3 group-hover:text-[var(--text-color)] transition-colors duration-300">
                "{testimonial.text}"
              </p>

              {/* Customer */}
              <div className="flex items-center space-x-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full border border-[var(--primary-color)]/30"
                />
                <div>
                  <div className="flex items-center space-x-1">
                    <h5 className="text-[var(--text-color)] font-futuristic-bold text-sm">
                      {testimonial.name}
                    </h5>
                    {testimonial.verified && (
                      <Shield size={12} className="text-green-500" />
                    )}
                  </div>
                  <p className="text-[var(--text-secondary-color)] font-futuristic text-xs">
                    {testimonial.game} • {testimonial.service}
                  </p>
                  <div className="flex items-center space-x-1 mt-1">
                    <span className="text-[var(--text-secondary-color)] font-futuristic text-xs">
                      {testimonial.completionTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 text-center">
          <div className="bg-[var(--card-bg-color)] rounded-2xl p-8 border border-[var(--primary-color)]/30">
            <h3 className="text-2xl font-gaming-light text-[var(--text-color)] mb-8">
              Customer Satisfaction Metrics
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-gaming text-[var(--primary-color)] mb-2 group-hover:animate-pulse">
                  4.9/5
                </div>
                <div className="text-[var(--text-secondary-color)] font-futuristic">
                  Average Rating
                </div>
                <div className="text-[var(--text-secondary-color)] font-futuristic text-xs mt-1">
                  From 12,000+ reviews
                </div>
              </div>
              
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-gaming text-[var(--primary-color)] mb-2 group-hover:animate-pulse">
                  15,420+
                </div>
                <div className="text-[var(--text-secondary-color)] font-futuristic">
                  Happy Customers
                </div>
                <div className="text-[var(--text-secondary-color)] font-futuristic text-xs mt-1">
                  Across all platforms
                </div>
              </div>
              
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-gaming text-[var(--primary-color)] mb-2 group-hover:animate-pulse">
                  99.9%
                </div>
                <div className="text-[var(--text-secondary-color)] font-futuristic">
                  Success Rate
                </div>
                <div className="text-[var(--text-secondary-color)] font-futuristic text-xs mt-1">
                  Orders completed successfully
                </div>
              </div>
              
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-gaming text-[var(--primary-color)] mb-2 group-hover:animate-pulse">
                  24/7
                </div>
                <div className="text-[var(--text-secondary-color)] font-futuristic">
                  Support Available
                </div>
                <div className="text-[var(--text-secondary-color)] font-futuristic text-xs mt-1">
                  Live chat & Discord
                </div>
              </div>
            </div>
            
            {/* Recent Reviews */}
            <div className="border-t border-[var(--primary-color)]/20 pt-8">
              <h4 className="text-lg font-gaming-light text-[var(--text-color)] mb-4">
                Recent Reviews
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <div key={index} className="bg-[var(--background-color)]/30 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="text-[var(--text-color)] font-futuristic text-sm">
                          {testimonial.name}
                        </div>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={12} className="text-yellow-500 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-[var(--text-secondary-color)] font-futuristic text-xs line-clamp-2">
                      "{testimonial.text.substring(0, 80)}..."
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React from 'react';
import { Target, Users, Video, Award, CheckCircle, Clock, Star, Trophy } from 'lucide-react';

const SkillCoachingPage: React.FC = () => {
  const coachingTypes = [
    {
      icon: Target,
      title: '1-on-1 Coaching',
      price: '$35/hour',
      description: 'Personal coaching sessions with professional players',
      features: ['Live gameplay analysis', 'Real-time feedback', 'Custom training plan', 'Recording included']
    },
    {
      icon: Video,
      title: 'VOD Review',
      price: '$25/review',
      description: 'Detailed analysis of your gameplay recordings',
      features: ['In-depth analysis', 'Written feedback', 'Improvement tips', '48h delivery']
    },
    {
      icon: Users,
      title: 'Group Coaching',
      price: '$20/hour',
      description: 'Team coaching sessions for groups of 2-5 players',
      features: ['Team coordination', 'Strategy development', 'Communication training', 'Group discounts']
    },
    {
      icon: Award,
      title: 'Intensive Program',
      price: '$150/week',
      description: 'Comprehensive weekly coaching program',
      features: ['Daily sessions', 'Progress tracking', 'Homework assignments', 'Guaranteed improvement']
    }
  ];

  const coaches = [
    {
      name: 'Alex "ProGamer" Chen',
      rank: 'Radiant',
      game: 'Valorant',
      experience: '5 years',
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      specialties: ['Aim Training', 'Game Sense', 'Team Strategy']
    },
    {
      name: 'Sarah "AimQueen" Johnson',
      rank: 'Predator',
      game: 'Apex Legends',
      experience: '4 years',
      rating: 5.0,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
      specialties: ['Movement', 'Positioning', 'Legend Mastery']
    },
    {
      name: 'Mike "Clutch" Rodriguez',
      rank: 'Champion',
      game: 'Fortnite',
      experience: '6 years',
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      specialties: ['Building', 'Editing', 'Zone Management']
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
              <Target size={16} className="text-[var(--primary-color)]" />
              <span className="text-[var(--primary-color)] font-futuristic text-sm">
                Learn from the Best
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-gaming text-[var(--text-color)] mb-6">
              Skill Coaching
            </h1>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)] max-w-3xl mx-auto">
              Master your favorite games with personalized coaching from professional players. 
              Improve your skills, game sense, and climb the ranks permanently.
            </p>
          </div>
        </div>
      </section>

      {/* Coaching Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Coaching Services
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Choose the coaching format that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coachingTypes.map((type, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20 
                                        hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105">
                <div className="p-3 bg-[var(--primary-color)]/10 rounded-lg w-fit mb-4">
                  <type.icon size={32} className="text-[var(--primary-color)]" />
                </div>
                
                <h3 className="text-xl font-gaming-light text-[var(--text-color)] mb-2">
                  {type.title}
                </h3>
                
                <div className="text-2xl font-gaming text-[var(--primary-color)] mb-4">
                  {type.price}
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
                  Book Session
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Coaches */}
      <section className="py-20 bg-[var(--card-bg-color)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Meet Our Coaches
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Learn from professional players and content creators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20 
                                        hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <img 
                    src={coach.avatar} 
                    alt={coach.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-[var(--primary-color)]/50"
                  />
                  <h3 className="text-xl font-gaming-light text-[var(--text-color)] mb-2">
                    {coach.name}
                  </h3>
                  <div className="text-[var(--primary-color)] font-futuristic text-sm mb-1">
                    {coach.rank} • {coach.game}
                  </div>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={`${i < Math.floor(coach.rating) ? 'text-yellow-500 fill-current' : 'text-gray-400'}`} 
                      />
                    ))}
                    <span className="text-[var(--text-secondary-color)] font-futuristic text-xs ml-1">
                      {coach.rating}
                    </span>
                  </div>
                  <div className="text-[var(--text-secondary-color)] font-futuristic text-xs">
                    {coach.experience} experience
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-[var(--text-color)] font-futuristic-bold text-sm mb-2">
                    Specialties:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {coach.specialties.map((specialty, specialtyIndex) => (
                      <span 
                        key={specialtyIndex}
                        className="px-2 py-1 bg-[var(--primary-color)]/20 text-[var(--primary-color)] 
                                 text-xs rounded-full font-futuristic"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full py-3 border border-[var(--primary-color)] text-[var(--primary-color)] 
                                 rounded-lg font-futuristic-bold hover:bg-[var(--primary-color)] 
                                 hover:text-[var(--background-color)] transition-all duration-300">
                  Book with {coach.name.split(' ')[0]}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Why Choose Our Coaching?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Trophy, title: 'Pro Players', description: 'Learn from actual professional gamers' },
              { icon: Clock, title: 'Flexible Schedule', description: 'Book sessions at your convenience' },
              { icon: Video, title: 'Recorded Sessions', description: 'Review your coaching sessions anytime' },
              { icon: Award, title: 'Guaranteed Results', description: 'See improvement or get your money back' }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-[var(--primary-color)]/10 rounded-full w-fit mx-auto mb-4">
                  <benefit.icon size={32} className="text-[var(--primary-color)]" />
                </div>
                <h3 className="text-lg font-gaming-light text-[var(--text-color)] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillCoachingPage;
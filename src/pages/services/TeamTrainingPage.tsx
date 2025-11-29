import React from 'react';
import { Users, Target, Trophy, Zap, CheckCircle, Clock, Star, Award } from 'lucide-react';

const TeamTrainingPage: React.FC = () => {
  const trainingPackages = [
    {
      icon: Users,
      title: 'Team Coordination',
      price: '$120/session',
      duration: '2 hours',
      description: 'Improve team communication and coordination',
      features: ['Communication drills', 'Role assignments', 'Callout training', 'Team chemistry']
    },
    {
      icon: Target,
      title: 'Strategy Development',
      price: '$150/session',
      duration: '2.5 hours',
      description: 'Develop winning strategies and tactics',
      features: ['Map control', 'Objective planning', 'Counter-strategies', 'Adaptation training']
    },
    {
      icon: Trophy,
      title: 'Tournament Prep',
      price: '$200/session',
      duration: '3 hours',
      description: 'Intensive tournament preparation',
      features: ['Scrim analysis', 'Pressure training', 'Mental preparation', 'Performance review']
    },
    {
      icon: Zap,
      title: 'Bootcamp Program',
      price: '$800/week',
      duration: '5 days',
      description: 'Intensive week-long training program',
      features: ['Daily sessions', 'Individual coaching', 'Team building', 'Performance tracking']
    }
  ];

  const teamSizes = [
    { size: '2-3 Players', discount: '10%', description: 'Small team focused training' },
    { size: '4-5 Players', discount: '15%', description: 'Full team comprehensive training' },
    { size: '6+ Players', discount: '20%', description: 'Large roster development' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--background-color)] to-[var(--card-bg-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[var(--primary-color)]/10 
                            border border-[var(--primary-color)]/30 rounded-full mb-8">
              <Users size={16} className="text-[var(--primary-color)]" />
              <span className="text-[var(--primary-color)] font-futuristic text-sm">
                Team Excellence
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-gaming text-[var(--text-color)] mb-6">
              Team Training
            </h1>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)] max-w-3xl mx-auto">
              Transform your team into champions with professional team training. Improve coordination, 
              strategy, and performance with our expert coaches.
            </p>
          </div>
        </div>
      </section>

      {/* Training Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Training Programs
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Comprehensive team development programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingPackages.map((pkg, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20 
                                        hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105">
                <div className="p-3 bg-[var(--primary-color)]/10 rounded-lg w-fit mb-4">
                  <pkg.icon size={32} className="text-[var(--primary-color)]" />
                </div>
                
                <h3 className="text-xl font-gaming-light text-[var(--text-color)] mb-2">
                  {pkg.title}
                </h3>
                
                <div className="text-2xl font-gaming text-[var(--primary-color)] mb-2">
                  {pkg.price}
                </div>
                
                <div className="text-[var(--text-secondary-color)] font-futuristic text-sm mb-4">
                  {pkg.duration}
                </div>
                
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm mb-6">
                  {pkg.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
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
                  Book Training
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Size Discounts */}
      <section className="py-20 bg-[var(--card-bg-color)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Group Discounts
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Bigger teams get better deals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamSizes.map((team, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-8 border border-[var(--primary-color)]/20 
                                        hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105 text-center">
                <div className="text-3xl font-gaming text-[var(--primary-color)] mb-4">
                  {team.size}
                </div>
                <div className="text-4xl font-gaming text-green-500 mb-4">
                  {team.discount} OFF
                </div>
                <p className="text-[var(--text-secondary-color)] font-futuristic">
                  {team.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Focus Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              What We Cover
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Comprehensive team development areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Communication',
                description: 'Clear callouts, timing, and information sharing',
                icon: '🗣️'
              },
              {
                title: 'Strategy',
                description: 'Map control, rotations, and tactical planning',
                icon: '🎯'
              },
              {
                title: 'Teamwork',
                description: 'Coordination, synergy, and role optimization',
                icon: '🤝'
              },
              {
                title: 'Mental Game',
                description: 'Pressure handling, confidence, and focus',
                icon: '🧠'
              },
              {
                title: 'Analysis',
                description: 'VOD reviews, mistake identification, improvement',
                icon: '📊'
              },
              {
                title: 'Adaptation',
                description: 'Counter-strategies, flexibility, and meta understanding',
                icon: '⚡'
              }
            ].map((area, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20 
                                        hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4 text-center">{area.icon}</div>
                <h3 className="text-xl font-gaming-light text-[var(--text-color)] mb-3 text-center">
                  {area.title}
                </h3>
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm text-center">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-[var(--card-bg-color)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Team Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                team: 'Shadow Wolves',
                game: 'Valorant',
                achievement: 'Regional Champions',
                improvement: '+3 Ranks Average',
                testimonial: 'The team training completely transformed our gameplay. We went from struggling in Gold to winning regional tournaments!'
              },
              {
                team: 'Apex Predators',
                game: 'Apex Legends',
                achievement: 'Tournament Winners',
                improvement: '+2000 RP Average',
                testimonial: 'Our coordination improved dramatically. We now play like a real professional team with perfect synergy.'
              },
              {
                team: 'Storm Riders',
                game: 'Fortnite',
                achievement: 'Top 10 Placement',
                improvement: '+5 Divisions',
                testimonial: 'The strategic training helped us understand the game at a completely different level. Highly recommended!'
              }
            ].map((story, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-gaming-light text-[var(--text-color)] mb-2">
                    {story.team}
                  </h3>
                  <div className="text-[var(--primary-color)] font-futuristic text-sm mb-2">
                    {story.game} • {story.achievement}
                  </div>
                  <div className="text-green-500 font-gaming text-lg">
                    {story.improvement}
                  </div>
                </div>
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm italic text-center">
                  "{story.testimonial}"
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
              Ready to Dominate as a Team?
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)] mb-8">
              Book your team training session today and start your journey to championship level gameplay
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[var(--primary-color)] text-[var(--background-color)] 
                               rounded-lg font-futuristic-bold hover:scale-105 transition-all duration-300">
                Book Team Session
              </button>
              <button className="px-8 py-4 border border-[var(--primary-color)] text-[var(--primary-color)] 
                               rounded-lg font-futuristic-bold hover:bg-[var(--primary-color)] 
                               hover:text-[var(--background-color)] transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamTrainingPage;
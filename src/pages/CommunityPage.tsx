import React from 'react';
import { Users, MessageCircle, Trophy, Star, Calendar, Award, Zap, Shield } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const communityStats = [
    { icon: Users, label: 'Active Members', value: '25,847+', color: 'text-blue-500' },
    { icon: MessageCircle, label: 'Daily Messages', value: '12,456+', color: 'text-green-500' },
    { icon: Trophy, label: 'Tournaments Hosted', value: '156+', color: 'text-yellow-500' },
    { icon: Award, label: 'Prizes Awarded', value: '$45,000+', color: 'text-purple-500' }
  ];

  const discordChannels = [
    { name: '🎮 General Chat', members: '15,420', description: 'Main community discussion' },
    { name: '🏆 Boosting Updates', members: '8,234', description: 'Live order updates and progress' },
    { name: '💬 Support Tickets', members: '12,567', description: '24/7 customer support' },
    { name: '🎯 LFG (Looking for Group)', members: '6,789', description: 'Find teammates and partners' },
    { name: '📺 Streamers Corner', members: '3,456', description: 'Content creators and streamers' },
    { name: '🎉 Events & Giveaways', members: '18,901', description: 'Community events and prizes' }
  ];

  const upcomingEvents = [
    {
      title: 'Valorant Tournament',
      date: 'Jan 15, 2025',
      prize: '$2,500',
      participants: '128 teams',
      status: 'Registration Open'
    },
    {
      title: 'Fortnite Build Battle',
      date: 'Jan 22, 2025',
      prize: '$1,500',
      participants: '64 players',
      status: 'Coming Soon'
    },
    {
      title: 'Apex Legends Championship',
      date: 'Feb 5, 2025',
      prize: '$3,000',
      participants: '96 teams',
      status: 'Announced'
    }
  ];

  const testimonials = [
    {
      name: 'Alex "ProGamer" Chen',
      role: 'Community Moderator',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      text: 'The Shadowboosting community is incredible! Great people, amazing support, and tons of opportunities to improve your gaming skills.',
      rating: 5
    },
    {
      name: 'Sarah "GamerGirl" Johnson',
      role: 'Tournament Winner',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
      text: 'Won my first tournament here and made lifelong friends. The community events are top-notch and the prizes are amazing!',
      rating: 5
    },
    {
      name: 'Mike "Clutch" Rodriguez',
      role: 'Content Creator',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      text: 'As a content creator, this community has been invaluable. Great networking opportunities and supportive members.',
      rating: 5
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
              <Users size={16} className="text-[var(--primary-color)]" />
              <span className="text-[var(--primary-color)] font-futuristic text-sm">
                Join 25,000+ Gamers
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-gaming text-[var(--text-color)] mb-6">
              Gaming Community
            </h1>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)] max-w-3xl mx-auto">
              Join the most active gaming community! Connect with fellow gamers, participate in tournaments, 
              get exclusive tips, and be part of something bigger.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center bg-[var(--card-bg-color)] rounded-xl p-6 
                                        border border-[var(--primary-color)]/20 hover:scale-105 
                                        transition-all duration-300">
                <div className="p-3 bg-[var(--primary-color)]/10 rounded-full w-fit mx-auto mb-4">
                  <stat.icon size={32} className={`${stat.color}`} />
                </div>
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

      {/* Discord Community */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Join Our Discord Server
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              The heart of our community - active 24/7 with amazing people
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {discordChannels.map((channel, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20 
                                        hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105">
                <h3 className="text-lg font-gaming-light text-[var(--text-color)] mb-2">
                  {channel.name}
                </h3>
                <div className="text-[var(--primary-color)] font-futuristic text-sm mb-3">
                  {channel.members} members
                </div>
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                  {channel.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center space-x-3 px-8 py-4 bg-[#5865F2] 
                             text-white rounded-lg font-futuristic-bold hover:scale-105 
                             transition-all duration-300 hover:shadow-lg">
              <MessageCircle size={24} />
              <span>Join Discord Server</span>
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-[var(--card-bg-color)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Compete in tournaments and win amazing prizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20 
                                        hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <Calendar size={24} className="text-[var(--primary-color)]" />
                  <span className={`px-3 py-1 rounded-full text-xs font-futuristic-bold ${
                    event.status === 'Registration Open' ? 'bg-green-500/20 text-green-500' :
                    event.status === 'Coming Soon' ? 'bg-yellow-500/20 text-yellow-500' :
                    'bg-blue-500/20 text-blue-500'
                  }`}>
                    {event.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-gaming-light text-[var(--text-color)] mb-3">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary-color)] font-futuristic text-sm">Date:</span>
                    <span className="text-[var(--text-color)] font-futuristic text-sm">{event.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary-color)] font-futuristic text-sm">Prize Pool:</span>
                    <span className="text-[var(--primary-color)] font-gaming text-sm">{event.prize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary-color)] font-futuristic text-sm">Participants:</span>
                    <span className="text-[var(--text-color)] font-futuristic text-sm">{event.participants}</span>
                  </div>
                </div>

                <button className={`w-full py-3 rounded-lg font-futuristic-bold transition-all duration-300 ${
                  event.status === 'Registration Open' 
                    ? 'bg-[var(--primary-color)] text-[var(--background-color)] hover:scale-105' 
                    : 'border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]'
                }`}>
                  {event.status === 'Registration Open' ? 'Register Now' : 'Learn More'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Community Benefits
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Exclusive perks for our community members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Trophy,
                title: 'Exclusive Tournaments',
                description: 'Members-only tournaments with bigger prize pools',
                benefit: 'Up to $5,000 prizes'
              },
              {
                icon: Zap,
                title: 'Priority Support',
                description: 'Skip the queue with priority customer support',
                benefit: '< 5 min response'
              },
              {
                icon: Award,
                title: 'Member Discounts',
                description: 'Special pricing on all boosting services',
                benefit: 'Up to 20% off'
              },
              {
                icon: Shield,
                title: 'Early Access',
                description: 'First access to new services and features',
                benefit: '7 days early'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20 
                                        hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105 text-center">
                <div className="p-4 bg-[var(--primary-color)]/10 rounded-full w-fit mx-auto mb-4">
                  <benefit.icon size={32} className="text-[var(--primary-color)]" />
                </div>
                <h3 className="text-lg font-gaming-light text-[var(--text-color)] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm mb-4">
                  {benefit.description}
                </p>
                <div className="text-[var(--primary-color)] font-gaming text-sm">
                  {benefit.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Testimonials */}
      <section className="py-20 bg-[var(--card-bg-color)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              What Our Community Says
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Real feedback from our amazing community members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20">
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-[var(--primary-color)]/50"
                  />
                  <div>
                    <h4 className="text-[var(--text-color)] font-futuristic-bold text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-[var(--text-secondary-color)] font-futuristic text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>

                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[var(--card-bg-color)] rounded-2xl p-8 border border-[var(--primary-color)]/30">
            <h2 className="text-3xl font-gaming text-[var(--text-color)] mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)] mb-8">
              Connect with 25,000+ gamers, participate in tournaments, and level up your gaming experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#5865F2] text-white rounded-lg font-futuristic-bold 
                               hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <MessageCircle size={20} />
                <span>Join Discord Now</span>
              </button>
              <button className="px-8 py-4 border border-[var(--primary-color)] text-[var(--primary-color)] 
                               rounded-lg font-futuristic-bold hover:bg-[var(--primary-color)] 
                               hover:text-[var(--background-color)] transition-all duration-300">
                View Community Guidelines
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
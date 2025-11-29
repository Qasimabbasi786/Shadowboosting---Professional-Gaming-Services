import React, { useState } from 'react';
import { Headphones, MessageCircle, Mail, Clock, CheckCircle, AlertCircle, HelpCircle, Users, Shield, Zap } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7 Available',
      responseTime: '< 2 minutes',
      status: 'online'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Always Open',
      responseTime: '< 4 hours',
      status: 'online'
    },
    {
      icon: Users,
      title: 'Discord Support',
      description: 'Get help in our community server',
      availability: '24/7 Community',
      responseTime: '< 10 minutes',
      status: 'online'
    },
    {
      icon: Headphones,
      title: 'Priority Support',
      description: 'VIP support for premium customers',
      availability: 'Premium Only',
      responseTime: '< 1 minute',
      status: 'premium'
    }
  ];

  const faqCategories = [
    { id: 'general', name: 'General', icon: HelpCircle },
    { id: 'orders', name: 'Orders', icon: CheckCircle },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'technical', name: 'Technical', icon: Zap }
  ];

  const faqs = {
    general: [
      {
        question: 'What is game boosting?',
        answer: 'Game boosting is a service where professional players help improve your account\'s rank, complete challenges, or unlock achievements in competitive games.'
      },
      {
        question: 'How long does boosting take?',
        answer: 'Boosting time varies depending on your current rank and desired rank. Most orders are completed within 1-7 days.'
      },
      {
        question: 'Is boosting legal?',
        answer: 'Boosting operates in a legal gray area. While not illegal, it may violate game terms of service. We use advanced security measures to minimize risks.'
      }
    ],
    orders: [
      {
        question: 'How do I track my order?',
        answer: 'You can track your order in real-time through our customer dashboard. You\'ll receive regular updates and can watch your booster play.'
      },
      {
        question: 'Can I cancel my order?',
        answer: 'Yes, you can cancel your order before it starts for a full refund. Partial refunds are available for orders in progress.'
      },
      {
        question: 'What if I\'m not satisfied?',
        answer: 'We offer a satisfaction guarantee. If you\'re not happy with our service, we\'ll work to make it right or provide a refund.'
      }
    ],
    security: [
      {
        question: 'Is my account safe?',
        answer: 'Yes, we use VPN protection, play during your usual hours, and maintain your playstyle. We have a 99.9% safety record with zero permanent bans.'
      },
      {
        question: 'Do you change my account details?',
        answer: 'No, we never change your email, password, or any personal information. We only play the game to achieve your desired goals.'
      },
      {
        question: 'What if something goes wrong?',
        answer: 'We have comprehensive insurance and will handle any issues immediately. Our support team is available 24/7 to address concerns.'
      }
    ],
    technical: [
      {
        question: 'What platforms do you support?',
        answer: 'We support PC, PlayStation, Xbox, Nintendo Switch, and mobile platforms across 50+ games.'
      },
      {
        question: 'Do I need to download anything?',
        answer: 'No downloads required. We work directly with your existing game accounts and platforms.'
      },
      {
        question: 'Can I play during the boost?',
        answer: 'For solo boosting, we recommend not playing during the service. For duo boosting, you play alongside our booster.'
      }
    ]
  };

  const supportStats = [
    { label: 'Average Response Time', value: '2 minutes', icon: Clock },
    { label: 'Customer Satisfaction', value: '98.5%', icon: CheckCircle },
    { label: 'Issues Resolved', value: '24,567+', icon: Shield },
    { label: 'Support Agents', value: '47', icon: Users }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--background-color)] to-[var(--card-bg-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[var(--primary-color)]/10 
                            border border-[var(--primary-color)]/30 rounded-full mb-8">
              <Headphones size={16} className="text-[var(--primary-color)]" />
              <span className="text-[var(--primary-color)] font-futuristic text-sm">
                24/7 Available
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-gaming text-[var(--text-color)] mb-6">
              Customer Support
            </h1>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)] max-w-3xl mx-auto">
              Need help? Our expert support team is here 24/7 to assist you with any questions, 
              concerns, or issues. Get instant help through multiple channels.
            </p>
          </div>

          {/* Support Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {supportStats.map((stat, index) => (
              <div key={index} className="text-center bg-[var(--card-bg-color)] rounded-xl p-6 
                                        border border-[var(--primary-color)]/20 hover:scale-105 
                                        transition-all duration-300">
                <div className="p-3 bg-[var(--primary-color)]/10 rounded-full w-fit mx-auto mb-4">
                  <stat.icon size={24} className="text-[var(--primary-color)]" />
                </div>
                <div className="text-2xl font-gaming text-[var(--primary-color)] mb-2">
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

      {/* Support Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Get Help Now
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Choose your preferred way to get support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20 
                                        hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[var(--primary-color)]/10 rounded-lg">
                    <option.icon size={24} className="text-[var(--primary-color)]" />
                  </div>
                  <div className={`w-3 h-3 rounded-full ${
                    option.status === 'online' ? 'bg-green-500' : 
                    option.status === 'premium' ? 'bg-yellow-500' : 'bg-gray-500'
                  } animate-pulse`} />
                </div>
                
                <h3 className="text-xl font-gaming-light text-[var(--text-color)] mb-2">
                  {option.title}
                </h3>
                
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm mb-4">
                  {option.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary-color)] font-futuristic text-xs">
                      Availability:
                    </span>
                    <span className="text-[var(--text-color)] font-futuristic text-xs">
                      {option.availability}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary-color)] font-futuristic text-xs">
                      Response:
                    </span>
                    <span className="text-[var(--primary-color)] font-futuristic text-xs">
                      {option.responseTime}
                    </span>
                  </div>
                </div>

                <button className={`w-full py-3 rounded-lg font-futuristic-bold transition-all duration-300 ${
                  option.status === 'premium' 
                    ? 'border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-[var(--background-color)]'
                    : 'bg-[var(--primary-color)] text-[var(--background-color)] hover:scale-105'
                }`}>
                  {option.status === 'premium' ? 'Upgrade for Access' : 'Contact Now'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--card-bg-color)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Find quick answers to common questions
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-futuristic-bold 
                          transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[var(--primary-color)] text-[var(--background-color)]'
                    : 'border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]'
                }`}
              >
                <category.icon size={18} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs[selectedCategory as keyof typeof faqs].map((faq, index) => (
                <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20">
                  <h3 className="text-lg font-gaming-light text-[var(--text-color)] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-[var(--text-secondary-color)] font-futuristic text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Send us a message and we'll get back to you quickly
            </p>
          </div>

          <div className="bg-[var(--card-bg-color)] rounded-2xl p-8 border border-[var(--primary-color)]/30">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[var(--text-color)] font-futuristic-bold text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[var(--background-color)] border border-[var(--primary-color)]/30 
                             rounded-lg text-[var(--text-color)] font-futuristic focus:border-[var(--primary-color)] 
                             focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[var(--text-color)] font-futuristic-bold text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-[var(--background-color)] border border-[var(--primary-color)]/30 
                             rounded-lg text-[var(--text-color)] font-futuristic focus:border-[var(--primary-color)] 
                             focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[var(--text-color)] font-futuristic-bold text-sm mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 bg-[var(--background-color)] border border-[var(--primary-color)]/30 
                                 rounded-lg text-[var(--text-color)] font-futuristic focus:border-[var(--primary-color)] 
                                 focus:outline-none transition-colors duration-300">
                  <option>General Question</option>
                  <option>Order Support</option>
                  <option>Technical Issue</option>
                  <option>Account Security</option>
                  <option>Billing Question</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[var(--text-color)] font-futuristic-bold text-sm mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-[var(--background-color)] border border-[var(--primary-color)]/30 
                           rounded-lg text-[var(--text-color)] font-futuristic focus:border-[var(--primary-color)] 
                           focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Describe your question or issue in detail..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-[var(--primary-color)] text-[var(--background-color)] 
                           rounded-lg font-futuristic-bold hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-[var(--card-bg-color)]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8">
            <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-gaming text-[var(--text-color)] mb-4">
              Emergency Support
            </h2>
            <p className="text-[var(--text-secondary-color)] font-futuristic mb-6">
              If you're experiencing account security issues or urgent problems, contact us immediately
            </p>
            <button className="px-8 py-4 bg-red-500 text-white rounded-lg font-futuristic-bold 
                             hover:scale-105 transition-all duration-300">
              Emergency Contact
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
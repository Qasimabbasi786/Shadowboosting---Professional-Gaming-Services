import React, { useState } from 'react';
import { ChevronDown, Shield, Clock, CreditCard, Headphones, Trophy, Users } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqCategories = [
    {
      title: 'General Questions',
      icon: Headphones,
      faqs: [
        {
          question: 'What is game boosting and how does it work?',
          answer: 'Game boosting is a service where professional players help improve your account\'s rank, unlock achievements, or complete challenges. Our expert boosters play on your account or alongside you (duo boosting) to achieve your desired goals quickly and safely. We offer both solo boosting (we play on your account) and duo boosting (you play with our booster) options.'
        },
        {
          question: 'Is boosting safe for my account?',
          answer: 'Yes, we prioritize account safety above all else. We use VPN protection matching your location, play during your usual hours, maintain your typical playstyle, and never use any cheats or exploits. Our boosters are experienced professionals who maintain your account\'s integrity throughout the process. We also offer account insurance for additional peace of mind.'
        },
        {
          question: 'How long does a typical boost take?',
          answer: 'Boost duration varies depending on your current rank, desired rank, and the game. Most rank boosts take 1-7 days, with some smaller boosts completed in just a few hours. We provide estimated completion times before you order and keep you updated with real-time progress tracking throughout the process.'
        },
        {
          question: 'Can I track my boost progress?',
          answer: 'Absolutely! We provide real-time progress tracking through our customer dashboard. You\'ll receive regular updates, screenshots, and can even watch your booster play through our streaming service. We believe in complete transparency throughout the boosting process.'
        }
      ]
    },
    {
      title: 'Account Security',
      icon: Shield,
      faqs: [
        {
          question: 'How do you protect my account during boosting?',
          answer: 'We use multiple security measures including VPN protection matching your location, playing during your typical hours, using your preferred settings, maintaining your playstyle patterns, and never sharing your account details with unauthorized personnel. All boosters sign strict NDAs and undergo background checks.'
        },
        {
          question: 'Will my account get banned?',
          answer: 'We have a 99.9% safety record with zero permanent bans in our history. Our boosters are carefully vetted professionals who follow strict safety protocols, use advanced security measures, and maintain natural gameplay patterns. We also offer comprehensive account insurance that covers any unlikely issues.'
        },
        {
          question: 'Do you change my account settings or information?',
          answer: 'No, we never change your account settings, email, password, or any personal information. We only play the game to achieve your desired rank or goals, leaving everything else exactly as it was. We can even maintain your specific keybinds and sensitivity settings.'
        },
        {
          question: 'What happens if something goes wrong?',
          answer: 'In the extremely rare case of any issues, we have comprehensive insurance and support systems in place. We offer full refunds, account recovery assistance, and our support team is available 24/7 to address any concerns immediately.'
        }
      ]
    },
    {
      title: 'Pricing & Payment',
      icon: CreditCard,
      faqs: [
        {
          question: 'How much does boosting cost?',
          answer: 'Prices vary based on your current rank, desired rank, and the game. We offer competitive pricing starting from $8 for simple services up to $400+ for premium accounts. We provide discounts for larger orders, returning customers, and bulk purchases. You can check our pricing calculator on each service page for exact costs.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, cryptocurrency (Bitcoin, Ethereum, USDT), Apple Pay, Google Pay, and various regional payment methods. All payments are processed securely through encrypted payment gateways with SSL protection.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'Yes, we offer a full refund if we cannot complete your order or if you\'re not satisfied with our service. Refunds are processed within 24-48 hours of approval. We also offer partial refunds for partially completed orders if you decide to cancel mid-boost.'
        },
        {
          question: 'Do you offer discounts or promotions?',
          answer: 'Yes! We regularly offer discounts for first-time customers, bulk orders, returning clients, and seasonal promotions. Follow our social media or join our Discord for exclusive discount codes and flash sales.'
        }
      ]
    },
    {
      title: 'Service Details',
      icon: Trophy,
      faqs: [
        {
          question: 'What games do you support?',
          answer: 'We support over 50 popular games including Valorant, Fortnite, Apex Legends, Overwatch, Rocket League, League of Legends, CS2, Marvel Rivals, Call of Duty, and many more. We cover PC, console, and mobile platforms. Check our games page for the complete list.'
        },
        {
          question: 'Can I play on my account during the boost?',
          answer: 'For solo boosting, we recommend not playing during the boost to avoid conflicts and ensure optimal progress. For duo boosting, you play alongside our booster. We\'ll coordinate the schedule with you to minimize any inconvenience and can work around your availability.'
        },
        {
          question: 'Do you offer coaching services?',
          answer: 'Yes, we offer comprehensive coaching services including one-on-one sessions, VOD reviews, gameplay analysis, and personalized training programs. Our coaches are professional players and streamers who can help you improve permanently. This is perfect if you want to learn while ranking up.'
        },
        {
          question: 'What makes your service different from competitors?',
          answer: 'We stand out through our 99.9% success rate, 24/7 customer support, real-time progress tracking, comprehensive account insurance, professional boosters who are actual pro players, and our commitment to account safety. We also offer the most competitive pricing in the industry.'
        },
        {
          question: 'Do you offer custom services?',
          answer: 'Absolutely! We offer custom boosting services tailored to your specific needs. Whether it\'s a unique achievement, specific playstyle requirements, or a game we don\'t typically advertise, our team can create a custom solution for you.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const globalIndex = categoryIndex * 100 + faqIndex;
    setOpenFAQ(openFAQ === globalIndex ? null : globalIndex);
  };

  return (
    <section id="support" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gaming text-[var(--text-color)] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl font-futuristic text-[var(--text-secondary-color)] max-w-3xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about our services.
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-[var(--card-bg-color)] rounded-xl border border-[var(--primary-color)]/20 overflow-hidden">
              {/* Category Header */}
              <div className="p-6 border-b border-[var(--primary-color)]/20 bg-[var(--primary-color)]/5">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[var(--primary-color)]/20 rounded-lg">
                    <category.icon size={24} className="text-[var(--primary-color)]" />
                  </div>
                  <h3 className="text-xl font-gaming-light text-[var(--text-color)]">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* FAQs */}
              <div className="divide-y divide-[var(--primary-color)]/10">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openFAQ === globalIndex;

                  return (
                    <div key={faqIndex} className="group">
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full p-6 text-left hover:bg-[var(--primary-color)]/5 
                                 transition-all duration-300 flex items-center justify-between"
                      >
                        <h4 className="text-lg font-futuristic-bold text-[var(--text-color)] 
                                     group-hover:text-[var(--primary-color)] transition-colors duration-300 pr-4">
                          {faq.question}
                        </h4>
                        <ChevronDown 
                          size={20} 
                          className={`text-[var(--primary-color)] transition-transform duration-300 flex-shrink-0 ${
                            isOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 animate-fade-in">
                          <div className="bg-[var(--background-color)]/50 rounded-lg p-4 border-l-4 border-[var(--primary-color)]">
                            <p className="text-[var(--text-secondary-color)] font-futuristic leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-[var(--card-bg-color)] rounded-2xl p-8 border border-[var(--primary-color)]/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-3xl font-gaming-light text-[var(--text-color)] mb-4">
                  Still have questions?
                </h3>
                <p className="text-[var(--text-secondary-color)] font-futuristic mb-6">
                  Our expert support team is available 24/7 to help you with any questions or concerns. 
                  Get instant answers through live chat or join our community Discord server.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-[var(--primary-color)]/10 rounded-lg">
                      <Clock size={16} className="text-[var(--primary-color)]" />
                    </div>
                    <div>
                      <div className="text-[var(--text-color)] font-futuristic-bold text-sm">24/7 Support</div>
                      <div className="text-[var(--text-secondary-color)] font-futuristic text-xs">Always available</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-[var(--primary-color)]/10 rounded-lg">
                      <Users size={16} className="text-[var(--primary-color)]" />
                    </div>
                    <div>
                      <div className="text-[var(--text-color)] font-futuristic-bold text-sm">15,000+ Members</div>
                      <div className="text-[var(--text-secondary-color)] font-futuristic text-xs">Active community</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <button className="w-full px-6 py-4 bg-[var(--primary-color)] text-[var(--background-color)] 
                                 rounded-lg font-futuristic-bold hover:scale-105 transition-all duration-300 
                                 hover:shadow-lg hover:shadow-[var(--primary-color)]/25
                                 flex items-center justify-center space-x-2">
                  <Headphones size={18} />
                  <span>Start Live Chat</span>
                </button>
                
                <button className="w-full px-6 py-4 border border-[var(--primary-color)] text-[var(--primary-color)] 
                                 rounded-lg font-futuristic-bold hover:bg-[var(--primary-color)]/10 
                                 transition-all duration-300 hover:scale-105
                                 flex items-center justify-center space-x-2">
                  <Users size={18} />
                  <span>Join Discord Community</span>
                </button>
                
                <div className="text-center pt-4">
                  <p className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                    Average response time: <span className="text-[var(--primary-color)]">2 minutes</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
import React from 'react';
import { Twitter, Disc as Discord, Instagram, Mail, Shield, Trophy } from 'lucide-react';
import SBLogo from './SBLogo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Rank Boosting', popular: true },
      { name: 'Skill Coaching', popular: false },
      { name: 'Premium Accounts', popular: true },
      { name: 'Account Recovery', popular: false },
      { name: 'Team Training', popular: false },
      { name: 'Badge Unlocking', popular: true }
    ],
    support: [
      { name: 'Help Center', popular: false },
      { name: 'Live Chat', popular: true },
      { name: 'Contact Us', popular: false },
      { name: 'Bug Reports', popular: false },
      { name: 'Order Tracking', popular: true },
      { name: 'FAQ', popular: false }
    ],
    legal: [
      { name: 'Terms of Service', popular: false },
      { name: 'Privacy Policy', popular: false },
      { name: 'Refund Policy', popular: true },
      { name: 'Security Policy', popular: false },
      { name: 'Cookie Policy', popular: false }
    ],
    games: [
      { name: 'Valorant', popular: true },
      { name: 'Fortnite', popular: true },
      { name: 'Apex Legends', popular: true },
      { name: 'Marvel Rivals', popular: true },
      { name: 'Overwatch 2', popular: false },
      { name: 'View All Games', popular: false }
    ]
  };

  const socialLinks = [
    { icon: Discord, href: '#', label: 'Discord' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className="bg-[var(--card-bg-color)] border-t border-[var(--primary-color)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <SBLogo size={32} showText={true} />
            </div>
            
            <p className="text-[var(--text-secondary-color)] font-futuristic mb-6 max-w-md">
              The premier destination for professional gaming services. Level up your 
              gaming experience with our expert boosting, coaching, and premium account services 
              trusted by 25,000+ gamers worldwide.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="flex items-center space-x-1 px-2 py-1 bg-[var(--primary-color)]/10 
                            rounded-full border border-[var(--primary-color)]/30">
                <Shield size={12} className="text-green-500" />
                <span className="text-[var(--text-secondary-color)] font-futuristic text-xs">
                  100% Safe
                </span>
              </div>
              <div className="flex items-center space-x-1 px-2 py-1 bg-[var(--primary-color)]/10 
                            rounded-full border border-[var(--primary-color)]/30">
                <Trophy size={12} className="text-yellow-500" />
                <span className="text-[var(--text-secondary-color)] font-futuristic text-xs">
                  99.9% Success
                </span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 bg-[var(--background-color)] border border-[var(--primary-color)]/30 
                           rounded-lg hover:border-[var(--primary-color)] 
                           hover:bg-[var(--primary-color)]/10 transition-all duration-300 
                           hover:scale-110 group"
                >
                  <social.icon 
                    size={20} 
                    className="text-[var(--primary-color)] group-hover:animate-pulse" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[var(--text-color)] font-gaming-light text-lg mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[var(--text-secondary-color)] font-futuristic hover:text-[var(--primary-color)] 
                             transition-colors duration-300 hover:translate-x-1 
                             transform inline-flex items-center space-x-2"
                  >
                    <span>{link.name}</span>
                    {link.popular && (
                      <span className="px-1 py-0.5 bg-[var(--primary-color)]/20 text-[var(--primary-color)] 
                                     text-xs rounded-full font-futuristic-bold">
                        HOT
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Games */}
          <div>
            <h3 className="text-[var(--text-color)] font-gaming-light text-lg mb-6">
              Popular Games
            </h3>
            <ul className="space-y-3">
              {footerLinks.games.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[var(--text-secondary-color)] font-futuristic hover:text-[var(--primary-color)] 
                             transition-colors duration-300 hover:translate-x-1 
                             transform inline-flex items-center space-x-2"
                  >
                    <span>{link.name}</span>
                    {link.popular && (
                      <span className="px-1 py-0.5 bg-green-500/20 text-green-400 
                                     text-xs rounded-full font-futuristic-bold">
                        NEW
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Support */}
          <div>
            <h3 className="text-[var(--text-color)] font-gaming-light text-lg mb-6">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[var(--text-secondary-color)] font-futuristic hover:text-[var(--primary-color)] 
                             transition-colors duration-300 hover:translate-x-1 
                             transform inline-flex items-center space-x-2"
                  >
                    <span>{link.name}</span>
                    {link.popular && (
                      <span className="px-1 py-0.5 bg-blue-500/20 text-blue-400 
                                     text-xs rounded-full font-futuristic-bold">
                        24/7
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[var(--text-color)] font-gaming-light text-lg mb-6">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[var(--text-secondary-color)] font-futuristic hover:text-[var(--primary-color)] 
                             transition-colors duration-300 hover:translate-x-1 
                             transform inline-flex items-center space-x-2"
                  >
                    <span>{link.name}</span>
                    {link.popular && (
                      <span className="px-1 py-0.5 bg-yellow-500/20 text-yellow-400 
                                     text-xs rounded-full font-futuristic-bold">
                        NEW
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--primary-color)]/30 mt-12 pt-8">
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-gaming text-[var(--primary-color)] mb-1">25,847+</div>
              <div className="text-[var(--text-secondary-color)] font-futuristic text-xs">Orders Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-gaming text-[var(--primary-color)] mb-1">15,420+</div>
              <div className="text-[var(--text-secondary-color)] font-futuristic text-xs">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-gaming text-[var(--primary-color)] mb-1">50+</div>
              <div className="text-[var(--text-secondary-color)] font-futuristic text-xs">Games Supported</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-gaming text-[var(--primary-color)] mb-1">24/7</div>
              <div className="text-[var(--text-secondary-color)] font-futuristic text-xs">Support Available</div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                © {currentYear} Shadowboosting. All rights reserved.
              </p>
              <span className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                Made with ❤️ for gamers worldwide
              </span>
            </div>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                  All systems operational
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                  234 boosters online
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
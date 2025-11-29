import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Trophy, Users, Headphones, ChevronDown, Gamepad2 } from 'lucide-react';
import ThemeSwitch from './ThemeSwitch';
import SBLogo from './SBLogo';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Home', 
      href: '/',
      icon: Gamepad2
    },
    { 
      name: 'Services', 
      href: '/services',
      icon: Shield,
      dropdown: [
        { name: 'Rank Boosting', href: '/services/rank-boosting' },
        { name: 'Skill Coaching', href: '/services/skill-coaching' },
        { name: 'Account Recovery', href: '/services/account-recovery' },
        { name: 'Team Training', href: '/services/team-training' },
        { name: 'Premium Accounts', href: '/services/premium-accounts' }
      ]
    },
    { 
      name: 'Games', 
      href: '/games',
      icon: Trophy,
      dropdown: [
        { name: 'Valorant', href: '/games/valorant' },
        { name: 'Fortnite', href: '/games/fortnite' },
        { name: 'Apex Legends', href: '/games/apex-legends' },
        { name: 'Overwatch', href: '/games/overwatch' },
        { name: 'View All Games', href: '/games' }
      ]
    },
    { 
      name: 'Community', 
      href: '/community',
      icon: Users
    },
    { 
      name: 'Support', 
      href: '/support',
      icon: Headphones
    }
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[var(--card-bg-color)]/95 backdrop-blur-lg border-b border-[var(--primary-color)]/30 shadow-lg shadow-[var(--primary-color)]/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="group cursor-pointer">
              <SBLogo size={36} showText={true} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg font-futuristic-bold text-[var(--text-color)] hover:text-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 transition-all duration-300 group relative overflow-hidden"
                    >
                      {/* Hover effect background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)]/0 via-[var(--primary-color)]/10 to-[var(--primary-color)]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      
                      <item.icon size={18} className="relative z-10" />
                      <span className="relative z-10">{item.name}</span>
                      <ChevronDown 
                        size={16} 
                        className={`relative z-10 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg font-futuristic-bold text-[var(--text-color)] hover:text-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 transition-all duration-300 group relative overflow-hidden"
                    >
                      {/* Hover effect background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)]/0 via-[var(--primary-color)]/10 to-[var(--primary-color)]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      
                      <item.icon size={18} className="relative z-10" />
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-[var(--card-bg-color)] border border-[var(--primary-color)]/30 rounded-xl shadow-xl shadow-[var(--primary-color)]/10 backdrop-blur-lg animate-slide-down">
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            to={dropdownItem.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-4 py-3 text-[var(--text-secondary-color)] hover:text-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 transition-all duration-300 font-futuristic relative group"
                          >
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--primary-color)] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                            <span className="ml-2">{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side - Theme Switch & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeSwitch />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <ThemeSwitch />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-[var(--card-bg-color)] border border-[var(--primary-color)]/30 hover:border-[var(--primary-color)] transition-all duration-300 hover:scale-110"
              >
                {isOpen ? (
                  <X className="text-[var(--primary-color)]" size={24} />
                ) : (
                  <Menu className="text-[var(--primary-color)]" size={24} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[var(--card-bg-color)]/98 backdrop-blur-lg border-b border-[var(--primary-color)]/30 animate-slide-down">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="w-full flex items-center justify-between p-4 rounded-lg bg-[var(--background-color)]/50 border border-[var(--primary-color)]/20 hover:border-[var(--primary-color)]/60 transition-all duration-300 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon size={20} className="text-[var(--primary-color)]" />
                        <span className="text-[var(--text-color)] font-futuristic-bold">
                          {item.name}
                        </span>
                      </div>
                      <ChevronDown 
                        size={16} 
                        className={`text-[var(--primary-color)] transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="w-full flex items-center p-4 rounded-lg bg-[var(--background-color)]/50 border border-[var(--primary-color)]/20 hover:border-[var(--primary-color)]/60 transition-all duration-300 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon size={20} className="text-[var(--primary-color)]" />
                        <span className="text-[var(--text-color)] font-futuristic-bold">
                          {item.name}
                        </span>
                      </div>
                    </Link>
                  )}

                  {/* Mobile Dropdown */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="mt-2 ml-4 space-y-2 animate-fade-in">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          to={dropdownItem.href}
                          className="block p-3 rounded-lg bg-[var(--background-color)]/30 text-[var(--text-secondary-color)] hover:text-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 transition-all duration-300 font-futuristic border-l-2 border-[var(--primary-color)]/30 hover:border-[var(--primary-color)]"
                          onClick={() => {
                            setIsOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Click outside to close dropdowns */}
      {(activeDropdown || isOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setActiveDropdown(null);
            setIsOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Navigation;
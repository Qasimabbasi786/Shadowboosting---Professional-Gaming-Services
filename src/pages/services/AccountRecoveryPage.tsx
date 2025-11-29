import React from 'react';
import { Shield, Lock, Key, RefreshCw, CheckCircle, AlertTriangle, Clock, Users } from 'lucide-react';

const AccountRecoveryPage: React.FC = () => {
  const recoveryServices = [
    {
      icon: Lock,
      title: 'Password Recovery',
      price: '$25',
      description: 'Recover lost passwords for your gaming accounts',
      features: ['Email verification', 'Security questions', 'Phone verification', '24h support']
    },
    {
      icon: Key,
      title: 'Account Unlock',
      price: '$45',
      description: 'Unlock suspended or banned accounts',
      features: ['Appeal assistance', 'Documentation help', 'Direct contact', 'Success guarantee']
    },
    {
      icon: RefreshCw,
      title: 'Full Recovery',
      price: '$75',
      description: 'Complete account recovery service',
      features: ['All recovery methods', 'Security upgrade', 'Data backup', 'Priority support']
    },
    {
      icon: Shield,
      title: 'Security Audit',
      price: '$35',
      description: 'Comprehensive account security review',
      features: ['Vulnerability scan', 'Security recommendations', 'Setup assistance', 'Ongoing monitoring']
    }
  ];

  const recoverySteps = [
    { step: '1', title: 'Assessment', description: 'We analyze your account situation' },
    { step: '2', title: 'Strategy', description: 'Create a custom recovery plan' },
    { step: '3', title: 'Execution', description: 'Implement recovery procedures' },
    { step: '4', title: 'Verification', description: 'Confirm account access and security' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--background-color)] to-[var(--card-bg-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[var(--primary-color)]/10 
                            border border-[var(--primary-color)]/30 rounded-full mb-8">
              <Shield size={16} className="text-[var(--primary-color)]" />
              <span className="text-[var(--primary-color)] font-futuristic text-sm">
                Secure & Reliable
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-gaming text-[var(--text-color)] mb-6">
              Account Recovery
            </h1>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)] max-w-3xl mx-auto">
              Lost access to your gaming account? Our expert team specializes in secure account recovery 
              with a 95% success rate across all major gaming platforms.
            </p>
          </div>

          {/* Warning Banner */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle size={24} className="text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-yellow-500 font-futuristic-bold mb-2">Important Notice</h3>
                  <p className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                    We only recover accounts that legitimately belong to you. Proof of ownership is required 
                    for all recovery services. We do not assist with unauthorized account access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Recovery Services
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Professional account recovery solutions for all situations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recoveryServices.map((service, index) => (
              <div key={index} className="bg-[var(--card-bg-color)] rounded-xl p-6 border border-[var(--primary-color)]/20 
                                        hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105">
                <div className="p-3 bg-[var(--primary-color)]/10 rounded-lg w-fit mb-4">
                  <service.icon size={32} className="text-[var(--primary-color)]" />
                </div>
                
                <h3 className="text-xl font-gaming-light text-[var(--text-color)] mb-2">
                  {service.title}
                </h3>
                
                <div className="text-2xl font-gaming text-[var(--primary-color)] mb-4">
                  {service.price}
                </div>
                
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
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
                  Start Recovery
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Process */}
      <section className="py-20 bg-[var(--card-bg-color)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Recovery Process
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Our proven 4-step recovery methodology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {recoverySteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center 
                              text-[var(--background-color)] font-gaming text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-gaming-light text-[var(--text-color)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              Success Statistics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '95%', label: 'Success Rate', description: 'Accounts successfully recovered' },
              { number: '2,847', label: 'Accounts Recovered', description: 'Total successful recoveries' },
              { number: '24h', label: 'Average Time', description: 'Typical recovery duration' },
              { number: '100%', label: 'Confidential', description: 'Complete privacy guaranteed' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-[var(--card-bg-color)] rounded-xl p-6 
                                        border border-[var(--primary-color)]/20 hover:scale-105 
                                        transition-all duration-300">
                <div className="text-4xl font-gaming text-[var(--primary-color)] mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-gaming-light text-[var(--text-color)] mb-2">
                  {stat.label}
                </h3>
                <p className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-[var(--card-bg-color)]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-gaming text-[var(--text-color)] mb-6">
              What You'll Need
            </h2>
            <p className="text-xl font-futuristic text-[var(--text-secondary-color)]">
              Required information for account recovery
            </p>
          </div>

          <div className="bg-[var(--card-bg-color)] rounded-xl p-8 border border-[var(--primary-color)]/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-gaming-light text-[var(--text-color)] mb-4">
                  Basic Information
                </h3>
                <ul className="space-y-3">
                  {[
                    'Original email address',
                    'Username/Gamertag',
                    'Approximate creation date',
                    'Last known password',
                    'Security questions (if any)'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-gaming-light text-[var(--text-color)] mb-4">
                  Proof of Ownership
                </h3>
                <ul className="space-y-3">
                  {[
                    'Purchase receipts',
                    'Previous payment methods',
                    'Character/profile screenshots',
                    'Friend list information',
                    'Government ID (if required)'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-[var(--text-secondary-color)] font-futuristic text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="px-8 py-4 bg-[var(--primary-color)] text-[var(--background-color)] 
                               rounded-lg font-futuristic-bold hover:scale-105 transition-all duration-300">
                Start Recovery Process
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountRecoveryPage;
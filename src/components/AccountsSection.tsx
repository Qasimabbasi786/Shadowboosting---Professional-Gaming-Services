import React from 'react';

interface AccountsSectionProps {
  className?: string;
}

export const AccountsSection: React.FC<AccountsSectionProps> = ({ className = '' }) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Account Management
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Manage your gaming accounts and preferences
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <p className="text-gray-600 dark:text-gray-300">
              Account management features coming soon...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountsSection;
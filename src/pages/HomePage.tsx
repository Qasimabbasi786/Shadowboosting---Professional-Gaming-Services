import React from 'react';
import Hero from '../components/Hero';
import FeaturedGames from '../components/FeaturedGames';
import ServiceCards from '../components/ServiceCards';
import AccountsSection from '../components/AccountsSection';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedGames />
      <ServiceCards />
      <AccountsSection />
      <Statistics />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default HomePage;
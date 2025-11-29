import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RankBoostingPage from './pages/services/RankBoostingPage';
import SkillCoachingPage from './pages/services/SkillCoachingPage';
import AccountRecoveryPage from './pages/services/AccountRecoveryPage';
import TeamTrainingPage from './pages/services/TeamTrainingPage';
import PremiumAccountsPage from './pages/services/PremiumAccountsPage';
import ValorantPage from './pages/games/ValorantPage';
import FortnitePage from './pages/games/FortnitePage';
import CommunityPage from './pages/CommunityPage';
import SupportPage from './pages/SupportPage';

function App() {
  const [loading, setLoading] = useState(true);
  useTheme(); // Initialize theme system

  const handleLoadComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id!);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  if (loading) {
    return <LoadingScreen onLoadComplete={handleLoadComplete} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-[var(--background-color)] text-[var(--text-color)] 
                      relative overflow-x-hidden">
        <ParticleBackground />
        <Navigation />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/rank-boosting" element={<RankBoostingPage />} />
            <Route path="/services/skill-coaching" element={<SkillCoachingPage />} />
            <Route path="/services/account-recovery" element={<AccountRecoveryPage />} />
            <Route path="/services/team-training" element={<TeamTrainingPage />} />
            <Route path="/services/premium-accounts" element={<PremiumAccountsPage />} />
            <Route path="/games/valorant" element={<ValorantPage />} />
            <Route path="/games/fortnite" element={<FortnitePage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
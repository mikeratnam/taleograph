import React from 'react';
import { Compass, Globe, Award, BookOpen, Users, Map, Share2 } from 'lucide-react';
import Navbar from './components/Navbar';
import ProfileHero from './components/ProfileHero';
import TravelStats from './components/TravelStats';
import TravelGallery from './components/TravelGallery';
import ServicesSection from './components/ServicesSection';
import TravelTimeline from './components/TravelTimeline';
import AchievementBadges from './components/AchievementBadges';
import CountryMap from './components/CountryMap';
import TravelBlog from './components/TravelBlog';
import OnlineUsers from './components/OnlineUsers';
import TrendingSection from './components/TrendingSection';
import TravelCategories from './components/TravelCategories';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <ProfileHero />
        <TravelStats />
        <TrendingSection />
        <TravelCategories />
        <CountryMap />
        <AchievementBadges />
        <TravelTimeline />
        <TravelGallery />
        <TravelBlog />
        <ServicesSection />
      </main>
      <OnlineUsers />
    </div>
  );
}

export default App;
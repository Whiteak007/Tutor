import React from 'react';
import Hero from '../components/Hero';
import FeaturedTutors from '../components/FeaturedTutors';
import SubscriptionPlans from '../components/SubscriptionPlans';
import AboutMaker from '../components/AboutMaker';
import Community from '../components/Community';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <FeaturedTutors />
      <SubscriptionPlans />
      <Community/>
      <AboutMaker />
    </div>
  );
};

export default Home;
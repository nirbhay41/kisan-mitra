import React from 'react'
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';
import Quote from '../Quote/Quote';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <Cards />
      <Quote />
      <Footer />
    </div>
  )
}

export default Home;
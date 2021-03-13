import React from 'react'
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';
import './Home.scss';

function Home() {
  return (

    <div className="home">
      <HeroSection />
      <Cards />
      <div className="quote">
        <blockquote className="quote-text">
          I would rather be on my farm than be emperor of the world.
            <p className="author"> George Washington</p>
        </blockquote>
      </div>
      <Footer />
    </div>
  )
}

export default Home;
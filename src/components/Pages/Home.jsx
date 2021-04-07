import React from 'react'
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';
import Navbar from '../Navbar/Navbar';
import Quote from '../Quote/Quote';
import './Home.scss';

function Home() {
  return (
    <>
    <Navbar backgroundStyle='bg-grey'/>
    <div className="home">
      <HeroSection />
      <Cards />
      <Quote />
      <Footer backgroundStyle='bg-grey'/>
    </div>
    </>
  )
}

export default Home;
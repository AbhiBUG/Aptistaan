import React from 'react';

import Introduction from '../components/Home/Introduction.jsx'
import Hero from '../components/Home/Hero.jsx'
import Testimonal from '../components/Home/Testimonal.jsx'
import CTA from '../components/Home/CTA.jsx'
import Footer from '../components/Home/Footer.jsx'

const Home = () => {
  return (
    <>
    <div className="flex flex-col justify-center">

    
    <Introduction/>
      <Hero />
      <Testimonal/>
        <CTA/>
        <Footer />

        </div>
    </>
   

    
  );
};

export default Home;

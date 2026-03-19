import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventSocialInfo from './components/EventSocialInfo';
import AboutFacilitiesWhy from './components/AboutFacilitiesWhy';
import FeatureCards from './components/FeatureCards';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <EventSocialInfo />
        
        <div className="fade-in">
          <AboutFacilitiesWhy />
        </div>
        
        <FeatureCards />
        
        <div className="fade-in">
          <Stats />
        </div>
      </main>
      <Footer />
      
      <style dangerouslySetInnerHTML={{ __html: `
        .app-container {
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
        }
        main {
          width: 100%;
        }
      `}} />
    </div>
  );
}

export default App;

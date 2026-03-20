import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventSocialInfo from './components/EventSocialInfo';
import Courses from './components/Courses';
import Recruiters from './components/Recruiters';
import AboutFacilitiesWhy from './components/AboutFacilitiesWhy';
import FeatureCards from './components/FeatureCards';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

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
        
        <div className="fade-in">
          <Courses />
        </div>
        
        <div className="fade-in">
          <Recruiters />
        </div>
        
        <FeatureCards />
        
        <div className="fade-in">
          <Achievements />
        </div>
      </main>
      <Footer />
      <BackToTop />
      
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

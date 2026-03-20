import React, { useEffect, useRef } from 'react';
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';

const EventSocialInfo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.fade-in').forEach(el => el.classList.add('show'));
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="event-social-info" ref={sectionRef} style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
      gap: '0', 
      padding: '0',
      minHeight: '400px',
      backgroundColor: '#f0f0f0'
    }}>
      {/* LEFT: EVENT CARD */}
      <div className="event-card fade-in" style={{
        backgroundColor: 'var(--deep-blue)',
        color: 'white',
        padding: 'clamp(40px, 8vw, 60px) 10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <span style={{ 
            fontSize: 'clamp(60px, 8vw, 80px)', 
            fontWeight: '900', 
            color: 'var(--gold)', 
            lineHeight: '1',
            marginRight: '15px' 
          }}>25</span>
          <div>
            <div style={{ fontWeight: 'bold', letterSpacing: '3px', fontSize: '20px', color: 'var(--gold)' }}>YEARS</div>
            <div style={{ opacity: '0.9', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '13px' }}>Silver Jubilee</div>
          </div>
        </div>
        <h3 style={{ fontSize: 'clamp(20px, 3vw, 24px)', marginBottom: '15px', letterSpacing: '1px' }}>A Legacy of Excellence</h3>
        <p style={{ opacity: '0.9', lineHeight: '1.6', fontSize: 'clamp(14px, 1.8vw, 16px)' }}>
          Celebrating 25 years of unwavering commitment to value-based Integral Education. Thank you to everyone who has been part of our phenomenal journey since the beginning!
        </p>
      </div>

      {/* MIDDLE: SOCIAL MEDIA */}
      <div className="social-card fade-in" style={{
        backgroundColor: '#e5e5e5',
        padding: 'clamp(40px, 8vw, 60px) 10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h3 style={{ color: 'var(--deep-blue)', fontSize: 'clamp(20px, 3vw, 24px)', marginBottom: '30px' }}>CONNECT WITH US</h3>
        <div style={{ 
          display: 'flex', 
          gap: ' clamp(10px, 2vw, 20px)',
          flexWrap: 'wrap',
          justifyContent: 'center' 
        }}>
          <SocialIcon Icon={Facebook} />
          <SocialIcon Icon={Linkedin} />
          <SocialIcon Icon={Twitter} />
          <SocialIcon Icon={Youtube} />
          <SocialIcon Icon={Instagram} />
        </div>
      </div>

      {/* RIGHT: INFO TEXT BLOCK */}
      <div className="info-card fade-in" style={{
        backgroundColor: 'var(--primary-blue)',
        color: 'white',
        padding: 'clamp(40px, 8vw, 60px) 10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
          Sai Kulwanth Educational Society (established at Anakapalle, 2005) follows the model of value-based Integral Education, offering both Intermediate and Degree programs.
        </p>
        <a href="#courses" onClick={e => { e.preventDefault(); scrollToSection('courses'); }} style={{ 
          color: 'var(--gold)', 
          textDecoration: 'none', 
          fontWeight: '600',
          borderBottom: '1px solid var(--gold)',
          paddingBottom: '2px',
          alignSelf: 'flex-start'
        }}>LEARN MORE ABOUT US</a>
      </div>
    </section>
  );
};

const SocialIcon = ({ Icon }) => (
  <div style={{
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--deep-blue)',
    cursor: 'pointer',
    transition: 'var(--transition-smooth)'
  }} className="social-icon-hover">
    <Icon size={20} />
    <style dangerouslySetInnerHTML={{ __html: `
      .social-icon-hover:hover {
        transform: scale(1.1);
        background-color: var(--gold);
        color: var(--deep-blue);
      }
      @media (max-width: 480px) {
        .social-icon-hover { width: 44px; height: 44px; }
      }
    `}} />
  </div>
);

export default EventSocialInfo;

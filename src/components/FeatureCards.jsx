import React, { useState } from 'react';
import FeatureGalleryModal from './FeatureGalleryModal';

const FeatureCards = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCardClick = (title) => {
    setActiveCategory(title);
    setIsGalleryOpen(true);
  };

  const cards = [
    { title: 'Campus Life', img: '/images/campus_life.png' },
    { title: 'Academics', img: '/images/academics.png' },
    { title: 'Sports', img: '/images/sports.png' },
    { title: 'Arts & Culture', img: '/images/arts.png' },
    { title: 'Spiritual Heritage', img: '/images/spiritual.png' },
  ];

  return (
    <section className="feature-cards" style={{ 
      padding: '0', 
      display: 'flex', 
      minHeight: '500px', 
      width: '100%',
      backgroundColor: 'var(--deep-blue)'
    }}>
      {cards.map((card, index) => (
        <div key={index} className="feature-card" onClick={() => handleCardClick(card.title)} style={{
          flex: '1',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.5s ease',
          height: '500px'
        }}>
          {/* Background Image */}
          <div className="card-bg" style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${card.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'transform 0.6s ease'
          }}></div>
          
          {/* Default Dark Overlay */}
          <div className="card-overlay" style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            transition: 'background 0.4s ease',
            zIndex: '1'
          }}></div>
          
          {/* Content */}
          <div className="card-content" style={{
            position: 'relative',
            zIndex: '2',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '20px',
            transition: 'all 0.4s ease'
          }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: '600', 
              marginBottom: '15px',
              fontFamily: 'var(--header-font)',
              letterSpacing: '2px'
            }}>{card.title.toUpperCase()}</h3>
            <div className="card-underline" style={{
              width: '40px',
              height: '2px',
              backgroundColor: 'var(--gold)',
              transition: 'width 0.4s ease'
            }}></div>
          </div>
        </div>
      ))}

      <style dangerouslySetInnerHTML={{ __html: `
        /* Desktop Hover Effects */
        @media (min-width: 769px) {
          .feature-card:hover .card-bg { transform: scale(1.1); }
          .feature-card:hover .card-overlay { background: rgba(0,0,0,0.3); }
          .feature-card:hover .card-content { transform: translateY(-10px); }
          .feature-card:hover .card-underline { width: 80px; }
        }

        /* Responsive Mobile Layout */
        @media (max-width: 768px) {
          .feature-cards { 
            flex-direction: column !important; 
            height: auto !important; 
            min-height: auto !important; 
          }
          .feature-card { 
            flex: 0 0 300px !important; 
            width: 100% !important; 
            height: 300px !important; 
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          .card-bg { opacity: 0.8; }
          .card-overlay { background: rgba(0,0,0,0.4); }
        }
      `}} />

      {/* Render the modal */}
      <FeatureGalleryModal 
        isOpen={isGalleryOpen} 
        onClose={() => setIsGalleryOpen(false)} 
        category={activeCategory} 
      />
    </section>
  );
};

export default FeatureCards;

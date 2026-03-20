import React from 'react';
import { Check } from 'lucide-react';

const AboutFacilitiesWhy = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="facilities" className="about-facilities-why" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(40px, 5vw, 60px)',
      backgroundColor: 'var(--light-bg)',
      padding: 'clamp(60px, 8vw, 100px) 10%',
      textAlign: 'center'
    }}>
      {/* LEFT: QUOTE BLOCK */}
      <div style={{ 
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(80px, 15vw, 150px)',
          color: 'var(--primary-blue)',
          opacity: '0.05',
          zIndex: '0',
          fontWeight: 'bold',
          whiteSpace: 'nowrap'
        }}>SKES</div>
        <div style={{ zIndex: '1' }}>
          <p style={{
            fontSize: 'clamp(20px, 3vw, 24px)',
            fontFamily: 'var(--header-font)',
            fontStyle: 'italic',
            color: 'var(--deep-blue)',
            marginBottom: '30px',
            lineHeight: '1.4'
          }}>
            "Education is for life, not just for a living."
          </p>
          <div style={{ height: '2px', width: '40px', background: 'var(--gold)', margin: '0 auto 15px' }}></div>
          <strong style={{ display: 'block', color: 'var(--text-dark)', letterSpacing: '1px' }}>SAI KULWANTH</strong>
        </div>
      </div>

      {/* CENTER: FACILITIES */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '600', fontSize: '12px', marginBottom: '10px' }}>Campus Facilities</span>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--primary-blue)', marginBottom: '20px', lineHeight: '1.2' }}>WORLD-CLASS FACILITIES</h2>
        <p style={{ fontSize: '15px', color: '#666', marginBottom: '30px', maxWidth: '400px', lineHeight: '1.6' }}>
          Equipped with state-of-the-art laboratories, digital libraries, and extensive sports facilities at our Anakapalle campus.
        </p>
        <button
          className="btn-gold"
          style={{ padding: '12px 32px' }}
          onClick={() => scrollToSection('achievements')}
        >EXPLORE CAMPUS</button>
      </div>

      {/* RIGHT: WHY SKU */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
        <h3 style={{ fontSize: 'clamp(22px, 3vw, 24px)', color: 'var(--primary-blue)', marginBottom: '30px', textAlign: 'center' }}>WHY SAI KULWANTH?</h3>
        <ul style={{ listStyle: 'none', padding: '0', maxWidth: '350px' }}>
          <ListItem text="NIL Tuition Fees for all programs" />
          <ListItem text="Affiliated with Andhra University" />
          <ListItem text="Integral Value-based Education" />
          <ListItem text="Industry-ready placement cell" />
          <ListItem text="Serene Residential Environment" />
        </ul>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .about-facilities-why { grid-template-columns: 1fr !important; }
        }
      `}} />
    </section>
  );
};

const ListItem = ({ text }) => (
  <li style={{ 
    display: 'flex', 
    alignItems: 'flex-start', 
    marginBottom: '20px',
    fontSize: '15px',
    fontWeight: '500',
    color: 'var(--text-dark)'
  }}>
    <span style={{ 
      minWidth: '22px', 
      height: '22px', 
      borderRadius: '50%', 
      backgroundColor: 'var(--gold)', 
      color: 'var(--deep-blue)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '15px',
      marginTop: '2px'
    }}>
      <Check size={14} strokeWidth={3} />
    </span>
    {text}
  </li>
);

export default AboutFacilitiesWhy;

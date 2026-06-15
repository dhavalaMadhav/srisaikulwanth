import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ApplyModal from './ApplyModal';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { text: "Home", href: "#home" },
    { text: "Courses", href: "#courses" },
    { text: "Recruiters", href: "#recruiters" },
    { text: "Achievements", href: "#achievements" },
    { text: "Reviews", href: "#reviews" },
    { text: "Facilities", href: "#facilities" },
    { text: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        padding: scrolled ? '12px 5%' : '20px 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: '12000',
        backgroundColor: scrolled ? '#f0f4f8' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.05)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          fontFamily: 'var(--header-font)',
          fontSize: 'clamp(24px, 5vw, 32px)',
          fontWeight: '700',
          color: scrolled ? 'var(--deep-blue)' : 'white',
          letterSpacing: '1px',
          zIndex: '2001',
          transition: 'color 0.4s ease'
        }}>
          <img src="/images/saikulwanth-logo.png" alt="Sai Kulwanth Logo" style={{ height: '70px', width: 'auto' }} />
          <div>
            SAI KULWANTH
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          {navLinks.map((link, i) => (
            <NavLink key={i} text={link.text} href={link.href} onClick={handleNavClick} scrolled={scrolled} />
          ))}
          <button style={{
            padding: '10px 24px',
            backgroundColor: 'var(--gold)',
            color: 'var(--deep-blue)',
            border: 'none',
            fontWeight: 'bold',
            borderRadius: '2px',
            cursor: 'pointer',
            transition: 'transform 0.3s ease'
          }} className="apply-btn desktop-only" onClick={() => setIsModalOpen(true)}>APPLY NOW</button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="mobile-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{
          display: 'none',
          color: scrolled ? 'var(--deep-blue)' : 'white',
          cursor: 'pointer',
          zIndex: '12001',
          transition: 'color 0.4s ease'
        }}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} style={{
          position: 'fixed',
          top: '0',
          right: isMenuOpen ? '0' : '-100%',
          width: '80%',
          maxWidth: '300px',
          height: '100vh',
          backgroundColor: 'var(--deep-blue)',
          display: 'flex',
          flexDirection: 'column',
          padding: '100px 40px',
          gap: '30px',
          transition: 'right 0.4s ease-in-out',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
          zIndex: '12000'
        }}>
          {navLinks.map((link, i) => (
            <a key={i} href={link.href} onClick={(e) => handleNavClick(e, link.href)} style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>{link.text}</a>
          ))}
          <button style={{
            padding: '15px',
            backgroundColor: 'var(--gold)',
            color: 'var(--deep-blue)',
            border: 'none',
            fontWeight: 'bold',
            marginTop: '20px',
            cursor: 'pointer'
          }} onClick={() => { setIsMenuOpen(false); setIsModalOpen(true); }}>APPLY NOW</button>

          {/* Logo at bottom of mobile menu */}
          <div style={{
            marginTop: 'auto',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            fontFamily: 'var(--header-font)',
            fontSize: '18px',
            fontWeight: '700',
            color: 'white',
            letterSpacing: '1px'
          }}>
            <img src="/images/saikulwanth-logo.png" alt="Sai Kulwanth Logo" style={{ height: '40px', width: 'auto' }} />
            <div>
              SAI KULWANTH
            </div>
          </div>
        </div>

        {/* Mobile Overlay Background */}
        {isMenuOpen && (
          <div onClick={() => setIsMenuOpen(false)} style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: '11999'
          }}></div>
        )}

        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 1024px) {
            nav { padding: 15px 5% !important; }
            .desktop-nav { display: none !important; }
            .mobile-hamburger { display: block !important; }
          }
          .apply-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(244, 196, 48, 0.4);
          }
        `}} />
      </nav>

      <ApplyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

const NavLink = ({ text, href, onClick, scrolled }) => (
  <a href={href} className="nav-link-item" style={{
    color: scrolled ? 'var(--deep-blue)' : 'white',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    transition: 'color 0.3s ease'
  }}
    onClick={(e) => onClick(e, href)}
    onMouseOver={e => e.target.style.color = 'var(--gold)'}
    onMouseOut={e => e.target.style.color = scrolled ? 'var(--deep-blue)' : 'white'}
  >
    {text}
  </a>
);

export default Navbar;

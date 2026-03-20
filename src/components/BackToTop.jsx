import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`back-to-top-btn ${visible ? 'btt-visible' : ''}`}
        aria-label="Back to top"
        title="Back to top"
      >
        ↑
      </button>
      <style dangerouslySetInnerHTML={{ __html: `
        .back-to-top-btn {
          position: fixed;
          bottom: 32px;
          right: 32px;
          width: 46px;
          height: 46px;
          background: var(--primary-blue);
          color: white;
          border: none;
          font-size: 22px;
          cursor: pointer;
          z-index: 3000;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.25);
          opacity: 0;
          transform: translateY(20px);
          pointer-events: none;
          transition: opacity 0.3s ease, transform 0.3s ease, background 0.2s ease;
          border-radius: 0;
          outline: none;
        }
        .back-to-top-btn.btt-visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .back-to-top-btn:hover {
          background: var(--gold);
          color: var(--deep-blue);
          transform: translateY(-4px);
        }
        @media (max-width: 600px) {
          .back-to-top-btn { bottom: 20px; right: 16px; width: 40px; height: 40px; font-size: 18px; }
        }
      `}} />
    </>
  );
};

export default BackToTop;

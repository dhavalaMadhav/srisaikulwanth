import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Star, Quote, X, MessageSquarePlus } from 'lucide-react';

const initialReviews = [
  {
    name: 'Rohit Deshmukh',
    type: 'Alumni',
    program: 'B.Sc. Computer Science, Class of 2021',
    rating: 5,
    text: 'Sai Kulwanth changed the trajectory of my life. The focus on both academics and human values (Integral Education) helped me secure a software engineering role while keeping me grounded. Truly a blessing.',
    image: '/images/avatars/avatar5.png'
  },
  {
    name: 'Priya Rao',
    type: 'Student',
    program: 'Degree, B.Sc. Data Science (Final Year)',
    rating: 5,
    text: 'The faculty here are incredibly supportive. We get access to modern labs and excellent career guidance. I feel extremely well-prepared for my transition into the professional world.',
    image: '/images/avatars/avatar2.png'
  },
  {
    name: 'K. Venkateswara Rao',
    type: 'Parent',
    program: 'Parent of MPC Intermediate Student',
    rating: 5,
    text: 'As a parent, I am highly impressed by the discipline and safe environment. Providing free quality education to students from all backgrounds is a noble service. I highly recommend Sai Kulwanth.',
    image: '/images/avatars/avatar3.png'
  },
  {
    name: 'Suneetha Reddy',
    type: 'Parent',
    program: 'Parent of B.Com (Hons.) Alumnus',
    rating: 5,
    text: "My son studied here and is now placed in a reputed company. The dedication of the teachers and administration is commendable. They don't just teach subjects; they build character.",
    image: '/images/avatars/avatar4.png'
  },
  {
    name: 'Siddharth Verma',
    type: 'Student',
    program: 'Intermediate MPC + IIT-JEE Focus',
    rating: 5,
    text: 'The competitive exam coaching combined with excellent academic mentoring has helped me build a solid foundation. The campus environment is very peaceful and perfect for focused studying.',
    image: '/images/avatars/avatar1.png'
  }
];

const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ name: '', type: 'Student', rating: 5, review: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const modalRef = useRef(null);
  const triggerRef = useRef(null);
  const prevModalOpen = useRef(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      // Trap focus
      const focusable = modalRef.current?.querySelectorAll('button, input, select, textarea');
      if (focusable && focusable.length > 0) {
        (focusable[1] || focusable[0]).focus();
      }
    } else {
      document.body.style.overflow = '';
      // Only focus the trigger button if the modal transitioned from open to closed
      if (prevModalOpen.current) {
        if (triggerRef.current) {
          triggerRef.current.focus();
        }
      }
    }
    // Update ref to track state for next run
    prevModalOpen.current = isModalOpen;
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen]);

  // Handle keyboard navigation for modal (Escape key)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required';
    if (!form.review.trim()) newErrors.review = 'Review message is required';
    if (form.review.trim().length < 10) newErrors.review = 'Review must be at least 10 characters';
    return newErrors;
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setForm({ name: '', type: 'Student', rating: 5, review: '' });
      setErrors({});
      setSubmitted(false);
      setHoverRating(0);
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const e = { ...prev };
        delete e[field];
        return e;
      });
    }
  };

  return (
    <section id="reviews" style={{
      backgroundColor: '#ffffff',
      padding: 'clamp(60px, 8vw, 100px) 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background element */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244, 196, 48, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Header Container */}
      <div style={{ textAlign: 'center', marginBottom: '45px', padding: '0 5%', position: 'relative', zIndex: 1 }}>
        <span style={{
          color: 'var(--gold)',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          fontWeight: '600',
          fontSize: '12px',
          marginBottom: '10px',
          display: 'block'
        }}>
          Testimonials
        </span>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          color: 'var(--primary-blue)',
          marginTop: '10px',
          fontFamily: 'var(--header-font)',
          fontWeight: '500',
          letterSpacing: '1px'
        }}>
          Student & Parent Reviews
        </h2>
        <p style={{
          color: '#666',
          fontSize: 'clamp(14px, 1.6vw, 17px)',
          marginTop: '8px',
          fontFamily: 'var(--body-font)'
        }}>
          What Our Community Says About Sai Kulwanth
        </p>
        <div style={{ width: '60px', height: '3px', background: 'var(--gold)', margin: '20px auto 0' }}></div>
      </div>

      {/* Stats Summary Panel */}
      <div className="reviews-summary-panel" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#f8fafc',
        border: '1px solid rgba(11, 58, 91, 0.08)',
        borderRadius: '8px',
        padding: '24px clamp(20px, 4vw, 40px)',
        marginBottom: '40px',
        gap: '24px',
        position: 'relative',
        zIndex: 1,
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)',
        maxWidth: '1200px',
        width: '90%',
        margin: '0 auto 40px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {/* Average Rating Block */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span style={{
              fontSize: '44px',
              fontWeight: '700',
              color: 'var(--primary-blue)',
              fontFamily: 'var(--header-font)',
              lineHeight: 1
            }}>4.8</span>
            <span style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>/ 5</span>
          </div>

          {/* Stars & Text Block */}
          <div>
            <div style={{ display: 'flex', gap: '4px', color: 'var(--gold)', marginBottom: '4px' }}>
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <div style={{ position: 'relative', display: 'inline-block', width: '18px', height: '18px' }}>
                <Star size={18} style={{ color: '#e2e8f0' }} fill="#e2e8f0" />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '80%', overflow: 'hidden', color: 'var(--gold)' }}>
                  <Star size={18} fill="currentColor" />
                </div>
              </div>
            </div>
            <span style={{ fontSize: '13px', color: '#555', fontWeight: '500' }}>
              Average Rating from Community
            </span>
          </div>
        </div>

        {/* Total Reviews Count */}
        <div style={{
          borderLeft: '2px solid rgba(0,0,0,0.06)',
          paddingLeft: '24px',
          display: 'flex',
          flexDirection: 'column'
        }} className="reviews-count-divider">
          <span style={{
            fontSize: '24px',
            fontWeight: '600',
            color: 'var(--primary-blue)',
            fontFamily: 'var(--header-font)'
          }}>50+ Reviews</span>
          <span style={{ fontSize: '13px', color: '#666' }}>Trust & Excellence Verified</span>
        </div>

        {/* CTA Button */}
        <button
          ref={triggerRef}
          onClick={handleOpen}
          className="btn-share-experience"
          style={{
            padding: '12px 28px',
            backgroundColor: 'var(--primary-blue)',
            color: 'white',
            border: 'none',
            fontWeight: '600',
            fontSize: '14px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            borderRadius: '2px',
            transition: 'var(--transition-smooth)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 4px 12px rgba(11, 58, 91, 0.15)'
          }}
        >
          <MessageSquarePlus size={16} />
          Share Your Experience
        </button>
      </div>

      {/* Reviews Horizontally Scrollable Carousel Container */}
      <div className="reviews-carousel-wrapper" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        padding: '0 5%'
      }}>
        <div className="reviews-scroll-container" style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          padding: '10px 4px 30px',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin'
        }}>
          {initialReviews.map((review, index) => (
            <div
              key={index}
              className="review-card"
              style={{
                backgroundColor: 'white',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                borderRadius: '8px',
                padding: '30px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
                transition: 'var(--transition-smooth)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                flex: '0 0 clamp(290px, 80vw, 360px)',
                scrollSnapAlign: 'center'
              }}
            >
              {/* Card Contents */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <img
                      src={review.image}
                      alt={review.name}
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid rgba(244, 196, 48, 0.3)'
                      }}
                    />
                    <div>
                      <h4 style={{
                        margin: 0,
                        fontSize: '16px',
                        color: 'var(--primary-blue)',
                        fontWeight: '600',
                        fontFamily: 'var(--body-font)'
                      }}>
                        {review.name}
                      </h4>
                      <span style={{
                        fontSize: '12px',
                        color: '#777',
                        display: 'block',
                        marginTop: '2px'
                      }}>
                        {review.program}
                      </span>
                    </div>
                  </div>

                  {/* Badge */}
                  <span className={`badge-${review.type.toLowerCase()}`} style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    padding: '3px 10px',
                    borderRadius: '12px',
                    letterSpacing: '0.5px'
                  }}>
                    {review.type}
                  </span>
                </div>

                {/* Star Rating Display */}
                <div style={{ display: 'flex', gap: '3px', color: 'var(--gold)', marginBottom: '16px' }}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>

                {/* Review Testimonial Text */}
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.7',
                  fontStyle: 'italic',
                  position: 'relative',
                  zIndex: 1
                }}>
                  "{review.text}"
                </p>
              </div>

              {/* Decorative Quote Icon at bottom right */}
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '15px',
                color: 'rgba(11, 58, 91, 0.05)'
              }}>
                <Quote size={36} style={{ transform: 'rotate(180deg)' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Note & Metainfo */}
      <div style={{
        textAlign: 'center',
        marginTop: '12px',
        padding: '0 5%',
        position: 'relative',
        zIndex: 1
      }}>
        <p style={{
          fontSize: '13px',
          color: '#888',
          letterSpacing: '0.5px',
          fontWeight: '500'
        }}>
          Displaying Top 5 Reviews from 50+ Community Testimonials
        </p>
      </div>

      {/* Modal Dialog rendered via React Portal to escape transformed parents */}
      {isModalOpen && createPortal(
        <>
          {/* Backdrop - High z-index (15000) to layer on top of Silver Jubilee Badge (9999) */}
          <div
            className="modal-backdrop"
            onClick={handleClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.65)',
              zIndex: 15000,
              backdropFilter: 'blur(3px)',
              animation: 'fadeIn 0.25s ease'
            }}
          />

          {/* Modal Centering Wrapper - High z-index (15001) */}
          <div
            className="modal-wrapper"
            style={{
              position: 'fixed',
              inset: 0,
              display: 'flex',
              alignItems: 'center', // Centered vertically in viewport
              justifyContent: 'center', // Centered horizontally in viewport
              zIndex: 15001,
              padding: '16px',
              pointerEvents: 'none',
              overflowY: 'auto'
            }}
          >
            {/* Modal Content Card - Centered inside the black background, locked height */}
            <div
              ref={modalRef}
              className="review-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              style={{
                pointerEvents: 'auto',
                background: '#ffffff',
                width: 'min(480px, 95vw)',
                height: 'min(500px, 80vh)', // Stable height preventing content jumps
                maxHeight: 'calc(100vh - 40px)',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '8px',
                boxShadow: '0 25px 80px rgba(0, 0, 0, 0.3)',
                animation: 'reviewModalSlideIn 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                aria-label="Close modal"
                className="modal-close-btn"
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#888',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  transition: 'background 0.2s, color 0.2s',
                  zIndex: 10
                }}
              >
                <X size={18} />
              </button>

              {/* Scrollable Modal Body */}
              <div
                className="modal-body-scroll"
                style={{
                  overflowY: 'auto',
                  padding: '24px 24px 20px',
                  scrollbarWidth: 'thin',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: submitted ? 'center' : 'flex-start'
                }}
              >
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '12px 0' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: 'var(--gold)',
                      color: 'var(--deep-blue)',
                      fontSize: '24px',
                      fontWeight: 'bold',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px'
                    }}>✓</div>
                    <h3 id="modal-title" style={{
                      fontSize: '20px',
                      color: 'var(--primary-blue)',
                      fontFamily: 'var(--header-font)',
                      marginBottom: '10px'
                    }}>Feedback Submitted</h3>
                    <p style={{
                      color: '#555',
                      fontSize: '13.5px',
                      lineHeight: '1.6',
                      marginBottom: '20px'
                    }}>
                      Thank you for sharing your experience with Sai Kulwanth Educational Institutions.
                    </p>
                    <button
                      onClick={handleClose}
                      style={{
                        padding: '10px 24px',
                        backgroundColor: 'var(--primary-blue)',
                        color: 'white',
                        border: 'none',
                        fontWeight: '600',
                        fontSize: '13px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        cursor: 'pointer',
                        borderRadius: '2px',
                        width: '100%'
                      }}
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <>
                    <div style={{ marginBottom: '16px', paddingRight: '24px' }}>
                      <span style={{
                        background: 'var(--gold)',
                        color: 'var(--deep-blue)',
                        fontSize: '10px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        padding: '3px 10px',
                        display: 'inline-block',
                        marginBottom: '6px',
                        borderRadius: '2px'
                      }}>
                        Share Your Voice
                      </span>
                      <h3 id="modal-title" style={{
                        fontSize: '20px',
                        color: 'var(--primary-blue)',
                        fontFamily: 'var(--header-font)',
                        margin: 0
                      }}>
                        Write a Review
                      </h3>
                      <p style={{ color: '#666', fontSize: '12px', marginTop: '2px' }}>
                        Let us know about your journey at Sai Kulwanth.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} noValidate>
                      {/* Name field */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <label style={{ fontSize: '10.5px', fontWeight: '600', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          value={form.name}
                          onChange={e => handleChange('name', e.target.value)}
                          style={{
                            border: errors.name ? '1.5px solid #e74c3c' : '1.5px solid #ddd',
                            padding: '8px 12px',
                            fontSize: '13.5px',
                            fontFamily: 'var(--body-font)',
                            background: '#fafafa',
                            outline: 'none',
                            borderRadius: '2px'
                          }}
                        />
                        {errors.name && <span style={{ color: '#e74c3c', fontSize: '11px' }}>{errors.name}</span>}
                      </div>

                      {/* Dropdown field */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <label style={{ fontSize: '10.5px', fontWeight: '600', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          I am a *
                        </label>
                        <select
                          value={form.type}
                          onChange={e => handleChange('type', e.target.value)}
                          style={{
                            border: '1.5px solid #ddd',
                            padding: '8px 12px',
                            fontSize: '13.5px',
                            fontFamily: 'var(--body-font)',
                            background: '#fafafa',
                            outline: 'none',
                            borderRadius: '2px',
                            cursor: 'pointer'
                          }}
                        >
                          <option value="Student">Student</option>
                          <option value="Parent">Parent</option>
                          <option value="Alumni">Alumni</option>
                        </select>
                      </div>

                      {/* Star Rating Selector */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <label style={{ fontSize: '10.5px', fontWeight: '600', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Rating *
                        </label>
                        <div style={{ display: 'flex', gap: '6px', padding: '1px 0' }}>
                          {[1, 2, 3, 4, 5].map((stars) => (
                            <button
                              key={stars}
                              type="button"
                              onClick={() => handleChange('rating', stars)}
                              onMouseEnter={() => setHoverRating(stars)}
                              onMouseLeave={() => setHoverRating(0)}
                              aria-label={`Rate ${stars} out of 5 stars`}
                              style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: 0,
                                color: stars <= (hoverRating || form.rating) ? 'var(--gold)' : '#e2e8f0',
                                transition: 'color 0.15s ease'
                              }}
                            >
                              <Star size={22} fill={stars <= (hoverRating || form.rating) ? 'currentColor' : 'none'} />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Review text area */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <label style={{ fontSize: '10.5px', fontWeight: '600', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Review Message *
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Write your review here (min 10 characters)..."
                          value={form.review}
                          onChange={e => handleChange('review', e.target.value)}
                          style={{
                            border: errors.review ? '1.5px solid #e74c3c' : '1.5px solid #ddd',
                            padding: '8px 12px',
                            fontSize: '13.5px',
                            fontFamily: 'var(--body-font)',
                            background: '#fafafa',
                            outline: 'none',
                            borderRadius: '2px',
                            resize: 'none'
                          }}
                        />
                        {errors.review && <span style={{ color: '#e74c3c', fontSize: '11px' }}>{errors.review}</span>}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        style={{
                          padding: '10px 24px',
                          backgroundColor: 'var(--primary-blue)',
                          color: 'white',
                          border: 'none',
                          fontFamily: 'var(--body-font)',
                          fontSize: '13px',
                          fontWeight: '600',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          cursor: 'pointer',
                          borderRadius: '2px',
                          transition: 'background 0.3s ease, transform 0.2s ease',
                          marginTop: '4px'
                        }}
                        className="modal-submit-btn"
                      >
                        Submit Review
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </>,
        document.body
      )}

      {/* Styled styles scoped for reviews component */}
      <style dangerouslySetInnerHTML={{ __html: `
        .reviews-scroll-container {
          scrollbar-width: thin;
          scrollbar-color: var(--gold) transparent;
        }

        .reviews-scroll-container::-webkit-scrollbar {
          height: 6px;
        }

        .reviews-scroll-container::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.02);
          border-radius: 4px;
        }

        .reviews-scroll-container::-webkit-scrollbar-thumb {
          background: var(--gold);
          border-radius: 4px;
        }

        .reviews-scroll-container::-webkit-scrollbar-thumb:hover {
          background: #d4a728;
        }

        .modal-body-scroll::-webkit-scrollbar {
          width: 4px;
        }

        .modal-body-scroll::-webkit-scrollbar-thumb {
          background: var(--gold);
          border-radius: 2px;
        }

        .review-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(11, 58, 91, 0.08) !important;
          border-color: var(--gold) !important;
        }

        .badge-student {
          background-color: rgba(244, 196, 48, 0.1);
          color: var(--primary-blue);
          border: 1px solid rgba(244, 196, 48, 0.3);
        }

        .badge-parent {
          background-color: rgba(11, 58, 91, 0.05);
          color: var(--primary-blue);
          border: 1px solid rgba(11, 58, 91, 0.15);
        }

        .badge-alumni {
          background-color: rgba(178, 34, 34, 0.05);
          color: var(--red);
          border: 1px solid rgba(178, 34, 34, 0.15);
        }

        .btn-share-experience:hover {
          background-color: var(--deep-blue) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(11, 58, 91, 0.25) !important;
        }

        .modal-close-btn:hover {
          background-color: #f5f5f5;
          color: var(--primary-blue) !important;
        }

        .modal-submit-btn:hover {
          background-color: var(--deep-blue) !important;
          transform: translateY(-2px);
        }

        @keyframes reviewModalSlideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }

        @media (max-width: 768px) {
          .reviews-summary-panel {
            flex-direction: column;
            align-items: stretch !important;
            text-align: center;
          }
          .reviews-summary-panel > div {
            justify-content: center;
          }
          .reviews-count-divider {
            border-left: none !important;
            border-top: 1px solid rgba(0,0,0,0.08);
            padding-left: 0 !important;
            padding-top: 16px;
            align-items: center;
          }
          .btn-share-experience {
            justify-content: center;
          }
        }
      `}} />
    </section>
  );
};

export default Reviews;

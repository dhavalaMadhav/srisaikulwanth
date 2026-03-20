import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const intermediateCourses = [
  'MPC + EAPCET',
  'MPC + IIT-JEE (Mains & Advanced)',
  'MPC + Navy / Army / Air Force',
  'BiPC + EAPCET',
  'BiPC + NEET',
  'MEC / CEC + CA Foundation / CLAT',
  'MPC / BiPC / MEC / CEC + Civils & Groups',
];

const degreeCourses = [
  'B.Sc (Data Science)',
  'B.Sc (Computer Science)',
  'B.Sc (Mathematics)',
  'B.Sc (Physics)',
  'B.Sc (Chemistry)',
  'B.Sc (Statistics)',
  'B.Com (Computer Applications)',
  'BBA (Business Analytics)',
];

const ApplyModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', courseType: '', program: '', message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const programs = form.courseType === 'Intermediate' ? intermediateCourses : degreeCourses;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required.';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.trim()))
      newErrors.phone = 'Enter a valid 10-digit phone number.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'Enter a valid email address.';
    if (!form.courseType) newErrors.courseType = 'Please select a course type.';
    if (!form.program) newErrors.program = 'Please select a program.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value, ...(field === 'courseType' ? { program: '' } : {}) }));
    if (errors[field]) setErrors(prev => { const e = { ...prev }; delete e[field]; return e; });
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setForm({ name: '', phone: '', email: '', courseType: '', program: '', message: '' });
      setErrors({});
      setSubmitted(false);
    }, 300);
  };

  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop" onClick={handleClose} />

      {/* Modal */}
      <div className="apply-modal">
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <h3>Application Submitted!</h3>
            <p>Thank you, <strong>{form.name}</strong>! We'll contact you at <strong>{form.phone}</strong> shortly.</p>
            <button className="modal-submit-btn" onClick={handleClose} style={{ marginTop: '24px' }}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <span className="modal-tag">Admissions Open</span>
              <h2>Apply Now</h2>
              <p>Fill in your details and we'll reach out to you.</p>
            </div>

            <form onSubmit={handleSubmit} className="apply-form" noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={e => handleChange('name', e.target.value)}
                    className={errors.name ? 'input-error' : ''}
                  />
                  {errors.name && <span className="error-msg">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={e => handleChange('phone', e.target.value)}
                    maxLength={10}
                    className={errors.phone ? 'input-error' : ''}
                  />
                  {errors.phone && <span className="error-msg">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={e => handleChange('email', e.target.value)}
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <span className="error-msg">{errors.email}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Course Type *</label>
                  <select
                    value={form.courseType}
                    onChange={e => handleChange('courseType', e.target.value)}
                    className={errors.courseType ? 'input-error' : ''}
                  >
                    <option value="">Select type</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Degree">Degree</option>
                  </select>
                  {errors.courseType && <span className="error-msg">{errors.courseType}</span>}
                </div>
                <div className="form-group">
                  <label>Program Selection *</label>
                  <select
                    value={form.program}
                    onChange={e => handleChange('program', e.target.value)}
                    className={errors.program ? 'input-error' : ''}
                    disabled={!form.courseType}
                  >
                    <option value="">Select program</option>
                    {programs.map((p, i) => <option key={i} value={p}>{p}</option>)}
                  </select>
                  {errors.program && <span className="error-msg">{errors.program}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Message <span style={{ opacity: 0.6 }}>(optional)</span></label>
                <textarea
                  rows={3}
                  placeholder="Any queries or additional information..."
                  value={form.message}
                  onChange={e => handleChange('message', e.target.value)}
                />
              </div>

              <button type="submit" className="modal-submit-btn">Submit Application</button>
            </form>
          </>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.65);
          z-index: 9000;
          animation: fadeIn 0.25s ease;
        }
        .apply-modal {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          z-index: 9001;
          background: white;
          width: min(600px, 95vw);
          max-height: 90vh;
          overflow-y: auto;
          padding: clamp(28px, 5vw, 48px);
          box-shadow: 0 25px 80px rgba(0,0,0,0.4);
          animation: modalSlideIn 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          scrollbar-width: thin;
        }
        .apply-modal::-webkit-scrollbar { width: 4px; }
        .apply-modal::-webkit-scrollbar-thumb { background: var(--gold); }
        @keyframes modalSlideIn {
          from { transform: translate(-50%, -46%); opacity: 0; }
          to { transform: translate(-50%, -50%); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        .modal-close-btn {
          position: absolute;
          top: 16px; right: 16px;
          background: none;
          border: none;
          cursor: pointer;
          color: #888;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px; height: 36px;
          border-radius: 50%;
          transition: background 0.2s, color 0.2s;
        }
        .modal-close-btn:hover { background: #f0f0f0; color: var(--deep-blue); }
        .modal-header { margin-bottom: 24px; }
        .modal-tag {
          background: var(--gold);
          color: var(--deep-blue);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          padding: 4px 12px;
          display: inline-block;
          margin-bottom: 12px;
        }
        .modal-header h2 {
          font-size: clamp(22px, 3.5vw, 30px);
          color: var(--primary-blue);
          font-family: var(--header-font);
          margin-bottom: 6px;
        }
        .modal-header p { color: #666; font-size: 14px; }
        .apply-form { display: flex; flex-direction: column; gap: 16px; }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-group label {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-dark);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          border: 1.5px solid #ddd;
          padding: 10px 14px;
          font-family: var(--body-font);
          font-size: 14px;
          color: var(--text-dark);
          background: #fafafa;
          outline: none;
          transition: border-color 0.2s;
          border-radius: 0;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus { border-color: var(--primary-blue); background: white; }
        .form-group select:disabled { opacity: 0.5; cursor: not-allowed; }
        .input-error { border-color: #e74c3c !important; }
        .error-msg { color: #e74c3c; font-size: 12px; }
        .modal-submit-btn {
          padding: 14px 32px;
          background: var(--primary-blue);
          color: white;
          border: none;
          font-family: var(--body-font);
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
          margin-top: 8px;
        }
        .modal-submit-btn:hover { background: var(--deep-blue); transform: translateY(-2px); }
        .modal-success {
          text-align: center;
          padding: 20px 0;
        }
        .success-icon {
          width: 60px; height: 60px;
          background: var(--gold);
          color: var(--deep-blue);
          font-size: 30px;
          font-weight: bold;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .modal-success h3 {
          font-size: 24px;
          color: var(--primary-blue);
          margin-bottom: 12px;
          font-family: var(--header-font);
        }
        .modal-success p { color: #555; font-size: 15px; line-height: 1.7; }
        @media (max-width: 500px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}} />
    </>
  );
};

export default ApplyModal;

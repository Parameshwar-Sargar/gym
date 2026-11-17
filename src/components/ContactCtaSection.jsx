import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { PR_DATA } from '../data/gymData';

export default function ContactCtaSection({ selectedPlan, preselectedProgram }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    program: PR_DATA.programs[0].title
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedProgram) {
      setForm((prev) => ({ ...prev, program: preselectedProgram }));
    }
  }, [preselectedProgram]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErr = {};

    if (form.name.trim().length < 2) {
      nextErr.name = 'Please enter your full name.';
    }
    if (form.phone.replace(/\D/g, '').length < 7) {
      nextErr.phone = 'Please enter a valid phone number.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErr.email = 'Please enter a valid email address.';
    }

    setErrors(nextErr);
    if (Object.keys(nextErr).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <section className="section section--ivory contact-section" id="contact" data-nav-section>
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="eyebrow">Start Your Journey</span>
          <h2 className="section-headline">Visit the Club. Book Your Free Trial.</h2>
          <p className="section-lead">
            Take a tour of our training floor, meet a coach, and experience a session firsthand.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <MapPin size={18} className="contact-detail-item__icon" aria-hidden="true" />
              <div>
                <strong>Location</strong>
                <p>{PR_DATA.brand.address}</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <Clock size={18} className="contact-detail-item__icon" aria-hidden="true" />
              <div>
                <strong>Club Hours</strong>
                <p>{PR_DATA.brand.hours}</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <Phone size={18} className="contact-detail-item__icon" aria-hidden="true" />
              <div>
                <strong>Phone</strong>
                <p>{PR_DATA.brand.phone}</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <Mail size={18} className="contact-detail-item__icon" aria-hidden="true" />
              <div>
                <strong>Email</strong>
                <p>{PR_DATA.brand.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          {!submitted ? (
            <form className="trial-form" onSubmit={handleSubmit} noValidate>
              <div className="trial-form__header">
                <h3>Request a Free Trial Pass</h3>
                {selectedPlan && <span className="selected-pill">Plan: {selectedPlan}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="c-name">Full Name *</label>
                <input
                  id="c-name"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Aarav Sharma"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-row-2">
                <div className="form-field">
                  <label htmlFor="c-phone">Phone Number *</label>
                  <input
                    id="c-phone"
                    type="tel"
                    className="form-input"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  {errors.phone && <span className="form-error">{errors.phone}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="c-email">Email Address *</label>
                  <input
                    id="c-email"
                    type="email"
                    className="form-input"
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="c-program">Preferred Program *</label>
                <select
                  id="c-program"
                  className="form-input"
                  value={form.program}
                  onChange={(e) => setForm({ ...form, program: e.target.value })}
                >
                  {PR_DATA.programs.map((p) => (
                    <option value={p.title} key={p.id}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn btn--primary btn--lg btn--full">
                <span>JOIN NOW</span>
                <ArrowRight size={18} aria-hidden="true" />
              </button>

              <p className="form-demo-note">
                Demo preview form — validates locally without sending data to a server.
              </p>
            </form>
          ) : (
            <div className="trial-success" role="status" aria-live="polite">
              <CheckCircle2 size={28} className="trial-success__icon" aria-hidden="true" />
              <h3>Thank you, {form.name}.</h3>
              <p>
                Your trial interest for <strong>{form.program}</strong> has been validated locally in this browser demo.
              </p>
              <button
                type="button"
                className="btn btn--outline-dark btn--sm"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: '', phone: '', email: '', program: PR_DATA.programs[0].title });
                }}
              >
                Submit Another Enquiry
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

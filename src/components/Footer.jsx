import React from 'react';

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <div className="footer-brand-logo">
              {/* GIGGS<span className="footer-brand-dot" /> */}
<img src="/images/logo.webp" alt="GIGGS Logo" />

            </div>
            <p className="footer-brand-text">
              GIGGS is a multi-service gig marketplace connecting independent service
              providers with clients across Queensland, Australia. Find a gig. Get a gig done.
            </p>
            <div className="footer-social">
              <a
                className="footer-social-link"
                href="https://www.facebook.com/people/GIGGS/61587122874856/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                className="footer-social-link"
                href="https://www.instagram.com/giggs.au/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>
              <a
                className="footer-social-link"
                href="#"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-col-list">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'About', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'How It Works', id: 'how-it-works' },
                { label: 'Contact', id: 'contact' },
              ].map(({ label, id }) => (
                <li key={id}>
                  <a
                    className="footer-col-link"
                    href={`#${id}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-col-list">
              {['Home Cleaning', 'Dog Walking', 'Home Cooking', 'Everyday Help', 'All Services'].map((s) => (
                <li key={s}>
                  <a
                    className="footer-col-link"
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo('services'); }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-col-title">Contact Us</h4>
            <div className="footer-contact-row">
              <span className="footer-contact-icon">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              Queensland, Australia
            </div>
            <div className="footer-contact-row">
              <span className="footer-contact-icon">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4l-10 8L2 4" />
                </svg>
              </span>
              hello@giggs.com.au
            </div>
            <div className="footer-contact-row">
              <span className="footer-contact-icon">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </span>
              +61 400 000 000
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 GIGGS. All rights reserved. | Queensland, Australia
        </div>
      </div>
    </footer>
  );
};

export default Footer;

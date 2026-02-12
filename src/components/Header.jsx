import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <div className="header-logo" onClick={() => scrollTo('hero')}>
            {/* GIGGS<span className="header-logo-dot" /> */}
<img src="/images/logo.webp" alt="GIGGS Logo" className="header-logo-image" />
          </div>

          <ul className="header-nav">
            {NAV_ITEMS.map(({ id, label }) => (
              <li
                key={id}
                className="header-nav-item"
                onClick={() => scrollTo(id)}
              >
                {label}
              </li>
            ))}
          </ul>

          <div className="header-actions">
            <a className="header-phone" href="tel:+61400000000">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              +61 400 000 000
            </a>
            <button className="header-cta-btn" onClick={() => scrollTo('contact')}>
              Get Started
            </button>
          </div>

          <button
            className="header-mobile-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h18M4 13h18M4 19h18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button
          className="mobile-menu-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l16 16M22 6L6 22" />
          </svg>
        </button>
        {NAV_ITEMS.map(({ id, label }) => (
          <div
            key={id}
            className="mobile-menu-item"
            onClick={() => scrollTo(id)}
          >
            {label}
          </div>
        ))}
        <button className="mobile-menu-cta" onClick={() => scrollTo('contact')}>
          Get Started
        </button>
      </div>
    </>
  );
};

export default Header;

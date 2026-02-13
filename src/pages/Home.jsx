import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

/* ═══════════════════════════════════════════════
   UTILITY HOOKS & COMPONENTS
   ═══════════════════════════════════════════════ */

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = '', direction = 'up' }) {
  const [ref, visible] = useInView();
  const transforms = {
    up: 'translateY(36px)',
    down: 'translateY(-36px)',
    left: 'translateX(-36px)',
    right: 'translateX(36px)',
    none: 'none',
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : transforms[direction],
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useInView();
  useEffect(() => {
    if (!visible) return;
    let current = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [visible, end, duration]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}


/* ═══════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════ */

const SERVICES = [
  {
    emoji: '🏠',
    title: 'Home Cleaning',
    desc: 'Professional home cleaning services with customisable checklists. Our verified cleaners deliver spotless results every time.',
  },
  {
    emoji: '🐕',
    title: 'Dog Walking',
    desc: 'Reliable, caring dog walkers in your neighbourhood. GPS-tracked walks with real-time updates for your peace of mind.',
  },
  {
    emoji: '🍳',
    title: 'Home Cooking',
    desc: 'Skilled home cooks preparing fresh, delicious meals in your kitchen. Perfect for busy families and special occasions.',
  },
  {
    emoji: '🛠️',
    title: 'Everyday Help',
    desc: 'From errands to odd jobs, find flexible local helpers for all your everyday tasks. Quick booking, trusted providers.',
  },
  {
    emoji: '📅',
    title: 'Flexible Scheduling',
    desc: 'Calendar-based availability system. Book services at times that suit you with real-time provider scheduling.',
  },
  {
    emoji: '🛡️',
    title: 'Verified Providers',
    desc: 'All providers undergo ID verification, police checks, and insurance validation. Your safety is our priority.',
  },
];

const STEPS = [
  { num: '01', title: 'Browse & Select', desc: 'Choose your service, pick a date/time and location. View available providers filtered by area and ratings.' },
  { num: '02', title: 'Request Booking', desc: 'Submit your booking request. Your selected provider receives an instant SMS and dashboard notification.' },
  { num: '03', title: 'Provider Confirms', desc: 'Your provider reviews and accepts the job. Both parties receive a confirmed booking with full details.' },
  { num: '04', title: 'Job Complete', desc: 'Provider completes the service checklist. Rate each other with our two-way rating system. Invoicing handled by GIGGS.' },
];

const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    location: 'Brisbane, QLD',
    text: 'GIGGS made finding a reliable cleaner so easy. The two-step confirmation gave me confidence, and the rating system helps me pick the best providers every time.',
    rating: 5,
  },
  {
    name: 'James K.',
    location: 'Gold Coast, QLD',
    text: "As a provider, I love the flexibility. I set my own schedule, choose my service areas, and the invoicing system is seamless. Best gig platform I've used.",
    rating: 5,
  },
  {
    name: 'Emma L.',
    location: 'Sunshine Coast, QLD',
    text: "The checklist system means nothing gets missed. I've been using GIGGS for dog walking and home cleaning — both experiences have been fantastic.",
    rating: 5,
  },
];

const ABOUT_FEATURES = [
  'Two-Step Confirmation',
  'Verified Providers',
  'Two-Way Ratings',
  'Job Checklists',
  'Flexible Scheduling',
  'Admin Oversight',
];

const STATS = [
  { num: 500, suffix: '+', label: 'Happy Clients' },
  { num: 120, suffix: '+', label: 'Verified Providers' },
  { num: 1500, suffix: '+', label: 'Gigs Completed' },
  { num: 98, suffix: '%', label: 'Satisfaction Rate' },
];


/* ═══════════════════════════════════════════════
   HOME PAGE COMPONENT
   ═══════════════════════════════════════════════ */

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />

      <main>
        {/* ═══════════ HERO ═══════════ */}
        <section className="hero" id="hero">
          <div className="hero-inner">
            <div>
              <FadeIn>
                <div className="hero-badge">
                  <span className="hero-badge-dot" />
                  Launching Soon in Queensland
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="hero-heading">
                  Find A Gig.<br />
                  Get A <span className="hero-heading-accent">Gig Done</span>.
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="hero-text">
                  GIGGS connects people who need everyday help with trusted local service
                  providers across Queensland, Australia. From cleaning and dog walking to
                  home cooking and everyday help — book with confidence.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="hero-buttons">
                  <button className="hero-btn-primary" onClick={() => scrollTo('contact')}>
                    Get Early Access →
                  </button>
                  <button className="hero-btn-outline" onClick={() => scrollTo('services')}>
                    Explore Services
                  </button>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="hero-stats">
                  <div>
                    <div className="hero-stat-number"><Counter end={50} suffix="+" /></div>
                    <div className="hero-stat-label">Service Providers</div>
                  </div>
                  <div>
                    <div className="hero-stat-number"><Counter end={12} suffix="+" /></div>
                    <div className="hero-stat-label">Service Types</div>
                  </div>
                  <div>
                    <div className="hero-stat-number">QLD</div>
                    <div className="hero-stat-label">Australia Wide</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} direction="right">
              <div className="hero-visual">

                <div className="hero-card">
                                    <img src="/images/banner-img.png" alt="uj" />

                </div>
                <div className="hero-float hero-float-1">
                  <div className="hero-float-icon">✓</div>
                  <div>
                    <div className="hero-float-title">Verified Providers</div>
                    <div className="hero-float-sub">ID & Police Checked</div>
                  </div>
                </div>
                <div className="hero-float hero-float-2">
                  <div className="hero-float-icon">⭐</div>
                  <div>
                    <div className="hero-float-title">Two-Way Ratings</div>
                    <div className="hero-float-sub">Trust Built Together</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>


        {/* ═══════════ SUPPORT BANNER ═══════════ */}
        <div className="support-banner">
          <span className="support-banner-text">Have a Question? We're Here 24/7</span>
          <button className="support-banner-btn" onClick={() => scrollTo('contact')}>
            Contact Support →
          </button>
        </div>


        {/* ═══════════ ABOUT ═══════════ */}
        <section className="about" id="about">
          <div className="about-inner">
            <FadeIn direction="left">
              <div className="about-card">
                <div className="about-card-badge">
                <img src="/images/about.avif" alt="" />
                  {/* <div className="about-card-badge-num">2</div>
                  <div className="about-card-badge-text">Step Booking</div>
                </div>
                <div className="about-card-emoji">🤝</div>
                <div className="about-card-caption">
                  Connecting Locals<br />Across Queensland
                </div> */}
              </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="about-content">
                <div className="section-label">About GIGGS</div>
                <h2>A Smarter Way to Book Local Services</h2>
                <p>
                  GIGGS is a multi-service gig marketplace connecting independent service
                  providers — cleaners, dog walkers, home cooks and more — with clients
                  across Queensland, Australia.
                </p>
                <p>
                  Our platform uses a two-step booking confirmation model where clients
                  submit requests and providers must explicitly accept before jobs are
                  confirmed. Providers set their own availability, service areas, and
                  invoice GIGGS for completed work.
                </p>
                <p>
                  The system includes two-way ratings, job-specific checklists, and full
                  admin oversight for complete platform management and trust.
                </p>
                <div className="about-features-grid">
                  {ABOUT_FEATURES.map((feature) => (
                    <div className="about-feature-item" key={feature}>
                      <div className="about-feature-check">
                        <svg fill="none" stroke="#00A651" strokeWidth="3" strokeLinecap="round" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>


        {/* ═══════════ SERVICES ═══════════ */}
        <section className="services" id="services">
          <div className="services-inner">
            <FadeIn>
              <div className="section-header">
                <div className="section-label">What We Do</div>
                <h2>Services Built Around Your Needs</h2>
                <p>
                  From home cleaning to dog walking, GIGGS offers multiple service categories
                  with service-specific checklists, flexible pricing, and verified providers.
                </p>
              </div>
            </FadeIn>

            <div className="services-grid">
              {SERVICES.map((service, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="service-card">
                    <span className="service-card-emoji">{service.emoji}</span>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <div className="service-card-link">Learn More →</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════ HOW IT WORKS ═══════════ */}
        <section className="steps" id="how-it-works">
          <div className="steps-inner">
            <FadeIn>
              <div className="section-header">
                <div className="section-label">How It Works</div>
                <h2>Book in Four Simple Steps</h2>
                <p>
                  Our two-step booking confirmation ensures both clients and providers
                  are aligned before any job begins.
                </p>
              </div>
            </FadeIn>

            <div className="steps-grid">
              {STEPS.map((step, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="step-item">
                    <div className="step-number">{step.num}</div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════ STATS ═══════════ */}
        <section className="stats-bar">
          <div className="stats-bar-inner">
            {STATS.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="stat-block">
                  <h3><Counter end={stat.num} suffix={stat.suffix} /></h3>
                  <p>{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>


        {/* ═══════════ TESTIMONIALS + FORM ═══════════ */}
        <section className="testimonials" id="testimonials">
          <div className="testimonials-inner">
            <FadeIn>
              <div className="section-header">
                <div className="section-label">What People Say</div>
                <h2>Trusted by Clients & Providers</h2>
                <p>
                  See how GIGGS is helping locals connect for everyday services across Queensland.
                </p>
              </div>
            </FadeIn>

            <div className="testimonials-grid">
              <FadeIn direction="left">
                <div>
                  <div className="testimonial-card">
                    <div className="testimonial-quote-mark">"</div>
                    <div className="testimonial-stars">
                      {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                        <span className="testimonial-star" key={i}>★</span>
                      ))}
                    </div>
                    <p className="testimonial-body">
                      {TESTIMONIALS[activeTestimonial].text}
                    </p>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar">
                        {TESTIMONIALS[activeTestimonial].name[0]}
                      </div>
                      <div>
                        <div className="testimonial-name">
                          {TESTIMONIALS[activeTestimonial].name}
                        </div>
                        <div className="testimonial-location">
                          {TESTIMONIALS[activeTestimonial].location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-dots">
                    {TESTIMONIALS.map((_, i) => (
                      <button
                        key={i}
                        className={`testimonial-dot ${i === activeTestimonial ? 'testimonial-dot-active' : ''}`}
                        onClick={() => setActiveTestimonial(i)}
                        aria-label={`Testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.12}>
                <div className="contact-form-card" id="contact">
                  <h3 className="contact-form-title">Get Early Access</h3>
                  <p className="contact-form-subtitle">
                    Register your interest — we'll notify you when GIGGS goes live.
                  </p>
                  <div className="form-field">
                    <input className="form-input" placeholder="Your Name" />
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <input className="form-input" placeholder="Email" type="email" />
                    </div>
                    <div className="form-field">
                      <input className="form-input" placeholder="Phone" type="tel" />
                    </div>
                  </div>
                  <div className="form-field">
                    <select className="form-select">
                      <option>I'm interested as a...</option>
                      <option>Client — I need services</option>
                      <option>Provider — I offer services</option>
                      <option>Both</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <select className="form-select">
                      <option>Select Service Interest</option>
                      <option>Home Cleaning</option>
                      <option>Dog Walking</option>
                      <option>Home Cooking</option>
                      <option>Everyday Help</option>
                      <option>Multiple Services</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <input className="form-input" placeholder="Your Suburb / Postcode" />
                  </div>
                  <button className="form-submit-btn">Register Interest →</button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>


        {/* ═══════════ CTA ═══════════ */}
        <section className="cta-section">
          <div className="cta-content">
            <FadeIn>
              <h2>Ready to Find Your Next Gig?</h2>
              <p>
                Whether you need reliable help or want to earn flexibly — GIGGS connects
                you with trusted locals across Queensland. No fixed hours, no long-term commitments.
              </p>
              <div className="cta-buttons">
                <button className="cta-btn-white" onClick={() => scrollTo('contact')}>
                  Get Early Access →
                </button>
                <button className="cta-btn-ghost" onClick={() => scrollTo('services')}>
                  Learn More
                </button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;

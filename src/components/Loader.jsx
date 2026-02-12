import React, { useState, useEffect } from 'react';

const Loader = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2600);
    const completeTimer = setTimeout(() => onComplete(), 3200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`loader-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-logo">
        {/* GIGGS<span className="loader-logo-dot" /> */}
<img src="https://giggs.com.au/wp-content/uploads/2026/01/Asset-1-39.png" alt="GIGGS Logo" />
      </div>
      <div className="loader-tagline">Find a Gig · Get a Gig Done</div>
      <div className="loader-progress-track">
        <div className="loader-progress-bar" />
      </div>
    </div>
  );
};

export default Loader;

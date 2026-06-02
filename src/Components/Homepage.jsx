import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import './Homepage.css';
import { AppOpener } from './AppOpener';
import { Features } from './Features';
import { Link } from "react-router-dom";

export const Homepage = () => {
  const { state } = useContext(AppContext);

  return (
    <div className={`${state.appOpener === 1 && state.device === "Mobile" ? "heading_pad" : ""} homepage`}>
      {state.appOpener === 1 && state.device === "Mobile" ? <AppOpener /> : null}

      <header className="homepage-header">
        <div className="homepage-container">
          <div className="brand-bar">
            <div className="brand-logo">Soakify</div>
            <nav>
              <ul className="menu">
                <li><Link to="/admin">Admin</Link></li>
                <li><Link to="/signin">Sign In</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
              </ul>
            </nav>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              {/* <span className="eyebrow">Clean clothes, zero fuss</span> */}
              <h1>Laundry handled — so you don’t have to.</h1>
              {/* <div className="hero-visual" aria-hidden>
                <svg className="laundry-svg" width="140" height="84" viewBox="0 0 140 84" xmlns="http://www.w3.org/2000/svg">
                  <g className="drum" transform="translate(20,12)">
                    <circle className="drum-shell" cx="32" cy="28" r="26" fill="#EAF4FF" stroke="#BFD9FF" strokeWidth="2" />
                    <circle className="drum-hole" cx="32" cy="28" r="12" fill="#fff" />
                    <g className="drum-inner">
                      <rect x="18" y="18" width="28" height="10" rx="3" fill="#CFE3FF" />
                    </g>
                  </g>
                  <g className="bubbles" transform="translate(88,20)">
                    <circle className="bubble b1" cx="6" cy="46" r="3" fill="#9FD1FF" />
                    <circle className="bubble b2" cx="18" cy="50" r="4" fill="#C6E6FF" />
                    <circle className="bubble b3" cx="34" cy="48" r="2.5" fill="#B7E0FF" />
                  </g>
                </svg>
              </div> */}

              <p className="tagline">Pickup, premium care, doorstep delivery — fresh and folded, fast.</p>

              <div className="hero-support">
                <div className="machine-card">
                  <div className="hero-visual" aria-hidden>
                    <svg className="laundry-svg" width="140" height="84" viewBox="0 0 140 84" xmlns="http://www.w3.org/2000/svg">
                      <g className="drum" transform="translate(20,12)">
                        <circle className="drum-shell" cx="32" cy="28" r="26" fill="#EAF4FF" stroke="#BFD9FF" strokeWidth="2" />
                        <circle className="drum-hole" cx="32" cy="28" r="12" fill="#fff" />
                        <g className="drum-inner">
                          <rect x="18" y="18" width="28" height="10" rx="3" fill="#CFE3FF" />
                        </g>
                      </g>
                      <g className="bubbles" transform="translate(88,20)">
                        <circle className="bubble b1" cx="6" cy="46" r="3" fill="#9FD1FF" />
                        <circle className="bubble b2" cx="18" cy="50" r="4" fill="#C6E6FF" />
                        <circle className="bubble b3" cx="34" cy="48" r="2.5" fill="#B7E0FF" />
                      </g>
                    </svg>
                  </div>
                  <div className="machine-copy">
                    <strong>Real-time laundry updates</strong>
                    <p>Follow your laundry from pickup through wash to doorstep delivery.</p>
                  </div>
                </div>
                <div className="hero-trust-row">
                  <span className="trust-pill">4.9★ rating</span>
                  <span className="trust-pill">Fast same-day pickup</span>
                </div>
              </div>

              <div className="hero-actions">
                <Link to="/signin" className="hero-btn">Book Pickup</Link>
                <Link to="#how-it-works" className="hero-btn secondary-btn">See how</Link>
              </div>
            </div>

            <div className="hero-mockup">
              <div className="mockup-frame">
                <div className="mockup-screen">
                  <div className="mockup-top">
                    <div className="mockup-header-graphic">
                      <svg width="84" height="28" viewBox="0 0 84 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <rect x="0" y="0" width="84" height="28" rx="8" fill="url(#g)" />
                        <defs>
                          <linearGradient id="g" x1="0" x2="1">
                            <stop offset="0" stopColor="#3A7BFF" />
                            <stop offset="1" stopColor="#66A3FF" />
                          </linearGradient>
                        </defs>
                        <text x="12" y="18" fontSize="12" fill="#fff" fontWeight="700">Soakify</text>
                      </svg>
                    </div>
                  </div>
                  <div className="mockup-content">
                    <div className="mockup-item" tabIndex="0" role="button" aria-label="24 hour pickup">
                      <svg className="mockup-icon float" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M12 2C12 2 7 7 7 11a5 5 0 0010 0c0-4-5-9-5-9z" fill="#3A7BFF" />
                      </svg>
                      <strong>24h Pickup</strong>
                      <p>Schedule in seconds.</p>
                    </div>
                    <div className="mockup-item" tabIndex="0" role="button" aria-label="Gentle care">
                      <svg className="mockup-icon float delay-1" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M12 2C13.1 2 14 2.9 14 4s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM6 10c0 3.3 2.7 6 6 6s6-2.7 6-6H6z" fill="#63A3FF" />
                      </svg>
                      <strong>Gentle care</strong>
                      <p>Safe for delicates.</p>
                    </div>
                    <div className="mockup-item" tabIndex="0" role="button" aria-label="On-time delivery">
                      <svg className="mockup-icon float delay-2" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M7 7h10v10H7z" fill="#82B1FF" />
                        <path d="M4 4l4 4" stroke="#3A7BFF" strokeWidth="1.2" />
                      </svg>
                      <strong>On-time delivery</strong>
                      <p>Folded, fresh, ready to wear.</p>
                    </div>
                  </div>
                  <div className="mockup-cta">
                    <Link to="/signin" className="hero-btn">Book Pickup</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Features />

      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="section-title">
            <span>How Soakify works</span>
            <h2>Three simple steps to spotless laundry.</h2>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Schedule Pickup</h3>
              <p>Choose a time that fits your routine.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>We Clean It</h3>
              <p>Premium cleansing and gentle drying for every item.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Delivered</h3>
              <p>Your fresh laundry arrives right at your door.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <div className="container">
          <div className="cta-card">
            <div>
              <span>Ready for a better laundry routine?</span>
              <h2>Start your first Soakify pickup today.</h2>
            </div>
            <button className="cta-button">Sign Up Now</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <p>© {new Date().getFullYear()} Soakify. All Rights Reserved.</p>
          <div className="footer-links">
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

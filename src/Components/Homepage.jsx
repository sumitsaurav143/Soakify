import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext';
import { Signup } from './Signup';
import './Homepage.css'; // Add styles for the homepage
import LocationComponent from './LocationComponent';

export const Homepage = () => {

  const { state, dispatch } = useContext(AppContext);

  const useDeviceType = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      setIsMobile(mediaQuery.matches);

      const handleResize = () => setIsMobile(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleResize);

      return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    return isMobile ? "Mobile" : "Desktop";
  };

  return (
    <div className={`${state.device === "Mobile" ? "heading_pad" : ""} homepage`}>
      {/* Fixed Header */}
      {
        state.device === "Mobile" ?
          <header className="fixed-header">
            <div className="header-container">
              <div className='left-header'>
                Open Soakify App For Better Experience.
              </div>
              <div className='right-header'>
                <a href="#" className="open-app-button">Open App</a>
              </div>

            </div>
          </header> : null}


      {/* Header Section */}
      <header className="homepage-header">
        <div className={state.device !== "Mobile"?"homepage-container":""}>
          <div className="header-left">
            <h1 className="brand-name">Soakify</h1>
            <p className="tagline">Simplify Laundry, Amplify Life.</p>
            {/* <LocationComponent/> */}
          </div>
          { state.device !== "Mobile" ?
          <div className="header-right">
            <nav>
              <ul className="menu">
                <li><a href="/partner">Partner with Us</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/signin">Sign In</a></li>
              </ul>
            </nav>
          </div>: null }
        </div>
      </header>


      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Soakify?</h2>
          <div className="features-grid">
            <div className="feature-item">
              {/* <img src="/images/quick-service.svg" alt="Quick Service" /> */}
              <h3>Quick Service</h3>
              <p>Experience same-day pickup and delivery for your convenience.</p>
            </div>
            <div className="feature-item">
              {/* <img src="/images/eco-friendly.svg" alt="Eco-Friendly" /> */}
              <h3>Eco-Friendly</h3>
              <p>We use eco-friendly detergents and sustainable practices.</p>
            </div>
            <div className="feature-item">
              {/* <img src="/images/affordable.svg" alt="Affordable Pricing" /> */}
              <h3>Affordable Pricing</h3>
              <p>Quality service that won’t break the bank.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <span className="step-number">1</span>
              <h3>Schedule Pickup</h3>
              <p>Choose a convenient time for us to pick up your laundry.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h3>We Wash & Dry</h3>
              <p>Your laundry is cleaned with care using high-quality equipment.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h3>Doorstep Delivery</h3>
              <p>Get your fresh, clean laundry delivered right to your door.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-carousel">
            <div className="testimonial">
              <p>"Soakify made my life so much easier. Quick, reliable, and affordable!"</p>
              <h4>- Sarah M.</h4>
            </div>
            <div className="testimonial">
              <p>"Love their eco-friendly approach. Highly recommend their service!"</p>
              <h4>- John D.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <div className="container">
          <h2>Ready to Experience Hassle-Free Laundry?</h2>
          <button className="cta-button">Sign Up Now</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Soakify. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};


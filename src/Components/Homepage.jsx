import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext';
import './Homepage.css'; // Add styles for the homepage
import { AppOpener } from './AppOpener';
import { Features } from './Features';

export const Homepage = () => {

  const { state, dispatch } = useContext(AppContext);

  return (
    <div className={`${state.appOpener === 1 && state.device === "Mobile" ? "heading_pad" : ""} homepage`}>

      {/* Fixed Header */}
      {state.appOpener === 1 && state.device === "Mobile" ? <AppOpener /> : null}

      {/* Header Section */}
      <header className="homepage-header bubble-container">
        <div className={state.device !== "Mobile" ? "homepage-container" : ""}>
          <div className="header-left">
            <h1 className="brand-name">Soakify</h1>
            <p className="tagline">Simplify Laundry, Amplify Life.</p>
            {/* <p>{JSON.stringify(state)}</p> */}
            {/* <LocationComponent/> */}
          </div>
          {state.device !== "Mobile" ?
            <div className="header-right">
              <nav>
                <ul className="menu">
                  <li><a href="/partner">Partner with Us</a></li>
                  {/* <li><a href="/careers">Careers</a></li> */}
                  <li><a href="/signin">Sign Up</a></li>
                  <li><a href="/signin">Log In</a></li>
                  <li><a href="#" className="open-app-button">Get the App</a></li>
                </ul>
              </nav>
            </div> : null}
        </div>

        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>

      </header>

      <script type="text/javascript" src="https://udbaa.com/bnr.php?section=General&pub=395968&format=728x90&ga=g"></script>
<noscript><a href="https://yllix.com/publishers/395968" target="_blank"><img src="//ylx-aff.advertica-cdn.com/pub/728x90.png" style="border:none;margin:0;padding:0;vertical-align:baseline;" alt="ylliX - Online Advertising Network" /></a></noscript>

      {/* Features Section */}
     <Features />


      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="how-it-works-content">
            {/* Left Side: Title */}
            <div className="how-it-works-left">
              <h2 className="how-it-works-heading">How It Works</h2>
              <p className="how-it-works-description">
                We make laundry simple and hassle-free. Just follow these three easy steps to enjoy clean clothes without the effort!
              </p>
            </div>

            {/* Right Side: Steps */}
            <div className="how-it-works-right">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Schedule Pickup</h3>
                  <p>Choose a convenient time for us to pick up your laundry.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>We Wash & Dry</h3>
                  <p>Your laundry is cleaned with care using high-quality equipment.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Doorstep Delivery</h3>
                  <p>Get your fresh, clean laundry delivered right to your door.</p>
                </div>
              </div>
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


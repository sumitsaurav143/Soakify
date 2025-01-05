import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import './Features.css';

export const Features = () => {

    const { state, dispatch } = useContext(AppContext);

  const featureItems = [
    {
      img: '/images/quick_service.svg',
      title: 'Quick Service',
      description: 'Experience same-day pickup and delivery for your convenience.',
    },
    {
      img: '/images/ecofriendly.svg',
      title: 'Eco-Friendly',
      description: 'We use eco-friendly detergents and sustainable practices.',
    },
    {
      img: '/images/pricing.svg',
      title: 'Affordable Pricing',
      description: 'Quality service that won’t break the bank.',
    },
  ];

  // State to track current feature index
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Auto-scroll every 5 seconds
    if(state.device==="Mobile"){
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featureItems.length);
      }, 5000);
  
      // Cleanup the interval on component unmount
      return () => clearInterval(interval);
    }
   
  }, []);

  // Function to handle manual dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="features">
      <div className="container">
        <h2>Why Choose Soakify?</h2>
        <div className="features-scroll-container">
          <div
            className="features-grid"
            style={{
              transform: `translateX(-${currentIndex * 110}%)`
            }}
          >
            {featureItems.map((item, index) => (
              <div className="feature-item" key={index}>
                <img className="service_svg" src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="dots-container">
          {featureItems.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};


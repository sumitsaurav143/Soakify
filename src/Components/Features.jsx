import React from 'react';
import './Features.css';

export const Features = () => {
  const featureItems = [
    {
      key: 'pickup',
      title: 'Doorstep Pickup',
      description: "We collect when it’s convenient.",
    },
    {
      key: 'care',
      title: 'Premium Fabric Care',
      description: 'Gentle detergents and expert handling.',
    },
    {
      key: 'pricing',
      title: 'Transparent Pricing',
      description: 'Clear plans, no surprises.',
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="section-title">
          <span>Core Benefits</span>
          <h2>What makes Soakify different?</h2>
          <p>Smart pickup, gentle care, and fast delivery for a laundry experience that feels effortless.</p>
        </div>
        <div className="features-grid">
          {featureItems.map((item, index) => (
            <article className="feature-item" key={item.key || index}>
              <div className="feature-icon-wrap" aria-hidden>
                {item.key === 'pickup' && (
                  <svg className="service_svg" width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="6" width="16" height="10" rx="2" fill="#fff" stroke="#3A7BFF" strokeOpacity="0.12" />
                    <path d="M18 10h2v4h-2z" fill="#3A7BFF" opacity="0.9" />
                    <circle cx="6" cy="18" r="1.6" fill="#3A7BFF" />
                    <circle cx="16" cy="18" r="1.6" fill="#3A7BFF" />
                  </svg>
                )}

                {item.key === 'care' && (
                  <svg className="service_svg" width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C10 6 6 8 6 12a6 6 0 0012 0c0-4-4-6-6-10z" fill="#CFF0FF" />
                    <path d="M9 12c1 2 3 3 5 2" stroke="#2B90FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="1.6" fill="#3A7BFF" />
                  </svg>
                )}

                {item.key === 'pricing' && (
                  <svg className="service_svg" width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="16" height="16" rx="4" fill="#EAF4FF" />
                    <path d="M8 12h8" stroke="#3A7BFF" strokeWidth="1.6" strokeLinecap="round" />
                    <circle cx="16.5" cy="8.5" r="1.2" fill="#3A7BFF" />
                  </svg>
                )}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};


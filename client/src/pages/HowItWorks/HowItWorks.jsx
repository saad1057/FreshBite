import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    icon: '📋',
    color: '#ff9800',
    title: 'Choose Your Meals',
    desc: 'Browse our menu and select your favorite chef-prepared meals for the week.'
  },
  {
    icon: '🚚',
    color: '#3498db',
    title: 'We Cook & Deliver',
    desc: 'Our chefs prepare your meals fresh and we deliver them straight to your door.'
  },
  {
    icon: '🍽️',
    color: '#2e8b57',
    title: 'Heat & Enjoy',
    desc: 'Simply heat your meals in minutes and enjoy delicious, healthy food at home.'
  }
];

const HowItWorks = () => (
  <div className="howitworks-page">
    <section className="hiw-hero">
      <h1>How FreshBite Works</h1>
      <p>Enjoy healthy, chef-prepared meals delivered to your door in three simple steps.</p>
    </section>
    <div className="hiw-trust-bar-pill">
      <span className="hiw-pill">🥗 Chef-prepared</span>
      <span className="hiw-pill">🌱 Fresh Ingredients</span>
      <span className="hiw-pill">🚚 Fast Delivery</span>
      <span className="hiw-pill">⭐ 4.8/5 Customer Rating</span>
    </div>
    <section className="hiw-steps-vertical">
      <div className="hiw-timeline">
        {steps.map((step, idx) => (
          <div className="hiw-timeline-step" key={idx}>
            <div className="hiw-timeline-dot" style={{ background: step.color }}>
              <span className="hiw-timeline-icon">{step.icon}</span>
            </div>
            {idx < steps.length - 1 && <div className="hiw-timeline-line" />}
            <div className="hiw-timeline-content">
              <div className="hiw-timeline-number" style={{ color: step.color }}>{idx + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default HowItWorks; 
import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    icon: '📋',
    title: 'Choose Your Meals',
    desc: 'Browse our menu and select your favorite chef-prepared meals for the week.'
  },
  {
    icon: '🚚',
    title: 'We Cook & Deliver',
    desc: 'Our chefs prepare your meals fresh and we deliver them straight to your door.'
  },
  {
    icon: '🍽️',
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
    <section className="hiw-steps">
      {steps.map((step, idx) => (
        <div className="hiw-step" key={idx}>
          <div className="hiw-icon">{step.icon}</div>
          <h3>{step.title}</h3>
          <p>{step.desc}</p>
        </div>
      ))}
    </section>
  </div>
);

export default HowItWorks; 
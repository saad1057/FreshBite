import React from 'react';
import './About.css';

const About = () => (
  <div className="about-page">
    <div className="about-bg-shape"></div>
    <section className="about-hero">
      <h1>About FreshBite</h1>
      <p>We're passionate about making healthy eating easy, delicious, and accessible for everyone.</p>
    </section>
    <div className="about-highlight-bar">
      <span className="about-pill">🥗 Chef-Prepared</span>
      <span className="about-pill">🌱 Fresh Ingredients</span>
      <span className="about-pill">🚚 Fast Delivery</span>
      <span className="about-pill">⭐ 4.8/5 Rated</span>
    </div>
    <section className="about-mission">
      <h2>Our Mission</h2>
      <p>
        At FreshBite, our mission is to deliver chef-prepared meals made from the freshest ingredients straight to your door. We believe everyone deserves to eat well, even on the busiest days.
      </p>
    </section>

    <section className="about-story">
      <h2>Our Story</h2>
      <p>
        Founded by food lovers and busy professionals, FreshBite was born out of the desire to make nutritious, restaurant-quality meals convenient for all. Our chefs craft every meal with care, so you can enjoy more time for what matters most.
      </p>
    </section>
  </div>
);

export default About; 
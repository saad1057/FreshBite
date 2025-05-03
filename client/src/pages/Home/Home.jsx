import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-shape"></div>
        <div className="hero-content">
          <h1 className="hero-headline">CHECK OUT WHAT'S NEW AT FRESHBITE</h1>
          <p className="hero-subheadline">Delicious, chef-prepared meals delivered to your door. No shopping, no prep, no hassle.</p>
          <div className="trust-bar">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="trust-text">Rated <b>4.8</b> on Apple App Store!</span>
          </div>
          <ul className="hero-features-list">
            <li>✓ 3-Min Ready Made Meals</li>
            <li>✓ Low-Mess Prep & Bake Meal Kits</li>
            <li>✓ Easy 15-Min Recipes</li>
            <li>✓ <b>Pause or cancel anytime</b></li>
          </ul>
          <div className="hero-buttons">
            <Link to="/meals" className="primary-button">Explore Our Meals</Link>
            <Link to="/how-it-works" className="secondary-button">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🥗</div>
            <h3>Chef-Prepared</h3>
            <p>Our meals are crafted by professional chefs using the freshest ingredients and innovative recipes.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⏰</div>
            <h3>Ready in Minutes</h3>
            <p>All meals arrive ready to heat and serve in under 5 minutes, perfect for busy schedules.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🥬</div>
            <h3>Fresh Ingredients</h3>
            <p>We use only the highest quality, seasonal ingredients for maximum flavor and nutrition.</p>
          </div>
        </div>
      </section>

      {/* Testimonial/Trust Bar Section */}
      <section className="testimonial-bar">
        <div className="testimonial-content">
          <span className="testimonial-quote">“FreshBite makes dinner time so easy and delicious! Highly recommend.”</span>
          <span className="testimonial-author">- Sarah K.</span>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Start your healthy eating journey today</h2>
          <p>Get 50% off your first order</p>
          <Link to="/signup" className="primary-button">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

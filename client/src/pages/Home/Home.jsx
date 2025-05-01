import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Delicious meals delivered to your door</h1>
          <p>Enjoy chef-prepared meals made with fresh ingredients, delivered straight to your home. No shopping, no prep, no hassle.</p>
          <div className="hero-buttons">
            <Link to="/meals" className="primary-button">View Menu</Link>
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

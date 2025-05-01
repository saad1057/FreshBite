import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll events for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <div className="header-left">
          <Link to="/" className="logo">
            FreshBite
          </Link>
        </div>

        <div className="header-right">
          <nav className="main-nav">
            <ul className="nav-list">
              <li><Link to="/how-it-works" className="nav-link">How It Works</Link></li>
              <li><Link to="/meals" className="nav-link">Meals</Link></li>
              <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
              <li><Link to="/about" className="nav-link">About Us</Link></li>
            </ul>
          </nav>

          <div className="auth-actions">
            <Link to="/login" className="login-btn">Log In</Link>
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </div>

          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Menu">
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            <li><Link to="/how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</Link></li>
            <li><Link to="/meals" onClick={() => setIsMenuOpen(false)}>Meals</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
            <li className="mobile-auth">
              <Link to="/login" className="mobile-login" onClick={() => setIsMenuOpen(false)}>Log In</Link>
              <Link to="/signup" className="mobile-signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
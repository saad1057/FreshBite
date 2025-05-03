import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo2 from '../../../assets/images/logo4.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

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

  // Check login state on mount and when localStorage changes
  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo');
    setUserInfo(storedUser ? JSON.parse(storedUser) : null);
    // Listen for storage changes (multi-tab support)
    const handleStorage = () => {
      const updatedUser = localStorage.getItem('userInfo');
      setUserInfo(updatedUser ? JSON.parse(updatedUser) : null);
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('userInfo');
      setUserInfo(null);
      navigate('/');
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <div className="header-left">
          <Link to="/" className="logo">
            <img src={logo2} alt="FreshBite Logo" style={{ height: "40px", width: "auto" }} />
          </Link>
        </div>

        <div className="header-right">
          <nav className="main-nav">
            <ul className="nav-list">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/how-it-works" className="nav-link">How It Works</Link></li>
              <li><Link to="/meals" className="nav-link">Meals</Link></li>
              <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
              <li><Link to="/about" className="nav-link">About Us</Link></li>
              {userInfo && userInfo.isAdmin && (
                <li><Link to="/admin" className="nav-link">Admin</Link></li>
              )}
            </ul>
          </nav>

          <div className="auth-actions">
            {userInfo ? (
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            ) : (
              <>
                <Link to="/login" className="login-btn">Log In</Link>
                <Link to="/signup" className="signup-btn">Sign Up</Link>
              </>
            )}
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
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</Link></li>
            <li><Link to="/meals" onClick={() => setIsMenuOpen(false)}>Meals</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
            {userInfo && userInfo.isAdmin && (
              <li><Link to="/admin" className="mobile-login" onClick={() => setIsMenuOpen(false)}>Admin</Link></li>
            )}
            <li className="mobile-auth">
              {userInfo ? (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleLogout();
                  }}
                  className="mobile-logout"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/login" className="mobile-login" onClick={() => setIsMenuOpen(false)}>Log In</Link>
                  <Link to="/signup" className="mobile-signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                </>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
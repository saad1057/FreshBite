import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          FreshBite
        </Link>
        
        <nav className="main-nav">
          <ul className="nav-list">
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/meals">Meals</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
          </ul>
        </nav>

        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Log In</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </div>
    </header>
  );
}
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>FreshBite</h3>
          <p>Delicious meals delivered to your door</p>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/press">Press</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Learn More</h4>
          <ul>
            <li><a href="/gift-cards">Gift Cards</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/recipes">Recipes</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="#"><i className="icon-facebook"></i></a>
            <a href="#"><i className="icon-instagram"></i></a>
            <a href="#"><i className="icon-twitter"></i></a>
            <a href="#"><i className="icon-pinterest"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FreshBite. All rights reserved.</p>
        <div className="legal-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
// components/Footer.tsx

import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>FashionTV Cosmetics</h1>
        </div>
        <nav className="footer-nav">
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </nav>
        <div className="footer-social">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FashionTV Cosmetics. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

### CSS (Footer.css)
You can create a `Footer.css` file to style the footer component according to your luxury fashion theme:

/* Footer.css */

.footer {
  background-color: #f8d1e1; /* Light pink background */
  color: #fff; /* White text */
  padding: 20px;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-logo h1 {
  font-size: 2rem;
  margin: 0;
}

.footer-nav ul {
  list-style: none;
  padding: 0;
}

.footer-nav li {
  display: inline;
  margin: 0 15px;
}

.footer-nav a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.footer-social a {
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
}

.footer-bottom {
  margin-top: 20px;
  font-size: 0.9rem;
}

This code provides a basic structure for a footer component that fits the luxury fashion theme you described. You can further customize the styles to match your brand's identity.
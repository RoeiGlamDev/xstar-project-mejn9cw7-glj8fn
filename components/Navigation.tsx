// components/Navigation.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Assuming you have a CSS file for styling

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <Link to="/">FashionTV Cosmetics</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/collections">Collections</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="search-cart">
        <Link to="/search" className="search-icon">🔍</Link>
        <Link to="/cart" className="cart-icon">🛒</Link>
      </div>
    </nav>
  );
};

export default Navigation;

### CSS (Navigation.css)
You can create a CSS file to style the navigation component. Here’s a simple example:

/* Navigation.css */

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: pink;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-links li a {
  text-decoration: none;
  color: pink;
  font-weight: 500;
}

.nav-links li a:hover {
  text-decoration: underline;
}

.search-cart {
  display: flex;
  gap: 1rem;
}

.search-icon, .cart-icon {
  font-size: 1.5rem;
  color: pink;
  text-decoration: none;
}

This code provides a basic structure for a navigation component suitable for a luxury cosmetics website, with a focus on elegance and high-end design. Adjust the styles as needed to fit your overall design vision.
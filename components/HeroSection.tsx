Here's a simple implementation of a `HeroSection` component in TypeScript for a luxury FashionTV cosmetics website. This component uses React and is styled with pink and white colors to match your elegant design theme.

// components/HeroSection.tsx

import React from 'react';
import './HeroSection.css'; // Assuming you have a CSS file for styles

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Elevate Your Beauty</h1>
        <p className="hero-subtitle">Discover the luxury of FashionTV Cosmetics</p>
        <button className="hero-button">Shop Now</button>
      </div>
    </section>
  );
};

export default HeroSection;

And here is a simple CSS file (`HeroSection.css`) to style the component:

/* components/HeroSection.css */

.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8d3e0; /* Light pink background */
  color: #ffffff; /* White text */
  text-align: center;
  padding: 20px;
}

.hero-content {
  max-width: 600px;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.hero-button {
  background-color: #ffffff; /* White button */
  color: #f8d3e0; /* Pink text */
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.hero-button:hover {
  background-color: #f8b3c1; /* Darker pink on hover */
  color: #ffffff; /* White text on hover */
}

This code creates a `HeroSection` component that features a title, subtitle, and a button, all styled to fit a luxury cosmetics brand aesthetic. You can further customize the styles and content as needed.
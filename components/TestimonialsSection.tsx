Here's a React component for a testimonials section that fits the context of a luxury FashionTV cosmetics website with an elegant design in pink and white colors. This component is written in TypeScript.

// components/TestimonialsSection.tsx

import React from 'react';
import './TestimonialsSection.css'; // Assuming you have a CSS file for styling

interface Testimonial {
  id: number;
  name: string;
  message: string;
  image: string; // URL to the user's image
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sophia L.',
    message: 'Absolutely love the quality of these cosmetics! They make me feel glamorous every day.',
    image: 'https://via.placeholder.com/100', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Emma W.',
    message: 'The packaging is stunning and the products are even better. Highly recommend!',
    image: 'https://via.placeholder.com/100', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'Olivia R.',
    message: 'Luxury at its finest! The colors are vibrant and long-lasting.',
    image: 'https://via.placeholder.com/100', // Replace with actual image URL
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-message">"{testimonial.message}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

### CSS (TestimonialsSection.css)

You can create a CSS file named `TestimonialsSection.css` to style the component according to your luxury theme:

.testimonials-section {
  background-color: white;
  padding: 40px;
  text-align: center;
}

.testimonials-title {
  font-size: 2.5rem;
  color: #ff69b4; /* Pink color */
  margin-bottom: 20px;
}

.testimonials-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.testimonial-card {
  background-color: #f8f8f8; /* Light background for cards */
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.testimonial-image {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 15px;
}

.testimonial-name {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.testimonial-message {
  font-size: 1rem;
  color: #666;
  font-style: italic;
}

### Usage

You can use the `TestimonialsSection` component in your main application file or any other component like this:

import React from 'react';
import TestimonialsSection from './components/TestimonialsSection';

const App: React.FC = () => {
  return (
    <div>
      {/* Other components */}
      <TestimonialsSection />
      {/* Other components */}
    </div>
  );
};

export default App;

This setup provides a clean and elegant testimonials section that aligns with the luxury theme of your cosmetics website. Adjust the styles as needed to fit your overall design.
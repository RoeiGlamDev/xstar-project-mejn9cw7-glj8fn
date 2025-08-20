Here's a sample `contactpage` component in TypeScript for a luxury FashionTV cosmetics website. This component is styled with pink and white colors to match the elegant theme you described.

// app/contact/page.tsx

import React from 'react';
import './ContactPage.css'; // Assuming you have a CSS file for styles

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        We would love to hear from you! Please fill out the form below to get in touch with us.
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;

### CSS (ContactPage.css)
You can create a CSS file named `ContactPage.css` to style the component:

/* ContactPage.css */

.contact-page {
  background-color: white;
  color: #333;
  padding: 40px;
  max-width: 600px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.contact-title {
  color: #ff69b4; /* Pink color */
  text-align: center;
  margin-bottom: 20px;
}

.contact-description {
  text-align: center;
  margin-bottom: 30px;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input, textarea {
  padding: 10px;
  border: 1px solid #ff69b4; /* Pink border */
  border-radius: 5px;
  font-size: 16px;
}

input:focus, textarea:focus {
  border-color: #ff1493; /* Darker pink on focus */
  outline: none;
}

.submit-button {
  background-color: #ff69b4; /* Pink background */
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #ff1493; /* Darker pink on hover */
}

This code provides a basic contact page with a form styled in pink and white colors, suitable for a luxury cosmetics brand. You can further customize the styles and functionality as needed.
Here's a React component for a contact section tailored for a luxury FashionTV cosmetics website. The design uses pink and white colors to maintain an elegant and high-end aesthetic.

// components/ContactSection.tsx

import React from 'react';
import './ContactSection.css'; // Assuming you have a CSS file for styles

const ContactSection: React.FC = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Get in Touch</h2>
                <p className="contact-description">
                    We would love to hear from you! Please fill out the form below or reach out to us directly.
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
        </section>
    );
};

export default ContactSection;

### CSS (ContactSection.css)
You can create a CSS file named `ContactSection.css` to style the component. Here's a basic example:

/* ContactSection.css */

.contact-section {
    background-color: white;
    padding: 50px;
    text-align: center;
}

.contact-container {
    max-width: 600px;
    margin: 0 auto;
}

.contact-title {
    font-size: 2.5rem;
    color: #ff69b4; /* Pink color */
    margin-bottom: 20px;
}

.contact-description {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 30px;
}

.contact-form {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 20px;
}

label {
    font-weight: bold;
    color: #333;
}

input, textarea {
    padding: 10px;
    border: 1px solid #ff69b4; /* Pink border */
    border-radius: 5px;
    font-size: 1rem;
    width: 100%;
}

input:focus, textarea:focus {
    outline: none;
    border-color: #ff1493; /* Darker pink on focus */
}

.submit-button {
    background-color: #ff69b4; /* Pink background */
    color: white;
    padding: 15px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

.submit-button:hover {
    background-color: #ff1493; /* Darker pink on hover */
}

### Usage
You can import and use the `ContactSection` component in your main application file or any other component as follows:

import React from 'react';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
    return (
        <div>
            {/* Other components */}
            <ContactSection />
            {/* Other components */}
        </div>
    );
};

export default App;

This setup provides a clean and elegant contact section suitable for a luxury cosmetics website. Adjust the styles as needed to fit your overall design vision.
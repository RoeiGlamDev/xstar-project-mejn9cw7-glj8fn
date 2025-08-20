Here's a simple loading component in TypeScript for your luxury FashionTV cosmetics website. This component uses a pink and white color scheme to match your elegant design.

// app/loading.tsx

import React from 'react';
import './Loading.css'; // Importing CSS for styling

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default Loading;

And here is a simple CSS file (`Loading.css`) to style the loading component:

/* app/Loading.css */

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white; /* Background color */
  color: pink; /* Text color */
}

.loading-spinner {
  border: 8px solid rgba(255, 192, 203, 0.3); /* Light pink */
  border-top: 8px solid pink; /* Darker pink */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

.loading-text {
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

This code creates a loading spinner with a text message that fits the luxury aesthetic of your website. You can adjust the styles as needed to better fit your design vision.
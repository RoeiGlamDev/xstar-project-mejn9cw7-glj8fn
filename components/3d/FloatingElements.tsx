Here's a React component in TypeScript for a floating element that you can use in your luxury FashionTV cosmetics website. This component is styled to fit an elegant and high-end design in pink and white colors.

// components/3d/FloatingElements.tsx

import React from 'react';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #ff69b4; /* Light pink */
  border-radius: 50%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const FloatingIcon = styled.img`
  width: 40px;
  height: 40px;
`;

interface FloatingElementsProps {
  iconSrc: string;
  onClick: () => void;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ iconSrc, onClick }) => {
  return (
    <FloatingContainer onClick={onClick}>
      <FloatingIcon src={iconSrc} alt="Floating Icon" />
    </FloatingContainer>
  );
};

export default FloatingElements;

### Explanation:
- **FloatingContainer**: A styled div that serves as the floating button. It has a fixed position at the bottom right of the screen, a circular shape, and a light pink background.
- **FloatingIcon**: A styled image that represents the icon inside the floating button.
- **FloatingElements**: The main functional component that accepts `iconSrc` (the source of the icon image) and `onClick` (a function to handle click events).

### Usage:
You can use this component in your application by importing it and passing the required props:

import FloatingElements from './components/3d/FloatingElements';

const App = () => {
  const handleClick = () => {
    console.log('Floating element clicked!');
  };

  return (
    <div>
      {/* Other components */}
      <FloatingElements iconSrc="/path/to/icon.png" onClick={handleClick} />
    </div>
  );
};

export default App;

Make sure to replace `"/path/to/icon.png"` with the actual path to your icon image.
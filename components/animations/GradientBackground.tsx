Here's a React component for a gradient background that you can use in your luxury FashionTV cosmetics website. This component is styled to fit an elegant and high-end design with pink and white colors.

// components/animations/GradientBackground.tsx

import React from 'react';
import styled from 'styled-components';

const GradientBackgroundContainer = styled.div`
  width: 100%;
  height: 100vh; /* Full height */
  background: linear-gradient(135deg, #f8d3e0 0%, #ffffff 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5); /* Optional overlay for elegance */
`;

const GradientBackground: React.FC = ({ children }) => {
  return (
    <GradientBackgroundContainer>
      <GradientOverlay />
      {children}
    </GradientBackgroundContainer>
  );
};

export default GradientBackground;

### Explanation:
- **Styled Components**: The component uses `styled-components` for styling. Make sure to install it if you haven't already:
    npm install styled-components
  npm install @types/styled-components
  - **Gradient Background**: The background is a linear gradient transitioning from a soft pink (`#f8d3e0`) to white.
- **Overlay**: An optional overlay is added to enhance the elegance of the design.
- **Children Prop**: The component accepts children, allowing you to place other components or content inside the gradient background.

You can use this `GradientBackground` component in your main application or any other component to create a luxurious feel for your cosmetics website.
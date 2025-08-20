Here's a simple yet elegant button component in TypeScript for your luxury FashionTV cosmetics website. This button is styled to fit a high-end design aesthetic using pink and white colors.

// components/ui/Button.tsx

import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const StyledButton = styled.button<{ variant: 'primary' | 'secondary'; disabled: boolean }>`
  background-color: ${({ variant }) => (variant === 'primary' ? '#ff69b4' : '#ffffff')};
  color: ${({ variant }) => (variant === 'primary' ? '#ffffff' : '#ff69b4')};
  border: 2px solid #ff69b4;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ variant, disabled }) => !disabled && (variant === 'primary' ? '#ff1493' : '#ffb3d9')};
    color: ${({ variant, disabled }) => !disabled && (variant === 'primary' ? '#ffffff' : '#ff69b4')};
  }

  &:disabled {
    background-color: #f0f0f0;
    color: #a9a9a9;
    border: 2px solid #d3d3d3;
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary', disabled = false }) => {
  return (
    <StyledButton onClick={onClick} variant={variant} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;

### Explanation:
- **Styled Components**: The button is styled using `styled-components` to create a clean and elegant look.
- **Props**: The button accepts `onClick`, `children`, `variant`, and `disabled` props.
- **Variants**: There are two variants: `primary` (pink background) and `secondary` (white background with pink text).
- **Hover Effects**: The button changes color on hover, enhancing the user experience.
- **Disabled State**: The button visually indicates when it is disabled.

You can customize the styles further to match your specific design requirements.
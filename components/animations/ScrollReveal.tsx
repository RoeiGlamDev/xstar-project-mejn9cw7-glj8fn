'use client';

Certainly! Below is a React component for a ScrollReveal effect using TypeScript. This component can be used to create elegant animations for your luxury FashionTV cosmetics website. The ScrollReveal library will be utilized to animate elements as they come into view.

Make sure to install the `scrollreveal` package if you haven't already:

npm install scrollreveal

Here's the `ScrollReveal.tsx` component:

// components/animations/ScrollReveal.tsx

import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  distance?: string;
  origin?: 'top' | 'bottom' | 'left' | 'right';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  duration = 1000,
  delay = 200,
  distance = '30px',
  origin = 'bottom',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sr = ScrollReveal({
      duration,
      delay,
      distance,
      origin,
    });

    if (ref.current) {
      sr.reveal(ref.current);
    }
  }, [duration, delay, distance, origin]);

  return <div ref={ref}>{children}</div>;
};

export default ScrollReveal;

### Usage Example

You can use the `ScrollReveal` component in your pages or other components like this:

import React from 'react';
import ScrollReveal from './components/animations/ScrollReveal';

const ExampleComponent: React.FC = () => {
  return (
    <div style={{ padding: '50px', backgroundColor: '#fff' }}>
      <ScrollReveal duration={1200} delay={300} distance="50px" origin="top">
        <h1 style={{ color: '#ff69b4' }}>Welcome to FashionTV Cosmetics</h1>
      </ScrollReveal>
      <ScrollReveal duration={1200} delay={500} distance="50px" origin="bottom">
        <p style={{ color: '#333' }}>
          Discover our luxurious range of cosmetics designed for the modern woman.
        </p>
      </ScrollReveal>
    </div>
  );
};

export default ExampleComponent;

### Notes
- You can customize the `duration`, `delay`, `distance`, and `origin` props to achieve the desired animation effect.
- The example usage demonstrates how to wrap text elements with the `ScrollReveal` component to animate them as they scroll into view.
- Adjust the styles as needed to fit your elegant and high-end design aesthetic.
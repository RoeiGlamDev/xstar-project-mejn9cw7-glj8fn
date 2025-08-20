// components/AboutSection.tsx

import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #fff;
  color: #333;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #d5006d; // Elegant pink color
  margin-bottom: 20px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  text-align: center;
  margin-bottom: 40px;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const AboutSection: React.FC = () => {
  return (
    <AboutContainer>
      <Title>About FashionTV Cosmetics</Title>
      <Description>
        At FashionTV Cosmetics, we believe that beauty is an art. Our luxurious line of cosmetics is designed for those who appreciate elegance and sophistication. Each product is crafted with the finest ingredients, ensuring that you not only look good but feel good too. Join us on a journey of beauty and glamour, where every detail matters.
      </Description>
      <ImageContainer>
        <AboutImage src="/images/about-us.jpg" alt="About FashionTV Cosmetics" />
      </ImageContainer>
    </AboutContainer>
  );
};

export default AboutSection;

This code defines a React functional component `AboutSection` styled with `styled-components` to create an elegant and high-end design suitable for a luxury cosmetics website. The colors and layout are tailored to fit the requested aesthetic.
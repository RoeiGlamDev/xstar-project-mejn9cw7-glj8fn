// components/StatsSection.tsx

import React from 'react';
import styled from 'styled-components';

const StatsContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  padding: 50px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const StatCard = styled.div`
  text-align: center;
  flex: 1;
  margin: 0 10px;
  padding: 20px;
  border: 2px solid #f1c0d0;
  border-radius: 10px;
  background-color: #f9f0f5;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.h2`
  font-size: 2.5rem;
  color: #d5006d;
  margin: 0;
`;

const StatLabel = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-top: 10px;
`;

const StatsSection: React.FC = () => {
  return (
    <StatsContainer>
      <StatCard>
        <StatNumber>10K+</StatNumber>
        <StatLabel>Happy Customers</StatLabel>
      </StatCard>
      <StatCard>
        <StatNumber>500+</StatNumber>
        <StatLabel>Luxury Products</StatLabel>
      </StatCard>
      <StatCard>
        <StatNumber>20+</StatNumber>
        <StatLabel>Years of Experience</StatLabel>
      </StatCard>
    </StatsContainer>
  );
};

export default StatsSection;

This code defines a `StatsSection` component that displays three statistics in an elegant card format, suitable for a luxury cosmetics website. The design uses pink and white colors to align with the high-end aesthetic.
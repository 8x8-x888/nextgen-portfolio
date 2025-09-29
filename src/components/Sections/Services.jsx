import React from 'react';
import styled from 'styled-components';
import { SERVICE_DATA, CALENDLY_URL } from '../../assets/data/portfolioData';
import { PrimaryButton, SecondaryButton } from '../UI/Button';
import { FaBolt, FaLink, FaCogs } from 'react-icons/fa';

const ServicesSection = styled.section`
  padding: 4rem var(--spacing-lg);
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const SectionTitle = styled.h2`
  text-transform: uppercase;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ServiceCard = styled.div`
  background-color: var(--color-card-dark);
  padding: 2rem;
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s;
  border: 1px solid transparent;
  cursor: default;
  &:hover {
    transform: translateY(-5px);
    border-color: var(--color-primary);
    box-shadow: 0 10px 25px rgba(0,0,0,0.5);
  }
`;

const ServiceIcon = styled.div`
  width: 60px; height: 60px; border-radius: 12px;
  display: flex; justify-content: center; align-items: center;
  font-size: 1.8rem; color: #fff;
  background: ${props => props.colorStart && props.colorEnd ? `linear-gradient(135deg, ${props.colorStart}, ${props.colorEnd})` : '#3b82f6'};
  margin-bottom: 1.5rem;
  box-shadow: 0 3px 10px rgba(0,0,0,.3);
`;

const ServiceTitle = styled.h3`
  color: var(--color-text-light);
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
`;

const ServiceDetails = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 0.75rem;
  color: var(--color-text-secondary);
  li { margin: 0.25rem 0; }
  li::before { content: '•'; color: var(--color-secondary); display: inline-block; width: 1em; margin-left: -1em; }
`;

const ButtonRow = styled.div`
  display: flex; justify-content: center; gap: 1rem; margin-top: 2rem;
  @media (max-width: 600px) { flex-direction: column; }
`;

const getIconColor = (title) => {
  if (title.includes('Zapier')) return { start: '#ff7043', end: '#ffa726' };
  if (title.includes('Make')) return { start: '#8e2de2', end: '#a855f7' };
  if (title.includes('CRM')) return { start: '#00c6ff', end: '#0072ff' };
  return { start: '#3b82f6', end: '#a855f7' };
};

const Services = () => {
  return (
    <ServicesSection id="services">
      <SectionHeader>
        <SectionTitle>Services</SectionTitle>
        <SecondaryButton as="a" href={CALENDLY_URL} target="_blank">Let's Connect</SecondaryButton>
      </SectionHeader>

      <CardGrid>
        {SERVICE_DATA.map((service, idx) => {
          const { start, end } = getIconColor(service.title);
          const Icon = () => (
            <ServiceIcon colorStart={start} colorEnd={end}>
              <FaBolt />
            </ServiceIcon>
          );
          return (
            <ServiceCard key={idx}>
              <Icon />
              <ServiceTitle>{service.title}</ServiceTitle>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
                {service.description}
              </p>
              {service.details && (
                <ServiceDetails>
                  {service.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ServiceDetails>
              )}
            </ServiceCard>
          );
        })}
      </CardGrid>

      <ButtonRow>
        <PrimaryButton as="a" href={CALENDLY_URL} target="_blank">Let's Automate Your Workflow</PrimaryButton>
        <SecondaryButton as="a" href="#portfolio">See Real Results</SecondaryButton>
      </ButtonRow>
    </ServicesSection>
  );
};

export default Services;
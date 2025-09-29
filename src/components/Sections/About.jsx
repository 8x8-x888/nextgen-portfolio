import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem var(--spacing-lg);
  background-color: var(--color-background-dark);
`;

const ContentBox = styled.div`
  background-color: var(--color-card-dark);
  padding: var(--spacing-lg);
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
`;

const SectionTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: var(--spacing-md);
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text-light);
  strong { color: var(--color-secondary); font-weight: 600; }
`;

const About = () => (
  <AboutSection id="about">
    <SectionTitle>About Me</SectionTitle>
    <ContentBox>
      <AboutText>
        I streamline processes and connect tools to save teams time and reduce costs.
        My work focuses on <strong>Zapier workflows, Make scenarios, n8n automations</strong>,
        and <strong>CRM integrations</strong> (HubSpot, Salesforce, GHL). I measure success in hours saved, errors reduced, and revenue unlocked.
      </AboutText>
    </ContentBox>
  </AboutSection>
);

export default About;
import React from 'react';
import styled from 'styled-components';
import { PrimaryButton, SecondaryButton, ChipButton } from '../UI/Button';
import { CALENDLY_URL, TECH_STACK } from '../../assets/data/portfolioData';
import { FaLinkedin, FaWordpress, FaGlobe } from 'react-icons/fa';

// Inline SVG profile image (replace with real image if you want)
const PROFILE_PIC = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'>
  <defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
    <stop stop-color='#4f46e5' offset='0'/>
    <stop stop-color='#14b8a6' offset='1'/>
  </linearGradient></defs>
  <circle cx='60' cy='60' r='60' fill='url(#g)'/>
  <text x='50%' y='54%' text-anchor='middle' font-family='Arial' font-size='34' fill='white'>ME</text>
</svg>`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  padding: 6rem var(--spacing-lg) 4rem;
  min-height: 90vh;
  gap: 3rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding-top: 4rem;
  }
`;

const ContentContainer = styled.div`
  flex: 3;
  max-width: 700px;

  @media (max-width: 1024px) {
    order: 2;
    width: 100%;
  }
`;

const ProfileCardContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: var(--spacing-md);
  @media (max-width: 1024px) {
    order: 1;
    margin-bottom: 2rem;
  }
`;

const ProfileCard = styled.div`
  background-color: var(--color-card-dark);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,.5);
  width: 100%;
  max-width: 350px;
  text-align: center;
  position: sticky;
  top: 100px;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 5px solid var(--color-secondary);
`;

const TitleCategory = styled.div`
  display: inline-block;
  background: rgba(90,75,250,.2);
  color: var(--color-primary);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Headline = styled.h1`
  font-size: 4.5rem;
  line-height: 1.1;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: .5px;

  @media (max-width: 768px) { font-size: 3rem; }
`;

const Tagline = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  span { font-weight: 700; color: var(--color-secondary); }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    button, a { width: 100%; }
  }
`;

const TechStackContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;

  @media (max-width: 1024px) { justify-content: center; }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  svg {
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--color-text-secondary);
    transition: color .2s;
    &:hover { color: var(--color-primary); }
  }
`;

const Hero = () => {
  const handleCalendlyClick = () => {
    window.open(CALENDLY_URL, '_blank');
  };

  return (
    <HeroSection id="hero">
      <ContentContainer>
        <TitleCategory>Automation • CRM • Integrations</TitleCategory>
        <Headline>BUILD • AUTOMATE • SCALE</Headline>
        <Tagline>
          Turn manual tasks into scalable systems. I help businesses grow smarter with automation, CRM integrations, and optimized workflows across
          <span> Zapier, Make, n8n</span>, and <span>GoHighLevel</span>.
        </Tagline>

        <CTAButtons>
          <PrimaryButton onClick={handleCalendlyClick}>
            Let's Build Together (Schedule Call)
          </PrimaryButton>
          <SecondaryButton as="a" href="#portfolio">
            View Case Studies
          </SecondaryButton>
        </CTAButtons>

        <TechStackContainer>
          {TECH_STACK.map((tech) => (
            <ChipButton key={tech} as="span">
              {tech}
            </ChipButton>
          ))}
        </TechStackContainer>
      </ContentContainer>

      <ProfileCardContainer>
        <ProfileCard aria-label="Profile card">
          <ProfileImage src={PROFILE_PIC} alt="Profile image of Mark Angel Fernandez" />
          <h3 style={{ marginBottom: '0.2rem' }}>Mark Angel Fernandez</h3>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            Automation Specialist • Philippines
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
            ⚡ Tired of wasting hours on tasks that don't grow your business? I build automations in Zapier, Make, and more.
          </p>

          <Socials>
            <FaWordpress title="WordPress" />
            <FaGlobe title="Website" />
            <FaLinkedin title="LinkedIn" />
          </Socials>

          <PrimaryButton style={{ marginTop: '1rem', width: '100%', padding: '0.8rem 2rem' }} as="a" href="#contact">
            Contact
          </PrimaryButton>
        </ProfileCard>
      </ProfileCardContainer>
    </HeroSection>
  );
};

export default Hero;
import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGlobe, FaArrowUp } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 2rem var(--spacing-lg);
  background-color: var(--color-background-dark);
  border-top: 1px solid rgba(255,255,255,0.05);
  display: flex; justify-content: space-between; align-items: center;
  font-size: 0.9rem;
  color: var(--color-text-secondary);

  @media (max-width: 768px) { flex-direction: column; text-align: center; gap: 1rem; }
`;

const SocialLinks = styled.div` display: flex; gap: 1rem; `;

const SocialIcon = styled.a`
  width: 40px; height: 40px; border-radius: 50%;
  background: var(--color-card-dark);
  display: flex; align-items: center; justify-content: center;
  color: var(--color-text-light);
  font-size: 1.2rem; transition: background-color .3s, color .3s;
  &:hover { background: var(--color-primary); color: white; }
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; {new Date().getFullYear()} Mark Angel Fernandez. All rights reserved.</p>
    <SocialLinks aria-label="Social links">
      <SocialIcon href="https://linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn">
        <FaLinkedin />
      </SocialIcon>
      <SocialIcon href="#" target="_blank" aria-label="Website">
        <FaGlobe />
      </SocialIcon>
      <SocialIcon href="#" target="_blank" aria-label="Back to top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        <FaArrowUp />
      </SocialIcon>
    </SocialLinks>
  </FooterContainer>
);

export default Footer;
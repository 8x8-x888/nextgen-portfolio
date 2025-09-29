import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { NAV_LINKS } from '../../assets/data/portfolioData';
import ThemeToggle from '../UI/ThemeToggle';

const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem var(--spacing-lg);
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--color-background-dark);
  box-shadow: 0 2px 10px rgba(0,0,0,.5);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.1;
  span { background: linear-gradient(45deg, var(--color-primary), var(--color-secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  p { font-size: .75rem; font-weight: 400; color: var(--color-text-secondary); }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(ScrollLink)`
  margin-left: var(--spacing-md);
  color: var(--color-text-light);
  font-weight: 500;
  cursor: pointer;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  &:hover {
    color: var(--color-primary);
    background-color: rgba(90,75,250,0.12);
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Logo>
        MARK ANGEL <span>FERNANDEZ</span>
        <p>NextGen VA</p>
      </Logo>
      <NavList>
        {NAV_LINKS.map((link) => (
          <NavItem key={link.to} to={link.to} spy={true} smooth={true} offset={-80} duration={500}>
            {link.name}
          </NavItem>
        ))}
        <ThemeToggle />
      </NavList>
    </NavContainer>
  );
};

export default Navbar;
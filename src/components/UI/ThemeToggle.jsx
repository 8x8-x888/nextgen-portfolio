import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ToggleBtn = styled.button`
  margin-left: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.25);
  background: #111827;
  color: white;
  cursor: pointer;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const ThemeDot = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: inline-block;
  background: ${props => (props.theme === 'dark' ? '#fff' : '#111')};
  border: 1px solid #0003;
`;

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('site-theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('site-theme', next);
  };

  return (
    <ToggleBtn onClick={toggle} aria-label="Toggle theme">
      <ThemeDot theme={theme} />
      <span style={{ fontSize: '0.9rem' }}>{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </ToggleBtn>
  );
};

export default ThemeToggle;
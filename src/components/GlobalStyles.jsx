import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #5a4bfa;
    --color-secondary: #00f0ff;
    --color-background-dark: #0f172a;
    --color-card-dark: #1e293b;
    --color-text-light: #f1f5f9;
    --color-text-secondary: #94a3b8;
    --color-gradient-start: #3b82f6;
    --color-gradient-end: #a855f7;
    --font-family-primary: 'Poppins', sans-serif;
    --spacing-lg: 4rem;
    --spacing-md: 1.5rem;
    --spacing-sm: 0.75rem;
  }

  * { margin:0; padding:0; box-sizing: border-box; }

  html { scroll-behavior: smooth; font-size: 16px; }

  body {
    font-family: var(--font-family-primary);
    background-color: var(--color-background-dark);
    color: var(--color-text-light);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  a { text-decoration: none; color: var(--color-primary); }

  h1, h2, h3, h4 {
    color: var(--color-text-light);
    margin-bottom: var(--spacing-sm);
    font-weight: 700;
  }

  @media (max-width: 768px) {
    :root { --spacing-lg: 1.5rem; }
    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }
  }

  /* Theme support: light mode variables */
  [data-theme="light"] {
    --color-background-dark: #f8fafc;
    --color-text-light: #0f1b2a;
    --color-card-dark: #ffffff;
    --color-text-secondary: #374151;
  }
`;

export default GlobalStyles;
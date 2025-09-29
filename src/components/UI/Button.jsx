import styled, { css } from 'styled-components';

const BaseButton = css`
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-shadow: 0 1px 1px rgba(0,0,0,0.2);
`;

export const PrimaryButton = styled.button`
  ${BaseButton}
  background: linear-gradient(90deg, var(--color-gradient-start) 0%, var(--color-gradient-end) 100%);
  color: var(--color-text-light);
  border: none;
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(168, 85, 247, 0.6);
  }
`;

export const SecondaryButton = styled.button`
  ${BaseButton}
  background: transparent;
  color: var(--color-text-light);
  border: 2px solid var(--color-card-dark);
  &:hover {
    background: rgba(90, 75, 250, 0.1);
    border-color: var(--color-primary);
    color: var(--color-primary);
    transform: translateY(-1px);
  }
`;

export const ChipButton = styled.div`
  ${BaseButton}
  padding: 0.5rem 1rem;
  background: var(--color-card-dark);
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  border-radius: 10px;
  margin: 0.5rem 0.5rem 0.5rem 0;
  &:hover {
    background: var(--color-primary);
    color: var(--color-text-light);
  }
`;
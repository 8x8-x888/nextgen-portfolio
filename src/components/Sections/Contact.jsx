import React, { useState } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../UI/Button';

const ContactSection = styled.section`
  padding: 4rem var(--spacing-lg);
  background-color: var(--color-background-dark);
`;

const SectionTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
`;

const FormContainer = styled.form.attrs({ 
  name: 'contact',
  method: 'POST',
  'data-netlify': 'true'
})`
  background-color: var(--color-card-dark);
  padding: 3rem;
  border-radius: 15px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 5px 20px rgba(0,0,0,0.3);
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  background-color: var(--color-background-dark);
  color: var(--color-text-light);
  font-size: 1rem;
  &::placeholder { color: var(--color-text-secondary); }
  &:focus { outline: none; border-color: var(--color-primary); }
`;

const TextArea = styled.textarea`
  grid-column: 1 / -1;
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  background-color: var(--color-background-dark);
  color: var(--color-text-light);
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  &::placeholder { color: var(--color-text-secondary); }
  &:focus { outline: none; border-color: var(--color-primary); }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In production, send to Netlify/Vercel or your own backend
  };

  return (
    <ContactSection id="contact">
      <SectionTitle>Let's Build Together</SectionTitle>
      <FormContainer onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <InputGroup>
          <Input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <Input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        </InputGroup>
        <InputGroup>
          <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <Input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
        </InputGroup>
        <TextArea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
        <PrimaryButton type="submit" style={{ width: '100%', padding: '1rem 2rem' }}>
          Send Request
        </PrimaryButton>
      </FormContainer>
    </ContactSection>
  );
};

export default Contact;
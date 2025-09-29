import React from 'react';
import styled from 'styled-components';
import { PORTFOLIO_DATA } from '../../assets/data/portfolioData';
import { FaAsterisk, FaProjectDiagram, FaLink, FaGoogleDrive, FaHubspot, FaTable, FaEnvelope, FaMoneyBillWave, FaListAlt, FaLaptopCode } from 'react-icons/fa';

const PortfolioSection = styled.section`
  padding: 4rem var(--spacing-lg);
  background-color: var(--color-background-dark);
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;

  p { color: var(--color-text-secondary); font-style: italic; }
`;

const SectionTitle = styled.h2`
  text-transform: uppercase;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 2rem;
`;

const PortfolioCard = styled.div`
  background-color: var(--color-card-dark);
  padding: 2rem;
  border-radius: 15px;
  display: flex; flex-direction: column;
  transition: transform .3s ease, box-shadow .3s ease;
  &:hover { transform: translateY(-6px); box-shadow: 0 15px 28px rgba(0,0,0,.5); }
`;

const CardHeader = styled.div`
  display: flex; gap: 1rem; align-items: center; margin-bottom: 1.5rem;
`;

const CardIconWrapper = styled.div`
  width: 60px; height: 60px; border-radius: 50%;
  display: flex; justify-content: center; align-items: center;
  font-size: 1.8rem; color: #fff;
  background: ${props => props.color || '#3b82f6'};
`;

const CardTitle = styled.h3`
  color: var(--color-primary);
  margin: 0;
  font-size: 1.25rem;
`;

const DescriptionText = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.75rem;
  flex-grow: 1;
`;

const ToolList = styled.div`
  display: flex; gap: 0.75rem; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.05);
`;

const ToolIcon = styled.div`
  width: 34px; height: 34px; border-radius: 50%;
  background-color: var(--color-background-dark); display:flex; justify-content:center;
  align-items: center; color: var(--color-text-secondary); font-size: 0.9rem;
  transition: color .3s, background-color .3s;
  &:hover { color: var(--color-secondary); background-color: #2c3a50; }
`;

const getPortfolioIcon = (iconName) => {
  switch (iconName) {
    case 'OrangeAsterisk': return { icon: <FaAsterisk />, color: 'linear-gradient(135deg,#ff8c00,#ffd27a)' };
    case 'PurpleStripes': return { icon: <FaProjectDiagram />, color: 'linear-gradient(135deg,#8e2de2,#a855f7)' };
    case 'Link': return { icon: <FaLink />, color: 'linear-gradient(135deg,#00c6ff,#0072ff)' };
    default: return { icon: <FaProjectDiagram />, color: '#3b82f6' };
  }
};

const getToolIcon = (toolName) => {
  switch (toolName) {
    case 'GoogleDrive': return <FaGoogleDrive />;
    case 'Hubspot': return <FaHubspot />;
    case 'Airtable': return <FaTable />;
    case 'Gmail': return <FaEnvelope />;
    case 'Xero': return <FaMoneyBillWave />;
    case 'GoogleSheets': return <FaListAlt />;
    case 'API': return <FaLaptopCode />;
    case 'Zapier': return <FaBolt />;
    case 'Make': return <FaCogs />;
    default: return <FaLink />;
  }
};

const Portfolio = () => {
  return (
    <PortfolioSection id="portfolio">
      <HeaderRow>
        <SectionTitle>Portfolio Gallery</SectionTitle>
        <p>Selected automations and outcomes</p>
      </HeaderRow>

      <GalleryGrid>
        {PORTFOLIO_DATA.map((item) => {
          const { icon, color } = getPortfolioIcon(item.icon);
          return (
            <PortfolioCard key={item.id}>
              <CardHeader>
                <CardIconWrapper color={color}>{icon}</CardIconWrapper>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>

              <DescriptionText>{item.description}</DescriptionText>

              <ToolList>
                {item.tools?.map((tool) => (
                  <ToolIcon key={tool} title={tool} aria-label={`Tool: ${tool}`}>
                    {getToolIcon(tool)}
                  </ToolIcon>
                ))}
              </ToolList>
            </PortfolioCard>
          );
        })}
      </GalleryGrid>
    </PortfolioSection>
  );
};

export default Portfolio;
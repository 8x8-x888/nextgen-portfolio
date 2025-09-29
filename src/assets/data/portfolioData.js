// Centralized content for easy updates
export const NAV_LINKS = [
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "Portfolio", to: "portfolio" },
  { name: "Contact", to: "contact" }
];

export const CALENDLY_URL = "https://calendly.com/mark-angel-fernandez/discovery-call-30min"; // Replace with your link

export const TECH_STACK = ['Zapier', 'Make', 'n8n', 'GHL', 'HubSpot', 'Salesforce'];

export const SERVICE_DATA = [
  {
    title: "Zapier Workflow Automation",
    description: "Connect apps, orchestrate multi-step workflows, and enforce data quality.",
    details: ["Error handling & retries", "Webhooks & custom code", "Ops dashboards"]
  },
  {
    title: "Make (Integromat) Scenarios",
    description: "Branching logic and bulk operations at scale.",
    details: ["Routers & aggregators", "Rate limits & queues", "Scenario documentation"]
  },
  {
    title: "CRM & API Integrations",
    description: "Two-way syncs and lead lifecycle automation for HubSpot, Salesforce, and GHL.",
    details: ["Field mapping & dedupe", "Custom endpoints", "Attribution & analytics"]
  }
];

export const PORTFOLIO_DATA = [
  {
    id: 1,
    icon: 'OrangeAsterisk',
    title: "Unified Order & Lead Automation",
    description: "Streamlines order tracking, lead capture, and CRM updates cutting manual work, enhancing data accuracy, and ensuring your team responds faster to every opportunity.",
    tools: ['GoogleDrive', 'Hubspot', 'Airtable']
  },
  {
    id: 2,
    icon: 'PurpleStripes',
    title: "Smart Email Triage + Xero Export",
    description: "Stop drowning in emails. I'll help you cut through the clutter, block spam, and pull out the financial info you actually need saving you hours every week.",
    tools: ['Gmail', 'Xero', 'GoogleSheets']
  },
  {
    id: 3,
    icon: 'Link',
    title: "API/Webhook Automation & Logging",
    description: "Custom endpoints and robust logging infrastructure for scalable data handling and two-way CRM syncs.",
    tools: ['API', 'Zapier', 'Make']
  }
];
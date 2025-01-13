import { CDPDoc } from '../types';

export const cdpDocs: CDPDoc[] = [
  // Platform Overview docs
  {
    platform: 'zeotap',
    title: 'What is Zeotap',
    content: 'Zeotap is a Customer Intelligence Platform (CDP) that helps brands better understand their customers and make informed marketing decisions. Key features include:\n\n1. Customer Data Unification:\n   - Combines first-party and third-party data\n   - Creates unified customer profiles\n   - Resolves identities across devices\n\n2. Audience Management:\n   - Build and manage customer segments\n   - Create lookalike audiences\n   - Real-time audience activation\n\n3. Analytics & Insights:\n   - Customer journey analytics\n   - Predictive analytics\n   - ROI measurement\n\n4. Privacy & Compliance:\n   - GDPR and CCPA compliant\n   - Consent management\n   - Data security protocols',
    url: 'https://docs.zeotap.com/docs/introduction'
  },
  {
    platform: 'segment',
    title: 'What is Segment',
    content: 'Segment is a Customer Data Platform that helps businesses collect, clean, and control their customer data. Key capabilities include:\n\n1. Data Collection:\n   - Multiple source integrations\n   - Real-time event tracking\n   - Server-side APIs\n\n2. Data Governance:\n   - Data quality monitoring\n   - Schema management\n   - Privacy controls\n\n3. Integrations:\n   - 300+ pre-built integrations\n   - Custom destination support\n   - API access',
    url: 'https://segment.com/docs/getting-started/'
  },
  {
    platform: 'mparticle',
    title: 'What is mParticle',
    content: 'mParticle is an enterprise Customer Data Platform that simplifies customer data infrastructure. Core features include:\n\n1. Data Collection & Control:\n   - Cross-platform data collection\n   - Data quality rules\n   - Identity resolution\n\n2. Audience Management:\n   - Real-time segmentation\n   - Audience exports\n   - Look-alike modeling\n\n3. Privacy & Security:\n   - Consent management\n   - Data governance\n   - Security certifications',
    url: 'https://docs.mparticle.com/guides/getting-started/'
  },
  {
    platform: 'lytics',
    title: 'What is Lytics',
    content: 'Lytics is a Customer Data Platform focused on AI-driven marketing automation. Main features include:\n\n1. Machine Learning:\n   - Predictive analytics\n   - Content affinity\n   - Behavioral scoring\n\n2. Campaign Management:\n   - Cross-channel orchestration\n   - Real-time personalization\n   - A/B testing\n\n3. Data Management:\n   - Customer data unification\n   - Identity resolution\n   - Integration hub',
    url: 'https://docs.lytics.com/guide/introduction/'
  },
  // Keep existing implementation docs...
  {
    platform: 'zeotap',
    title: 'Data integration',
    content: 'To integrate data with Zeotap:\n\n1. Access the Integration Hub\n2. Choose integration type:\n   - Batch upload\n   - Real-time API\n   - SDK implementation\n3. Configure data source:\n   - Set up authentication\n   - Define data mapping\n   - Set update frequency\n4. Test the integration:\n   - Send sample data\n   - Verify in debug mode\n5. Monitor data quality\n6. Enable production data flow',
    url: 'https://docs.zeotap.com/docs/data-ingestion/'
  },
  // ... (keep all other existing documentation)
];
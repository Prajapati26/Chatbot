import Fuse from 'fuse.js';
import { cdpDocs } from '../data/cdpDocs';
import { CDP } from '../types';

const fuseOptions = {
  keys: [
    { name: 'platform', weight: 2 },
    { name: 'title', weight: 1.5 },
    { name: 'content', weight: 1 }
  ],
  threshold: 0.3,
  includeScore: true,
};

const fuse = new Fuse(cdpDocs, fuseOptions);

export function generateResponse(question: string): string {
  // Clean and normalize the question
  const normalizedQuestion = question.toLowerCase().trim();
  
  // Check if it's a "what is" question about a specific CDP
  const cdpPlatforms = {
    'zeotap': ['zeotap'],
    'segment': ['segment'],
    'mparticle': ['mparticle', 'mparticles'],
    'lytics': ['lytics']
  };

  for (const [platform, keywords] of Object.entries(cdpPlatforms)) {
    if (keywords.some(keyword => normalizedQuestion.includes(keyword))) {
      const platformDocs = cdpDocs.find(
        doc => doc.platform === platform && doc.title.toLowerCase().includes('what is')
      );
      if (platformDocs) {
        return `${platformDocs.content}\n\nLearn more at: ${platformDocs.url}`;
      }
    }
  }

  // Check if question is CDP-related
  const cdpKeywords = ['segment', 'mparticle', 'lytics', 'zeotap', 'cdp', 'customer data platform'];
  const isRelevant = cdpKeywords.some(keyword => normalizedQuestion.includes(keyword));

  if (!isRelevant) {
    return "I'm a CDP support chatbot. I can only help with questions related to Segment, mParticle, Lytics, and Zeotap platforms. Please ask me something about these CDPs!";
  }

  // Search for relevant documentation
  const searchResults = fuse.search(normalizedQuestion);
  
  if (searchResults.length === 0) {
    return "I couldn't find specific information about that. Could you please rephrase your question or be more specific about which CDP you're asking about?";
  }

  // Get the best matching result
  const bestMatch = searchResults[0];
  
  // If the score is too low, suggest clarification
  if (bestMatch.score && bestMatch.score > 0.6) {
    return "I'm not quite sure about that. Could you please be more specific about what you'd like to know? For example:\n\n" +
           "- What is Zeotap and what are its main features?\n" +
           "- How do I integrate data with Zeotap?\n" +
           "- How do I create user profiles in mParticle?\n" +
           "- How do I build segments in Lytics?";
  }

  // Format the response with clear steps
  const response = `${bestMatch.item.content}\n\nFor more detailed information, you can refer to the documentation at: ${bestMatch.item.url}`;

  return response;
}
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  throw new Error('Missing Firebase config env vars. Make sure NEXT_PUBLIC_FIREBASE_* are set.');
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// Initial seed data for the `aiTools` collection
const aiToolsSeed = [
  {
    name: 'Midjourney Free',
    description: 'AI-powered creative partner that transforms text into extraordinary visuals.',
    image:
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60',
    category: 'image',
  },
  {
    name: 'DALL-E',
    description: 'Generative AI that creates stunning images from text descriptions.',
    image:
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60',
    category: 'image',
  },
  {
    name: 'Stable Diffusion Free',
    description: 'Open-source text-to-image model that creates detailed artwork.',
    image:
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60',
    category: 'image',
  },
  {
    name: 'Runway ML',
    description: 'Creative suite powered by machine learning for video editing.',
    image:
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60',
    category: 'video',
  },
  {
    name: 'Jasper',
    description: 'AI copywriter that helps create marketing content 10x faster.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'writing',
  },
  {
    name: 'Copy.ai Free',
    description: 'Marketing copy generator that crafts compelling content instantly.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'writing',
  },
  {
    name: 'Grammarly',
    description: 'AI-powered writing assistant that improves grammar and clarity.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'writing',
  },
  {
    name: 'Notion AI',
    description: 'All-in-one workspace enhanced with AI for note-taking and organization.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'productivity',
  },
  {
    name: 'Synthesia Free',
    description: 'AI video creator that generates videos from text with virtual avatars.',
    image:
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60',
    category: 'video',
  },
  {
    name: 'Otter.ai',
    description: 'Voice meeting assistant that transcribes and summarizes conversations.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'productivity',
  },
  {
    name: 'Descript',
    description: 'Audio and video editor that treats media like text documents.',
    image:
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60',
    category: 'audio',
  },
  {
    name: 'Replit Ghostwriter',
    description: 'AI pair programmer that accelerates software development workflows.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'coding',
  },
  {
    name: 'GitHub Copilot Free',
    description: 'AI-powered code completion tool for developers and programmers.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'coding',
  },
  {
    name: 'Surfer SEO',
    description: 'Content optimization platform that improves search engine rankings.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'marketing',
  },
  {
    name: 'Frase',
    description: 'SEO content creation tool that helps rank higher in search results.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'marketing',
  },
  {
    name: 'Lumen5 Free',
    description: 'Social media video maker that converts blog posts to engaging videos.',
    image:
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60',
    category: 'video',
  },
  {
    name: 'Pictory',
    description: 'AI video generator that creates videos from articles and scripts.',
    image:
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60',
    category: 'video',
  },
  {
    name: 'Canva Text to Image Free',
    description: 'Design platform with AI tools for creating graphics and presentations.',
    image:
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60',
    category: 'design',
  },
  {
    name: 'Adobe Firefly',
    description: 'Creative AI tools for generating images, vectors, and digital art.',
    image:
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60',
    category: 'design',
  },
  {
    name: 'Leonardo AI',
    description: 'Generative AI platform for creating production-quality visual assets.',
    image:
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60',
    category: 'image',
  },
  {
    name: 'Uizard',
    description: 'AI-powered design tool that turns wireframes into beautiful UI designs.',
    image:
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60',
    category: 'design',
  },
  {
    name: 'Khroma Free',
    description: 'AI color tool that generates palettes and learns your color preferences.',
    image:
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60',
    category: 'design',
  },
  {
    name: 'Remove.bg',
    description: 'Background remover that isolates subjects from photos instantly.',
    image:
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60',
    category: 'image',
  },
  {
    name: 'Cleanup.pictures',
    description: 'AI image editing tool that removes unwanted objects seamlessly.',
    image:
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60',
    category: 'image',
  },
  {
    name: 'Heyday',
    description: 'AI flashcard app that supercharges studying and memory retention.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'education',
  },
  {
    name: 'Socratic Free',
    description: 'Homework helper that explains math, science, and other subjects visually.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'education',
  },
  {
    name: 'Quizlet',
    description: 'Study app with AI-powered tools for learning languages and subjects.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'education',
  },
  {
    name: 'Duolingo Max',
    description: 'Language learning app with AI tutors for immersive practice sessions.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'education',
  },
  {
    name: 'ElevenLabs Free',
    description: 'Text-to-speech platform that creates realistic voiceovers instantly.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'audio',
  },
  {
    name: 'Murf.ai',
    description: 'Voice generator that produces studio-quality voiceovers from text.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'audio',
  },
  {
    name: 'AssemblyAI',
    description: 'Speech-to-text API that transcribes audio with high accuracy.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'audio',
  },
  {
    name: 'Deepgram Free',
    description: 'Voice AI platform for transcription, summarization, and analysis.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'audio',
  },
  {
    name: 'Anthropic Claude',
    description: 'Helpful, honest, and harmless AI assistant for complex reasoning.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'writing',
  },
  {
    name: 'Google Bard Free',
    description: 'Conversational AI chatbot developed by Google for creative tasks.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'writing',
  },
  {
    name: 'Perplexity AI',
    description: 'AI-powered search engine that answers questions with cited sources.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'research',
  },
  {
    name: 'You.com',
    description: 'Privacy-focused AI search engine that respects user confidentiality.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'research',
  },
  {
    name: 'Character.AI Free',
    description: 'Platform for creating and chatting with AI characters and personas.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'entertainment',
  },
  {
    name: 'Hugging Face',
    description: 'Community platform for machine learning models and datasets.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'development',
  },
  {
    name: 'Replicate',
    description: 'Cloud platform for running machine learning models in production.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'development',
  },
  {
    name: 'Weights & Biases Free',
    description: 'Developer platform for tracking ML experiments and datasets.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'development',
  },
  {
    name: 'Pinecone',
    description:
      'Vector database for building and deploying similarity search applications.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'development',
  },
  {
    name: 'LangChain',
    description: 'Framework for developing applications powered by language models.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'development',
  },
  {
    name: 'Streamlit Free',
    description: 'Framework for creating interactive data apps and dashboards quickly.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'development',
  },
  {
    name: 'Gradio',
    description: 'Toolkit for building machine learning demos and interfaces fast.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'development',
  },
  {
    name: 'Vercel AI SDK',
    description: 'Library for building AI-powered user interfaces and experiences.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'development',
  },
  {
    name: 'Auto-GPT Free',
    description: 'Autonomous AI agent that executes goals independently with prompting.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60',
    category: 'automation',
  },
];

async function main() {
  console.log(`Seeding ${aiToolsSeed.length} AI tools into Firestore...`);

  const colRef = collection(db, 'aiTools');

  for (const tool of aiToolsSeed) {
    try {
      const docRef = await addDoc(colRef, tool);
      console.log(`Added '${tool.name}' with id: ${docRef.id}`);
    } catch (err) {
      console.error(`Failed to add '${tool.name}':`, err);
    }
  }

  console.log('Seeding complete.');
}

main().catch((err) => {
  console.error('Unexpected error while seeding:', err);
});

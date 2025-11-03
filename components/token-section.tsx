"use client"

import { useState } from "react"
import { ChevronDown, Check } from "lucide-react"
import { useSearch } from '@/contexts/SearchContext'

// Function to generate unique gradients for each card
const getGradient = (index: number) => {
  const gradients = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
  ];
  return gradients[index % gradients.length];
};

// AI showcase data (50 tools total) with categories
const aiTools = [
  {
    name: "ChatGPT",
    description: "Conversational AI that writes, codes, and reasons like a human.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "writing"
  },
  {
    name: "Midjourney Free",
    description: "AI-powered creative partner that transforms text into extraordinary visuals.",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60",
    category: "image"
  },
  {
    name: "DALL-E",
    description: "Generative AI that creates stunning images from text descriptions.",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60",
    category: "image"
  },
  {
    name: "Stable Diffusion Free",
    description: "Open-source text-to-image model that creates detailed artwork.",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60",
    category: "image"
  },
  {
    name: "Runway ML",
    description: "Creative suite powered by machine learning for video editing.",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60",
    category: "video"
  },
  {
    name: "Jasper",
    description: "AI copywriter that helps create marketing content 10x faster.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "writing"
  },
  {
    name: "Copy.ai Free",
    description: "Marketing copy generator that crafts compelling content instantly.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "writing"
  },
  {
    name: "Grammarly",
    description: "AI-powered writing assistant that improves grammar and clarity.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "writing"
  },
  {
    name: "Notion AI",
    description: "All-in-one workspace enhanced with AI for note-taking and organization.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "productivity"
  },
  {
    name: "Synthesia Free",
    description: "AI video creator that generates videos from text with virtual avatars.",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60",
    category: "video"
  },
  {
    name: "Otter.ai",
    description: "Voice meeting assistant that transcribes and summarizes conversations.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "productivity"
  },
  {
    name: "Descript",
    description: "Audio and video editor that treats media like text documents.",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60",
    category: "audio"
  },
  {
    name: "Replit Ghostwriter",
    description: "AI pair programmer that accelerates software development workflows.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "coding"
  },
  {
    name: "GitHub Copilot Free",
    description: "AI-powered code completion tool for developers and programmers.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "coding"
  },
  {
    name: "Surfer SEO",
    description: "Content optimization platform that improves search engine rankings.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "marketing"
  },
  {
    name: "Frase",
    description: "SEO content creation tool that helps rank higher in search results.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "marketing"
  },
  {
    name: "Lumen5 Free",
    description: "Social media video maker that converts blog posts to engaging videos.",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60",
    category: "video"
  },
  {
    name: "Pictory",
    description: "AI video generator that creates videos from articles and scripts.",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60",
    category: "video"
  },
  {
    name: "Canva Text to Image Free",
    description: "Design platform with AI tools for creating graphics and presentations.",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60",
    category: "design"
  },
  {
    name: "Adobe Firefly",
    description: "Creative AI tools for generating images, vectors, and digital art.",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60",
    category: "design"
  },
  {
    name: "Leonardo AI",
    description: "Generative AI platform for creating production-quality visual assets.",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60",
    category: "image"
  },
  {
    name: "Uizard",
    description: "AI-powered design tool that turns wireframes into beautiful UI designs.",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60",
    category: "design"
  },
  {
    name: "Khroma Free",
    description: "AI color tool that generates palettes and learns your color preferences.",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60",
    category: "design"
  },
  {
    name: "Remove.bg",
    description: "Background remover that isolates subjects from photos instantly.",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60",
    category: "image"
  },
  {
    name: "Cleanup.pictures",
    description: "AI image editing tool that removes unwanted objects seamlessly.",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=256&q=60",
    category: "image"
  },
  {
    name: "Heyday",
    description: "AI flashcard app that supercharges studying and memory retention.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "education"
  },
  {
    name: "Socratic Free",
    description: "Homework helper that explains math, science, and other subjects visually.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "education"
  },
  {
    name: "Quizlet",
    description: "Study app with AI-powered tools for learning languages and subjects.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "education"
  },
  {
    name: "Duolingo Max",
    description: "Language learning app with AI tutors for immersive practice sessions.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "education"
  },
  {
    name: "ElevenLabs Free",
    description: "Text-to-speech platform that creates realistic voiceovers instantly.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "audio"
  },
  {
    name: "Murf.ai",
    description: "Voice generator that produces studio-quality voiceovers from text.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "audio"
  },
  {
    name: "AssemblyAI",
    description: "Speech-to-text API that transcribes audio with high accuracy.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "audio"
  },
  {
    name: "Deepgram Free",
    description: "Voice AI platform for transcription, summarization, and analysis.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "audio"
  },
  {
    name: "Anthropic Claude",
    description: "Helpful, honest, and harmless AI assistant for complex reasoning.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "writing"
  },
  {
    name: "Google Bard Free",
    description: "Conversational AI chatbot developed by Google for creative tasks.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "writing"
  },
  {
    name: "Perplexity AI",
    description: "AI-powered search engine that answers questions with cited sources.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "research"
  },
  {
    name: "You.com",
    description: "Privacy-focused AI search engine that respects user confidentiality.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "research"
  },
  {
    name: "Character.AI Free",
    description: "Platform for creating and chatting with AI characters and personas.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "entertainment"
  },
  {
    name: "Hugging Face",
    description: "Community platform for machine learning models and datasets.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "development"
  },
  {
    name: "Replicate",
    description: "Cloud platform for running machine learning models in production.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "development"
  },
  {
    name: "Weights & Biases Free",
    description: "Developer platform for tracking ML experiments and datasets.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "development"
  },
  {
    name: "Pinecone",
    description: "Vector database for building and deploying similarity search applications.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "development"
  },
  {
    name: "LangChain",
    description: "Framework for developing applications powered by language models.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "development"
  },
  {
    name: "Streamlit Free",
    description: "Framework for creating interactive data apps and dashboards quickly.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "development"
  },
  {
    name: "Gradio",
    description: "Toolkit for building machine learning demos and interfaces fast.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "development"
  },
  {
    name: "Vercel AI SDK",
    description: "Library for building AI-powered user interfaces and experiences.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "development"
  },
  {
    name: "Auto-GPT Free",
    description: "Autonomous AI agent that executes goals independently with prompting.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
    category: "automation"
  }
];

export default function TokenSection() {
  const [activeTab, setActiveTab] = useState("following")
  const [sortBy, setSortBy] = useState("name")
  const [sortOrder, setSortOrder] = useState("asc")
  const [showOnlyFree, setShowOnlyFree] = useState(false)
  const { searchTerm, activeCategory } = useSearch()

  // Function to sort tools based on current sort settings
  const sortedTools = [...aiTools].sort((a, b) => {
    if (sortBy === "name") {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    }
    return 0;
  });

  // Filter tools based on free filter setting
  let freeFilteredTools = showOnlyFree 
    ? sortedTools.filter(tool => tool.name.toLowerCase().includes("free") || tool.description.toLowerCase().includes("free"))
    : sortedTools;

  // Filter tools based on category
  if (activeCategory !== "all") {
    freeFilteredTools = freeFilteredTools.filter(tool => tool.category === activeCategory);
  }

  // Filter tools based on search term
  const filteredAndSortedTools = searchTerm
    ? freeFilteredTools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        tool.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : freeFilteredTools;

  // Function to handle sort button click
  const handleSortClick = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Function to toggle free filter
  const toggleFreeFilter = () => {
    setShowOnlyFree(!showOnlyFree);
  };

  return (
    <div id="token-section" className="bg-black px-12 py-8">
      {/* Search and Filters */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex gap-4 ml-auto">
          <button 
            className="bg-gray-900 border border-gray-700 px-4 py-2 text-yellow-400 font-semibold hover:bg-gray-800 transition flex items-center gap-2"
            onClick={handleSortClick}
          >
            Sort by {sortBy} ({sortOrder === "asc" ? "A-Z" : "Z-A"})
            <ChevronDown size={16} />
          </button>
          
        </div>

        <div className="flex items-center gap-4 ml-8">
          <span className="text-gray-400">free</span>
          <button 
            className={`w-6 h-6 rounded border-2 flex items-center justify-center ${showOnlyFree ? 'bg-yellow-400 border-yellow-400' : 'border-gray-600'}`}
            onClick={toggleFreeFilter}
          >
            {showOnlyFree && <Check size={16} className="text-black" />}
          </button>
        </div>
      </div>

      {/* AI Tools Grid with Scroll */}
      <div className="max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-4">
          {filteredAndSortedTools.map((tool, index) => (
            <div 
              key={index} 
              className="rounded-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
              style={{
                background: getGradient(index)
              }}
            >
              <div className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-white/5 flex items-center justify-center">
                  <img 
                    src={tool.image} 
                    alt={`${tool.name} logo`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                <p className="text-neutral-300 text-sm">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
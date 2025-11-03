"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function TokenSection() {
  const [activeTab, setActiveTab] = useState("following")

  // AI showcase data (50 tools total)
  const aiTools = [
    {
      name: "ChatGPT",
      description: "Conversational AI that writes, codes, and reasons like a human.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Claude",
      description: "Anthropic's assistant for deep reasoning and safe outputs.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Gemini",
      description: "Google's multimodal AI for text, images and code.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Mistral 7B",
      description: "Open-source LLM optimized for speed and reasoning.",
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "LLaMA 3",
      description: "Meta's LLM for research and scalable generation.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "DALL·E 3",
      description: "Image generation that understands complex prompts.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Midjourney",
      description: "Art-first AI producing cinematic, stylized visuals.",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Runway ML",
      description: "Text-to-video and creative editing tools for creators.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Pika Labs",
      description: "Instant text-to-video generation with cinematic style.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Hunyuan Image 3.0",
      description: "Tencent's high-fidelity text-to-image model with MoE scale.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Stable Diffusion XL",
      description: "Open-source image model for realistic and stylized art.",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Leonardo AI",
      description: "Design-first AI for concept art, game assets and 3D proxies.",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Synthesia",
      description: "Create talking-head videos using AI avatars and scripts.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Recraft",
      description: "AI logos and vector art in seconds.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Cody AI",
      description: "Internal company AI for docs, search, and context-aware help.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Notion AI",
      description: "Write, summarize, and brainstorm inside your workspace.",
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Firefly",
      description: "Adobe's creative AI suite for designers and artists.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Blackbox AI",
      description: "Explain, search and generate code with intelligent completions.",
      image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Copilot",
      description: "GitHub's AI teammate for code suggestions and snippets.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Tabnine",
      description: "Smart autocomplete to speed up your coding workflow.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Codeium",
      description: "Free AI coding assistant with wide language support.",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Perplexity AI",
      description: "Search with conversational answers and citations.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Character.AI",
      description: "Build or chat with personality-driven AI characters.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Janitor AI",
      description: "Build custom bots with moderation controls and context.",
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Play.ht",
      description: "Natural TTS voices for podcasts, narration, and apps.",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "ElevenLabs",
      description: "Ultra-realistic voice cloning and emotional TTS.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "HeyGen",
      description: "Avatar video creation from plain text scripts.",
      image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Descript",
      description: "Edit audio & video like a document using AI transcripts.",
      image: "https://images.unsplash.com/photo-1506619216599-9d16d090f36e?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Kaiber",
      description: "Turn art and music into animated, loopable visuals.",
      image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Animoto AI",
      description: "Create short, polished videos from photos and clips.",
      image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "GrammarlyGO",
      description: "AI assistant for rewriting, tone and grammar improvements.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Jasper AI",
      description: "Marketing-focused content generator for teams.",
      image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Writesonic",
      description: "SEO & marketing content generation with AI flows.",
      image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Copy.ai",
      description: "Fast marketing copy and idea generation for teams and creators.",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "QuillBot",
      description: "Paraphrase, summarize and refine your writing quickly.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Suno AI",
      description: "AI music creation — melodies, beats and vocals from text.",
      image: "https://images.unsplash.com/photo-1526178614208-4f0c9b48c6f8?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Boomy",
      description: "Instantly produce and release AI-made songs.",
      image: "https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Soundful",
      description: "Royalty-free AI music for videos, games and podcasts.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Aiva",
      description: "Compose thematic scores and soundtracks with AI help.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "ChatDOC",
      description: "Query PDFs and docs conversationally — instant answers.",
      image: "https://images.unsplash.com/photo-1511452885602-6e8d7fde2b8f?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "PDF.ai",
      description: "Ask questions to PDFs — extracts answers and contextually summarizes.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Lumen5",
      description: "Transform articles into engaging videos automatically.",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Murf AI",
      description: "Studio-quality voiceovers generated from text.",
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Replit Ghostwriter",
      description: "Code inside Replit with helpful AI completions and fixes.",
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Chatbase",
      description: "Train chatbots on your data without writing code.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Durable AI",
      description: "Build a business website automatically from text inputs.",
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Looka",
      description: "AI logo & brand kit generator for instant identities.",
      image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Beautiful.ai",
      description: "AI-powered slide design to build beautiful presentations fast.",
      image: "https://images.unsplash.com/photo-1506619216599-9d16d090f36e?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Gamma",
      description: "Create scroll-based, modern presentations with AI.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=256&q=60"
    },
    {
      name: "Ideogram",
      description: "High-fidelity image generation with precise text rendering.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=256&q=60"
    }
  ];

  return (
    <div className="bg-black px-12 py-8">
      {/* Tabs */}
      <div className="flex gap-8 mb-8 border-b border-gray-800">
        
        
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4 mb-8">
        

        <div className="flex gap-4 ml-auto">
          <button className="bg-gray-900 border border-gray-700 px-4 py-2 text-yellow-400 font-semibold hover:bg-gray-800 transition flex items-center gap-2">
            sort by sort
            <ChevronDown size={16} />
          </button>
          
        </div>

        <div className="flex items-center gap-4 ml-8">
          <span className="text-gray-400">free</span>
          
        </div>
      </div>

      {/* AI Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {aiTools.map((tool, index) => (
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
  )
}

// Function to get gradient based on index
function getGradient(index: number): string {
  const gradients = [
    "linear-gradient(135deg,#0f1724 0%,#1f1144 100%)",
    "linear-gradient(135deg,#081229 0%,#2b0b3b 100%)",
    "linear-gradient(135deg,#071021 0%,#2a153d 100%)",
    "linear-gradient(135deg,#07101b 0%,#1b1030 100%)",
    "linear-gradient(135deg,#04101a 0%,#28102f 100%)",
    "linear-gradient(135deg,#03101a 0%,#2b0a44 100%)",
    "linear-gradient(135deg,#08101f 0%,#3b0b3b 100%)",
    "linear-gradient(135deg,#071028 0%,#2a1140 100%)",
    "linear-gradient(135deg,#04101a 0%,#2e0b3f 100%)",
    "linear-gradient(135deg,#091228 0%,#260b3a 100%)",
    "linear-gradient(135deg,#06101a 0%,#2d0b3c 100%)",
    "linear-gradient(135deg,#081026 0%,#320b40 100%)",
    "linear-gradient(135deg,#031021 0%,#2a0738 100%)",
    "linear-gradient(135deg,#081228 0%,#2f083b 100%)",
    "linear-gradient(135deg,#05101a 0%,#24103a 100%)",
    "linear-gradient(135deg,#071126 0%,#2d0c3b 100%)",
    "linear-gradient(135deg,#061028 0%,#2b083b 100%)",
    "linear-gradient(135deg,#041229 0%,#2d093a 100%)",
    "linear-gradient(135deg,#02101a 0%,#2b0836 100%)",
    "linear-gradient(135deg,#06111f 0%,#2b0a3a 100%)",
    "linear-gradient(135deg,#051025 0%,#2b0837 100%)",
    "linear-gradient(135deg,#071028 0%,#2e0838 100%)",
    "linear-gradient(135deg,#031029 0%,#2a0a38 100%)",
    "linear-gradient(135deg,#061126 0%,#2a0838 100%)",
    "linear-gradient(135deg,#081025 0%,#2d0936 100%)",
    "linear-gradient(135deg,#041028 0%,#300a3f 100%)",
    "linear-gradient(135deg,#071127 0%,#2c0836 100%)",
    "linear-gradient(135deg,#051026 0%,#28083a 100%)",
    "linear-gradient(135deg,#041025 0%,#2b0735 100%)",
    "linear-gradient(135deg,#07102a 0%,#2f0b3c 100%)",
    "linear-gradient(135deg,#061028 0%,#2b0737 100%)",
    "linear-gradient(135deg,#041028 0%,#2c0839 100%)",
    "linear-gradient(135deg,#071028 0%,#2e083a 100%)",
    "linear-gradient(135deg,#061026 0%,#2a0836 100%)",
    "linear-gradient(135deg,#041026 0%,#28073a 100%)",
    "linear-gradient(135deg,#071029 0%,#2d0a3a 100%)",
    "linear-gradient(135deg,#051026 0%,#2b0738 100%)",
    "linear-gradient(135deg,#06112a 0%,#30093b 100%)",
    "linear-gradient(135deg,#041027 0%,#2c0837 100%)",
    "linear-gradient(135deg,#071028 0%,#300a3a 100%)",
    "linear-gradient(135deg,#031027 0%,#2a0835 100%)",
    "linear-gradient(135deg,#051028 0%,#2d0b39 100%)",
    "linear-gradient(135deg,#061027 0%,#2c0836 100%)",
    "linear-gradient(135deg,#041026 0%,#2b0836 100%)",
    "linear-gradient(135deg,#051025 0%,#2a0735 100%)",
    "linear-gradient(135deg,#061027 0%,#2b0837 100%)",
    "linear-gradient(135deg,#051026 0%,#2a0836 100%)",
    "linear-gradient(135deg,#041026 0%,#2b0836 100%)",
    "linear-gradient(135deg,#061128 0%,#2c0838 100%)",
    "linear-gradient(135deg,#07112a 0%,#300b3b 100%)"
  ];
  
  return gradients[index % gradients.length];
}
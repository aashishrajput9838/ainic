"use client"

import { useState } from "react"
import TokenCard from "./token-card"
import { ChevronDown, Github } from "lucide-react"

export default function TokenSection() {
  const [activeTab, setActiveTab] = useState("terminal")

  const tokens = [
    {
      name: "Hunyuan Image 3.0",
      ticker: "Free",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EKiKd7wYWQdAP3MZWH6zu0v4WaFwJX.png",
      description:
        "**Hunyuan Image 3.0** is Tencent's next-generation open-source text-to-image AI model powered by an 80-billion-parameter Mixture-of-Experts architecture. It generates **ultra-realistic, context-aware visuals** with exceptional precision in detail, emotion, and text rendering. Supporting **multi-language input** and **image-to-image editing**, it's one of the most advanced and commercially usable AI image models available today.",
      marketCap: "Text to Image",
      replies: "Free",
    },
    {
      name: "Claude 3 Opus",
      ticker: "Paid / Free Trial",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Anthropic_logo.svg",
      description:
        "**Claude 3 Opus** by Anthropic is a state-of-the-art language model built for **deep reasoning, writing, coding, and analysis**. Known for its conversational intelligence and ethical design, Claude 3 Opus can summarize complex topics, draft professional content, and power enterprise-level AI assistants with remarkable fluency and accuracy.",
      marketCap: "Text Generation",
      replies: "Free Trial / Pro",
    },
    {
      name: "Runway Gen-3 Alpha",
      ticker: "Premium",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Runway_logo.svg",
      description:
        "**Runway Gen-3 Alpha** is a powerful **text-to-video model** that brings your ideas to life in cinematic motion. Designed for creators, marketers, and filmmakers, it offers **realistic motion, emotion, and scene control** - enabling stunning short clips directly from a prompt or reference image, all within an intuitive web interface.",
      marketCap: "Text to Video",
      replies: "Pro / Enterprise",
    },
    {
      name: "Midjourney",
      ticker: "Premium",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Midjourney_Emblem.png",
      description:
        "**Midjourney** is a leading AI art generator that transforms text prompts into **stunning, high-quality visuals** with unique artistic flair. Known for its creative style and detail-rich aesthetics, it's perfect for designers, storytellers, and brands looking for **visual inspiration** powered by AI imagination.",
      marketCap: "Text to Image",
      replies: "Pro",
    },
    {
      name: "Synthesia",
      ticker: "Premium",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Synthesia_logo.png",
      description:
        "**Synthesia** is an advanced **AI video creation platform** that lets you generate videos with realistic human avatars simply by typing a script. It's widely used for **training, marketing, and education**, saving hours of filming while maintaining a professional studio-like appearance.",
      marketCap: "Text to Video",
      replies: "Pro / Enterprise",
    },
    {
      name: "GitHub Copilot",
      ticker: "Paid / Free Trial",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/20/GitHub_Copilot_logo.svg",
      description:
        "**GitHub Copilot**, powered by OpenAI's Codex, is your **AI pair programmer** that writes code, suggests fixes, and automates repetitive tasks inside your IDE. It helps developers code faster and smarter in multiple languages like **Python, Java, and JavaScript**.",
      marketCap: "Code Generation",
      replies: "Pro / Team",
    },
    {
      name: "ElevenLabs",
      ticker: "Free / Pro",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/ElevenLabs_logo.png",
      description:
        "**ElevenLabs** is a powerful **AI voice generation and cloning platform** that delivers natural, emotional, and human-like speech in multiple languages. Ideal for content creators, podcasts, and audiobooks, it offers unmatched control over tone, pacing, and realism.",
      marketCap: "Text to Speech",
      replies: "Free / Pro",
    },
    {
      name: "Notion AI",
      ticker: "Premium Add-on",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
      description:
        "**Notion AI** supercharges productivity by helping users **write, summarize, brainstorm, and plan** directly within the Notion workspace. It understands context, generates creative ideas, and refines text instantly - turning your notes into organized, polished output.",
      marketCap: "Productivity AI",
      replies: "Paid Add-on",
    },
    // New AI Tools
    {
      name: "ChatGPT",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
      description: "Conversational AI that writes, codes, and reasons like a human.",
      marketCap: "Text Generation",
      replies: "Free / Pro",
    },
    {
      name: "Claude",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=256&q=60",
      description: "Anthropic's assistant for deep reasoning and safe outputs.",
      marketCap: "Text Generation",
      replies: "Free / Pro",
    },
    {
      name: "Gemini",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
      description: "Google's multimodal AI for text, images and code.",
      marketCap: "Multimodal AI",
      replies: "Free / Pro",
    },
    {
      name: "Mistral 7B",
      ticker: "Open Source",
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=256&q=60",
      description: "Open-source LLM optimized for speed and reasoning.",
      marketCap: "Text Generation",
      replies: "Open Source",
    },
    {
      name: "LLaMA 3",
      ticker: "Open Source",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=256&q=60",
      description: "Meta's LLM for research and scalable generation.",
      marketCap: "Text Generation",
      replies: "Open Source",
    },
    {
      name: "DALL·E 3",
      ticker: "Paid / Free Trial",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=256&q=60",
      description: "Image generation that understands complex prompts.",
      marketCap: "Text to Image",
      replies: "Paid / Free Trial",
    },
    {
      name: "Midjourney",
      ticker: "Premium",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=256&q=60",
      description: "Art-first AI producing cinematic, stylized visuals.",
      marketCap: "Text to Image",
      replies: "Premium",
    },
    {
      name: "Runway ML",
      ticker: "Premium",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=256&q=60",
      description: "Text-to-video and creative editing tools for creators.",
      marketCap: "Text to Video",
      replies: "Premium",
    },
    {
      name: "Pika Labs",
      ticker: "Premium",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=256&q=60",
      description: "Instant text-to-video generation with cinematic style.",
      marketCap: "Text to Video",
      replies: "Premium",
    },
    {
      name: "Hunyuan Image 3.0",
      ticker: "Free",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=256&q=60",
      description: "Tencent's high-fidelity text-to-image model with MoE scale.",
      marketCap: "Text to Image",
      replies: "Free",
    },
    // Additional 10 AI Tools
    {
      name: "Stable Diffusion XL",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=256&q=60",
      description: "Open-source image model for realistic and stylized art.",
      marketCap: "Text to Image",
      replies: "Free / Pro",
    },
    {
      name: "Leonardo AI",
      ticker: "Premium",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=256&q=60",
      description: "Design-first AI for concept art, game assets and 3D proxies.",
      marketCap: "Text to Image",
      replies: "Premium",
    },
    {
      name: "Synthesia",
      ticker: "Premium",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=256&q=60",
      description: "Create talking-head videos using AI avatars and scripts.",
      marketCap: "Text to Video",
      replies: "Premium",
    },
    {
      name: "Recraft",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=256&q=60",
      description: "AI logos and vector art in seconds.",
      marketCap: "Text to Image",
      replies: "Free / Pro",
    },
    {
      name: "Cody AI",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=256&q=60",
      description: "Internal company AI for docs, search, and context-aware help.",
      marketCap: "Code Generation",
      replies: "Free / Pro",
    },
    {
      name: "Notion AI",
      ticker: "Premium Add-on",
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=256&q=60",
      description: "Write, summarize, and brainstorm inside your workspace.",
      marketCap: "Productivity AI",
      replies: "Premium Add-on",
    },
    {
      name: "Firefly",
      ticker: "Premium",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=256&q=60",
      description: "Adobe's creative AI suite for designers and artists.",
      marketCap: "Text to Image",
      replies: "Premium",
    },
    {
      name: "Blackbox AI",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=256&q=60",
      description: "Explain, search and generate code with intelligent completions.",
      marketCap: "Code Generation",
      replies: "Free / Pro",
    },
    {
      name: "Copilot",
      ticker: "Premium",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=256&q=60",
      description: "GitHub's AI teammate for code suggestions and snippets.",
      marketCap: "Code Generation",
      replies: "Premium",
    },
    {
      name: "Tabnine",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=256&q=60",
      description: "Smart autocomplete to speed up your coding workflow.",
      marketCap: "Code Generation",
      replies: "Free / Pro",
    },
    // Additional 10 AI Tools
    {
      name: "Codeium",
      ticker: "Free",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=256&q=60",
      description: "Free AI coding assistant with wide language support.",
      marketCap: "Code Generation",
      replies: "Free",
    },
    {
      name: "Perplexity AI",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=256&q=60",
      description: "Search with conversational answers and citations.",
      marketCap: "Text Generation",
      replies: "Free / Pro",
    },
    {
      name: "Character.AI",
      ticker: "Free",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=256&q=60",
      description: "Build or chat with personality-driven AI characters.",
      marketCap: "Text Generation",
      replies: "Free",
    },
    {
      name: "Janitor AI",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=256&q=60",
      description: "Build custom bots with moderation controls and context.",
      marketCap: "Text Generation",
      replies: "Free / Pro",
    },
    {
      name: "Play.ht",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=256&q=60",
      description: "Natural TTS voices for podcasts, narration, and apps.",
      marketCap: "Text to Speech",
      replies: "Free / Pro",
    },
    {
      name: "ElevenLabs",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=256&q=60",
      description: "Ultra-realistic voice cloning and emotional TTS.",
      marketCap: "Text to Speech",
      replies: "Free / Pro",
    },
    {
      name: "HeyGen",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=256&q=60",
      description: "Avatar video creation from plain text scripts.",
      marketCap: "Text to Video",
      replies: "Free / Pro",
    },
    {
      name: "Descript",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1506619216599-9d16d090f36e?auto=format&fit=crop&w=256&q=60",
      description: "Edit audio & video like a document using AI transcripts.",
      marketCap: "Text to Video",
      replies: "Free / Pro",
    },
    {
      name: "Kaiber",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=256&q=60",
      description: "Turn art and music into animated, loopable visuals.",
      marketCap: "Text to Video",
      replies: "Free / Pro",
    },
    {
      name: "Animoto AI",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=256&q=60",
      description: "Create short, polished videos from photos and clips.",
      marketCap: "Text to Video",
      replies: "Free / Pro",
    },
    // Additional 10 AI Tools
    {
      name: "GrammarlyGO",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=256&q=60",
      description: "AI assistant for rewriting, tone and grammar improvements.",
      marketCap: "Text Generation",
      replies: "Free / Pro",
    },
    {
      name: "Jasper AI",
      ticker: "Premium",
      image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=256&q=60",
      description: "Marketing-focused content generator for teams.",
      marketCap: "Text Generation",
      replies: "Premium",
    },
    {
      name: "Writesonic",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=256&q=60",
      description: "SEO & marketing content generation with AI flows.",
      marketCap: "Text Generation",
      replies: "Free / Pro",
    },
    {
      name: "Copy.ai",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=256&q=60",
      description: "Fast marketing copy and idea generation for teams and creators.",
      marketCap: "Text Generation",
      replies: "Free / Pro",
    },
    {
      name: "QuillBot",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=256&q=60",
      description: "Paraphrase, summarize and refine your writing quickly.",
      marketCap: "Text Generation",
      replies: "Free / Pro",
    },
    {
      name: "Suno AI",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1526178614208-4f0c9b48c6f8?auto=format&fit=crop&w=256&q=60",
      description: "AI music creation - melodies, beats and vocals from text.",
      marketCap: "Text to Audio",
      replies: "Free / Pro",
    },
    {
      name: "Boomy",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&fit=crop&w=256&q=60",
      description: "Instantly produce and release AI-made songs.",
      marketCap: "Text to Audio",
      replies: "Free / Pro",
    },
    {
      name: "Soundful",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=256&q=60",
      description: "Royalty-free AI music for videos, games and podcasts.",
      marketCap: "Text to Audio",
      replies: "Free / Pro",
    },
    {
      name: "Aiva",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=256&q=60",
      description: "Compose thematic scores and soundtracks with AI help.",
      marketCap: "Text to Audio",
      replies: "Free / Pro",
    },
    {
      name: "ChatDOC",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1511452885602-6e8d7fde2b8f?auto=format&fit=crop&w=256&q=60",
      description: "Query PDFs and docs conversationally - instant answers.",
      marketCap: "Document Analysis",
      replies: "Free / Pro",
    },
    // Final 10 AI Tools
    {
      name: "PDF.ai",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=256&q=60",
      description: "Ask questions to PDFs - extracts answers and contextually summarizes.",
      marketCap: "Document Analysis",
      replies: "Free / Pro",
    },
    {
      name: "Lumen5",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=256&q=60",
      description: "Transform articles into engaging videos automatically.",
      marketCap: "Text to Video",
      replies: "Free / Pro",
    },
    {
      name: "Murf AI",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=256&q=60",
      description: "Studio-quality voiceovers generated from text.",
      marketCap: "Text to Speech",
      replies: "Free / Pro",
    },
    {
      name: "Replit Ghostwriter",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=256&q=60",
      description: "Code inside Replit with helpful AI completions and fixes.",
      marketCap: "Code Generation",
      replies: "Free / Pro",
    },
    {
      name: "Chatbase",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=256&q=60",
      description: "Train chatbots on your data without writing code.",
      marketCap: "Text Generation",
      replies: "Free / Pro",
    },
    {
      name: "Durable AI",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=256&q=60",
      description: "Build a business website automatically from text inputs.",
      marketCap: "Web Development",
      replies: "Free / Pro",
    },
    {
      name: "Looka",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=256&q=60",
      description: "AI logo & brand kit generator for instant identities.",
      marketCap: "Text to Image",
      replies: "Free / Pro",
    },
    {
      name: "Beautiful.ai",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1506619216599-9d16d090f36e?auto=format&fit=crop&w=256&q=60",
      description: "AI-powered slide design to build beautiful presentations fast.",
      marketCap: "Presentation Design",
      replies: "Free / Pro",
    },
    {
      name: "Gamma",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=256&q=60",
      description: "Create scroll-based, modern presentations with AI.",
      marketCap: "Presentation Design",
      replies: "Free / Pro",
    },
    {
      name: "Ideogram",
      ticker: "Free / Pro",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=256&q=60",
      description: "High-fidelity image generation with precise text rendering.",
      marketCap: "Text to Image",
      replies: "Free / Pro",
    },
  ]

  return (
    <div className="bg-black px-12 py-8">
      {/* Tabs */}
      <div className="flex gap-8 mb-8 border-b border-gray-800">
        <button
          onClick={() => setActiveTab("following")}
          className={`pb-4 font-semibold transition ${
            activeTab === "following" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-white"
          }`}
        >
          Following
        </button>
        <button
          onClick={() => setActiveTab("terminal")}
          className={`pb-4 font-semibold transition ${
            activeTab === "terminal" ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-400 hover:text-white"
          }`}
        >
          Terminal
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 max-w-xs">
          <input
            type="text"
            placeholder="Search for aitools..."
            className="w-full bg-gray-900 border border-gray-700 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
          />
        </div>

        <div className="flex gap-4 ml-auto">
          <button className="bg-gray-900 border border-gray-700 px-4 py-2 text-yellow-400 font-semibold hover:bg-gray-800 transition flex items-center gap-2">
            sort by alphabet
            <ChevronDown size={16} />
          </button>
        </div>

        <div className="flex items-center gap-4 ml-8">
          <span className="text-gray-400">Show free</span>
          <button className="w-8 h-8 bg-yellow-400 rounded-full hover:bg-yellow-300 transition flex items-center justify-center">
            <Github size={16} />
          </button>
        </div>
      </div>

      {/* Token Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tokens.map((token, index) => (
          <TokenCard key={`${token.name}-${token.ticker}-${index}`} {...token} />
        ))}
      </div>
    </div>
  )
}

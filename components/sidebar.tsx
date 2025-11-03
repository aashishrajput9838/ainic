import { X, Send, MessageCircle, Instagram, Linkedin, Github } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-20 bg-black border-r border-gray-800 flex flex-col items-center py-8 gap-8">
      <a 
        href="https://www.linkedin.com/in/aashishrajput9838/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-yellow-400 transition p-3"
      >
        <Linkedin size={24} />
      </a>
      <a 
        href="https://github.com/aashishrajput9838" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-yellow-400 transition p-3"
      >
        <Github size={24} />
      </a>
      <a 
        href="https://www.instagram.com/aspirinexar/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-yellow-400 transition p-3"
      >
        <Instagram size={24} />
      </a>
    </div>
  )
}
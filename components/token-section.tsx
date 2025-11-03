"use client"

import { useState } from "react"
import TokenCard from "./token-card"
import { ChevronDown } from "lucide-react"

export default function TokenSection() {
  const [activeTab, setActiveTab] = useState("following")

  const tokens = [
    {
      name: "TRONDOG",
      ticker: "$TRDO",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EKiKd7wYWQdAP3MZWH6zu0v4WaFwJX.png",
      description:
        "Introducing the newest dog in town—TronDog! This is not a pump and dump project; we are focused on building a stro...",
      marketCap: "4.40k",
      replies: "01",
    },
    {
      name: "Dogebb",
      ticker: "dogebb",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EKiKd7wYWQdAP3MZWH6zu0v4WaFwJX.png",
      description: "The main match of the year, Trump the MAGA against The Mustang Home Joe.",
      marketCap: "4.40k",
      replies: "01",
    },
    {
      name: "Elk",
      ticker: "Elk",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EKiKd7wYWQdAP3MZWH6zu0v4WaFwJX.png",
      description: "The main match of the user, Trump the MAGA against The Mustang Home Joe.",
      marketCap: "4.40k",
      replies: "01",
    },
  ]

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

      {/* Token Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tokens.map((token) => (
          <TokenCard key={token.ticker} {...token} />
        ))}
      </div>
    </div>
  )
}

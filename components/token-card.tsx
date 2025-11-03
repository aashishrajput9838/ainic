interface TokenCardProps {
  name: string
  ticker: string
  image: string
  description: string
  marketCap: string
  replies: string
}

export default function TokenCard({ name, ticker, image, description, marketCap, replies }: TokenCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-yellow-400 transition">
      {/* Card Header with Image */}
      <div className="flex items-center gap-4 p-4 border-b border-gray-800">
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex-shrink-0 overflow-hidden">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-bold text-white">{name}</h3>
          <p className="text-gray-400 text-sm">{ticker}</p>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4">
        <p className="text-gray-400 text-sm leading-relaxed mb-6">{description}</p>

        {/* Stats */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Market Cap</span>
            <span className="text-yellow-400 font-semibold">{marketCap}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Replies</span>
            <span className="text-yellow-400 font-semibold">{replies}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

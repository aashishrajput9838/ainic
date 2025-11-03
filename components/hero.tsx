export default function Hero() {
  return (
    <div className="relative h-96">
      {/* Background video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 h-full flex flex-col justify-center px-12 max-w-2xl">
        <h1 className="text-6xl font-bold mb-6 leading-tight">Ainic | The AI Playground You'll Never Want to Leave.</h1>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Ainic isn't just another AI website — it's your personal playground of intelligence and creativity.
          Built for dreamers, creators, and doers, Ainic brings together a powerful suite of AI tools that help you write, design, code, generate, and automate — all in one beautifully smart platform.

          From crafting stunning content to building complex logic with just a click, Ainic makes technology feel effortless, elegant, and a little bit addictive.
          It's not just about saving time — it's about making you feel unstoppable.
        </p>

        <div className="mb-8">
          <p className="text-yellow-400 text-lg font-semibold">Followers: 11k</p>
        </div>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search for aitools"
            className="flex-1 bg-black/60 border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
          />
          <button className="bg-yellow-400 text-black px-8 py-3 font-semibold hover:bg-yellow-300 transition">
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

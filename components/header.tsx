export default function Header() {
  return (
    <header className="bg-black/80 backdrop-blur border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">ainic</div>

        <nav className="flex items-center gap-8">
          <a href="#" className="text-gray-400 hover:text-white transition">
            Text to Speech
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Text to Video
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Text to Image
          </a>
          
        </nav>

        <button className="bg-yellow-400 text-black px-6 py-2 font-semibold hover:bg-yellow-300 transition flex items-center gap-2">
          Logout
        </button>
      </div>
    </header>
  )
}
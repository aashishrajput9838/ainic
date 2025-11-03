import Header from "@/components/header"
import Hero from "@/components/hero"
import Sidebar from "@/components/sidebar"
import TokenSection from "@/components/token-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Hero />
          <TokenSection />
        </main>
      </div>
    </div>
  )
}
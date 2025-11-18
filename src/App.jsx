import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background subtle grid */}
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(1000px_600px_at_-10%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(800px_400px_at_120%_120%,rgba(8,145,178,0.15),transparent)]" />

      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-8 mt-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-300">© {new Date().getFullYear()} AR Rahim — Web Designer</p>
          <div className="text-sm text-slate-400">Available for freelance</div>
        </div>
      </footer>
    </div>
  )
}

export default App

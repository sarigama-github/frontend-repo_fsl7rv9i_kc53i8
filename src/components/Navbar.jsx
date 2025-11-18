import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-slate-200 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </a>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNav = (e) => {
    const href = e.currentTarget.getAttribute('href')
    if (href?.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-xl bg-slate-900/50 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex h-16 items-center justify-between px-4">
            <a href="#home" className="flex items-center gap-2" onClick={handleNav}>
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 shadow-[0_0_25px_rgba(59,130,246,0.6)]" />
              <span className="font-semibold tracking-tight text-white">AR Rahim</span>
            </a>

            <nav className="hidden md:flex items-center gap-2">
              <NavLink href="#work" onClick={handleNav}>Work</NavLink>
              <NavLink href="#about" onClick={handleNav}>About</NavLink>
              <NavLink href="#contact" onClick={handleNav}>Contact</NavLink>
              <a
                href="#contact"
                onClick={handleNav}
                className="ml-2 inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
              >
                Hire Me
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/10"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-1">
                <NavLink href="#work" onClick={handleNav}>Work</NavLink>
                <NavLink href="#about" onClick={handleNav}>About</NavLink>
                <NavLink href="#contact" onClick={handleNav}>Contact</NavLink>
                <a
                  href="#contact"
                  onClick={handleNav}
                  className="mt-2 inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30"
                >
                  Hire Me
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

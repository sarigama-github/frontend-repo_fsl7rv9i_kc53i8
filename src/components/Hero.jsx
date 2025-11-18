import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for contrast (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-slate-900"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            Tech • Portfolio • Interactive • Playful • Modern
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            AR Rahim
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-xl">
            Web Designer crafting immersive, conversion-friendly websites with a focus on motion and modern aesthetics.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all">
              View Work
            </a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-200 hover:bg-white/10 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

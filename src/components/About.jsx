import React from 'react'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">About</h2>
            <p className="mt-4 text-slate-300">
              I’m AR Rahim, a web designer blending aesthetics with performance. I craft interfaces that feel alive, communicate clearly, and drive results. My process focuses on research, rapid prototyping, and motion as a narrative tool.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-200/90">
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">UI/UX Design</li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">Webflow & Framer</li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">Design Systems</li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">Motion & 3D</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500/40 to-cyan-500/40 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-8">
              <h3 className="text-white font-semibold">Process</h3>
              <ol className="mt-4 space-y-3 text-slate-300 text-sm">
                <li>1. Discover goals and audience</li>
                <li>2. Wireframe flows</li>
                <li>3. Visual exploration</li>
                <li>4. Motion & interaction</li>
                <li>5. Ship & iterate</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

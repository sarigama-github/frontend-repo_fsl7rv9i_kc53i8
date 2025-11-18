import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // In a future step we can wire this to backend; for now, simulate
    setTimeout(() => setStatus('Thanks! I will get back to you soon.'), 800)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Let’s build something</h2>
          <p className="mt-2 text-slate-300">Tell me about your project and timeline.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-200 mb-1">Name</label>
              <input required className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-200 mb-1">Email</label>
              <input type="email" required className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-200 mb-1">Project details</label>
              <textarea rows="5" required className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-2.5 font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all">
              Send Inquiry
            </button>
            <span className="text-sm text-slate-300">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}

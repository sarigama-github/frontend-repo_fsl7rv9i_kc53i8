import React from 'react'

const projects = [
  {
    title: 'Neon Studio',
    desc: 'Creative agency site with bold typography and glassmorphism.',
    tags: ['Brand', 'Webflow', '3D'],
    link: '#',
  },
  {
    title: 'Aria Commerce',
    desc: 'Ecommerce homepage focused on motion and conversion.',
    tags: ['UI/UX', 'Motion', 'Shopify'],
    link: '#',
  },
  {
    title: 'Orbital SaaS',
    desc: 'Marketing site with product-led storytelling and gradients.',
    tags: ['SaaS', 'Design', 'Framer'],
    link: '#',
  },
]

function ProjectCard({ title, desc, tags, link }) {
  return (
    <a href={link} className="group block rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <p className="mt-2 text-slate-300 text-sm">{desc}</p>
        </div>
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 opacity-70 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs text-slate-200/80 bg-white/5 border border-white/10 px-2 py-1 rounded-md">
            {t}
          </span>
        ))}
      </div>
    </a>
  )
}

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(600px_200px_at_80%_80%,rgba(8,145,178,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Selected Work</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">A mix of recent designs exploring motion, depth, and clarity.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

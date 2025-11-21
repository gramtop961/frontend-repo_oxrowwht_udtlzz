import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Interactive from './components/Interactive'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950">
      <Hero />
      <Features />
      <Interactive />
      <CTA />
      <footer className="relative z-10 mx-auto max-w-7xl px-6 pb-16 text-center text-sm text-slate-400">
        Built for speed — edit text, colors, and connect payments anytime.
      </footer>
    </div>
  )
}

export default App

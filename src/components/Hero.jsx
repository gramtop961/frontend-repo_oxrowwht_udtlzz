import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(8,47,73,0.35),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            New: Fintech-ready landing page generator
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Build a polished landing page in minutes
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-200/90">
            Paste your prompt and get a fully functional, mobile‑ready site with interactive forms, calculators, tabs, and payment‑ready sections. Modern, minimalist, and conversion‑focused.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400">
              Generate my page
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 backdrop-blur transition hover:bg-white/10">
              Explore features
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-300/80">
            <span>Interactive forms</span>
            <span className="h-1 w-1 rounded-full bg-slate-400/50" />
            <span>Built-in tabs</span>
            <span className="h-1 w-1 rounded-full bg-slate-400/50" />
            <span>Payment ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import React from 'react';
import { CheckCircle2, CreditCard, Smartphone, Settings, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-5 w-5 text-blue-400" />,
    title: 'Auto-generated UI',
    desc: 'Get a complete landing page with polished sections and modern animations.'
  },
  {
    icon: <Settings className="h-5 w-5 text-blue-400" />,
    title: 'Editable & extensible',
    desc: 'Tweak text, swap colors, and extend components without touching layouts.'
  },
  {
    icon: <Smartphone className="h-5 w-5 text-blue-400" />,
    title: 'Mobile-first',
    desc: 'Responsive design that looks perfect on phones, tablets, and desktops.'
  },
  {
    icon: <CreditCard className="h-5 w-5 text-blue-400" />,
    title: 'Payment ready',
    desc: 'Hook up Stripe or other providers to start accepting payments fast.'
  },
];

function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Everything you need</h2>
        <p className="mt-3 text-slate-300">
          From forms and tabs to calculators and payment sections — your page ships fully interactive.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
            <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-blue-500/10 p-2">
              {f.icon}
            </div>
            <h3 className="text-white">{f.title}</h3>
            <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Ready out of the box
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;

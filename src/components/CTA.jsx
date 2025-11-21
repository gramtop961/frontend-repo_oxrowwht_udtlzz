import React from 'react';

function CTA() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-xl">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Ready to launch?</h3>
            <p className="mt-1 text-white/90">Generate your site now, add your details, and go live with a custom domain.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-medium text-slate-900 transition hover:bg-slate-100">
              Get started
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20">
              See features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;

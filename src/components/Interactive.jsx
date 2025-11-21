import React, { useState } from 'react';

function Interactive() {
  const [amount, setAmount] = useState(250);
  const [months, setMonths] = useState(6);
  const [rate, setRate] = useState(8.9); // APR

  const monthlyRate = rate / 100 / 12;
  const payment = months > 0 ? (amount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)) : 0;
  const total = payment * months;

  return (
    <section id="get-started" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-xl font-semibold text-white">Mini payment calculator</h3>
          <p className="mt-1 text-slate-300">Estimate costs instantly. Adjust values to see updates.</p>

          <div className="mt-6 space-y-5">
            <div>
              <label className="flex items-center justify-between text-sm text-slate-300">
                <span>Amount</span>
                <span className="font-medium text-white">${'{'}amount{'}'}</span>
              </label>
              <input type="range" min="100" max="5000" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="mt-2 w-full accent-blue-500" />
            </div>
            <div>
              <label className="flex items-center justify-between text-sm text-slate-300">
                <span>Months</span>
                <span className="font-medium text-white">{months}</span>
              </label>
              <input type="range" min="3" max="24" value={months} onChange={(e) => setMonths(Number(e.target.value))} className="mt-2 w-full accent-blue-500" />
            </div>
            <div>
              <label className="flex items-center justify-between text-sm text-slate-300">
                <span>APR</span>
                <span className="font-medium text-white">{rate}%</span>
              </label>
              <input type="range" min="0" max="24" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="mt-2 w-full accent-blue-500" />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-xs text-slate-400">Monthly</div>
                <div className="mt-1 text-lg font-semibold text-white">${'{'}payment.toFixed(2){'}'}</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-xs text-slate-400">Total</div>
                <div className="mt-1 text-lg font-semibold text-white">${'{'}total.toFixed(2){'}'}</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-xs text-slate-400">APR</div>
                <div className="mt-1 text-lg font-semibold text-white">{rate}%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-xl font-semibold text-white">Quick contact</h3>
          <p className="mt-1 text-slate-300">Send a message and we’ll reach out. Configure email notifications anytime.</p>
          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/60" placeholder="Your name" />
            <input type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/60" placeholder="Email address" />
            <textarea rows="4" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/60" placeholder="Tell us about your project" />
            <button className="w-full rounded-xl bg-blue-500 px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400">Send message</button>
            <p className="text-xs text-slate-400">You can connect email or payments later from settings.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Interactive;

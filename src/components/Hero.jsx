export default function Hero() {
  return (
    <section id="home" className="pt-28 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-b from-yellow-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_-10%,rgba(250,204,21,0.2),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 ring-1 ring-yellow-200">
              Local • Certified • 25-Year Warranty
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Go Solar. Save More.
            </h1>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              Premium residential and commercial solar installations designed for maximum savings and reliability.
              From consultation to monitoring—we handle everything.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#quote" className="inline-flex items-center justify-center rounded-md bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 font-semibold shadow-sm transition-colors">
                Get a Free Quote
              </a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 font-semibold transition-colors">
                See Our Work
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <Stat label="Installs" value="1,200+" />
              <Stat label="Avg. Bill Savings" value="58%" />
              <Stat label="Years in Business" value="10+" />
            </div>
          </div>
          <div className="lg:pl-12">
            <div className="relative rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200">
              <img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop" alt="Solar panels on a modern home" className="rounded-xl object-cover max-h-[480px] w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div>
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  )
}

export default function Benefits() {
  const items = [
    {
      title: "Lower Your Bills",
      desc: "Cut electricity costs by up to 60% with high‑efficiency panels and smart inverters.",
      icon: "💡",
    },
    {
      title: "Turnkey Install",
      desc: "Design, permits, installation and monitoring—all handled by our in‑house team.",
      icon: "🛠️",
    },
    {
      title: "Top‑Tier Warranty",
      desc: "25‑year performance and workmanship coverage for peace of mind.",
      icon: "🛡️",
    },
    {
      title: "Battery Ready",
      desc: "Add storage anytime for backup power and peak‑rate savings.",
      icon: "🔋",
    },
  ]

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Why Go Solar with Us</h2>
          <p className="mt-3 text-slate-700">A local, certified team delivering clean energy systems built to last.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.title} className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow transition-shadow">
              <div className="text-3xl">{i.icon}</div>
              <h3 className="mt-4 font-semibold text-slate-900">{i.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

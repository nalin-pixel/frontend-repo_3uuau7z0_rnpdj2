export default function Reviews() {
  const reviews = [
    {
      name: "Alicia P.",
      text: "Seamless experience from the first call. Our bill dropped by more than half!",
      rating: 5,
    },
    {
      name: "Marcus L.",
      text: "Great communication and clean install. Monitoring app is super helpful.",
      rating: 5,
    },
    {
      name: "Dana R.",
      text: "They handled permits and HOA. Professional team and solid warranty.",
      rating: 5,
    },
  ]

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">What Customers Say</h2>
          <p className="mt-3 text-slate-700">We pride ourselves on quality installs and responsive service.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
              <div className="flex items-center gap-2 text-yellow-500">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="mt-3 text-slate-700">“{r.text}”</p>
              <div className="mt-4 text-sm font-semibold text-slate-900">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

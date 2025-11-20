export default function Projects() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop",
      title: "Modern Suburban Home",
      desc: "8.4 kW array with Enphase microinverters and 25-year warranty.",
    },
    {
      image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdWJ1cmJhbiUyMEhvbWV8ZW58MHwwfHx8MTc2MzYxNDM5OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
      title: "Ranch Style Home",
      desc: "6.2 kW system offsetting 72% of annual usage.",
    },
    {
      image: "https://images.unsplash.com/photo-1546556590-a7707da727f1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSYW5jaCUyMFN0eWxlJTIwSG9tZXxlbnwwfDB8fHwxNzYzNjE0NDAzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
      title: "Commercial Rooftop",
      desc: "112 kW ballasted array, project completed in 6 weeks.",
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Recent Projects</h2>
            <p className="mt-3 text-slate-700">A look at a few installations from local homes and businesses.</p>
          </div>
          <a href="#quote" className="hidden sm:inline-flex rounded-md bg-slate-900 text-white px-4 py-2 font-medium hover:bg-slate-800">Get a Quote</a>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm">
              <img src={p.image} alt={p.title} className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

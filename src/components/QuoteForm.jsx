import { useState } from "react"

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    average_monthly_bill: "",
    roof_type: "",
    message: "",
    prefers_contact_method: "email",
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true })

    try {
      const base = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"
      const res = await fetch(`${base}/api/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          average_monthly_bill: form.average_monthly_bill ? parseFloat(form.average_monthly_bill) : undefined,
        }),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const data = await res.json()
      setStatus({ success: true, id: data.id })
      setForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        average_monthly_bill: "",
        roof_type: "",
        message: "",
        prefers_contact_method: "email",
      })
    } catch (err) {
      setStatus({ error: err.message })
    }
  }

  return (
    <section id="quote" className="py-16 sm:py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_-20%,rgba(250,204,21,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Get a Free Solar Quote</h2>
            <p className="mt-3 text-slate-300">Tell us a bit about your home or business and we'll follow up with a custom proposal.</p>
            <ul className="mt-6 space-y-3 text-slate-300 text-sm">
              <li>• No obligation. Local certified installers.</li>
              <li>• 25-year panel and workmanship warranty.</li>
              <li>• Design, permits, installation and monitoring included.</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-xl ring-1 ring-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Full name" name="name" value={form.name} onChange={handleChange} required />
              <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
              <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} />
              <Input label="Address" name="address" value={form.address} onChange={handleChange} />
              <Input label="Avg. monthly bill (USD)" name="average_monthly_bill" value={form.average_monthly_bill} onChange={handleChange} />
              <Input label="Roof type" name="roof_type" value={form.roof_type} onChange={handleChange} />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Preferred contact</label>
              <select name="prefers_contact_method" value={form.prefers_contact_method} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:ring-yellow-500 focus:border-yellow-500">
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:ring-yellow-500 focus:border-yellow-500" placeholder="Tell us anything helpful..." />
            </div>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 font-semibold shadow-sm transition-colors">Request Quote</button>

            {status?.loading && <p className="mt-3 text-slate-600">Sending...</p>}
            {status?.success && (
              <p className="mt-3 text-green-700 bg-green-50 border border-green-200 rounded-md p-3">Thanks! Your request was received. Reference ID: {status.id}</p>
            )}
            {status?.error && (
              <p className="mt-3 text-red-700 bg-red-50 border border-red-200 rounded-md p-3">Something went wrong: {status.error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700">{label}</label>
      <input {...props} className="mt-1 w-full rounded-md border-slate-300 focus:ring-yellow-500 focus:border-yellow-500" />
    </div>
  )
}

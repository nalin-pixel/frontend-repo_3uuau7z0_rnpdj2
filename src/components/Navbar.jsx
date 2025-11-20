import { Menu, Sun } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Benefits", href: "#benefits" },
    { label: "Projects", href: "#projects" },
    { label: "Reviews", href: "#reviews" },
    { label: "Quote", href: "#quote" },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-flex h-9 w-9 rounded-full bg-yellow-400/90 text-white items-center justify-center shadow-inner">
            <Sun className="h-5 w-5 text-yellow-700" />
          </span>
          BrightGrid Solar
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-yellow-600 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#quote" className="inline-flex items-center rounded-md bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 font-medium shadow-sm transition-colors">
            Free Quote
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700">
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block py-2 text-slate-700">
                {item.label}
              </a>
            ))}
            <a href="#quote" className="block w-full text-center rounded-md bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 font-medium shadow-sm">
              Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

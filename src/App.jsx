import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
import QuoteForm from './components/QuoteForm'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Benefits />
      <Projects />
      <Reviews />
      <QuoteForm />
      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} BrightGrid Solar. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#quote" className="hover:text-yellow-400">Get a Quote</a>
          <a href="/test" className="hover:text-yellow-400">System Status</a>
        </div>
      </div>
    </footer>
  )
}

export default App

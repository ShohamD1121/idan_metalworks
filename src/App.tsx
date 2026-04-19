import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <div className="min-h-screen bg-metal-black text-steel-light font-body">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-metal-border py-8 text-center">
        <p className="font-subheading text-steel-dark text-sm tracking-widest">
          © {new Date().getFullYear()} עידן מטאל וורקס · כל הזכויות שמורות
        </p>
      </footer>
      <WhatsAppFloat />
    </div>
  )
}

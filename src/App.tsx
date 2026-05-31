import { useState, useEffect } from 'react'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'

// Pages
import Home from './pages/Home'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Products from './pages/Products'
import Partners from './pages/Partners'
import Industries from './pages/Industries'
import WhyChooseUs from './pages/WhyChooseUs'
import Clients from './pages/Clients'
import About from './pages/About'
import Contact from './pages/Contact'
import TwentyShowcase from './components/TwentyDesignSystem'

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home')

  useEffect(() => {
    // Function to parse location hash
    const parseHash = () => {
      const hash = window.location.hash.replace('#', '')
      const validPages = [
        'home',
        'services',
        'solutions',
        'products',
        'partners',
        'industries',
        'why-choose-us',
        'clients',
        'about',
        'contact',
        'twenty-design-system',
      ]
      
      if (!hash || hash === '/' || hash === '') {
        setCurrentPage('home')
      } else if (validPages.includes(hash)) {
        setCurrentPage(hash)
      } else {
        // Fallback to home for invalid hashes
        setCurrentPage('home')
      }
    }

    // Initial parse on load
    parseHash()

    // Add event listener for hash changes
    window.addEventListener('hashchange', parseHash)
    return () => window.removeEventListener('hashchange', parseHash)
  }, [])

  // Sync document title for SEO
  useEffect(() => {
    const formattedTitle = currentPage
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    document.title =
      currentPage === 'twenty-design-system'
        ? 'Twenty.com Design System Visual Reference Suite'
        : currentPage === 'home'
        ? 'Alif Info Tech | Transforming Ideas into Digital Solutions'
        : `Alif Info Tech | ${formattedTitle}`
  }, [currentPage])

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [currentPage])

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />
      case 'solutions':
        return <Solutions setCurrentPage={setCurrentPage} />
      case 'products':
        return <Products setCurrentPage={setCurrentPage} />
      case 'partners':
        return <Partners setCurrentPage={setCurrentPage} />
      case 'industries':
        return <Industries setCurrentPage={setCurrentPage} />
      case 'why-choose-us':
        return <WhyChooseUs setCurrentPage={setCurrentPage} />
      case 'clients':
        return <Clients />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      case 'twenty-design-system':
        return <TwentyShowcase />
      default:
        return <Home setCurrentPage={setCurrentPage} />
    }
  }

  if (currentPage === 'twenty-design-system') {
    return <TwentyShowcase />
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F4F0] text-[#1A1A1A] antialiased selection:bg-[#0055FF]/25 selection:text-[#1A1A1A]">
      {/* Sticky Header */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer Column Grids */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Floating Action Elements */}
      <WhatsAppWidget />
    </div>
  )
}

export default App

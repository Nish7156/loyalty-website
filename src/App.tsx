import './index.css'
import { ThemeProvider } from './hooks/ThemeProvider'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import Features from './components/Features'
import InteractiveDemo from './components/InteractiveDemo'
import WhyLoyalty from './components/WhyLoyalty'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function AppInner() {
  const { isDark } = useTheme()
  return (
    <div
      style={{
        background: isDark ? '#0A0A0F' : '#FAFAFA',
        color: isDark ? '#F0F0FF' : '#0A0A1A',
        minHeight: '100vh',
        fontFamily: "'Inter', system-ui, sans-serif",
        transition: 'background 0.3s ease, color 0.3s ease',
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <InteractiveDemo />
        <WhyLoyalty />
        <Testimonials />
        {/* <Pricing /> */}
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}

export default App

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  // { label: 'Pricing', href: '#pricing' },
  { label: 'Demo', href: '#demo' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: springEase }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20'
            : 'bg-white/80 backdrop-blur-xl border-b border-black/[0.08] shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="/logo.png"
              alt="Loyalty Rewards"
              className="h-10 w-auto object-contain"
              style={{ filter: isDark ? 'brightness(1)' : 'brightness(0.92)' }}
            />
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isDark
                    ? 'text-[#8888AA] hover:text-[#F0F0FF] hover:bg-white/[0.06]'
                    : 'text-[#666680] hover:text-[#0A0A1A] hover:bg-black/[0.04]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                isDark
                  ? 'bg-white/[0.06] hover:bg-white/[0.10] text-[#F0F0FF]'
                  : 'bg-black/[0.04] hover:bg-black/[0.08] text-[#0A0A1A]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <Sun size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <Moon size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* CTA Button */}
            <motion.a
              href="https://loyalty.webtriggers.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              style={{ position: 'relative' }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>Get Started</span>
            </motion.a>
          </div>

          {/* Mobile: Theme + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                isDark ? 'bg-white/[0.06] text-[#F0F0FF]' : 'bg-black/[0.04] text-[#0A0A1A]'
              }`}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div key="sun-m" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun size={16} />
                  </motion.div>
                ) : (
                  <motion.div key="moon-m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon size={16} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                isDark ? 'bg-white/[0.06] text-[#F0F0FF]' : 'bg-black/[0.04] text-[#0A0A1A]'
              }`}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X size={18} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: springEase }}
            className={`md:hidden overflow-hidden border-t ${
              isDark ? 'bg-[#111118]/95 backdrop-blur-xl border-white/[0.08]' : 'bg-white/95 backdrop-blur-xl border-black/[0.08]'
            }`}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                    isDark
                      ? 'text-[#8888AA] hover:text-[#F0F0FF] hover:bg-white/[0.06]'
                      : 'text-[#666680] hover:text-[#0A0A1A] hover:bg-black/[0.04]'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.07, duration: 0.3 }}
                href="https://loyalty.webtriggers.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2 justify-center text-sm"
                style={{ position: 'relative' }}
              >
                <span style={{ position: 'relative', zIndex: 1 }}>Get Started Free</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

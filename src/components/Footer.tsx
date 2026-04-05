import { motion } from 'framer-motion'
import { Globe, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features', external: false },
    { label: 'How It Works', href: '#how-it-works', external: false },
    { label: 'Demo', href: '#demo', external: false },
  ],
  Company: [
    { label: 'WebTriggers', href: 'https://www.webtriggers.online', external: true },
    { label: 'Contact', href: 'mailto:hello@webtriggers.online', external: true },
  ],
  Legal: [
    { label: 'Terms & Conditions', href: '/terms', external: false },
    { label: 'Privacy Policy', href: '/privacy', external: false },
  ],
}

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-[#07070C]">
      {/* Gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #6C63FF, #FF6B6B, #00D4AA, transparent)' }}
      />

      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(rgba(108,99,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(108, 99, 255, 0.08) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.div className="flex items-center mb-4" whileHover={{ scale: 1.02 }}>
              <span
                className="text-2xl font-black tracking-tight"
                style={{
                  background: 'linear-gradient(135deg, #6C63FF 0%, #A78BFA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.03em',
                }}
              >
                Loyalty
              </span>
            </motion.div>
            <p className="text-sm leading-relaxed mb-6 text-[#8888AA] max-w-xs">
              The modern loyalty platform that rewards customers automatically. No plastic cards, no app downloads — just results.
            </p>
            {/* Website link */}
            <motion.a
              href="https://www.webtriggers.online"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#8888AA',
              }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.10)' }}
              whileTap={{ scale: 0.95 }}
              aria-label="WebTriggers Website"
            >
              <Globe size={16} />
            </motion.a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-bold tracking-widest uppercase text-[#8888AA] mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-[#8888AA] hover:text-[#F0F0FF] transition-colors duration-200 flex items-center gap-1"
                      >
                        {link.label}
                      </a>
                    ) : link.href.startsWith('#') ? (
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-sm text-[#8888AA] hover:text-[#F0F0FF] transition-colors duration-200 text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-[#8888AA] hover:text-[#F0F0FF] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="rounded-2xl p-6 sm:p-8 mb-10 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{
            background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(255,107,107,0.1))',
            border: '1px solid rgba(108,99,255,0.25)',
          }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-48 h-48 rounded-full" style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.15), transparent)', filter: 'blur(30px)' }} />
          </div>
          <div className="relative text-center sm:text-left">
            <h3 className="text-lg font-bold text-white mb-1">Ready to start building loyalty?</h3>
            <p className="text-sm text-[#8888AA]">Join 500+ businesses already using Loyalty. Setup takes 5 minutes.</p>
          </div>
          <motion.a
            href="https://loyalty.webtriggers.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, #6C63FF, #8B84FF)' }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(108,99,255,0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started Free
            <ArrowUpRight size={15} />
          </motion.a>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs text-[#8888AA]">
            © {new Date().getFullYear()} <a href="https://www.webtriggers.online" target="_blank" rel="noopener noreferrer" className="hover:text-[#F0F0FF] transition-colors duration-200">WebTriggers</a> · Loyalty Platform. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-xs text-[#8888AA] hover:text-[#F0F0FF] transition-colors duration-200">Privacy</Link>
            <Link to="/terms" className="text-xs text-[#8888AA] hover:text-[#F0F0FF] transition-colors duration-200">Terms</Link>
            <div className="flex items-center gap-1.5 text-xs text-[#8888AA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA] animate-pulse" />
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

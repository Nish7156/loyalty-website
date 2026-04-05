import { motion } from 'framer-motion'
import { Globe, Link, Code2, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Demo', href: '#demo' },
    { label: 'Changelog', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Press Kit', href: '#' },
  ],
  Legal: [
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'GDPR', href: '#' },
  ],
}

const socialLinks = [
  { icon: Globe, label: 'Website', href: '#', color: '#6C63FF' },
  { icon: Link, label: 'LinkedIn', href: '#', color: '#0077B5' },
  { icon: Code2, label: 'GitHub', href: '#', color: '#F0F0FF' },
]

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
            <motion.div
              className="flex items-center mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <img src="/logo.png" alt="Loyalty Rewards" className="h-10 w-auto object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
            </motion.div>
            <p className="text-sm leading-relaxed mb-6 text-[#8888AA] max-w-xs">
              The modern loyalty platform that rewards customers automatically. No plastic cards, no app downloads — just results.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#8888AA',
                    }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.10)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={16} />
                  </motion.a>
                )
              })}
            </div>
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
                    {link.href.startsWith('#') ? (
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-sm text-[#8888AA] hover:text-[#F0F0FF] transition-colors duration-200 text-left flex items-center gap-1 group"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-[#8888AA] hover:text-[#F0F0FF] transition-colors duration-200 flex items-center gap-1 group"
                      >
                        {link.label}
                      </a>
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
            <p className="text-sm text-[#8888AA]">Join 500+ businesses already using Loyalty. Setup takes 20 minutes.</p>
          </div>
          <motion.a
            href="https://loyalty.webtriggers.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
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
            © {new Date().getFullYear()} Loyalty Platform. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-[#8888AA] hover:text-[#F0F0FF] transition-colors duration-200">Privacy</a>
            <a href="#" className="text-xs text-[#8888AA] hover:text-[#F0F0FF] transition-colors duration-200">Terms</a>
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

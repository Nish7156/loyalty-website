import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, CheckCircle2 } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { fadeUpVariant, staggerContainer } from '../lib/variants'

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

function LoyaltyCardMockup() {
  const { isDark } = useTheme()
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, rotate: 3 }}
      animate={{ opacity: 1, x: 0, rotate: 3 }}
      transition={{ duration: 0.9, delay: 0.4, ease: springEase }}
      className="relative hidden lg:block"
      style={{ animation: 'float 6s ease-in-out infinite' }}
    >
      {/* Main card */}
      <div
        className="w-[320px] rounded-2xl p-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #6C63FF 0%, #8B84FF 50%, #FF6B6B 100%)',
          boxShadow: '0 40px 80px rgba(108, 99, 255, 0.4), 0 0 0 1px rgba(255,255,255,0.1)',
        }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-32 h-32 rounded-full border border-white" />
          <div className="absolute top-8 right-8 w-20 h-20 rounded-full border border-white" />
          <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full border border-white" />
        </div>

        {/* Card header */}
        <div className="flex items-center justify-between mb-8 relative">
          <div>
            <div className="text-white/60 text-xs font-medium tracking-widest uppercase mb-0.5">Loyalty Card</div>
            <div className="text-white font-bold text-lg">Sunshine Cafe</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
            <Star size={18} className="text-white fill-white" />
          </div>
        </div>

        {/* Points display */}
        <div className="mb-6 relative">
          <div className="text-white/60 text-xs mb-1">Total Points</div>
          <div className="text-white font-black text-4xl tracking-tight">2,450</div>
          <div className="text-white/70 text-sm mt-1">Next reward at 3,000 pts</div>
        </div>

        {/* Progress bar */}
        <div className="mb-6 relative">
          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '82%' }}
              transition={{ duration: 1.5, delay: 0.8, ease: springEase }}
            />
          </div>
          <div className="flex justify-between text-white/60 text-xs mt-1.5">
            <span>0</span>
            <span>82% complete</span>
            <span>3,000</span>
          </div>
        </div>

        {/* Card footer */}
        <div className="flex items-center justify-between relative">
          <div>
            <div className="text-white/60 text-xs mb-0.5">Member since</div>
            <div className="text-white font-semibold text-sm">Jan 2024</div>
          </div>
          <div className="text-right">
            <div className="text-white/60 text-xs mb-0.5">Tier</div>
            <div className="text-white font-semibold text-sm">Gold ✦</div>
          </div>
        </div>

        {/* Shine effect */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
          }}
        />
      </div>

      {/* Floating notification card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.1, ease: springEase }}
        className="absolute -bottom-8 -left-12 w-48 rounded-xl p-3 flex items-center gap-3"
        style={{
          background: isDark ? '#16161F' : '#FFFFFF',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.08)'}`,
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        }}
      >
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D4AA] to-[#00B894] flex items-center justify-center flex-shrink-0">
          <CheckCircle2 size={16} className="text-white" />
        </div>
        <div>
          <div className={`text-xs font-semibold ${isDark ? 'text-[#F0F0FF]' : 'text-[#0A0A1A]'}`}>+50 pts earned!</div>
          <div className="text-[10px] text-[#8888AA]">Just now</div>
        </div>
      </motion.div>

      {/* QR floating chip */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.3, ease: springEase }}
        className="absolute -top-6 -right-8 rounded-xl px-3 py-2 flex items-center gap-2"
        style={{
          background: isDark ? '#16161F' : '#FFFFFF',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.08)'}`,
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        }}
      >
        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#6C63FF] to-[#8B84FF] flex items-center justify-center flex-shrink-0">
          <div className="grid grid-cols-2 gap-0.5 p-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-[1px]" />
            ))}
          </div>
        </div>
        <div className={`text-xs font-semibold ${isDark ? 'text-[#F0F0FF]' : 'text-[#0A0A1A]'}`}>Scan to earn</div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const { isDark } = useTheme()

  const handleDemoClick = () => {
    const el = document.querySelector('#demo')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob 1 - top left violet */}
        <div
          className="blob-1 absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(108, 99, 255, 0.25) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Blob 2 - center right coral */}
        <div
          className="blob-2 absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 107, 107, 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Blob 3 - bottom center mint */}
        <div
          className="blob-3 absolute -bottom-20 left-1/3 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 170, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeUpVariant} className="inline-flex mb-6">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: isDark ? 'rgba(108, 99, 255, 0.1)' : 'rgba(91, 82, 232, 0.08)',
                  border: '1px solid rgba(108, 99, 255, 0.3)',
                  color: '#6C63FF',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#00D4AA] animate-pulse" />
                Now with Referral System
                <ArrowRight size={14} />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUpVariant}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
            >
              <span className={isDark ? 'text-[#F0F0FF]' : 'text-[#0A0A1A]'}>Turn Every Visit</span>
              <br />
              <span className="gradient-text" style={{ backgroundSize: '200% 200%' }}>Into Loyalty</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUpVariant}
              className="text-lg sm:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              style={{ color: isDark ? '#8888AA' : '#666680' }}
            >
              The modern loyalty platform that rewards customers automatically —{' '}
              <span className={isDark ? 'text-[#F0F0FF]' : 'text-[#0A0A1A]'} style={{ fontWeight: 500 }}>
                no app downloads, no plastic cards.
              </span>
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
            >
              {/* <motion.a
                href="https://loyalty.webtriggers.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-6 py-3.5"
                style={{ position: 'relative' }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Start Free Trial
                  <ArrowRight size={18} />
                </span>
              </motion.a> */}
              <motion.button
                onClick={handleDemoClick}
                className="btn-ghost text-base px-6 py-3.5"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Play size={18} className="text-[#6C63FF]" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {['Setup in 5 minutes', 'Works on any device'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm" style={{ color: isDark ? '#8888AA' : '#666680' }}>
                  <CheckCircle2 size={15} className="text-[#00D4AA]" />
                  {item}
                </div>
              ))}
            </motion.div>

            {/* Social proof numbers */}
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-wrap gap-8 justify-center lg:justify-start mt-10 pt-8"
              style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` }}
            >
              {[
                { value: '500+', label: 'Businesses' },
                { value: '50K+', label: 'Loyal Customers' },
                { value: '99.9%', label: 'Uptime' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold gradient-text-violet" style={{ WebkitTextFillColor: 'transparent', background: 'linear-gradient(135deg, #6C63FF, #A78BFA)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{ color: isDark ? '#8888AA' : '#666680' }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Card mockup */}
          <div className="flex-shrink-0">
            <LoyaltyCardMockup />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent, ${isDark ? '#0A0A0F' : '#FAFAFA'})`,
        }}
      />
    </section>
  )
}

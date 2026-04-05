import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QrCode, Star, Gift, Check, ChevronRight } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { fadeUpVariant, staggerContainer } from '../lib/variants'

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

const steps = [
  {
    id: 'checkin',
    label: 'Check In',
    icon: QrCode,
    color: '#6C63FF',
    gradient: 'from-[#6C63FF] to-[#8B84FF]',
    title: 'Scan & Check In',
    description: 'Customer opens their loyalty link and scans or shares their unique QR code at the counter. Takes less than 5 seconds.',
    highlights: ['Works on any smartphone', 'No app download needed', 'Unique per customer'],
  },
  {
    id: 'earning',
    label: 'Earning Points',
    icon: Star,
    color: '#FF6B6B',
    gradient: 'from-[#FF6B6B] to-[#FFB347]',
    title: 'Points Credited Instantly',
    description: 'The moment staff approves the visit on their dashboard, points appear on the customer\'s account in real time.',
    highlights: ['Staff approves in 1 tap', 'Instant notification sent', 'No manual tracking'],
  },
  {
    id: 'redeem',
    label: 'Redeem Reward',
    icon: Gift,
    color: '#00D4AA',
    gradient: 'from-[#00D4AA] to-[#00B4D8]',
    title: 'Claim Your Reward',
    description: 'When customers hit the points threshold, they get a reward notification. They simply show the redemption screen at checkout.',
    highlights: ['Auto reward notification', 'One-tap redemption', 'Staff confirms instantly'],
  },
]

function PhoneScreen({ stepId }: { stepId: string }) {
  const { isDark } = useTheme()
  const bgColor = isDark ? '#0A0A0F' : '#F4F4F8'
  const cardBg = isDark ? '#16161F' : '#FFFFFF'
  const textColor = isDark ? '#F0F0FF' : '#0A0A1A'
  const mutedColor = isDark ? '#8888AA' : '#666680'

  if (stepId === 'checkin') {
    return (
      <div className="h-full flex flex-col" style={{ background: bgColor }}>
        {/* Status bar */}
        <div className="h-10" />
        {/* App header */}
        <div className="px-5 pb-4 pt-2">
          <div className="text-xs font-semibold mb-1" style={{ color: mutedColor }}>SUNSHINE CAFE</div>
          <div className="text-lg font-black" style={{ color: textColor }}>Check In</div>
        </div>

        {/* QR Code area */}
        <div className="flex-1 flex flex-col items-center justify-center px-5 gap-5">
          <div
            className="w-40 h-40 rounded-2xl flex items-center justify-center relative"
            style={{ background: cardBg, border: `2px solid rgba(108,99,255,0.2)` }}
          >
            {/* QR code simulation */}
            <div className="grid grid-cols-7 gap-0.5 p-3">
              {[
                1,1,1,0,1,1,1,
                1,0,1,0,1,0,1,
                1,1,1,0,1,1,1,
                0,0,0,0,0,0,0,
                1,0,1,1,1,0,1,
                0,1,0,1,0,1,0,
                1,1,1,0,1,1,1,
              ].map((cell, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-[2px]"
                  style={{ background: cell ? (isDark ? '#F0F0FF' : '#0A0A1A') : 'transparent' }}
                />
              ))}
            </div>
            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 rounded-tl border-[#6C63FF]" />
            <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 rounded-tr border-[#6C63FF]" />
            <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 rounded-bl border-[#6C63FF]" />
            <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 rounded-br border-[#6C63FF]" />
          </div>

          <div className="text-center">
            <p className="text-sm font-semibold mb-1" style={{ color: textColor }}>Show this to staff</p>
            <p className="text-xs" style={{ color: mutedColor }}>or share your check-in link</p>
          </div>

          <div
            className="w-full rounded-xl py-3 text-center text-sm font-semibold"
            style={{ background: 'linear-gradient(135deg, #6C63FF, #8B84FF)', color: 'white' }}
          >
            Share Check-In Link
          </div>
        </div>

        {/* Bottom nav simulation */}
        <div
          className="h-16 mx-4 mb-4 rounded-2xl flex items-center justify-around px-4"
          style={{ background: cardBg, border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` }}
        >
          {['Home', 'Points', 'Rewards', 'Profile'].map((tab, i) => (
            <div key={tab} className="flex flex-col items-center gap-0.5">
              <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#6C63FF]' : 'opacity-0'}`} />
              <div className="text-[9px]" style={{ color: i === 0 ? '#6C63FF' : mutedColor }}>{tab}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (stepId === 'earning') {
    return (
      <div className="h-full flex flex-col" style={{ background: bgColor }}>
        <div className="h-10" />
        <div className="px-5 pb-4 pt-2">
          <div className="text-xs font-semibold mb-1" style={{ color: mutedColor }}>MY POINTS</div>
          <div className="text-lg font-black" style={{ color: textColor }}>Balance</div>
        </div>

        {/* Points card */}
        <div className="mx-5 rounded-2xl p-5 mb-4 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #6C63FF, #FF6B6B)' }}
        >
          <div className="absolute top-3 right-3 w-16 h-16 rounded-full border border-white/20" />
          <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/20" />
          <div className="text-white/70 text-xs mb-1">Total Points</div>
          <motion.div
            className="text-white text-3xl font-black"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            2,450
          </motion.div>
          <div className="text-white/70 text-xs mt-1">550 pts to next reward</div>

          {/* Progress */}
          <div className="mt-3 w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '82%' }}
              transition={{ duration: 1.2, delay: 0.4 }}
            />
          </div>
        </div>

        {/* Recent activity */}
        <div className="px-5">
          <div className="text-xs font-semibold mb-3" style={{ color: mutedColor }}>RECENT ACTIVITY</div>
          {[
            { label: 'Visit approved', points: '+50', time: 'Just now', color: '#00D4AA' },
            { label: 'Coffee purchase', points: '+25', time: '2h ago', color: '#00D4AA' },
            { label: 'Reward redeemed', points: '-500', time: 'Yesterday', color: '#FF6B6B' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between py-2.5 border-b"
              style={{ borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}
            >
              <div>
                <div className="text-xs font-medium" style={{ color: textColor }}>{item.label}</div>
                <div className="text-[10px]" style={{ color: mutedColor }}>{item.time}</div>
              </div>
              <div className="text-sm font-bold" style={{ color: item.color }}>{item.points}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // redeem
  return (
    <div className="h-full flex flex-col" style={{ background: bgColor }}>
      <div className="h-10" />
      <div className="px-5 pb-4 pt-2">
        <div className="text-xs font-semibold mb-1" style={{ color: mutedColor }}>REWARDS</div>
        <div className="text-lg font-black" style={{ color: textColor }}>Redeem</div>
      </div>

      {/* Reward available banner */}
      <div
        className="mx-5 rounded-2xl p-4 mb-4 flex items-center gap-3 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #00D4AA20, #00B4D820)', border: '1px solid #00D4AA40' }}
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D4AA] to-[#00B4D8] flex items-center justify-center flex-shrink-0">
          <Gift size={18} className="text-white" />
        </div>
        <div>
          <div className="text-xs font-bold text-[#00D4AA]">Reward Unlocked!</div>
          <div className="text-xs" style={{ color: textColor }}>Free Coffee — Ready to use</div>
        </div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute right-3 top-3 w-2 h-2 rounded-full bg-[#00D4AA]"
        />
      </div>

      {/* Reward card */}
      <div className="mx-5 flex-1">
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: cardBg, border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` }}
        >
          <div
            className="h-24 flex items-center justify-center relative"
            style={{ background: 'linear-gradient(135deg, #00D4AA, #00B4D8)' }}
          >
            <Gift size={40} className="text-white" />
            <div className="absolute bottom-2 right-2 text-white/60 text-[10px] font-semibold">500 pts</div>
          </div>
          <div className="p-4">
            <div className="text-base font-bold mb-1" style={{ color: textColor }}>Free Beverage</div>
            <div className="text-xs mb-4" style={{ color: mutedColor }}>Any drink up to $6 value. Valid for 30 days.</div>
            <motion.div
              className="w-full rounded-xl py-3 text-center text-sm font-semibold text-white cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #00D4AA, #00B4D8)' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Show to Staff
            </motion.div>
          </div>
        </div>
      </div>

      <div className="h-4" />
    </div>
  )
}

export default function InteractiveDemo() {
  const { isDark } = useTheme()
  const [activeStep, setActiveStep] = useState(0)

  // Auto-cycle every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const current = steps[activeStep]

  return (
    <section
      id="demo"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: isDark ? 'transparent' : '#FFFFFF' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(108, 99, 255, 0.07) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(91, 82, 232, 0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeUpVariant} className="inline-flex mb-4">
            <span
              className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: isDark ? 'rgba(108, 99, 255, 0.1)' : 'rgba(91, 82, 232, 0.08)',
                border: '1px solid rgba(108, 99, 255, 0.25)',
                color: '#6C63FF',
              }}
            >
              Live Demo
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4"
            style={{ color: isDark ? '#F0F0FF' : '#0A0A1A' }}
          >
            See It{' '}
            <span style={{ background: 'linear-gradient(135deg, #6C63FF 0%, #FF6B6B 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              In Action
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="text-lg max-w-xl mx-auto"
            style={{ color: isDark ? '#8888AA' : '#666680' }}
          >
            Watch how the full loyalty flow works from the customer's perspective.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text content */}
          <motion.div
            className="flex-1 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            {/* Step tabs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 mb-8">
              {steps.map((step, idx) => {
                const Icon = step.icon
                const isActive = idx === activeStep
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    className="flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 w-full"
                    style={{
                      background: isActive
                        ? isDark ? 'rgba(22, 22, 31, 0.9)' : '#FFFFFF'
                        : isDark ? 'transparent' : 'rgba(0,0,0,0.02)',
                      border: `1px solid ${isActive ? step.color + '50' : isDark ? 'transparent' : 'rgba(0,0,0,0.06)'}`,
                      boxShadow: isActive ? (isDark ? `0 8px 30px ${step.color}15` : `0 8px 24px rgba(0,0,0,0.10), 0 2px 8px ${step.color}20`) : 'none',
                    }}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center flex-shrink-0 transition-all duration-300`}
                      style={{
                        boxShadow: isActive ? `0 6px 20px ${step.color}50` : 'none',
                        opacity: isActive ? 1 : 0.5,
                      }}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div
                        className="text-sm font-bold transition-colors duration-200"
                        style={{ color: isActive ? (isDark ? '#F0F0FF' : '#0A0A1A') : (isDark ? '#8888AA' : '#666680') }}
                      >
                        {step.label}
                      </div>
                      {isActive && (
                        <div className="text-xs mt-0.5" style={{ color: step.color }}>
                          Active step
                        </div>
                      )}
                    </div>
                    {isActive && (
                      <ChevronRight size={16} className="ml-auto" style={{ color: step.color }} />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <h3
                  className="text-2xl font-black mb-3"
                  style={{ color: isDark ? '#F0F0FF' : '#0A0A1A' }}
                >
                  {current.title}
                </h3>
                <p
                  className="text-base leading-relaxed mb-5"
                  style={{ color: isDark ? '#8888AA' : '#666680' }}
                >
                  {current.description}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {current.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: current.color + '20', border: `1px solid ${current.color}40` }}
                      >
                        <Check size={11} style={{ color: current.color }} />
                      </div>
                      <span className="text-sm" style={{ color: isDark ? '#8888AA' : '#666680' }}>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="flex gap-2 mt-8">
              {steps.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActiveStep(i)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === activeStep ? '2rem' : '0.5rem',
                    background: i === activeStep ? current.color : (isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'),
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Phone mockup */}
          <motion.div
            className="order-1 lg:order-2 flex-shrink-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative">
              {/* Glow behind phone */}
              <div
                className="absolute inset-0 rounded-[36px] transition-all duration-700"
                style={{
                  background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${current.color}30 0%, transparent 70%)`,
                  filter: 'blur(30px)',
                  transform: 'scale(1.3)',
                }}
              />
              {/* Phone frame */}
              <div className="phone-frame relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    className="absolute inset-0"
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '-100%', opacity: 0 }}
                    transition={{ duration: 0.4, ease: springEase }}
                  >
                    <PhoneScreen stepId={current.id} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

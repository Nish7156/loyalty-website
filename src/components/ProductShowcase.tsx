import { motion } from 'framer-motion'
import { QrCode, Star, Gift } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { fadeUpVariant, staggerContainer } from '../lib/variants'

const steps = [
  {
    icon: QrCode,
    title: 'Check In',
    description: 'Customer scans a unique QR code at your counter. No app download needed — works right in the browser.',
    color: '#6C63FF',
    gradient: 'from-[#6C63FF] to-[#8B84FF]',
    number: '01',
  },
  {
    icon: Star,
    title: 'Earn Points',
    description: 'Points are tracked and credited automatically the moment staff approves the visit. Zero manual effort.',
    color: '#FF6B6B',
    gradient: 'from-[#FF6B6B] to-[#FFB347]',
    number: '02',
  },
  {
    icon: Gift,
    title: 'Get Rewarded',
    description: 'When points hit your configured threshold, customers redeem their reward right at checkout. Instant gratification.',
    color: '#00D4AA',
    gradient: 'from-[#00D4AA] to-[#00B4D8]',
    number: '03',
  },
]

export default function ProductShowcase() {
  const { isDark } = useTheme()

  return (
    <section
      id="how-it-works"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(108, 99, 255, 0.06) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(91, 82, 232, 0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
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
              How It Works
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4"
            style={{ color: isDark ? '#F0F0FF' : '#0A0A1A' }}
          >
            Loyalty made{' '}
            <span
              className="gradient-text"
              style={{
                background: 'linear-gradient(135deg, #6C63FF 0%, #FF6B6B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              effortless
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: isDark ? '#8888AA' : '#666680' }}
          >
            Three simple steps to transform casual visitors into loyal regulars.
            No complex setup, no training required.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:flex absolute top-[88px] left-0 right-0 items-center px-[calc(16.67%+40px)] gap-0 pointer-events-none z-0">
            <div className="dashed-line" />
            <div
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ background: '#FF6B6B', boxShadow: '0 0 10px rgba(255,107,107,0.6)' }}
            />
            <div className="dashed-line" />
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 relative z-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  variants={fadeUpVariant}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                >
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    {/* Outer glow ring */}
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle, ${step.color}30 0%, transparent 70%)`,
                        transform: 'scale(1.8)',
                      }}
                    />
                    <motion.div
                      className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center`}
                      style={{
                        boxShadow: `0 12px 40px ${step.color}40`,
                      }}
                      whileHover={{ scale: 1.08, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon size={32} className="text-white" />
                      {/* Step number badge */}
                      <div
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0A0A0F] dark:bg-[#0A0A0F] flex items-center justify-center text-[10px] font-black"
                        style={{
                          background: isDark ? '#0A0A0F' : '#FAFAFA',
                          border: `2px solid ${step.color}`,
                          color: step.color,
                        }}
                      >
                        {step.number}
                      </div>
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div
                    className="w-full rounded-2xl p-6 transition-all duration-300 group-hover:translate-y-[-4px]"
                    style={{
                      background: isDark ? '#16161F' : '#FFFFFF',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                      boxShadow: isDark
                        ? '0 4px 24px rgba(0,0,0,0.3)'
                        : '0 4px 24px rgba(0,0,0,0.06)',
                    }}
                  >
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ color: isDark ? '#F0F0FF' : '#0A0A1A' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: isDark ? '#8888AA' : '#666680' }}>
                      {step.description}
                    </p>
                    {/* Bottom accent bar */}
                    <div
                      className="mt-4 h-0.5 w-12 rounded-full"
                      style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://loyalty.webtriggers.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-3.5 inline-flex"
            style={{ position: 'relative' }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>Start your loyalty program today</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

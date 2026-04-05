import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, ArrowRight } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { fadeUpVariant, staggerContainer } from '../lib/variants'

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

const comparisons = [
  {
    traditional: 'Physical stamp cards get lost or forgotten',
    modern: 'Digital — always in their pocket',
  },
  {
    traditional: 'Manual tracking with spreadsheets or paper',
    modern: 'Fully automatic — zero effort from staff',
  },
  {
    traditional: 'No insights into customer behavior',
    modern: 'Real-time analytics & visit trends',
  },
  {
    traditional: 'Customers must download an app',
    modern: 'Works in any mobile browser instantly',
  },
  {
    traditional: 'Delayed reward fulfillment',
    modern: 'Instant reward notifications',
  },
  {
    traditional: 'One-size-fits-all programs',
    modern: 'Configurable tiers & custom thresholds',
  },
]

function ComparisonRow({
  traditional,
  modern,
  index,
}: {
  traditional: string
  modern: string
  index: number
}) {
  const { isDark } = useTheme()
  const [hovered, setHovered] = useState<'traditional' | 'modern' | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: springEase }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
    >
      {/* Traditional side */}
      <motion.div
        className="flex items-start gap-3 p-4 rounded-xl cursor-default relative overflow-hidden"
        style={{
          background: isDark ? 'rgba(255, 107, 107, 0.05)' : 'rgba(255, 107, 107, 0.04)',
          border: `1px solid ${hovered === 'traditional' ? 'rgba(255, 107, 107, 0.35)' : 'rgba(255, 107, 107, 0.12)'}`,
          transition: 'border-color 0.25s ease',
        }}
        onHoverStart={() => setHovered('traditional')}
        onHoverEnd={() => setHovered(null)}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.2 }}
      >
        {/* Hover glow */}
        <AnimatePresence>
          {hovered === 'traditional' && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ background: 'radial-gradient(ellipse 80% 60% at 10% 50%, rgba(255,107,107,0.12) 0%, transparent 70%)' }}
            />
          )}
        </AnimatePresence>

        <motion.div
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 relative z-10"
          style={{ background: 'rgba(255, 107, 107, 0.15)' }}
          animate={hovered === 'traditional' ? { rotate: [0, -8, 8, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <X size={13} className="text-[#FF6B6B]" />
        </motion.div>
        <p className="text-sm leading-relaxed relative z-10" style={{ color: isDark ? '#8888AA' : '#666680' }}>
          {traditional}
        </p>
      </motion.div>

      {/* Arrow between — visible on sm+ */}
      <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center justify-center" style={{ top: '50%', transform: 'translate(-50%, -50%)' }}>
      </div>

      {/* Modern side */}
      <motion.div
        className="flex items-start gap-3 p-4 rounded-xl cursor-default relative overflow-hidden"
        style={{
          background: isDark ? 'rgba(0, 212, 170, 0.05)' : 'rgba(0, 212, 170, 0.04)',
          border: `1px solid ${hovered === 'modern' ? 'rgba(0, 212, 170, 0.4)' : 'rgba(0, 212, 170, 0.15)'}`,
          transition: 'border-color 0.25s ease',
        }}
        onHoverStart={() => setHovered('modern')}
        onHoverEnd={() => setHovered(null)}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.2 }}
      >
        {/* Hover glow */}
        <AnimatePresence>
          {hovered === 'modern' && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ background: 'radial-gradient(ellipse 80% 60% at 10% 50%, rgba(0,212,170,0.15) 0%, transparent 70%)' }}
            />
          )}
        </AnimatePresence>

        <motion.div
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 relative z-10"
          style={{ background: 'rgba(0, 212, 170, 0.15)' }}
          animate={hovered === 'modern' ? { scale: [1, 1.25, 1] } : {}}
          transition={{ duration: 0.35 }}
        >
          <Check size={13} className="text-[#00D4AA]" />
        </motion.div>
        <p className="text-sm font-medium leading-relaxed relative z-10" style={{ color: isDark ? '#F0F0FF' : '#0A0A1A' }}>
          {modern}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function WhyLoyalty() {
  const { isDark } = useTheme()
  const [headerHovered, setHeaderHovered] = useState(false)

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: isDark ? '#0A0A0F' : '#F5F5FB' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(0, 212, 170, 0.06) 0%, transparent 60%)'
            : 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(0, 180, 140, 0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-14 lg:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeUpVariant} className="inline-flex mb-4">
            <motion.span
              className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase cursor-default"
              style={{
                background: isDark ? 'rgba(0, 212, 170, 0.1)' : 'rgba(0, 180, 140, 0.08)',
                border: '1px solid rgba(0, 212, 170, 0.25)',
                color: '#00D4AA',
                display: 'inline-block',
              }}
              whileHover={{ scale: 1.06, boxShadow: '0 0 20px rgba(0,212,170,0.3)' }}
              transition={{ duration: 0.2 }}
            >
              Why Choose Us
            </motion.span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariant}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4"
            style={{ color: isDark ? '#F0F0FF' : '#0A0A1A' }}
          >
            Why{' '}
            <motion.span
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #00D4AA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
              }}
              whileHover={{ scale: 1.04, skewX: -2 }}
              transition={{ duration: 0.2 }}
            >
              Loyalty?
            </motion.span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: isDark ? '#8888AA' : '#666680' }}
          >
            Traditional loyalty programs are broken. We built something better — from the ground up.
          </motion.p>
        </motion.div>

        {/* Column headers */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-2 px-4 py-3 rounded-xl cursor-default"
            style={{
              background: isDark ? 'rgba(255, 107, 107, 0.08)' : 'rgba(255, 107, 107, 0.06)',
              border: '1px solid rgba(255, 107, 107, 0.2)',
            }}
            whileHover={{ x: -3 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-5 h-5 rounded-full bg-[#FF6B6B]/20 flex items-center justify-center flex-shrink-0"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.25 }}
            >
              <X size={12} className="text-[#FF6B6B]" />
            </motion.div>
            <span className="text-sm font-bold text-[#FF6B6B]">Traditional Loyalty Programs</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 px-4 py-3 rounded-xl cursor-default"
            style={{
              background: isDark ? 'rgba(0, 212, 170, 0.08)' : 'rgba(0, 212, 170, 0.06)',
              border: '1px solid rgba(0, 212, 170, 0.25)',
            }}
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-5 h-5 rounded-full bg-[#00D4AA]/20 flex items-center justify-center flex-shrink-0"
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.25 }}
            >
              <Check size={12} className="text-[#00D4AA]" />
            </motion.div>
            <span className="text-sm font-bold text-[#00D4AA]">Loyalty Platform</span>
          </motion.div>
        </motion.div>

        {/* Comparison rows */}
        <div className="flex flex-col gap-3">
          {comparisons.map((item, i) => (
            <ComparisonRow
              key={i}
              traditional={item.traditional}
              modern={item.modern}
              index={i}
            />
          ))}
        </div>

        {/* Stats strip */}
        <motion.div
          className="grid grid-cols-3 gap-4 mt-12 mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: springEase }}
        >
          {[
            { value: '3×', label: 'Higher retention', color: '#6C63FF' },
            { value: '0', label: 'App downloads needed', color: '#00D4AA' },
            { value: '5 min', label: 'Setup time', color: '#FF6B6B' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center py-5 rounded-2xl cursor-default"
              style={{
                background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.7)',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)'}`,
              }}
              whileHover={{
                y: -4,
                boxShadow: `0 12px 32px ${stat.color}25`,
                border: `1px solid ${stat.color}40`,
              }}
              transition={{ duration: 0.25 }}
            >
              <motion.div
                className="text-3xl font-black mb-1"
                style={{ color: stat.color }}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: springEase }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs font-medium" style={{ color: isDark ? '#8888AA' : '#666680' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p
            className="text-base mb-5"
            style={{ color: isDark ? '#8888AA' : '#666680' }}
          >
            Join hundreds of businesses that have already made the switch.
          </p>
          <motion.a
            href="https://loyalty.webtriggers.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-3.5 inline-flex items-center gap-2"
            style={{ position: 'relative' }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>Switch to Loyalty Today</span>
            <motion.span
              style={{ position: 'relative', zIndex: 1 }}
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

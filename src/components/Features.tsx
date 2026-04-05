import { motion } from 'framer-motion'
import { QrCode, Zap, Trophy, Building2, Bell, Users } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { fadeUpVariant, staggerContainerFast as staggerContainer } from '../lib/variants'

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

const features = [
  {
    icon: QrCode,
    title: 'QR Check-In',
    description: 'Instant check-in via QR code. No app required — customers scan from any mobile browser in seconds.',
    gradient: 'from-[#6C63FF] to-[#8B84FF]',
    glow: 'rgba(108, 99, 255, 0.3)',
    accent: '#6C63FF',
  },
  {
    icon: Zap,
    title: 'Real-Time Points',
    description: 'Points credited the moment staff approves the visit. Zero latency, zero manual tracking, zero errors.',
    gradient: 'from-[#FF6B6B] to-[#FFB347]',
    glow: 'rgba(255, 107, 107, 0.3)',
    accent: '#FF6B6B',
  },
  {
    icon: Trophy,
    title: 'Smart Rewards',
    description: 'Configurable thresholds and reward tiers. Set up custom milestones that motivate your specific customers.',
    gradient: 'from-[#00D4AA] to-[#00B4D8]',
    glow: 'rgba(0, 212, 170, 0.3)',
    accent: '#00D4AA',
  },
  {
    icon: Building2,
    title: 'Multi-Store',
    description: 'One platform for all your branches. Manage all locations from a single dashboard with unified reporting.',
    gradient: 'from-[#A78BFA] to-[#6C63FF]',
    glow: 'rgba(167, 139, 250, 0.3)',
    accent: '#A78BFA',
  },
  {
    icon: Bell,
    title: 'Push Notifications',
    description: 'Notify customers the instant their visit is approved or when they earn a reward. Keep them engaged.',
    gradient: 'from-[#F59E0B] to-[#FF6B6B]',
    glow: 'rgba(245, 158, 11, 0.3)',
    accent: '#F59E0B',
  },
  {
    icon: Users,
    title: 'Referral System',
    description: 'Grow your customer base with built-in referrals. Reward advocates and track every referral automatically.',
    gradient: 'from-[#EC4899] to-[#A78BFA]',
    glow: 'rgba(236, 72, 153, 0.3)',
    accent: '#EC4899',
  },
]

export default function Features() {
  const { isDark } = useTheme()

  return (
    <section
      id="features"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark ? '#111118' : '#F4F4F8',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? 'radial-gradient(ellipse 100% 60% at 50% 0%, rgba(108, 99, 255, 0.08) 0%, transparent 60%)'
            : 'radial-gradient(ellipse 100% 60% at 50% 0%, rgba(91, 82, 232, 0.05) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
              Features
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4"
            style={{ color: isDark ? '#F0F0FF' : '#0A0A1A' }}
          >
            Everything{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF 0%, #00D4AA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              You Need
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: isDark ? '#8888AA' : '#666680' }}
          >
            A complete loyalty ecosystem built for modern businesses. No third-party integrations, no hidden complexity.
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={fadeUpVariant}
                className="group relative rounded-2xl p-6 cursor-default overflow-hidden"
                style={{
                  background: isDark
                    ? 'rgba(22, 22, 31, 0.8)'
                    : 'rgba(255, 255, 255, 0.9)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: springEase },
                }}
              >
                {/* Hover glow background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${feature.glow} 0%, transparent 70%)`,
                  }}
                />

                {/* Border glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: `0 0 30px ${feature.glow}, inset 0 1px 0 rgba(255,255,255,0.1)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}
                    style={{ boxShadow: `0 8px 24px ${feature.glow}` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={22} className="text-white" />
                  </motion.div>

                  <h3
                    className="text-lg font-bold mb-2 transition-colors duration-200"
                    style={{ color: isDark ? '#F0F0FF' : '#0A0A1A' }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: isDark ? '#8888AA' : '#666680' }}
                  >
                    {feature.description}
                  </p>

                  {/* Bottom accent */}
                  <div
                    className="mt-4 h-0.5 w-0 group-hover:w-12 rounded-full transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, ${feature.accent}, transparent)` }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

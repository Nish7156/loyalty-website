import { motion } from 'framer-motion'
import { Check, Zap, Building2, Sparkles } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { fadeUpVariant, staggerContainer } from '../lib/variants'

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    priceNote: 'Forever free',
    icon: Zap,
    color: '#6C63FF',
    gradient: 'from-[#6C63FF] to-[#8B84FF]',
    description: 'Perfect for small businesses getting started with loyalty.',
    features: [
      'Up to 100 customers',
      'QR check-in',
      'Basic points system',
      '1 store location',
      'Customer dashboard',
      'Email support',
    ],
    cta: 'Get Started Free',
    ctaHref: 'https://loyalty.webtriggers.online/',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$29',
    priceNote: 'per month',
    icon: Sparkles,
    color: '#6C63FF',
    gradient: 'from-[#6C63FF] via-[#8B84FF] to-[#FF6B6B]',
    description: 'For growing businesses that want more power and reach.',
    features: [
      'Unlimited customers',
      'QR check-in + share link',
      'Custom reward tiers',
      'Up to 5 store locations',
      'Push notifications',
      'Referral system',
      'Advanced analytics',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    ctaHref: 'https://loyalty.webtriggers.online/',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    priceNote: 'Contact us',
    icon: Building2,
    color: '#00D4AA',
    gradient: 'from-[#00D4AA] to-[#00B4D8]',
    description: 'For large chains and franchises that need full control.',
    features: [
      'Unlimited everything',
      'Unlimited store locations',
      'Custom branding',
      'White-label option',
      'API access',
      'SSO / SAML',
      'SLA guarantee',
      'Dedicated account manager',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    ctaHref: 'mailto:hello@loyalty.webtriggers.online',
    highlighted: false,
  },
]

export default function Pricing() {
  const { isDark } = useTheme()

  return (
    <section
      id="pricing"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: isDark ? '#0A0A0F' : '#FAFAFA' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(108, 99, 255, 0.08) 0%, transparent 65%)'
            : 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(91, 82, 232, 0.05) 0%, transparent 65%)',
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
            <span
              className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: isDark ? 'rgba(108, 99, 255, 0.1)' : 'rgba(91, 82, 232, 0.08)',
                border: '1px solid rgba(108, 99, 255, 0.25)',
                color: '#6C63FF',
              }}
            >
              Pricing
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4"
            style={{ color: isDark ? '#F0F0FF' : '#0A0A1A' }}
          >
            Simple,{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #FF6B6B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Transparent Pricing
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="text-lg max-w-xl mx-auto"
            style={{ color: isDark ? '#8888AA' : '#666680' }}
          >
            No surprise fees, no long-term contracts. Start free and upgrade when you're ready.
          </motion.p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                variants={fadeUpVariant}
                className="relative rounded-2xl overflow-hidden group"
                style={{
                  background: isDark ? '#16161F' : '#FFFFFF',
                  border: plan.highlighted
                    ? 'none'
                    : `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                  boxShadow: plan.highlighted
                    ? isDark
                      ? '0 0 0 1px rgba(108,99,255,0.3), 0 40px 80px rgba(108, 99, 255, 0.2)'
                      : '0 0 0 1px rgba(91,82,232,0.3), 0 20px 60px rgba(91, 82, 232, 0.15)'
                    : isDark
                      ? '0 4px 24px rgba(0,0,0,0.3)'
                      : '0 4px 24px rgba(0,0,0,0.06)',
                }}
                whileHover={{
                  y: plan.highlighted ? -4 : -4,
                  transition: { duration: 0.3, ease: springEase },
                }}
              >
                {/* Gradient border for highlighted */}
                {plan.highlighted && (
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      padding: '1px',
                      background: `linear-gradient(135deg, #6C63FF, #FF6B6B)`,
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                )}

                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #6C63FF, #FF6B6B)' }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Gradient top accent for highlighted */}
                {plan.highlighted && (
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ background: 'linear-gradient(90deg, #6C63FF, #FF6B6B)' }}
                  />
                )}

                <div className="p-7">
                  {/* Plan header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center`}
                      style={{ boxShadow: `0 6px 20px ${plan.color}30` }}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div
                        className="text-base font-bold"
                        style={{ color: isDark ? '#F0F0FF' : '#0A0A1A' }}
                      >
                        {plan.name}
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className="text-4xl font-black"
                        style={{ color: isDark ? '#F0F0FF' : '#0A0A1A' }}
                      >
                        {plan.price}
                      </span>
                      {plan.price !== 'Custom' && plan.price !== 'Free' && (
                        <span className="text-sm" style={{ color: isDark ? '#8888AA' : '#666680' }}>
                          {plan.priceNote}
                        </span>
                      )}
                    </div>
                    {(plan.price === 'Custom' || plan.price === 'Free') && (
                      <div className="text-sm" style={{ color: isDark ? '#8888AA' : '#666680' }}>
                        {plan.priceNote}
                      </div>
                    )}
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: isDark ? '#8888AA' : '#666680' }}
                  >
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="flex flex-col gap-2.5 mb-7">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${plan.color}20` }}
                        >
                          <Check size={11} style={{ color: plan.color }} />
                        </div>
                        <span
                          className="text-sm"
                          style={{ color: isDark ? '#8888AA' : '#666680' }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {plan.highlighted ? (
                    <motion.a
                      href={plan.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center text-sm py-3"
                      style={{ position: 'relative' }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span style={{ position: 'relative', zIndex: 1 }}>{plan.cta}</span>
                    </motion.a>
                  ) : (
                    <motion.a
                      href={plan.ctaHref}
                      target={plan.ctaHref.startsWith('mailto') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="btn-ghost w-full justify-center text-sm py-3"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.cta}
                    </motion.a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          className="text-center mt-10 text-sm"
          style={{ color: isDark ? '#8888AA' : '#666680' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          All plans include a 14-day free trial. No credit card required to start.{' '}
          <a href="https://loyalty.webtriggers.online/" className="text-[#6C63FF] hover:underline" target="_blank" rel="noopener noreferrer">
            Compare all features →
          </a>
        </motion.p>
      </div>
    </section>
  )
}

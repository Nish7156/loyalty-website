import { useRef, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { Star } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { fadeUpVariant, staggerContainer } from '../lib/variants'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Owner',
    business: 'Bloom Bakery',
    initials: 'SC',
    color: '#6C63FF',
    quote: "We tried three different loyalty apps before this one. None of them stuck — customers hated downloading an app. With QR check-in, our repeat visit rate jumped 40% in the first month.",
    rating: 5,
  },
  {
    name: 'Marcus Williams',
    role: 'Operations Manager',
    business: 'Urban Grind Coffee',
    initials: 'MW',
    color: '#FF6B6B',
    quote: "The real-time notifications are a game changer. Customers get excited the moment their points are credited. We've had people actually mention the loyalty program to their friends — it sells itself.",
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Co-Founder',
    business: 'Spice Route Restaurant',
    initials: 'PP',
    color: '#00D4AA',
    quote: "Managing four branches from one dashboard is incredible. The referral system alone brought in 60 new customers last quarter. The setup took 20 minutes, not weeks.",
    rating: 5,
  },
  {
    name: 'James O\'Brien',
    role: 'Owner',
    business: 'FitZone Gym',
    initials: 'JO',
    color: '#A78BFA',
    quote: "Our members love the points tiers. Once they see they're close to a reward, they come in more consistently. Check-ins are effortless — staff just approves on the tablet and that's it.",
    rating: 5,
  },
  {
    name: 'Luna Kim',
    role: 'Manager',
    business: 'Velvet Salon',
    initials: 'LK',
    color: '#F59E0B',
    quote: "I was skeptical about yet another loyalty tool, but the analytics are genuinely useful. Seeing which customers are about to churn and reaching them with a push notification before they do — that's smart.",
    rating: 5,
  },
  {
    name: 'David Torres',
    role: 'CEO',
    business: 'Fresh & Local Market',
    initials: 'DT',
    color: '#EC4899',
    quote: "We're a small team and we can't afford anything that needs maintenance. This platform just works. Customers check in, points appear, rewards get redeemed. Zero drama.",
    rating: 5,
  },
]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  const { isDark } = useTheme()

  return (
    <div
      className="flex-shrink-0 w-[320px] sm:w-[360px] rounded-2xl p-6 group relative overflow-hidden transition-all duration-300 hover:translate-y-[-4px]"
      style={{
        background: isDark ? '#16161F' : '#FFFFFF',
        border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
        boxShadow: isDark ? '0 4px 24px rgba(0,0,0,0.3)' : '0 4px 24px rgba(0,0,0,0.06)',
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${testimonial.color}15 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        {/* Stars */}
        <div className="flex gap-0.5 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
          ))}
        </div>

        {/* Quote */}
        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: isDark ? '#8888AA' : '#666680' }}
        >
          "{testimonial.quote}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}CC)` }}
          >
            {testimonial.initials}
          </div>
          <div>
            <div
              className="text-sm font-bold"
              style={{ color: isDark ? '#F0F0FF' : '#0A0A1A' }}
            >
              {testimonial.name}
            </div>
            <div className="text-xs" style={{ color: isDark ? '#8888AA' : '#666680' }}>
              {testimonial.role}, {testimonial.business}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { isDark } = useTheme()
  const trackRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const [isDragging, setIsDragging] = useState(false)

  // Duplicate for seamless loop
  const allTestimonials = [...testimonials, ...testimonials]

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: isDark ? '#111118' : '#F4F4F8' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(108, 99, 255, 0.06) 0%, transparent 60%)'
            : 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(91, 82, 232, 0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-12">
        {/* Section header */}
        <motion.div
          className="text-center"
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
              Testimonials
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4"
            style={{ color: isDark ? '#F0F0FF' : '#0A0A1A' }}
          >
            Loved by{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FF6B6B, #FFB347)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Business Owners
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="text-lg max-w-xl mx-auto"
            style={{ color: isDark ? '#8888AA' : '#666680' }}
          >
            Real results from real businesses using Loyalty every day.
          </motion.p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: isDark ? 'linear-gradient(to right, #111118, transparent)' : 'linear-gradient(to right, #F4F4F8, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: isDark ? 'linear-gradient(to left, #111118, transparent)' : 'linear-gradient(to left, #F4F4F8, transparent)' }}
        />

        <motion.div
          ref={trackRef}
          className="flex gap-5 px-8 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ right: 0, left: -(allTestimonials.length * 380 - window.innerWidth) }}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          style={{ x }}
          animate={isDragging ? {} : { x: [0, -(testimonials.length * 380)] }}
          transition={isDragging ? {} : {
            x: {
              duration: 35,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            },
          }}
          whileHover={{ animationPlayState: 'paused' } as never}
        >
          {allTestimonials.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
          ))}
        </motion.div>
      </div>

      {/* Overall rating */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <div className="text-center">
            <div
              className="text-4xl font-black mb-1"
              style={{
                background: 'linear-gradient(135deg, #F59E0B, #FF6B6B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              4.9/5
            </div>
            <div className="flex gap-0.5 justify-center mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
              ))}
            </div>
            <div className="text-xs" style={{ color: isDark ? '#8888AA' : '#666680' }}>Average rating</div>
          </div>

          <div className="hidden sm:block h-12 w-px" style={{ background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }} />

          <div className="text-center">
            <div
              className="text-4xl font-black mb-1"
              style={{ color: isDark ? '#F0F0FF' : '#0A0A1A' }}
            >
              500+
            </div>
            <div className="text-xs" style={{ color: isDark ? '#8888AA' : '#666680' }}>Active businesses</div>
          </div>

          <div className="hidden sm:block h-12 w-px" style={{ background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }} />

          <div className="text-center">
            <div
              className="text-4xl font-black mb-1"
              style={{ color: isDark ? '#F0F0FF' : '#0A0A1A' }}
            >
              50K+
            </div>
            <div className="text-xs" style={{ color: isDark ? '#8888AA' : '#666680' }}>Loyal customers served</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const LAST_UPDATED = 'April 5, 2026'
const COMPANY = 'WebTriggers'
const COMPANY_URL = 'https://www.webtriggers.online'
const PRODUCT = 'Loyalty'
const PRODUCT_URL = 'https://loyalty.webtriggers.online'
const CONTACT_EMAIL = 'hello@webtriggers.online'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using ${PRODUCT} ("the Service"), a product of ${COMPANY} ("we", "our", or "us"), you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use the Service. ${PRODUCT} is operated by ${COMPANY} (${COMPANY_URL}).`,
  },
  {
    title: '2. Description of Service',
    content: `${PRODUCT} is a digital loyalty platform that enables businesses ("Partners") to reward their customers ("End Users") through QR-based check-ins, points tracking, referrals, and reward redemption. The Service is accessible via ${PRODUCT_URL}.`,
  },
  {
    title: '3. User Accounts',
    content: `End Users register using their phone number and a one-time password (OTP). You are responsible for maintaining the confidentiality of your account and for all activities that occur under it. Partners are responsible for their staff accounts and branch configurations. You agree to provide accurate information and to update it as necessary.`,
  },
  {
    title: '4. Acceptable Use',
    content: `You agree not to: (a) use the Service for any unlawful purpose; (b) attempt to gain unauthorised access to any part of the Service; (c) create fake accounts or manipulate the loyalty system; (d) interfere with or disrupt the integrity or performance of the Service; (e) use automated scripts to interact with the Service without our prior written consent.`,
  },
  {
    title: '5. Loyalty Points & Rewards',
    content: `Loyalty points are awarded at the discretion of Partner businesses and are subject to their individual terms. Points have no monetary value unless explicitly redeemable for defined rewards offered by Partners. ${PRODUCT} and ${COMPANY} are not responsible for the fulfilment of rewards — that obligation rests solely with the Partner. Platform credits awarded via referral bonuses are funded by ${COMPANY} and are subject to change or expiry at our discretion.`,
  },
  {
    title: '6. Referral Programme',
    content: `The referral programme allows existing users to invite new users. Both parties may earn platform credits upon the referred user's first approved check-in. ${COMPANY} reserves the right to modify, suspend, or terminate the referral programme at any time. Abuse of the referral system (e.g., self-referrals, fake accounts) will result in account suspension and forfeiture of any credits earned.`,
  },
  {
    title: '7. Partner Responsibilities',
    content: `Partners who use ${PRODUCT} to manage their loyalty programmes are responsible for: accurately configuring their branch settings; ensuring staff operate the system fairly; honouring rewards that customers have validly earned; compliance with applicable local laws regarding loyalty programmes and consumer protection.`,
  },
  {
    title: '8. Intellectual Property',
    content: `All content, software, and technology comprising the Service are the property of ${COMPANY} or its licensors and are protected by applicable intellectual property laws. You may not copy, modify, distribute, or reverse-engineer any part of the Service without express written permission from ${COMPANY}.`,
  },
  {
    title: '9. Termination',
    content: `We reserve the right to suspend or terminate your access to the Service at any time for breach of these Terms, abuse of the platform, or for any other reason at our sole discretion, with or without notice. Upon termination, your right to use the Service immediately ceases.`,
  },
  {
    title: '10. Disclaimer of Warranties',
    content: `The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. ${COMPANY} does not warrant that the Service will be uninterrupted, error-free, or free of viruses. Use of the Service is at your sole risk.`,
  },
  {
    title: '11. Limitation of Liability',
    content: `To the fullest extent permitted by law, ${COMPANY} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service or inability to use the Service, even if ${COMPANY} has been advised of the possibility of such damages.`,
  },
  {
    title: '12. Changes to Terms',
    content: `We may update these Terms at any time. Continued use of the Service after changes are posted constitutes your acceptance of the revised Terms. We will indicate the date of the last update at the top of this page.`,
  },
  {
    title: '13. Governing Law',
    content: `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in India.`,
  },
  {
    title: '14. Contact Us',
    content: `If you have any questions about these Terms, please contact us at ${CONTACT_EMAIL} or visit our website at ${COMPANY_URL}.`,
  },
]

export default function TermsPage() {
  const { isDark } = useTheme()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div
      style={{
        minHeight: '100vh',
        background: isDark ? '#0A0A0F' : '#FAFAFA',
        color: isDark ? '#F0F0FF' : '#0A0A1A',
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* Back nav */}
      <div
        className="sticky top-0 z-10 backdrop-blur-xl border-b"
        style={{
          background: isDark ? 'rgba(10,10,15,0.85)' : 'rgba(250,250,250,0.85)',
          borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: isDark ? '#8888AA' : '#666680' }}
          >
            <ArrowLeft size={16} />
            Back to Loyalty
          </Link>
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{
              background: isDark ? 'rgba(108,99,255,0.12)' : 'rgba(91,82,232,0.08)',
              color: '#6C63FF',
            }}
          >
            Legal
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span
              className="text-xl font-black tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #6C63FF 0%, #A78BFA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Loyalty
            </span>
            <span style={{ color: isDark ? '#8888AA' : '#666680' }}>by</span>
            <a
              href={COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sm hover:underline"
              style={{ color: '#6C63FF' }}
            >
              {COMPANY}
            </a>
          </div>
          <h1
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            Terms &amp; Conditions
          </h1>
          <p className="text-sm" style={{ color: isDark ? '#8888AA' : '#666680' }}>
            Last updated: {LAST_UPDATED}
          </p>
          <div
            className="mt-6 p-4 rounded-2xl text-sm leading-relaxed"
            style={{
              background: isDark ? 'rgba(108,99,255,0.08)' : 'rgba(91,82,232,0.06)',
              border: `1px solid ${isDark ? 'rgba(108,99,255,0.2)' : 'rgba(91,82,232,0.15)'}`,
              color: isDark ? '#A0A0C0' : '#444460',
            }}
          >
            Please read these Terms & Conditions carefully before using the {PRODUCT} platform.
            By using the Service, you agree to be legally bound by these terms.
          </div>
        </motion.div>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                className="text-lg font-bold mb-3"
                style={{ color: isDark ? '#F0F0FF' : '#0A0A1A' }}
              >
                {section.title}
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: isDark ? '#A0A0C0' : '#444460' }}
              >
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <div
          className="mt-16 pt-8 text-center text-sm"
          style={{
            borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
            color: isDark ? '#8888AA' : '#666680',
          }}
        >
          <p>
            Questions? Email us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline" style={{ color: '#6C63FF' }}>
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} {COMPANY} · {PRODUCT} Platform
          </p>
        </div>
      </div>
    </div>
  )
}

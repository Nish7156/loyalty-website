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
const CONTACT_EMAIL = 'webtriggers11@gmail.com'

const sections = [
  {
    title: '1. Introduction',
    content: `${COMPANY} ("we", "our", or "us") operates the ${PRODUCT} platform (${PRODUCT_URL}). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service. By using ${PRODUCT}, you consent to the data practices described in this policy.`,
  },
  {
    title: '2. Information We Collect',
    content: `We collect the following categories of information:\n\n• Phone Number: Collected during registration for authentication via OTP. Your phone number is your primary identifier on the platform.\n\n• Check-in Data: Timestamps, branch locations, and QR scan events generated when you check in at a Partner location.\n\n• Points & Wallet Activity: Records of points earned, rewards redeemed, and platform credit transactions (including referral bonuses).\n\n• Referral Data: If you participate in our referral programme, we record the referral code used and the associated check-in that triggered any bonus.\n\n• Device & Usage Data: Browser type, operating system, IP address, and pages visited, collected automatically via standard web server logs and analytics tools.`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the information we collect to:\n\n• Authenticate your identity and maintain your account session\n• Award and track loyalty points and platform credits\n• Process referral rewards for you and the person who referred you\n• Send transactional notifications (e.g., OTP messages, check-in confirmations)\n• Analyse platform usage to improve features and performance\n• Comply with legal obligations and enforce our Terms & Conditions\n• Communicate service updates or changes to this Privacy Policy`,
  },
  {
    title: '4. Sharing of Information',
    content: `We do not sell your personal information. We may share your data in the following limited circumstances:\n\n• With Partner Businesses: Your check-in events, points balance, and visit history are shared with the Partner at whose location you checked in, so they can manage their loyalty programme.\n\n• With Service Providers: We use third-party vendors (e.g., cloud hosting, SMS gateway providers) who process data on our behalf under strict confidentiality agreements.\n\n• For Legal Compliance: We may disclose information if required by law, court order, or to protect the rights, safety, or property of ${COMPANY}, our users, or the public.\n\n• Business Transfers: In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction, subject to the same privacy protections.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain your personal data for as long as your account is active or as needed to provide the Service. You may request deletion of your account and associated data by contacting us at ${CONTACT_EMAIL}. We may retain certain records for up to 7 years where required by applicable law (e.g., financial transaction records).`,
  },
  {
    title: '6. Cookies & Tracking',
    content: `${PRODUCT} uses browser localStorage and session storage to maintain your login session and store temporary data such as referral codes. We do not use third-party advertising cookies. Standard analytics tools may use cookies to understand aggregate usage patterns. You can disable cookies in your browser settings, though this may affect the functionality of the Service.`,
  },
  {
    title: '7. Security',
    content: `We implement industry-standard security measures including HTTPS encryption, OTP-based authentication, and access controls. However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee the absolute security of your data and encourage you to use a unique phone number for account registration.`,
  },
  {
    title: '8. Your Rights',
    content: `Subject to applicable law, you have the right to:\n\n• Access the personal data we hold about you\n• Request correction of inaccurate data\n• Request deletion of your account and personal data\n• Object to or restrict certain processing of your data\n• Withdraw consent where processing is based on consent\n\nTo exercise any of these rights, contact us at ${CONTACT_EMAIL}. We will respond within 30 days.`,
  },
  {
    title: '9. Children\'s Privacy',
    content: `The Service is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal data, we will take steps to delete such information promptly.`,
  },
  {
    title: '10. Third-Party Links',
    content: `The Service may contain links to Partner websites or third-party services. This Privacy Policy applies solely to ${PRODUCT}. We are not responsible for the privacy practices of third-party websites and encourage you to review their privacy policies before providing any information.`,
  },
  {
    title: '11. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the "Last updated" date at the top of this page. Continued use of the Service after changes are posted constitutes your acceptance of the revised policy.`,
  },
  {
    title: '12. Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at ${CONTACT_EMAIL} or visit ${COMPANY_URL}.`,
  },
]

export default function PrivacyPage() {
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
            Privacy Policy
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
            Your privacy matters to us. This policy explains what data {PRODUCT} collects, how it is used, and the choices you have. We are committed to handling your information with care and transparency.
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
                className="text-sm leading-relaxed whitespace-pre-line"
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

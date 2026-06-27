import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Briefcase,
  MapPin,
  ChevronDown,
  Mail,
  MessageCircle,
  TrendingUp,
  Users,
  Award,
  Mountain,
  ClipboardList,
  Calculator,
  ShoppingCart,
  Send,
  Phone,
} from 'lucide-react'
import './Careers.css'

const jobOpenings = [
  {
    id: 'purchase-executive',
    title: 'Purchase Executive',
    department: 'Procurement',
    type: 'Full-Time',
    location: 'Haridwar, Uttarakhand',
    experience: 'Freshers / Experienced',
    Icon: ShoppingCart,
    description:
      'We are looking for a dynamic Purchase Executive to manage procurement operations, vendor negotiations, and supply chain coordination for our manufacturing units.',
    responsibilities: [
      'Manage end-to-end procurement of raw materials, components, and services',
      'Negotiate with vendors for best pricing, quality, and delivery terms',
      'Maintain purchase records, invoices, and inventory documentation',
      'Coordinate with production and stores for material requirements',
      'Ensure timely delivery of materials to support production schedules',
      'Develop and maintain strong vendor relationships',
    ],
    requirements: [
      'Bachelor\'s degree in Commerce, Business, or related field',
      'Good communication and negotiation skills',
      'Proficiency in MS Excel and basic accounting software',
      'Knowledge of GST and procurement processes preferred',
    ],
  },
  {
    id: 'purchase-manager',
    title: 'Purchase Manager',
    department: 'Procurement',
    type: 'Full-Time',
    location: 'Haridwar, Uttarakhand',
    experience: 'Experienced',
    Icon: ClipboardList,
    description:
      'Lead our procurement team and oversee the entire purchasing function. The ideal candidate will drive cost optimization, vendor management, and strategic sourcing for our engineering operations.',
    responsibilities: [
      'Lead and manage the purchase department and procurement team',
      'Develop and implement strategic purchasing plans',
      'Negotiate contracts with key suppliers for cost-effective procurement',
      'Monitor market trends and identify cost-saving opportunities',
      'Ensure compliance with company policies and quality standards',
      'Manage vendor evaluation, qualification, and performance reviews',
    ],
    requirements: [
      'Bachelor\'s / Master\'s degree in Supply Chain, Business, or Engineering',
      '3–5 years of experience in procurement or purchase management',
      'Strong negotiation, leadership, and analytical skills',
      'Proficiency in ERP / inventory management systems',
      'Experience in manufacturing or engineering industry preferred',
    ],
  },
  {
    id: 'accountant',
    title: 'Accountant',
    department: 'Finance & Accounts',
    type: 'Full-Time',
    location: 'Haridwar, Uttarakhand',
    experience: 'Experienced',
    Icon: Calculator,
    description:
      'We need an experienced Accountant to manage our financial records, GST filings, and day-to-day accounting operations with accuracy and compliance.',
    responsibilities: [
      'Maintain accurate books of accounts — ledgers, journals, and financial statements',
      'Handle GST returns, TDS filings, and statutory compliance',
      'Manage accounts payable, receivable, and bank reconciliations',
      'Prepare monthly MIS reports and financial summaries for management',
      'Coordinate with auditors for annual and tax audits',
      'Manage payroll processing and employee reimbursements',
    ],
    requirements: [
      'B.Com / M.Com with relevant accounting experience',
      '2+ years of experience in accounting roles',
      'Proficiency in Tally, GST portal, and MS Excel',
      'Knowledge of Indian tax laws — GST, TDS, Income Tax',
      'Strong attention to detail and organizational skills',
    ],
  },
]

function Careers() {
  const [expandedJob, setExpandedJob] = useState(null)

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId)
  }

  const handleApply = (jobTitle) => {
    const subject = encodeURIComponent(`Application for ${jobTitle} — Planttech Engineering`)
    const body = encodeURIComponent(
      `Dear Hiring Team,\n\nI am writing to express my interest in the ${jobTitle} position at Planttech Engineering Pvt. Ltd.\n\nPlease find my resume attached.\n\nLooking forward to hearing from you.\n\nBest regards,`
    )
    window.open(`mailto:info@planttech.co.in?subject=${subject}&body=${body}`, '_blank')
  }

  const handleWhatsApp = (jobTitle) => {
    const message = encodeURIComponent(
      `Hello Planttech Engineering! I am interested in the ${jobTitle} position. Could you share more details about the role and the application process?`
    )
    window.open(`https://wa.me/918130000846?text=${message}`, '_blank')
  }

  return (
    <div className="cr-page">
      {/* Navigation */}
      <nav className="cr-nav">
        <div className="cr-nav-inner">
          <Link to="/" className="cr-nav-brand">
            <img src="/PLANT_TECH_LOGO.png" alt="Planttech" className="cr-nav-logo" />
            <span>Planttech Engineering</span>
          </Link>
          <Link to="/" className="cr-nav-back">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="cr-hero">
        <div className="cr-hero-inner">
          <div className="cr-hero-label">
            <span className="cr-hero-dot" />
            Open Positions
          </div>
          <h1 className="cr-hero-h1">
            Join <span className="cr-hero-em">Planttech</span> Engineering
          </h1>
          <p className="cr-hero-p">
            We are building the future of herbal, pharmaceutical, and chemical process engineering — from the foothills of the Himalayas. Come build it with us.
          </p>
          <div className="cr-hero-metrics">
            <div className="cr-metric">
              <span className="cr-metric-val">15+</span>
              <span className="cr-metric-lbl">Years</span>
            </div>
            <div className="cr-metric">
              <span className="cr-metric-val">100+</span>
              <span className="cr-metric-lbl">Projects</span>
            </div>
            <div className="cr-metric">
              <span className="cr-metric-val">3</span>
              <span className="cr-metric-lbl">Openings</span>
            </div>
          </div>
        </div>
      </header>

      {/* Culture Strip */}
      <section className="cr-culture">
        <div className="cr-culture-inner">
          <div className="cr-culture-item">
            <TrendingUp size={22} strokeWidth={1.5} />
            <div>
              <strong>Growth</strong>
              <span>Fast-track your career with real engineering impact</span>
            </div>
          </div>
          <div className="cr-culture-item">
            <Users size={22} strokeWidth={1.5} />
            <div>
              <strong>Team</strong>
              <span>Work alongside 15+ year industry veterans</span>
            </div>
          </div>
          <div className="cr-culture-item">
            <Award size={22} strokeWidth={1.5} />
            <div>
              <strong>Excellence</strong>
              <span>State-of-the-art machinery for global clients</span>
            </div>
          </div>
          <div className="cr-culture-item">
            <Mountain size={22} strokeWidth={1.5} />
            <div>
              <strong>Location</strong>
              <span>Haridwar — at the foothills of the Himalayas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="cr-openings">
        <div className="cr-openings-inner">
          <div className="cr-openings-head">
            <h2>Current Openings</h2>
            <p>Select a role to view details and apply</p>
          </div>

          <div className="cr-jobs">
            {jobOpenings.map((job) => {
              const JobIcon = job.Icon
              const isOpen = expandedJob === job.id
              return (
                <article
                  key={job.id}
                  className={`cr-job ${isOpen ? 'cr-job--open' : ''}`}
                >
                  <div className="cr-job-bar" onClick={() => toggleJob(job.id)}>
                    <div className="cr-job-icon-wrap">
                      <JobIcon size={22} strokeWidth={1.5} />
                    </div>
                    <div className="cr-job-primary">
                      <h3>{job.title}</h3>
                      <div className="cr-job-tags">
                        <span className="cr-tag cr-tag--dept">{job.department}</span>
                        <span className="cr-tag cr-tag--type">{job.type}</span>
                        <span className="cr-tag cr-tag--exp">{job.experience}</span>
                      </div>
                    </div>
                    <div className="cr-job-end">
                      <div className="cr-job-loc">
                        <MapPin size={13} strokeWidth={1.5} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <div className={`cr-job-chevron ${isOpen ? 'cr-job-chevron--up' : ''}`}>
                      <ChevronDown size={20} strokeWidth={2} />
                    </div>
                  </div>

                  <div className={`cr-job-body ${isOpen ? 'cr-job-body--visible' : ''}`}>
                    <div className="cr-job-body-inner">
                      <p className="cr-job-desc">{job.description}</p>
                      <div className="cr-job-cols">
                        <div>
                          <h4>Responsibilities</h4>
                          <ul>
                            {job.responsibilities.map((r, i) => (
                              <li key={i}>{r}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4>Requirements</h4>
                          <ul>
                            {job.requirements.map((r, i) => (
                              <li key={i}>{r}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="cr-job-btns">
                        <button
                          className="cr-btn cr-btn--primary"
                          onClick={(e) => { e.stopPropagation(); handleApply(job.title) }}
                        >
                          <Mail size={16} strokeWidth={2} />
                          Apply via Email
                        </button>
                        <button
                          className="cr-btn cr-btn--wa"
                          onClick={(e) => { e.stopPropagation(); handleWhatsApp(job.title) }}
                        >
                          <MessageCircle size={16} strokeWidth={2} />
                          Apply via WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cr-cta">
        <div className="cr-cta-inner">
          <h2>Don't see the right role?</h2>
          <p>Send us your resume — we'd love to hear from you for future openings.</p>
          <div className="cr-cta-row">
            <a
              href="mailto:info@planttech.co.in?subject=Career%20Inquiry%20—%20Planttech%20Engineering"
              className="cr-btn cr-btn--primary"
            >
              <Send size={16} strokeWidth={2} />
              Send Resume
            </a>
            <a
              href="https://wa.me/918130000846?text=Hello%20Planttech!%20I%20am%20interested%20in%20career%20opportunities."
              target="_blank"
              rel="noopener noreferrer"
              className="cr-btn cr-btn--ghost"
            >
              <Phone size={16} strokeWidth={2} />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="cr-footer">
        <div className="cr-footer-inner">
          <div>
            <div className="cr-footer-brand">
              <img src="/PLANT_TECH_LOGO.png" alt="Planttech" className="cr-nav-logo" />
              <span>Planttech Engineering Pvt. Ltd.</span>
            </div>
            <p>&copy; 2024 Planttech Engineering Pvt. Ltd. All rights reserved.</p>
          </div>
          <div className="cr-footer-credit">
            <p>Designed by <strong>Shreyansh Singh</strong></p>
            <a href="mailto:shreyanshmainmail@gmail.com">shreyanshmainmail@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Careers

import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Languages, Mail, Phone } from 'lucide-react'

const details = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'PhD in Business Administration',
    note: 'HR focus',
  },
  {
    icon: BriefcaseBusiness,
    label: 'Experience',
    value: 'Human resources at TCP Health',
    note: 'Background in administration, finance & academic research',
  },
  {
    icon: Languages,
    label: 'Languages',
    value: 'Pashto · Urdu · English',
    note: 'Building a career towards HR management',
  },
]

function ContactLink({
  href,
  icon: Icon,
  label,
  value,
}: {
  href: string
  icon: typeof Phone
  label: string
  value: string
}) {
  return (
    <a className="contact-link" href={href}>
      <span className="contact-icon" aria-hidden="true">
        <Icon size={18} strokeWidth={1.8} />
      </span>
      <span className="contact-copy">
        <span className="contact-label">{label}</span>
        <span className="contact-value">{value}</span>
      </span>
      <ArrowUpRight className="contact-arrow" size={17} aria-hidden="true" />
    </a>
  )
}

export function PersonalCard() {
  return (
    <main className="page-shell">
      <article className="profile-card" aria-labelledby="profile-name">
        <div className="card-accent" aria-hidden="true" />
        <header className="profile-header">
          <p className="eyebrow"><span className="eyebrow-dot" /> Personal profile</p>
          <h1 id="profile-name">Dr. Jamshed Iqbal</h1>
          <p className="profile-role">HR Officer <span aria-hidden="true">·</span> Human Resources</p>
        </header>

        <div className="profile-divider" />

        <section className="profile-about" aria-labelledby="about-title">
          <h2 id="about-title">A little about me</h2>
          <p>
            I work in human resources at TCP Health, with a background in administration,
            finance and academic research. I speak Pashto, Urdu and English, and I am
            building my career towards HR management.
          </p>
        </section>

        <section className="detail-list" aria-label="Professional details">
          {details.map(({ icon: Icon, label, value, note }) => (
            <div className="detail-row" key={label}>
              <span className="detail-icon" aria-hidden="true"><Icon size={19} strokeWidth={1.7} /></span>
              <div className="detail-copy">
                <p className="detail-label">{label}</p>
                <p className="detail-value">{value}</p>
                <p className="detail-note">{note}</p>
              </div>
            </div>
          ))}
        </section>

        <footer className="contact-section">
          <p className="contact-heading">How to reach me</p>
          <div className="contact-list">
            <ContactLink href="tel:+923078019639" icon={Phone} label="Phone" value="+923078019639" />
            <ContactLink href="mailto:ijamshed59@gmail.com" icon={Mail} label="Email" value="ijamshed59@gmail.com" />
          </div>
        </footer>
      </article>
      <p className="page-note">Dr. Jamshed Iqbal <span aria-hidden="true">·</span> HR Officer</p>
    </main>
  )
}

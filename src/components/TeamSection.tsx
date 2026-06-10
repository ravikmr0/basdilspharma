import { SectionHeading } from './SectionHeading';

type TeamMember = {
  name: string;
  position: string;
  expertise: string;
  bio: string;
  image: string;
  icon: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Basant Kumar Singh',
    position: 'CEO & Managing Director',
    expertise: 'Pharmaceutical Strategy & Operations',
    bio: 'Visionary leader with 15+ years in pharmaceutical manufacturing and brand development.',
    image: '/public/basant.jpeg',
    icon: 'fa-user-tie'
  },
  {
    name: 'Dr. Dilasa Kumari ',
    position: 'Director - Commercial Operations',
    expertise: 'Quality Assurance & Regulatory Compliance',
    bio: 'Expert in WHO-GMP standards with 12+ years ensuring pharmaceutical excellence.',
    image: '/public/dilasa.jpeg',
    icon: 'fa-certificate'
  },
  {
    name: 'Amit Singh',
    position: 'Head of Product Development',
    expertise: 'Formulation Science & Innovation',
    bio: 'Innovation leader specialized in nutraceutical and Ayurvedic formulations.',
    image: '/public/amit.jpeg',
    icon: 'fa-flask'
  }
];

export function TeamSection() {
  return (
    <section className="section-shell" id="team">
      <div className="container">
        <SectionHeading
          eyebrow="Meet Our Team"
          title="Experienced leaders driving pharmaceutical excellence"
          description="Our diverse team brings decades of combined expertise in pharmaceutical manufacturing, quality assurance, innovation, and customer success."
        />

        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <article key={idx} className="team-card reveal premium-card">
              {/* Image Container */}
              <div className="team-card-image-wrapper">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="team-card-image"
                />
                <div className="team-card-overlay" />
                <div className="team-card-icon-badge">
                  <i className={`fa-solid ${member.icon}`} />
                </div>
              </div>

              {/* Content */}
              <div className="team-card-content">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-position">{member.position}</p>
                <div className="team-member-expertise">
                  <span className="expertise-tag">{member.expertise}</span>
                </div>
                <p className="team-member-bio">{member.bio}</p>
              </div>

              {/* Social Links (decorative) */}
              <div className="team-card-footer">
                <div className="team-card-accent" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

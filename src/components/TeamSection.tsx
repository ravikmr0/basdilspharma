import { SectionHeading } from './SectionHeading';

type TeamMember = {
  name: string;
  position: string;
  expertise: string;
  bio: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Basant Kumar Singh',
    position: 'CEO & Managing Director',
    expertise: 'Pharmaceutical Strategy & Operations',
    bio: 'Visionary leader with 15+ years in pharmaceutical manufacturing and brand development.',
    image: '/basant.jpeg'
  },
  {
    name: 'Dr. Dilasa Kumari ',
    position: 'Director - Commercial Operations',
    expertise: 'Quality Assurance & Regulatory Compliance',
    bio: 'Expert in WHO-GMP standards with 12+ years ensuring pharmaceutical excellence.',
    image: '/dilasa.jpeg'
  }
];

export function TeamSection() {
  return (
    <section className="py-10 md:py-14 lg:py-16 bg-gray-50" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Meet Our Team"
          title="Experienced leaders driving pharmaceutical excellence"
          description="Our diverse team brings decades of combined expertise in pharmaceutical manufacturing, quality assurance, innovation, and customer success."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {teamMembers.map((member, idx) => (
            <article key={idx} className="group rounded-lg overflow-hidden bg-white border border-primary-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col animate-fade-in" style={{ animationDelay: `${0.1 * (idx + 1)}s` }}>
              {/* Image Container */}
              <div className="media-image-frame h-80 rounded-none border-0 border-b border-primary-100">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="media-image-cover object-top group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold font-display text-gray-900 mb-1">{member.name}</h3>
                <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2">{member.position}</p>
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-medium">{member.expertise}</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">{member.bio}</p>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 bg-gradient-to-r from-primary-900 to-secondary-400" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

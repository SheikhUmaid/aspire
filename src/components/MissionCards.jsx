import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const programs = [
  { image: '/images/youth.png', title: 'Youth Development', desc: 'Empowering youth through skill development, career guidance, and leadership training.', link: '/programs/youth-development' },
  { image: '/images/women.png', title: 'Women Empowerment', desc: 'Strengthening women through vocational training, entrepreneurship, and livelihood programs.', link: '/programs/women-empowerment' },
  { image: '/images/sports.png', title: 'Sports Promotion', desc: 'Promoting physical fitness, discipline, and teamwork through sports activities.', link: '/programs/sports-promotion' },
  { image: '/images/digital.png', title: 'Digital Skills', desc: 'Enhancing digital literacy and technology skills for modern employment.', link: '/programs/digital-skills' },
  { image: '/images/mentalhealth.png', title: 'Mental Health', desc: 'Creating awareness and reducing stigma around mental health.', link: '/programs/mental-health' },
  { image: '/images/health.png', title: 'Medical Camps', desc: 'Providing accessible healthcare to underserved communities.', link: '/programs/health-medical-camps' },
  { image: '/images/vac.png', title: 'Vaccination Programs', desc: 'Supporting immunization drives and public health awareness.', link: '/programs/vaccination-programs' },
  { image: '/images/animal.png', title: 'Animal Welfare', desc: 'Promoting compassionate treatment and animal vaccination programs.', link: '/programs/animal-welfare' },
]

export default function MissionCards() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)] mb-4">
            Our Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-[var(--green-primary)]">
            Our Program Areas
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[var(--text-dark)]/80 leading-relaxed">
            Aspire Technologies implements comprehensive programs across eight key focus areas to create holistic community development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map(({ image, title, desc, link }) => (
            <Link
              key={title}
              to={link}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--green-muted)]/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-lg mb-2 text-[var(--text-dark)] group-hover:text-[var(--green-primary)] transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-[var(--text-dark)]/70 leading-relaxed mb-4 line-clamp-3">
                  {desc}
                </p>
                <div className="mt-auto flex items-center gap-2 text-[var(--green-primary)] font-medium text-sm group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

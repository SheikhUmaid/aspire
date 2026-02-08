import { Link } from 'react-router-dom'
import { Users, Heart, Trophy, Laptop, Brain, Stethoscope, Syringe, PawPrint, ArrowRight } from 'lucide-react'

const programs = [
  { icon: Users, title: 'Youth Development', desc: 'Empowering youth through skill development, career guidance, and leadership training.', link: '/programs/youth-development' },
  { icon: Heart, title: 'Women Empowerment', desc: 'Strengthening women through vocational training, entrepreneurship, and livelihood programs.', link: '/programs/women-empowerment' },
  { icon: Trophy, title: 'Sports Promotion', desc: 'Promoting physical fitness, discipline, and teamwork through sports activities.', link: '/programs/sports-promotion' },
  { icon: Laptop, title: 'Digital Skills', desc: 'Enhancing digital literacy and technology skills for modern employment.', link: '/programs/digital-skills' },
  { icon: Brain, title: 'Mental Health', desc: 'Creating awareness and reducing stigma around mental health.', link: '/programs/mental-health' },
  { icon: Stethoscope, title: 'Medical Camps', desc: 'Providing accessible healthcare to underserved communities.', link: '/programs/health-medical-camps' },
  { icon: Syringe, title: 'Vaccination Programs', desc: 'Supporting immunization drives and public health awareness.', link: '/programs/vaccination-programs' },
  { icon: PawPrint, title: 'Animal Welfare', desc: 'Promoting compassionate treatment and animal vaccination programs.', link: '/programs/animal-welfare' },
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
          {programs.map(({ icon: Icon, title, desc, link }) => (
            <Link
              key={title}
              to={link}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--green-muted)]/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-48 bg-gradient-to-br from-[var(--green-primary)]/20 via-[var(--green-muted)]/30 to-[var(--accent-gold)]/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Icon className="w-10 h-10 text-[var(--green-primary)]" />
                  </div>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[var(--green-primary)]/0 group-hover:bg-[var(--green-primary)]/10 transition-all"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-[var(--text-dark)] group-hover:text-[var(--green-primary)] transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-[var(--text-dark)]/70 leading-relaxed mb-4 line-clamp-3">
                  {desc}
                </p>
                <div className="flex items-center gap-2 text-[var(--green-primary)] font-medium text-sm group-hover:gap-3 transition-all">
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

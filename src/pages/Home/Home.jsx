import HeroCarousel from '../../components/HeroCarousel';
import MissionCards from '../../components/MissionCards';
import { Target, Eye, Heart, Users, Award, Globe, ArrowRight } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen">

      {/* ================= HERO ================= */}
      <HeroCarousel />

      {/* ================= ABOUT ================= */}
      <section className="py-15 md:py-25 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto ">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Image Side */}
            <div className="order-2 lg:order-1 relative">
              <div className="relative  overflow-hidden aspect-[1/1]">
                <img
                  src="/images/womenshawl.png"
                  alt="Community development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--accent-gold)]/20 rounded-full blur-3xl"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2 space-y-6">
              <span className="inline-block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)] mb-2">
                Who We Are
              </span>

              <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[var(--green-primary)]">
                Building Stronger Communities Together
              </h2>

              <div className="space-y-5 text-lg leading-relaxed text-[var(--text-dark)]/80">
                <p>
                  Aspire Technologies stands as a beacon of hope and progress for marginalized and underserved
                  populations across our communities.
                </p>

                <p>
                  Since our inception, we have worked tirelessly to address unemployment among youth,
                  economic vulnerability of women, the digital divide, mental health stigma, healthcare
                  access barriers, and animal welfare concerns.
                </p>

                <p>
                  What makes us different is our commitment to holistic development —
                  we build systems that last.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROGRAM AREAS ================= */}
      <section className=" bg-[var(--bg-cream)]">
        <MissionCards />
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-24 md:py-32 bg-[var(--green-primary)] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-gold)]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block uppercase tracking-widest text-xs font-medium text-white/70 mb-4">
              Our Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Creating Real Impact
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Our programs are designed to create measurable, sustainable change
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '1000+', label: 'Youth Trained', desc: 'Skills, career guidance, and leadership development' },
              { num: '500+', label: 'Women Empowered', desc: 'Economic independence through SHGs and livelihoods' },
              { num: '50+', label: 'Communities Served', desc: 'Rural and urban development initiatives' },
              { num: '200+', label: 'Medical Camps', desc: 'Free healthcare for underserved populations' },
            ].map(({ num, label, desc }) => (
              <div
                key={label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition"
              >
                <div className="text-5xl font-bold mb-4">{num}</div>
                <div className="font-semibold mb-2 text-lg">{label}</div>
                <p className="text-sm text-white/80">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {[{
            icon: Eye,
            title: "Our Vision",
            text: "To build an inclusive, skilled, and healthy society where communities thrive."
          }, {
            icon: Target,
            title: "Our Mission",
            text: "To empower communities through education, skills, healthcare, digital literacy, and social awareness."
          }].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white rounded-3xl p-12 shadow-lg border border-[var(--green-muted)]/20">
              <div className="w-16 h-16 rounded-2xl bg-[var(--green-primary)]/10 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-[var(--green-primary)]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--green-primary)]">
                {title}
              </h3>
              <p className="text-lg text-[var(--text-dark)]/80 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-24 md:py-32 bg-[var(--bg-cream)]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--green-primary)]">
            Our Core Values
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[Heart, Users, Award, Globe].map((Icon, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--green-muted)]/20">
              <div className="w-14 h-14 rounded-xl bg-[var(--green-primary)]/10 flex items-center justify-center mx-auto mb-5">
                <Icon className="w-7 h-7 text-[var(--green-primary)]" />
              </div>
              <p className="text-sm text-[var(--text-dark)]/80">
                Empowerment, inclusivity, accountability, and community-driven change.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/images/home1.jpeg"
              alt="Community engagement"
              className=" object-cover w-full h-[360px]"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="uppercase tracking-widest text-xs font-medium text-[var(--green-muted)]">
              Get Involved
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold text-[var(--green-primary)]">
              Ready to Make a Difference?
            </h2>

            <p className="text-lg text-[var(--text-dark)]/80">
              Join us in empowering communities and creating sustainable social change.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--green-primary)] text-white font-semibold hover:bg-[var(--green-dark)]"
              >
                Get in Touch <ArrowRight size={18} />
              </a>
              <a
                href="/programs/youth-development"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[var(--green-primary)] text-[var(--green-primary)] font-semibold hover:bg-[var(--green-primary)] hover:text-white"
              >
                Explore Programs
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;

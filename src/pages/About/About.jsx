import {
  Eye,
  Target,
  Heart,
  Users,
  Award,
  Globe,
  Shield,
  Lightbulb,
} from "lucide-react";

function About() {
  return (
    <div className="min-h-screen">

      {/* ================= PAGE HERO ================= */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Community empowerment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-primary)]/85 to-[var(--green-dark)]/85"></div>

        <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
            About Aspire Technologies
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Building an inclusive, progressive, skilled, and healthy society through holistic community empowerment
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Image */}
            <div className="order-2 lg:order-1 relative">
              <div className="relative  overflow-hidden aspect-[1/1]">
                <img
                  src="https://www.gavi.org/sites/default/files/vaccineswork/2024/Header/Kashmir4_h1.jpg"
                  alt="Community development work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--accent-gold)]/20 rounded-full blur-3xl"></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <span className="inline-block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)]">
                Who We Are
              </span>

              <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[var(--green-primary)]">
                Who We Are
              </h2>

              <div className="space-y-5 text-lg leading-relaxed text-[var(--text-dark)]/80">
                <p>
                  Aspire Technologies is a socially committed and development-oriented
                  organization working for holistic community empowerment through
                  multi-sector interventions.
                </p>

                <p>
                  We believe true development is achieved when youth are skilled,
                  women are empowered, communities are healthy, and social responsibility
                  is strengthened through inclusive programs.
                </p>

                <p>
                  Our work spans education, livelihood development, health awareness,
                  digital transformation, mental wellbeing, sports promotion, and
                  compassionate welfare initiatives that create long-lasting impact.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-24 md:py-32 bg-[var(--bg-cream)]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {[{
            icon: Eye,
            title: "Our Vision",
            text:
              "To build an inclusive, progressive, skilled, and healthy society where youth and women are empowered with opportunities, digital competencies, mental wellbeing, and sustainable livelihood."
          }, {
            icon: Target,
            title: "Our Mission",
            text:
              "To empower communities through innovative, technology-driven, and socially responsible programs across development sectors."
          }].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-3xl p-12 shadow-lg border border-[var(--green-muted)]/20 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--green-primary)]/10 flex items-center justify-center mx-auto mb-6">
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
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--green-primary)]">
            Our Core Values
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            { icon: Users, title: "Inclusivity & Equality" },
            { icon: Award, title: "Empowerment Through Skills" },
            { icon: Globe, title: "Transparency & Accountability" },
            { icon: Lightbulb, title: "Innovation & Technology" },
            { icon: Heart, title: "Community Participation" },
            { icon: Shield, title: "Compassion & Humanity" },
          ].map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="flex gap-4 items-start p-6 bg-[var(--green-muted)]/10 rounded-2xl border-l-4 border-[var(--green-primary)]"
            >
              <Icon className="text-[var(--green-primary)] mt-1" size={24} />
              <p className="text-lg text-[var(--text-dark)]/80">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHO WE SERVE ================= */}
      <section className="py-20 md:py-28 ">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--green-primary)]">
            Who We Serve
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-6">
          {[
            "Youth & Students",
            "Women & SHG Members",
            "Children & Adolescents",
            "Rural Communities",
            "Persons with Disabilities",
            "Economically Weaker Sections",
            "Unemployed Individuals",
            "Sports Aspirants",
            "Marginalized Families",
            "Street & Domestic Animals",
          ].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[var(--green-muted)]/20 hover:shadow-md"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default About;

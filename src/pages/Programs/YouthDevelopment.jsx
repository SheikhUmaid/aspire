import {
  Users,
  Target,
  Award,
  Briefcase,
  CheckCircle,
} from "lucide-react";

function YouthDevelopment() {
  return (
    <div className="w-full text-[var(--text-dark)]">

      {/* ================= HERO ================= */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-primary)] to-[var(--green-dark)]" />
        <div className="absolute inset-0 bg-black/15" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <Users size={64} className="mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Youth Development & Empowerment
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Building skilled, confident, and responsible youth for a productive future
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-20">

          {/* Text */}
          <div className="lg:col-span-2 space-y-5">
            <span className="block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)] mb-2">
              Our Focus
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--green-primary)]">
              Investing in Our Future Leaders
            </h2>

            <p className="text-[var(--text-dark)]/80">
              Young people represent our greatest asset and our brightest hope for the future.
              Yet, millions face barriers to education, employment, and opportunity.
            </p>

            <p className="text-[var(--text-dark)]/80">
              Aspire Technologies bridges the gap between education and employment by
              providing market-ready skills, mentorship, and career guidance.
            </p>

            <p className="text-[var(--text-dark)]/80">
              Our holistic approach focuses on technical ability, communication,
              leadership, resilience, and confidence.
            </p>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            {[
              { icon: Target, value: "1000+", label: "Youth Trained" },
              { icon: Award, value: "75%", label: "Placement Rate" },
              { icon: Briefcase, value: "50+", label: "Skill Programs" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-[var(--bg-cream)] rounded-2xl p-6 text-center"
              >
                <stat.icon className="mx-auto mb-3 text-[var(--green-primary)]" />
                <div className="text-3xl font-semibold text-[var(--green-primary)]">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--text-dark)]/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ACTIVITIES ================= */}
      <section className="py-24 bg-[var(--bg-cream)]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[var(--green-primary)] mb-4">
            What We Do for Youth
          </h2>
          <p className="text-center max-w-2xl mx-auto text-[var(--text-dark)]/70 mb-16">
            Comprehensive programs covering every aspect of youth development and career preparation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Career Counseling & Guidance",
              "Vocational & Skill Training",
              "Leadership Development Workshops",
              "Communication & Personality Development",
              "Entrepreneurship Training",
              "Job Readiness & Placement Support",
              "Competitive Exam Preparation",
              "Rural Youth Capacity Building",
              "Life Skills Education",
              "Social Awareness Programs",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 hover:shadow-md transition"
              >
                <div className="text-[var(--green-muted)] font-medium text-sm mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[var(--text-dark)]">
                  {title}
                </h3>
                <p className="text-sm text-[var(--text-dark)]/70 leading-relaxed">
                  Practical, confidence-building programs designed to prepare youth
                  for real-world opportunities and long-term success.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[var(--green-primary)] mb-4">
            Creating Lasting Change
          </h2>
          <p className="text-center text-[var(--text-dark)]/70 mb-16">
            Measurable outcomes that transform lives and communities
          </p>

          <div className="space-y-8">
            {[
              "Improved Employability",
              "Reduced Unemployment",
              "Enhanced Career Planning",
              "Increased Confidence",
              "Positive Social Engagement",
              "Reduction in Social Problems",
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle className="text-[var(--green-primary)] mt-1" />
                <div>
                  <h4 className="font-semibold text-[var(--text-dark)]">
                    {item}
                  </h4>
                  <p className="text-sm text-[var(--text-dark)]/70">
                    Youth gain stability, purpose, and the ability to contribute
                    positively to society.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-[var(--bg-cream)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--green-primary)] mb-6">
            Want to Empower Youth in Your Community?
          </h2>
          <p className="text-lg text-[var(--text-dark)]/80 mb-10">
            Partner with us, sponsor programs, or volunteer as a mentor to help
            young people build better futures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
            <a href="/partners" className="btn-secondary">
              Become a Partner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default YouthDevelopment;

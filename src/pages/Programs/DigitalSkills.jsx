import {
  Laptop,
  Target,
  Award,
  Wifi,
  CheckCircle,
} from "lucide-react";

function DigitalSkills() {
  return (
    <div className="w-full text-[var(--text-dark)]">

      {/* ================= HERO ================= */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Digital skills training"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-primary)]/85 to-[var(--green-dark)]/85" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <Laptop size={64} className="mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Digital Technologies & Skill Development
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Preparing communities for the digital economy through technology education
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-20">

          {/* Text */}
          <div className="lg:col-span-2 space-y-5">
            <span className="block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)]">
              Our Approach
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--green-primary)]">
              Bridging the Digital Divide
            </h2>

            <p className="text-[var(--text-dark)]/80">
              In today’s digital world, computer skills, internet literacy, and
              technology familiarity are essential for meaningful participation
              in society and the economy. Yet millions still lack access to digital
              education, widening inequality.
            </p>

            <p className="text-[var(--text-dark)]/80">
              Aspire Technologies believes digital empowerment is fundamental to
              inclusive development. Our programs ensure that background or location
              never becomes a barrier to accessing technology education.
            </p>

            <p className="text-[var(--text-dark)]/80">
              From basic computer literacy to advanced digital skills, e-commerce,
              and online entrepreneurship, our training is practical, job-oriented,
              and designed to unlock real opportunities in the digital age.
            </p>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            {[
              { icon: Target, value: "800+", label: "People Trained" },
              { icon: Award, value: "60%", label: "Employment Rate" },
              { icon: Wifi, value: "30+", label: "Training Centers" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-[var(--bg-cream)] rounded-2xl p-6 text-center border border-[var(--green-muted)]/20"
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

      {/* ================= IMAGE STRIP ================= */}
      <section className="py-16 bg-[var(--bg-cream)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            "https://images.unsplash.com/photo-1531482615713-2afd69097998",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Digital skills activity"
              className="rounded-2xl object-cover h-[240px] w-full"
            />
          ))}
        </div>
      </section>

      {/* ================= ACTIVITIES ================= */}
      <section className="py-24 bg-[var(--bg-cream)]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[var(--green-primary)] mb-4">
            Digital Skills Training Programs
          </h2>
          <p className="text-center max-w-2xl mx-auto text-[var(--text-dark)]/70 mb-16">
            From basic literacy to advanced digital competencies for the modern workforce
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Basic Computer Literacy",
              "MS Office & Productivity Tools",
              "Internet & Email Skills",
              "Digital Marketing Training",
              "E-Commerce & Online Business",
              "Graphic Design Basics",
              "Cyber Safety & Security",
              "Digital Payment Systems",
              "Online Education Platforms",
              "Digital Services & E-Governance",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 hover:shadow-md transition border border-[var(--green-muted)]/20"
              >
                <div className="text-[var(--green-muted)] text-sm font-medium mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[var(--text-dark)]">
                  {title}
                </h3>
                <p className="text-sm text-[var(--text-dark)]/70 leading-relaxed">
                  Practical, job-oriented training that enables participants to
                  work, learn, and grow confidently in the digital ecosystem.
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
            Impact of Digital Skills
          </h2>
          <p className="text-center text-[var(--text-dark)]/70 mb-16">
            Digital literacy transforms livelihoods and enables inclusive participation
          </p>

          <div className="space-y-8">
            {[
              "Enhanced Employment Opportunities",
              "Online Entrepreneurship Growth",
              "Reduced Cyber Crime Vulnerability",
              "Access to Online Services",
              "Continuous Learning Capability",
              "Social and Economic Inclusion",
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle className="text-[var(--green-primary)] mt-1" />
                <div>
                  <h4 className="font-semibold text-[var(--text-dark)]">
                    {item}
                  </h4>
                  <p className="text-sm text-[var(--text-dark)]/70">
                    Digital skills empower individuals to access opportunities,
                    protect themselves online, and participate fully in modern society.
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
            Support Digital Empowerment
          </h2>
          <p className="text-lg text-[var(--text-dark)]/80 mb-10">
            Sponsor training programs, donate equipment, or support digital
            literacy initiatives to help bridge the digital divide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Get in Touch
            </a>
            <a href="/partners" className="btn-secondary">
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DigitalSkills;

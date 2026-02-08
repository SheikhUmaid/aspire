import {
  Stethoscope,
  Target,
  Heart,
  Activity,
  CheckCircle,
} from "lucide-react";

function HealthMedicalCamps() {
  return (
    <div className="w-full text-[var(--text-dark)]">

      {/* ================= HERO ================= */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img
          src="https://www.ssbcrack.com/wp-content/uploads/2024/03/chinar-warriors.jpg"
          alt="Medical camp and healthcare outreach"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-primary)]/85 to-[var(--green-dark)]/85" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <Stethoscope size={64} className="mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Health Awareness & Medical Camps
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Bringing healthcare services to underserved communities
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-20">

          {/* Text */}
          <div className="lg:col-span-2 space-y-5">
            <span className="block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)]">
              Our Mission
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--green-primary)]">
              Healthcare for All
            </h2>

            <p className="text-[var(--text-dark)]/80">
              Access to basic healthcare remains a challenge for many communities,
              especially in rural and economically weaker areas. Distance, cost,
              and lack of awareness often delay treatment until illnesses become severe.
            </p>

            <p className="text-[var(--text-dark)]/80">
              Aspire Technologies believes healthcare is a fundamental right.
              Our Health Awareness & Medical Camps bring essential medical services
              directly to communities that need them most.
            </p>

            <p className="text-[var(--text-dark)]/80">
              Through free medical camps and preventive education, we focus not only
              on treating illness but also on empowering people with knowledge
              about nutrition, hygiene, disease prevention, and healthy lifestyles.
            </p>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            {[
              { icon: Target, value: "10,000+", label: "People Examined" },
              { icon: Heart, value: "200+", label: "Camps Organized" },
              { icon: Activity, value: "50+", label: "Villages Covered" },
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


      {/* ================= ACTIVITIES ================= */}
      <section className="py-24 bg-[var(--bg-cream)]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[var(--green-primary)] mb-4">
            Our Healthcare Activities
          </h2>
          <p className="text-center max-w-2xl mx-auto text-[var(--text-dark)]/70 mb-16">
            Comprehensive health services and awareness programs for community wellbeing
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "General Health Check-up Camps",
              "Eye Check-up & Vision Care",
              "Dental Health Camps",
              "Blood Pressure & Diabetes Screening",
              "Women's Health Programs",
              "Child Health & Nutrition",
              "Hygiene & Sanitation Awareness",
              "Nutrition & Balanced Diet Education",
              "Communicable Disease Awareness",
              "Medical Referral Support",
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
                  Community-based healthcare initiatives that promote early diagnosis,
                  preventive care, and long-term wellbeing.
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
            Health Impact in Communities
          </h2>
          <p className="text-center text-[var(--text-dark)]/70 mb-16">
            Accessible healthcare builds healthier, more resilient communities
          </p>

          <div className="space-y-8">
            {[
              "Early Disease Detection",
              "Reduced Healthcare Costs",
              "Improved Health Awareness",
              "Better Maternal & Child Health",
              "Community Health Culture",
              "Reduced Disease Burden",
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle className="text-[var(--green-primary)] mt-1" />
                <div>
                  <h4 className="font-semibold text-[var(--text-dark)]">
                    {item}
                  </h4>
                  <p className="text-sm text-[var(--text-dark)]/70">
                    Preventive care, education, and timely treatment reduce
                    suffering and improve overall quality of life.
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
            Support Community Healthcare
          </h2>
          <p className="text-lg text-[var(--text-dark)]/80 mb-10">
            Help us organize medical camps and deliver healthcare to underserved
            communities. Medical professionals, organizations, and supporters
            can all play a vital role.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
            <a href="/partners" className="btn-secondary">
              Support Health Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HealthMedicalCamps;

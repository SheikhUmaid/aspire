import { TrendingUp, Users, Award, Heart, CheckCircle } from "lucide-react";

function Impact() {
  return (
    <div className="min-h-screen">

      {/* ================= PAGE HERO ================= */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Community impact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-primary)]/85 to-[var(--green-dark)]/85"></div>

        <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
            Our Impact & Outcomes
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Measuring the difference we make in communities
          </p>
        </div>
      </section>

      {/* ================= IMPACT INTRO ================= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Image Side */}
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
                alt="Impact on communities"
                className=" shadow-lg object-cover w-full h-[480px]"
              />
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2 space-y-6">
              <span className="inline-block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)]">
                Our Impact
              </span>

              <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[var(--green-primary)]">
                Creating Measurable Change
              </h2>

              <p className="text-lg leading-relaxed text-[var(--text-dark)]/80">
                Aspire Technologies is committed to creating real, measurable
                impact in the communities we serve. Every program we implement
                is designed with clear objectives, defined outcomes, and
                long-term sustainability in mind.
              </p>

              <p className="text-lg leading-relaxed text-[var(--text-dark)]/80">
                Through continuous monitoring, evaluation, and community
                feedback, we ensure our interventions lead to meaningful,
                lasting improvements in quality of life.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= IMPACT STATS ================= */}
      <section className="py-24 md:py-32 bg-[var(--green-primary)] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-gold)]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              { icon: TrendingUp, value: "15,000+", label: "Total Beneficiaries" },
              { icon: Users, value: "50+", label: "Communities Served" },
              { icon: Award, value: "500+", label: "Programs Conducted" },
              { icon: Heart, value: "100+", label: "Partner Organizations" },
            ].map(({ icon: Icon, value, label }, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition"
              >
                <Icon className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  {value}
                </div>
                <div className="text-lg font-semibold">
                  {label}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= EXPECTED OUTCOMES ================= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-[var(--green-primary)]">
              Expected Outcomes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              "Increased employability and reduced unemployment among youth",
              "Improved women livelihood and economic empowerment",
              "Enhanced sports participation and physical wellbeing",
              "Improved digital literacy and cyber awareness",
              "Better mental health awareness and reduced psychological stigma",
              "Increased access to healthcare through medical camps",
              "Higher vaccination coverage and public health improvement",
              "Better animal welfare systems and reduced rabies risk",
              "Stronger, healthier, and self-reliant communities",
            ].map((outcome, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-start p-6 bg-[var(--bg-cream)] rounded-2xl border-l-4 border-[var(--green-primary)] hover:shadow-md transition"
              >
                <CheckCircle
                  className="text-[var(--green-primary)] flex-shrink-0 mt-1"
                  size={24}
                />
                <p className="text-lg text-[var(--text-dark)]/80 leading-relaxed">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Impact;

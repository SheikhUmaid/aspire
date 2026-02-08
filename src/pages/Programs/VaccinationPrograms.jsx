import { Syringe, Target, Shield, Heart, CheckCircle } from "lucide-react";

function VaccinationPrograms() {
  return (
    <div className="min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144"
          alt="Vaccination awareness"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-primary)]/85 to-[var(--green-dark)]/85" />

        <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <Syringe size={64} className="mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
            Vaccination Awareness & Immunization Programs
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Protecting communities through vaccination education and support
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Text */}
            <div className="space-y-6">
              <span className="uppercase tracking-widest text-xs font-medium text-[var(--green-muted)]">
                Immunization
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-[var(--green-primary)]">
                Prevention Through Immunization
              </h2>

              <div className="space-y-5 text-lg text-[var(--text-dark)]/80 leading-relaxed">
                <p>
                  Vaccines are one of the greatest public health achievements in
                  human history, preventing millions of deaths every year from
                  diseases that once caused widespread suffering and disability.
                </p>
                <p>
                  Aspire Technologies works to bridge gaps in vaccination coverage
                  by educating communities, dispelling myths, and supporting
                  government immunization programs to ensure no child or family
                  is left unprotected.
                </p>
                <p>
                  Through collaboration with health workers and local authorities,
                  we mobilize communities, track missed vaccinations, and build
                  trust through science-based, transparent communication.
                </p>
              </div>
            </div>

            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1615461066841-6116e61058f4"
              alt="Child vaccination"
              className="rounded-[3rem] shadow-lg object-cover w-full h-[480px]"
            />

          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-6 mt-20">
            {[
              { icon: Target, value: "15,000+", label: "Families Reached" },
              { icon: Shield, value: "300+", label: "Awareness Camps" },
              { icon: Heart, value: "90%", label: "Coverage Rate" },
            ].map(({ icon: Icon, value, label }, i) => (
              <div
                key={i}
                className="bg-[var(--bg-cream)] rounded-2xl p-8 text-center border border-[var(--green-muted)]/20 hover:shadow-md transition"
              >
                <Icon className="w-10 h-10 mx-auto mb-4 text-[var(--green-primary)]" />
                <div className="text-4xl font-bold text-[var(--green-primary)] mb-2">
                  {value}
                </div>
                <div className="text-sm text-[var(--text-dark)]/70">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ACTIVITIES ================= */}
      <section className="py-24 md:py-32 bg-[var(--bg-cream)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-[var(--green-primary)] mb-6">
              Our Vaccination Activities
            </h2>
            <p className="text-lg text-[var(--text-dark)]/80 max-w-3xl mx-auto">
              Supporting immunization through awareness, mobilization, and education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Routine Immunization Awareness",
              "Community Mobilization for Vaccination",
              "Myth & Misinformation Busting",
              "Door-to-Door Vaccine Awareness",
              "Seasonal Vaccination Campaigns",
              "Coordination with Health Workers",
              "Vaccine Safety Education",
              "Adult & Adolescent Vaccination",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--green-muted)]/20 hover:shadow-md transition"
              >
                <div className="text-[var(--green-primary)] font-bold text-xl mb-3">
                  {(i + 1).toString().padStart(2, "0")}
                </div>
                <h3 className="font-semibold text-lg mb-3 text-[var(--text-dark)]">
                  {title}
                </h3>
                <p className="text-sm text-[var(--text-dark)]/80 leading-relaxed">
                  Education and outreach designed to improve vaccine understanding,
                  trust, and coverage across communities.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-[var(--green-primary)]">
              Impact of Vaccination Programs
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              "Improved vaccination coverage and on-time immunization",
              "Prevention of disease outbreaks through herd immunity",
              "Reduced child mortality from preventable diseases",
              "Stronger public health systems and community trust",
              "Lower healthcare costs and economic burden",
              "Improved health literacy and informed decision-making",
            ].map((text, i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-6 bg-[var(--bg-cream)] rounded-2xl border-l-4 border-[var(--green-primary)] hover:shadow-md transition"
              >
                <CheckCircle className="text-[var(--green-primary)] mt-1" />
                <p className="text-lg text-[var(--text-dark)]/80 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 md:py-32 bg-[var(--green-primary)] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Support Vaccination Awareness
          </h2>
          <p className="text-lg text-white/90 mb-10 leading-relaxed">
            Help ensure every child receives life-saving vaccines. Support our
            awareness campaigns, mobilization efforts, or volunteer in your
            community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[var(--green-primary)] font-semibold hover:bg-[var(--bg-cream)] transition"
            >
              Get Involved
            </a>
            <a
              href="/partners"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[var(--green-primary)] transition"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default VaccinationPrograms;

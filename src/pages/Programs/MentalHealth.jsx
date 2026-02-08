import {
  Brain,
  Target,
  Heart,
  Shield,
  CheckCircle,
} from "lucide-react";

function MentalHealth() {
  return (
    <div className="w-full text-[var(--text-dark)]">

      {/* ================= HERO ================= */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8"
          alt="Mental health support"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-primary)]/85 to-[var(--green-dark)]/85" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <Brain size={64} className="mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Mental Health Awareness & Wellbeing Programs
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Breaking stigma and creating supportive communities for mental wellness
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-20">

          {/* Text */}
          <div className="lg:col-span-2 space-y-5">
            <span className="block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)]">
              Our Purpose
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--green-primary)]">
              Making Mental Health a Priority
            </h2>

            <p className="text-[var(--text-dark)]/80">
              Mental health is as important as physical health, yet it remains one of
              the most stigmatized and neglected aspects of healthcare. Millions suffer
              in silence due to fear, lack of awareness, or social judgment.
            </p>

            <p className="text-[var(--text-dark)]/80">
              Aspire Technologies believes everyone deserves access to mental health
              support. Our programs work to reduce stigma, increase awareness, and
              create safe spaces where people can talk openly about mental wellbeing.
            </p>

            <p className="text-[var(--text-dark)]/80">
              Through prevention-focused education and early intervention, we help
              individuals recognize warning signs, practice self-care, support others,
              and seek professional help when needed. Mental health is not a weakness —
              it’s a part of being human.
            </p>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            {[
              { icon: Target, value: "5,000+", label: "People Reached" },
              { icon: Heart, value: "200+", label: "Awareness Sessions" },
              { icon: Shield, value: "100+", label: "Counseling Referrals" },
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[var(--green-primary)] mb-4">
            Our Mental Health Activities
          </h2>
          <p className="text-center max-w-2xl mx-auto text-[var(--text-dark)]/70 mb-16">
            Creating awareness, reducing stigma, and building supportive communities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Mental Health Awareness in Schools",
              "Depression & Anxiety Education",
              "Stress Management Workshops",
              "Suicide Prevention Programs",
              "Counseling Support & Referrals",
              "De-Addiction & Rehabilitation Awareness",
              "Workplace Mental Health",
              "Family & Parenting Counseling",
              "Trauma & PTSD Awareness",
              "Mental Health First Aid Training",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-[var(--bg-cream)] rounded-2xl p-8 hover:shadow-md transition border border-[var(--green-muted)]/20"
              >
                <div className="text-[var(--green-muted)] text-sm font-medium mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[var(--text-dark)]">
                  {title}
                </h3>
                <p className="text-sm text-[var(--text-dark)]/70 leading-relaxed">
                  Community-based programs that promote emotional resilience,
                  early intervention, and access to appropriate mental health support.
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
            Creating Mentally Healthy Communities
          </h2>
          <p className="text-center text-[var(--text-dark)]/70 mb-16">
            Our programs drive lasting change in awareness, attitudes, and support systems
          </p>

          <div className="space-y-8">
            {[
              "Reduced Mental Health Stigma",
              "Increased Help-Seeking Behavior",
              "Better Emotional Resilience",
              "Suicide Prevention",
              "Stronger Support Networks",
              "Overall Community Wellbeing",
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle className="text-[var(--green-primary)] mt-1" />
                <div>
                  <h4 className="font-semibold text-[var(--text-dark)]">
                    {item}
                  </h4>
                  <p className="text-sm text-[var(--text-dark)]/70">
                    Awareness, education, and early support help individuals
                    and communities thrive mentally and emotionally.
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
            Support Mental Health Awareness
          </h2>
          <p className="text-lg text-[var(--text-dark)]/80 mb-10">
            Help us build communities where mental health is understood,
            supported, and prioritized. Sponsor programs, partner with us,
            or support mental wellbeing initiatives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Contact Us
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

export default MentalHealth;

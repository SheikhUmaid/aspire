import {
  Trophy,
  Target,
  Award,
  CheckCircle,
} from "lucide-react";

function SportsPromotion() {
  return (
    <div className="w-full text-[var(--text-dark)]">

      {/* ================= HERO ================= */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b"
          alt="Youth sports"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-primary)]/85 to-[var(--green-dark)]/85"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <Trophy size={64} className="mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Sports Promotion & Youth Fitness
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Building discipline, teamwork, and healthy lifestyles through sports
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Text */}
          <div className="space-y-5">
            <span className="block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)]">
              Our Approach
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--green-primary)]">
              Sports as a Tool for Youth Development
            </h2>

            <p className="text-[var(--text-dark)]/80">
              Sports go far beyond physical fitness. They teach discipline,
              perseverance, teamwork, leadership, and resilience — qualities
              essential for success in life.
            </p>

            <p className="text-[var(--text-dark)]/80">
              Aspire Technologies creates inclusive sports opportunities by
              organizing tournaments, providing coaching, and promoting
              physical fitness in schools and communities.
            </p>

            <p className="text-[var(--text-dark)]/80">
              Through sports, we channel youth energy positively, reduce
              harmful behaviors, and build confident, healthy future leaders.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc"
              alt="Youth training"
              className="rounded-3xl shadow-lg object-cover w-full h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 bg-[var(--bg-cream)]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { icon: Target, value: "2000+", label: "Youth Engaged" },
            { icon: Award, value: "100+", label: "Tournaments Organized" },
            { icon: Trophy, value: "50+", label: "Schools Reached" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-8">
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
      </section>

      {/* ================= ACTIVITIES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Image strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
              "https://images.unsplash.com/photo-1518091043644-c1d4457512c6",
              "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Sports activity"
                className="rounded-2xl object-cover h-[240px] w-full"
              />
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[var(--green-primary)] mb-4">
            Our Sports Activities
          </h2>
          <p className="text-center max-w-2xl mx-auto text-[var(--text-dark)]/70 mb-16">
            Creating opportunities for youth to engage in organized sports and physical fitness
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Sports Tournaments & Competitions",
              "School Sports Programs",
              "Coaching & Skills Training",
              "Girls’ Sports Promotion",
              "Fitness & Wellness Programs",
              "Talent Identification & Support",
              "Sports Equipment Support",
              "Sports-Based Life Skills",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-[var(--bg-cream)] rounded-2xl p-8 hover:shadow-md transition"
              >
                <div className="text-[var(--green-muted)] text-sm font-medium mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  {title}
                </h3>
                <p className="text-sm text-[var(--text-dark)]/70">
                  Structured sports programs that build physical fitness,
                  discipline, teamwork, and leadership among youth.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-24 bg-[var(--bg-cream)]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[var(--green-primary)] mb-16">
            Impact of Sports Programs
          </h2>

          <div className="space-y-8">
            {[
              "Improved Physical Health",
              "Enhanced Mental Wellbeing",
              "Development of Discipline",
              "Reduced Substance Abuse Risk",
              "Stronger Community Bonds",
              "Leadership Development",
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle className="text-[var(--green-primary)] mt-1" />
                <div>
                  <h4 className="font-semibold">{item}</h4>
                  <p className="text-sm text-[var(--text-dark)]/70">
                    Sports participation creates lasting positive effects
                    on youth behaviour, health, and community culture.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--green-primary)] mb-6">
            Help Us Build a Sports Culture
          </h2>
          <p className="text-lg text-[var(--text-dark)]/80 mb-10">
            Sponsor tournaments, donate equipment, or volunteer as a coach.
            Together, we can give every child the chance to play, compete,
            and grow through sports.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
            <a href="/partners" className="btn-secondary">
              Become a Sponsor
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default SportsPromotion;

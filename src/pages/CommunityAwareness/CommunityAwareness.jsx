import {
  Users,
  Heart,
  Shield,
  Globe,
  CheckCircle,
} from "lucide-react";

function CommunityAwareness() {
  return (
    <div className="w-full text-[var(--text-dark)]">

      {/* ================= HERO ================= */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
          alt="Community awareness"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-primary)]/85 to-[var(--green-dark)]/85"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <Users size={64} className="mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Community Awareness Programs
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Creating informed, responsible, and empowered communities through awareness initiatives
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Text */}
          <div className="space-y-5">
            <span className="block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)]">
              Our Focus
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--green-primary)]">
              Building Awareness for Lasting Change
            </h2>

            <p className="text-[var(--text-dark)]/80">
              Aspire Technologies conducts regular community awareness programs on
              vital social and health issues that directly impact quality of life
              and community wellbeing.
            </p>

            <p className="text-[var(--text-dark)]/80">
              These initiatives help communities understand critical issues,
              adopt healthier practices, and build social responsibility that
              leads to long-term, sustainable change.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXmAOUxguwtuxSH0Yzb-ItMtsII0vD1fdmnQ&s"
              alt="Community discussion"
              className="rounded-3xl shadow-lg object-cover w-full h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* ================= TOPICS ================= */}
      <section className="py-24 bg-[var(--bg-cream)]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Image strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNoYJHoiTQQeevipfpeC8Luxik1jvXIrBhLg&s",
              "https://msfsouthasia.org/wp-content/uploads/2025/10/DSC_4865-1024x683.jpg",
              "https://msfsouthasia.org/wp-content/uploads/2025/10/DSC_4911_1-1024x683.jpg",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Awareness activity"
                className="rounded-2xl object-cover h-[240px] w-full"
              />
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[var(--green-primary)] mb-4">
            Key Awareness Areas
          </h2>
          <p className="text-center max-w-2xl mx-auto text-[var(--text-dark)]/70 mb-16">
            Addressing essential social, health, and environmental issues at the community level
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Cleanliness & Sanitation",
              "Safe Drinking Water",
              "Environment Protection",
              "Drug De-addiction",
              "Child Rights & Education",
              "Gender Equality",
              "Social Harmony",
              "Nutrition & Health",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border-l-4 border-[var(--green-primary)] hover:shadow-md transition"
              >
                <h3 className="font-semibold mb-2 text-[var(--green-primary)]">
                  {title}
                </h3>
                <p className="text-sm text-[var(--text-dark)]/70 leading-relaxed">
                  Community-driven awareness programs designed to educate,
                  inform, and promote responsible social behavior.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[var(--green-primary)] mb-16">
            Impact of Awareness Programs
          </h2>

          <div className="space-y-8">
            {[
              "Improved Public Health Practices",
              "Cleaner and Safer Communities",
              "Reduced Substance Abuse Risks",
              "Stronger Social Harmony",
              "Increased Civic Responsibility",
              "Better Quality of Life",
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle className="text-[var(--green-primary)] mt-1" />
                <div>
                  <h4 className="font-semibold">{item}</h4>
                  <p className="text-sm text-[var(--text-dark)]/70">
                    Awareness leads to informed decisions, healthier behaviors,
                    and stronger, more resilient communities.
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
            Support Community Awareness
          </h2>
          <p className="text-lg text-[var(--text-dark)]/80 mb-10">
            Join us in building informed and responsible communities.
            Sponsor awareness campaigns, volunteer, or partner with us
            to amplify positive social change.
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

export default CommunityAwareness;

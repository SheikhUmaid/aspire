import {
  PawPrint,
  Target,
  Shield,
  Heart,
  CheckCircle,
} from "lucide-react";

function AnimalWelfare() {
  return (
    <div className="w-full text-[var(--text-dark)]">

      {/* ================= HERO ================= */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558788353-f76d92427f16"
          alt="Animal welfare and community care"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-primary)]/85 to-[var(--green-dark)]/85" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <PawPrint size={64} className="mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Animal Welfare Awareness & Programs
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Promoting compassion and responsible care for animals in communities
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-20">

          {/* Text */}
          <div className="lg:col-span-2 space-y-5">
            <span className="block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)]">
              Our Commitment
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--green-primary)]">
              Compassion for All Living Beings
            </h2>

            <p className="text-[var(--text-dark)]/80">
              A truly compassionate society extends its care beyond humans to animals
              who share our communities and ecosystems. Street animals often face neglect,
              abuse, and health risks, while zoonotic diseases pose serious public health
              concerns.
            </p>

            <p className="text-[var(--text-dark)]/80">
              Aspire Technologies believes animal welfare is both an ethical responsibility
              and a public health necessity. Our programs promote humane treatment,
              vaccination, disease prevention, and peaceful human–animal coexistence.
            </p>

            <p className="text-[var(--text-dark)]/80">
              Through partnerships with veterinary professionals and animal welfare groups,
              we organize vaccination camps, sterilization awareness, rescue support,
              and community education to protect animals who cannot speak for themselves.
            </p>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            {[
              { icon: Target, value: "5,000+", label: "Animals Vaccinated" },
              { icon: Shield, value: "100+", label: "Vaccination Camps" },
              { icon: Heart, value: "40+", label: "Communities Served" },
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
            Our Animal Welfare Activities
          </h2>
          <p className="text-center max-w-2xl mx-auto text-[var(--text-dark)]/70 mb-16">
            Creating safer communities through animal care, vaccination, and awareness
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Anti-Rabies Vaccination Camps",
              "Rabies Awareness & Prevention",
              "Zoonotic Disease Education",
              "Animal Sterilization Awareness",
              "Responsible Pet Ownership",
              "Community Feeding Programs",
              "Animal Protection Laws Awareness",
              "Emergency Animal Rescue Support",
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
                  Community-focused initiatives that protect animals, reduce disease,
                  and promote humane coexistence between humans and animals.
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
            Impact of Animal Welfare Programs
          </h2>
          <p className="text-center text-[var(--text-dark)]/70 mb-16">
            Compassionate animal care builds safer, healthier, and more humane communities
          </p>

          <div className="space-y-8">
            {[
              "Reduced Rabies Risk",
              "Improved Public Safety",
              "Controlled Animal Populations",
              "Reduced Animal Suffering",
              "Increased Community Compassion",
              "Better Human–Animal Coexistence",
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle className="text-[var(--green-primary)] mt-1" />
                <div>
                  <h4 className="font-semibold text-[var(--text-dark)]">
                    {item}
                  </h4>
                  <p className="text-sm text-[var(--text-dark)]/70">
                    Sustainable animal welfare practices create long-term benefits
                    for both communities and ecosystems.
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
            Support Animal Welfare
          </h2>
          <p className="text-lg text-[var(--text-dark)]/80 mb-10">
            Help us build compassionate communities by supporting vaccination camps,
            sterilization programs, rescue efforts, and animal welfare awareness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
            <a href="/partners" className="btn-secondary">
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AnimalWelfare;

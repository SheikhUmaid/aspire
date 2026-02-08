import { Building2, Users, Briefcase, Heart, ArrowRight } from "lucide-react";

function Partners() {
  return (
    <div className="min-h-screen">

      {/* ================= PAGE HERO ================= */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Partnership and collaboration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-primary)]/85 to-[var(--green-dark)]/85"></div>

        <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
            Partners & Collaboration
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Building partnerships for greater social impact
          </p>
        </div>
      </section>

      {/* ================= COLLABORATION INTRO ================= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Image Side */}
            <div className="order-2 lg:order-1">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6i4FOfc_n04mOD3FEzvdT9UEHlS0R5Iu3pQ&s"
                alt="Team collaboration"
                className=" shadow-lg object-cover w-full h-[480px]"
              />
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2 space-y-6">
              <span className="inline-block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)]">
                Collaboration
              </span>

              <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[var(--green-primary)]">
                Collaboration for Change
              </h2>

              <p className="text-lg leading-relaxed text-[var(--text-dark)]/80">
                Aspire Technologies believes that meaningful social change is achieved
                through strong partnerships. We actively collaborate with government
                departments, CSR organizations, NGOs, educational institutions,
                healthcare providers, and community groups.
              </p>

              <p className="text-lg leading-relaxed text-[var(--text-dark)]/80">
                By combining resources, expertise, and shared commitment, we ensure
                wider reach, better implementation, and sustainable impact across
                communities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PARTNER TYPES ================= */}
      <section className="py-24 md:py-32 bg-[var(--bg-cream)]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building2,
                title: "Government Departments",
                desc: "Partnering with government agencies for program execution, policy alignment, and large-scale community outreach."
              },
              {
                icon: Briefcase,
                title: "CSR Companies",
                desc: "Collaborating with corporates on CSR initiatives, funding support, and employee volunteering programs."
              },
              {
                icon: Users,
                title: "NGOs & Social Organizations",
                desc: "Working with fellow NGOs for joint implementation, shared learning, and stronger grassroots impact."
              },
              {
                icon: Heart,
                title: "Educational & Healthcare Institutions",
                desc: "Partnering with schools, colleges, hospitals, and clinics for training, awareness, and service delivery."
              }
            ].map(({ icon: Icon, title, desc }, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-[var(--green-muted)]/20 hover:shadow-lg hover:-translate-y-1 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-[var(--green-primary)]/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-[var(--green-primary)]" />
                </div>
                <h3 className="text-[var(--green-primary)] mb-3 text-lg font-semibold">
                  {title}
                </h3>
                <p className="text-sm text-[var(--text-dark)]/80 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= PARTNERSHIP CTA ================= */}
      <section className="py-24 md:py-32 bg-[var(--green-primary)] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-gold)]/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Interested in Partnering With Us?
          </h2>

          <p className="text-lg text-white/90 mb-10 leading-relaxed">
            We welcome partnerships that align with our mission and values.
            Together, we can expand reach, strengthen communities, and create
            lasting social impact.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[var(--green-primary)] font-semibold hover:bg-[var(--bg-cream)] transition shadow-lg hover:shadow-xl"
          >
            Contact Us for Partnership
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </div>
  );
}

export default Partners;

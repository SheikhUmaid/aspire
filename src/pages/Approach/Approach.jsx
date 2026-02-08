function Approach() {
  return (
    <div className="min-h-screen">

      {/* ================= PAGE HERO ================= */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
          alt="Community collaboration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-primary)]/85 to-[var(--green-dark)]/85"></div>

        <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
            Our Approach & Methodology
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            A systematic, community-centered approach to creating sustainable development
          </p>
        </div>
      </section>

      {/* ================= APPROACH INTRO ================= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Image Side */}
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
                alt="Community planning"
                className=" shadow-lg object-cover w-full h-[480px]"
              />
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2 space-y-6">
              <span className="inline-block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)]">
                Our Methodology
              </span>

              <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[var(--green-primary)]">
                Community-Centered Development
              </h2>

              <p className="text-lg leading-relaxed text-[var(--text-dark)]/80">
                Aspire Technologies follows a participatory, ground-up approach that
                places communities at the heart of every intervention.
              </p>

              <p className="text-lg leading-relaxed text-[var(--text-dark)]/80">
                We believe sustainable development happens when communities identify
                their own needs, participate in solutions, and build local capacity
                to sustain outcomes long after our direct involvement ends.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 8-STEP PROCESS ================= */}
      <section className="py-24 md:py-32 bg-[var(--bg-cream)]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-[var(--green-primary)]">
              Our 8-Step Implementation Process
            </h2>
            <p className="text-lg text-[var(--text-dark)]/70 max-w-2xl mx-auto mt-4">
              A structured framework ensuring accountability, impact, and long-term sustainability
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                num: "01",
                title: "Need Assessment & Community Survey",
                desc: "Understanding real community needs, challenges, priorities, and available resources through surveys and direct engagement."
              },
              {
                num: "02",
                title: "Planning & Program Design",
                desc: "Designing context-specific programs aligned with community priorities and development goals."
              },
              {
                num: "03",
                title: "Stakeholder Engagement & Mobilization",
                desc: "Engaging community leaders, local institutions, government bodies, and partners for collaborative execution."
              },
              {
                num: "04",
                title: "Training, Awareness & Capacity Building",
                desc: "Delivering structured training and awareness initiatives to strengthen local skills and knowledge."
              },
              {
                num: "05",
                title: "Implementation through Camps & Outreach",
                desc: "Executing programs via camps, workshops, field activities, and direct community outreach."
              },
              {
                num: "06",
                title: "Monitoring & Reporting",
                desc: "Continuous monitoring ensures transparency, efficiency, and timely corrective actions."
              },
              {
                num: "07",
                title: "Evaluation & Impact Assessment",
                desc: "Measuring outcomes, learning from results, and documenting real impact on beneficiaries."
              },
              {
                num: "08",
                title: "Sustainability through Community Participation",
                desc: "Building ownership and local leadership so initiatives continue independently."
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row gap-6 items-start p-8 bg-white rounded-2xl border-l-4 border-[var(--green-primary)] shadow-sm hover:shadow-md transition"
              >
                <div className="text-4xl font-bold text-[var(--green-primary)] min-w-[72px]">
                  {step.num}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[var(--green-primary)] mb-3">
                    {step.title}
                  </h4>
                  <p className="text-lg text-[var(--text-dark)]/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

export default Approach;

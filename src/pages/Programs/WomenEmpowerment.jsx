import {
  Heart,
  Target,
  Award,
  Briefcase,
  CheckCircle,
} from "lucide-react";

function WomenEmpowerment() {
  return (
    <div className="w-full text-[var(--text-dark)]">

      {/* ================= HERO ================= */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img
          src="https://www.qalara.com/blog/wp-content/uploads/2023/02/1.-Pashmina2.jpg"
          alt="Women empowerment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-primary)]/85 to-[var(--green-dark)]/85" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <Heart size={64} className="mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Women Empowerment & Livelihood Programs
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Strengthening women through education, skills, and economic independence
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
              Empowering Women, Transforming Communities
            </h2>

            <p className="text-[var(--text-dark)]/80">
              Women are the backbone of every community, yet many face systemic barriers
              to education, employment, and economic participation.
            </p>

            <p className="text-[var(--text-dark)]/80">
              Aspire Technologies creates pathways for women to become economically
              independent, socially aware, and confident leaders through skill training,
              entrepreneurship, and collective support.
            </p>

            <p className="text-[var(--text-dark)]/80">
              Through Self Help Groups (SHGs), vocational training, financial literacy,
              and leadership development, we empower women to transform their own lives
              and inspire others.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/images/womenshawl.png"
              alt="Women skill training"
              className=" shadow-lg object-cover w-full h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 bg-[var(--bg-cream)]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { icon: Target, value: "500+", label: "Women Trained" },
            { icon: Award, value: "100+", label: "SHGs Formed" },
            { icon: Briefcase, value: "80%", label: "Income Increase" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-[var(--green-muted)]/20 hover:shadow-md transition"
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
      </section>

      {/* ================= ACTIVITIES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Image strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              "https://www.dailygoodmorningkashmir.com/wp-content/uploads/2022/08/Kashmir-handicrafts-on-Ventilator-768x515.jpg",
              "https://www.webpulsefoundation.org/uploaded-files/category/images/thumbs/Women-Empowerment-thumbs-420X630.jpg",
              "https://images.hindustantimes.com/img/2022/03/22/550x309/50a00a26-aa0f-11ec-872a-99283e1803a9_1647974556637.jpg",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Women empowerment activity"
                className="rounded-2xl object-cover h-[240px] w-full"
              />
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[var(--green-primary)] mb-4">
            Our Women Empowerment Activities
          </h2>
          <p className="text-center max-w-2xl mx-auto text-[var(--text-dark)]/70 mb-16">
            Comprehensive programs designed to create lasting economic and social empowerment
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Self Help Group Formation",
              "Vocational Training Programs",
              "Entrepreneurship Development",
              "Financial Literacy Training",
              "Micro-Business Support",
              "Legal Rights Awareness",
              "Domestic Violence Prevention",
              "Digital Literacy for Women",
              "Health & Nutrition Awareness",
              "Leadership & Confidence Building",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-[var(--bg-cream)] rounded-2xl p-8 hover:shadow-md transition border border-[var(--green-muted)]/20"
              >
                <div className="text-[var(--green-muted)] text-sm font-medium mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  {title}
                </h3>
                <p className="text-sm text-[var(--text-dark)]/70">
                  Structured programs that enable women to build skills,
                  confidence, financial independence, and leadership capacity.
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
            Impact on Women's Lives
          </h2>

          <div className="space-y-8">
            {[
              "Economic Independence",
              "Increased Decision-Making Power",
              "Reduced Vulnerability",
              "Improved Family Welfare",
              "Community Leadership",
              "Enhanced Self-Confidence",
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle className="text-[var(--green-primary)] mt-1" />
                <div>
                  <h4 className="font-semibold">{item}</h4>
                  <p className="text-sm text-[var(--text-dark)]/70">
                    Empowerment initiatives create lasting improvements
                    in women’s economic, social, and personal wellbeing.
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
            Support Women's Empowerment
          </h2>
          <p className="text-lg text-[var(--text-dark)]/80 mb-10">
            Help us create opportunities for women to achieve economic independence
            and social empowerment through sustainable livelihood programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Get Involved
            </a>
            <a href="/partners" className="btn-secondary">
              Sponsor a Program
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WomenEmpowerment;

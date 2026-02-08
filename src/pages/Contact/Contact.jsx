import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen">

      {/* ================= PAGE HERO ================= */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
          alt="Contact Aspire Technologies"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-primary)]/85 to-[var(--green-dark)]/85"></div>

        <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us to learn more about our programs, partnerships,
            or volunteer opportunities
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO & FORM ================= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* ================= LEFT: INFO + IMAGE ================= */}
            <div className="space-y-10">

              <div>
                <span className="inline-block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)] mb-4">
                  Get in Touch
                </span>
                <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-[var(--green-primary)]">
                  We’d Love to Hear From You
                </h2>
                <p className="text-lg text-[var(--text-dark)]/80 leading-relaxed">
                  Whether you’re interested in our programs, partnerships,
                  volunteering, or simply want to learn more about our work,
                  we’re always happy to connect.
                </p>
              </div>

              

              {/* Contact Cards */}
              <div className="space-y-6">

                <div className="flex gap-4 items-start p-6 bg-[var(--bg-cream)] rounded-2xl hover:shadow-md transition">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green-primary)]/10 flex items-center justify-center">
                    <MapPin className="text-[var(--green-primary)]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Our Address</h4>
                    <p className="text-[var(--text-dark)]/80 leading-relaxed">
                      123 Community Center Road <br />
                      Near City Hospital <br />
                      City, State – 123456 <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 bg-[var(--bg-cream)] rounded-2xl hover:shadow-md transition">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green-primary)]/10 flex items-center justify-center">
                    <Phone className="text-[var(--green-primary)]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Phone</h4>
                    <p className="text-[var(--text-dark)]/80 leading-relaxed">
                      +91 12345 67890 <br />
                      +91 09876 54321
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 bg-[var(--bg-cream)] rounded-2xl hover:shadow-md transition">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green-primary)]/10 flex items-center justify-center">
                    <Mail className="text-[var(--green-primary)]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Email</h4>
                    <p className="text-[var(--text-dark)]/80 leading-relaxed">
                      info@aspiretechnologies.org <br />
                      contact@aspiretechnologies.org
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 bg-[var(--bg-cream)] rounded-2xl hover:shadow-md transition">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green-primary)]/10 flex items-center justify-center">
                    <Clock className="text-[var(--green-primary)]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Office Hours</h4>
                    <p className="text-[var(--text-dark)]/80 leading-relaxed">
                      Monday – Friday: 9:00 AM – 6:00 PM <br />
                      Saturday: 9:00 AM – 2:00 PM <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* ================= RIGHT: FORM ================= */}
            <div className="space-y-6">
              <div>
                <span className="inline-block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)] mb-4">
                  Send a Message
                </span>
                <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-[var(--green-primary)]">
                  Write to Us
                </h2>
              </div>

              <form className="space-y-6">
                {[
                  { label: "Full Name *", type: "text", placeholder: "Enter your name" },
                  { label: "Email Address *", type: "email", placeholder: "your@email.com" },
                  { label: "Phone Number", type: "tel", placeholder: "+91 12345 67890" },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-medium mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.label.includes("*")}
                      className="w-full px-4 py-3 border border-[var(--green-muted)]/20 rounded-lg focus:ring-2 focus:ring-[var(--green-primary)] focus:outline-none"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-[var(--green-muted)]/20 rounded-lg focus:ring-2 focus:ring-[var(--green-primary)] focus:outline-none"
                  >
                    <option value="">Select a subject</option>
                    <option>Program Information</option>
                    <option>Partnership Opportunity</option>
                    <option>Volunteer Inquiry</option>
                    <option>Donation / Sponsorship</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="6"
                    required
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 border border-[var(--green-muted)]/20 rounded-lg focus:ring-2 focus:ring-[var(--green-primary)] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--green-primary)] text-white font-semibold hover:bg-[var(--green-dark)] transition shadow-lg"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 md:py-32 bg-[var(--bg-cream)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-[var(--green-primary)]">
            Want to Make a Difference?
          </h2>
          <p className="text-lg text-[var(--text-dark)]/80 mb-10 leading-relaxed">
            Volunteer, partner with us, sponsor initiatives, or help spread
            awareness. Every contribution matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/partners"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--green-primary)] text-white font-semibold hover:bg-[var(--green-dark)] transition"
            >
              Partnership Opportunities
              <ArrowRight size={18} />
            </a>
            <a
              href="/programs/youth-development"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[var(--green-primary)] text-[var(--green-primary)] font-semibold hover:bg-[var(--green-primary)] hover:text-white transition"
            >
              Explore Our Programs
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;

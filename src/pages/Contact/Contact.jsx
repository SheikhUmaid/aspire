import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react';

function Contact() {
    return (
        <div className="min-h-screen">
            {/* ================= PAGE HERO ================= */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-primary)] to-[var(--green-dark)]"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 max-w-4xl px-6 text-center text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
                        Contact Us
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Get in touch with us to learn more about our programs, partnerships, or volunteer opportunities
                    </p>
                </div>
            </section>

            {/* ================= CONTACT INFO & FORM ================= */}
            <section className="py-24 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <span className="inline-block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)] mb-4">
                                    Get in Touch
                                </span>
                                <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-[var(--green-primary)]">
                                    Get in Touch
                                </h2>
                                <p className="text-lg text-[var(--text-dark)]/80 leading-relaxed mb-8">
                                    We'd love to hear from you! Whether you're interested in our programs, want to partner with us, looking to volunteer, or have questions about our work, please don't hesitate to reach out.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4 items-start p-6 bg-[var(--bg-cream)] rounded-2xl hover:shadow-md transition">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--green-primary)]/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="text-[var(--green-primary)]" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold mb-2 text-[var(--text-dark)]">Our Address</h4>
                                        <p className="text-[var(--text-dark)]/80 leading-relaxed">123 Community Center Road<br />Near City Hospital<br />City, State - 123456<br />India</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start p-6 bg-[var(--bg-cream)] rounded-2xl hover:shadow-md transition">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--green-primary)]/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="text-[var(--green-primary)]" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold mb-2 text-[var(--text-dark)]">Phone</h4>
                                        <p className="text-[var(--text-dark)]/80 leading-relaxed">+91 1234567890<br />+91 0987654321</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start p-6 bg-[var(--bg-cream)] rounded-2xl hover:shadow-md transition">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--green-primary)]/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="text-[var(--green-primary)]" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold mb-2 text-[var(--text-dark)]">Email</h4>
                                        <p className="text-[var(--text-dark)]/80 leading-relaxed">info@aspiretechnologies.org<br />contact@aspiretechnologies.org</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start p-6 bg-[var(--bg-cream)] rounded-2xl hover:shadow-md transition">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--green-primary)]/10 flex items-center justify-center flex-shrink-0">
                                        <Clock className="text-[var(--green-primary)]" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold mb-2 text-[var(--text-dark)]">Office Hours</h4>
                                        <p className="text-[var(--text-dark)]/80 leading-relaxed">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM<br />Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="space-y-6">
                            <div>
                                <span className="inline-block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)] mb-4">
                                    Send Us a Message
                                </span>
                                <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-[var(--green-primary)]">
                                    Send Us a Message
                                </h2>
                            </div>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--text-dark)]">Full Name *</label>
                                    <input type="text" id="name" name="name" required placeholder="Enter your name" className="w-full px-4 py-3 border border-[var(--green-muted)]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)] focus:border-transparent bg-white" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--text-dark)]">Email Address *</label>
                                    <input type="email" id="email" name="email" required placeholder="your@email.com" className="w-full px-4 py-3 border border-[var(--green-muted)]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)] focus:border-transparent bg-white" />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[var(--text-dark)]">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" placeholder="+91 1234567890" className="w-full px-4 py-3 border border-[var(--green-muted)]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)] focus:border-transparent bg-white" />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-[var(--text-dark)]">Subject *</label>
                                    <select id="subject" name="subject" required className="w-full px-4 py-3 border border-[var(--green-muted)]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)] focus:border-transparent bg-white">
                                        <option value="">Select a subject</option>
                                        <option value="programs">Program Information</option>
                                        <option value="partnership">Partnership Opportunity</option>
                                        <option value="volunteer">Volunteer Inquiry</option>
                                        <option value="donation">Donation/Sponsorship</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--text-dark)]">Message *</label>
                                    <textarea id="message" name="message" rows="6" required placeholder="Tell us how we can help you..." className="w-full px-4 py-3 border border-[var(--green-muted)]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)] focus:border-transparent bg-white"></textarea>
                                </div>

                                <button type="submit" className="btn-primary inline-flex items-center gap-2 w-full sm:w-auto">
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
                    <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-[var(--green-primary)]">Want to Make a Difference?</h2>
                    <p className="text-lg text-[var(--text-dark)]/80 mb-10 leading-relaxed">
                        There are many ways to support our work - volunteer your time, partner with us on programs, sponsor specific initiatives, or help spread awareness about our mission. Every contribution makes a difference.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/partners" className="btn-primary inline-flex items-center gap-2">
                            Partnership Opportunities
                            <ArrowRight size={18} />
                        </a>
                        <a href="/programs/youth-development" className="btn-secondary inline-flex items-center gap-2">
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

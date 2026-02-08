import { Building2, Users, Briefcase, Heart, ArrowRight } from 'lucide-react';

function Partners() {
    return (
        <div className="min-h-screen">
            {/* ================= PAGE HERO ================= */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-primary)] to-[var(--green-dark)]"></div>
                <div className="absolute inset-0 bg-black/20"></div>
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
                            <div className="relative rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden aspect-[4/5] bg-gradient-to-br from-[var(--green-muted)]/30 to-[var(--green-primary)]/20">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-[var(--text-dark)]/40 text-sm font-medium">Partnership Image</span>
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--accent-gold)]/20 rounded-full blur-3xl"></div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="order-1 lg:order-2 space-y-6">
                            <span className="inline-block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)] mb-2">
                                Collaboration
                            </span>
                            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[var(--green-primary)]">
                                Collaboration for Change
                            </h2>
                            <p className="text-lg leading-relaxed text-[var(--text-dark)]/80">
                                Aspire Technologies believes in the power of partnerships. We actively seek collaborations with government departments, CSR companies, NGOs, educational institutions, healthcare providers, and community organizations to amplify our impact and reach more beneficiaries.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= PARTNER TYPES ================= */}
            <section className="py-24 md:py-32 bg-[var(--bg-cream)]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-[var(--green-muted)]/20 hover:shadow-lg hover:-translate-y-1 transition">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--green-primary)]/10 flex items-center justify-center mx-auto mb-6">
                                <Building2 className="w-8 h-8 text-[var(--green-primary)]" />
                            </div>
                            <h3 className="text-[var(--green-primary)] mb-3 text-lg font-semibold">Government Departments</h3>
                            <p className="text-sm text-[var(--text-dark)]/80 leading-relaxed">
                                Partnering with government agencies for program implementation, resource support, and policy alignment.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-[var(--green-muted)]/20 hover:shadow-lg hover:-translate-y-1 transition">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--green-primary)]/10 flex items-center justify-center mx-auto mb-6">
                                <Briefcase className="w-8 h-8 text-[var(--green-primary)]" />
                            </div>
                            <h3 className="text-[var(--green-primary)] mb-3 text-lg font-semibold">CSR Companies</h3>
                            <p className="text-sm text-[var(--text-dark)]/80 leading-relaxed">
                                Collaborating with corporates on CSR initiatives, program  sponsorship, and employee volunteer programs.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-[var(--green-muted)]/20 hover:shadow-lg hover:-translate-y-1 transition">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--green-primary)]/10 flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-[var(--green-primary)]" />
                            </div>
                            <h3 className="text-[var(--green-primary)] mb-3 text-lg font-semibold">NGOs & Social Organizations</h3>
                            <p className="text-sm text-[var(--text-dark)]/80 leading-relaxed">
                                Working with fellow NGOs and social organizations for knowledge sharing and joint program implementation.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-[var(--green-muted)]/20 hover:shadow-lg hover:-translate-y-1 transition">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--green-primary)]/10 flex items-center justify-center mx-auto mb-6">
                                <Heart className="w-8 h-8 text-[var(--green-primary)]" />
                            </div>
                            <h3 className="text-[var(--green-primary)] mb-3 text-lg font-semibold">Educational & Healthcare Institutions</h3>
                            <p className="text-sm text-[var(--text-dark)]/80 leading-relaxed">
                                Partnering with schools, colleges, hospitals, and clinics for program delivery and service provision.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= PARTNERSHIP CTA ================= */}
            <section className="py-24 md:py-32 bg-[var(--green-primary)] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-gold)]/10 rounded-full blur-3xl"></div>
                
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-6">Interested in Partnering With Us?</h2>
                    <p className="text-lg text-white/90 mb-10 leading-relaxed">
                        We welcome partnerships that align with our mission and values. Together, we can create greater social impact.
                    </p>
                    <a href="/contact" className="btn-primary bg-white text-[var(--green-primary)] hover:bg-[var(--bg-cream)] inline-flex items-center gap-2">
                        Contact Us for Partnership
                        <ArrowRight size={18} />
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Partners;

import { TrendingUp, Users, Award, Heart, CheckCircle } from 'lucide-react';

function Impact() {
    return (
        <div className="min-h-screen">
            {/* ================= PAGE HERO ================= */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-primary)] to-[var(--green-dark)]"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 max-w-4xl px-6 text-center text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
                        Our Impact & Outcomes
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Measuring the difference we make in communities
                    </p>
                </div>
            </section>

            {/* ================= IMPACT INTRO ================= */}
            <section className="py-24 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Image Side */}
                        <div className="order-2 lg:order-1">
                            <div className="relative rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden aspect-[4/5] bg-gradient-to-br from-[var(--green-muted)]/30 to-[var(--green-primary)]/20">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-[var(--text-dark)]/40 text-sm font-medium">Impact Image</span>
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--accent-gold)]/20 rounded-full blur-3xl"></div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="order-1 lg:order-2 space-y-6">
                            <span className="inline-block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)] mb-2">
                                Our Impact
                            </span>
                            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[var(--green-primary)]">
                                Creating Measurable Change
                            </h2>
                            <p className="text-lg leading-relaxed text-[var(--text-dark)]/80">
                                Aspire Technologies is committed to creating real, measurable impact in the communities we serve. Our programs are designed with clear outcomes and we continuously monitor and evaluate our work to ensure we're achieving meaningful change.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= IMPACT STATS ================= */}
            <section className="py-24 md:py-32 bg-[var(--green-primary)] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-gold)]/10 rounded-full blur-3xl"></div>
                
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition">
                            <TrendingUp className="w-12 h-12 text-white mx-auto mb-4" />
                            <div className="text-5xl md:text-6xl font-bold mb-2">15,000+</div>
                            <div className="text-lg font-semibold">Total Beneficiaries</div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition">
                            <Users className="w-12 h-12 text-white mx-auto mb-4" />
                            <div className="text-5xl md:text-6xl font-bold mb-2">50+</div>
                            <div className="text-lg font-semibold">Communities Served</div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition">
                            <Award className="w-12 h-12 text-white mx-auto mb-4" />
                            <div className="text-5xl md:text-6xl font-bold mb-2">500+</div>
                            <div className="text-lg font-semibold">Programs Conducted</div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition">
                            <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                            <div className="text-5xl md:text-6xl font-bold mb-2">100+</div>
                            <div className="text-lg font-semibold">Partner Organizations</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= EXPECTED OUTCOMES ================= */}
            <section className="py-24 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-[var(--green-primary)]">Expected Outcomes</h2>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-4">
                        {[
                            'Increased employability and reduced unemployment among youth',
                            'Improved women livelihood and economic empowerment',
                            'Enhanced sports participation and physical wellbeing',
                            'Improved digital literacy and cyber awareness',
                            'Better mental health awareness and reduced psychological stigma',
                            'Increased access to healthcare through medical camps',
                            'Higher vaccination coverage and public health improvement',
                            'Better animal welfare systems and reduced rabies risk',
                            'Stronger, healthier, and self-reliant communities'
                        ].map((outcome, idx) => (
                            <div key={idx} className="flex gap-4 items-start p-6 bg-[var(--bg-cream)] rounded-2xl border-l-4 border-[var(--green-primary)] hover:shadow-md transition">
                                <CheckCircle className="text-[var(--green-primary)] flex-shrink-0 mt-1" size={24} />
                                <p className="text-lg text-[var(--text-dark)]/80 leading-relaxed">{outcome}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Impact;

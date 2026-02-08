function Approach() {
    return (
        <div className="min-h-screen">
            {/* ================= PAGE HERO ================= */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-primary)] to-[var(--green-dark)]"></div>
                <div className="absolute inset-0 bg-black/20"></div>
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
                            <div className="relative rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden aspect-[4/5] bg-gradient-to-br from-[var(--green-muted)]/30 to-[var(--green-primary)]/20">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-[var(--text-dark)]/40 text-sm font-medium">Approach Image</span>
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--accent-gold)]/20 rounded-full blur-3xl"></div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="order-1 lg:order-2 space-y-6">
                            <span className="inline-block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)] mb-2">
                                Our Methodology
                            </span>
                            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[var(--green-primary)]">
                                Community-Centered Development
                            </h2>
                            <p className="text-lg leading-relaxed text-[var(--text-dark)]/80">
                                Aspire Technologies follows a systematic, participatory approach that places communities at the center of all our interventions. We believe that sustainable development happens when communities themselves drive the process, own the outcomes, and continue the work long after our direct involvement ends.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= 8-STEP PROCESS ================= */}
            <section className="py-24 md:py-32 bg-[var(--bg-cream)]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-[var(--green-primary)]">Our 8-Step Implementation Process</h2>
                    </div>
                    <div className="max-w-5xl mx-auto space-y-6">
                        {[
                            { num: '01', title: 'Need Assessment & Community Survey', desc: 'We begin by understanding community needs, challenges, priorities, and existing resources through surveys and consultations.' },
                            { num: '02', title: 'Planning & Program Design', desc: 'Based on assessment, we design programs tailored to specific community contexts and needs.' },
                            { num: '03', title: 'Stakeholder Engagement & Mobilization', desc: 'We engage community leaders, local institutions, government bodies, and other stakeholders for collaborative action.' },
                            { num: '04', title: 'Training, Awareness & Capacity Building', desc: 'We provide comprehensive training and awareness programs to build community capabilities.' },
                            { num: '05', title: 'Implementation through Camps & Outreach', desc: 'Programs are implemented through camps, workshops, training sessions, and community outreach activities.' },
                            { num: '06', title: 'Monitoring & Reporting', desc: 'Regular monitoring ensures programs stay on track and achieve intended outcomes.' },
                            { num: '07', title: 'Evaluation & Impact Assessment', desc: 'We systematically evaluate program effectiveness and measure actual impact on beneficiaries.' },
                            { num: '08', title: 'Sustainability through Community Participation', desc: 'We ensure programs are sustainable by building local ownership and capacity for continuation.' }
                        ].map((step, idx) => (
                            <div key={idx} className="flex gap-6 items-start p-8 bg-white rounded-2xl border-l-4 border-[var(--green-primary)] shadow-sm hover:shadow-md transition">
                                <div className="text-4xl font-bold text-[var(--green-primary)] min-w-[80px]">{step.num}</div>
                                <div className="flex-1">
                                    <h4 className="text-[var(--green-primary)] mb-3 text-xl font-semibold">{step.title}</h4>
                                    <p className="text-[var(--text-dark)]/80 leading-relaxed text-lg">{step.desc}</p>
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

import { Eye, Target, Heart, Users, Award, Globe, Shield, Lightbulb } from 'lucide-react';

function About() {
    return (
        <div className="min-h-screen">
            {/* ================= PAGE HERO ================= */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-primary)] to-[var(--green-dark)]"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 max-w-4xl px-6 text-center text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
                        About Aspire Technologies
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Building an inclusive, progressive, skilled, and healthy society through holistic community empowerment
                    </p>
                </div>
            </section>

            {/* ================= WHO WE ARE ================= */}
            <section className="py-24 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Image Side */}
                        <div className="order-2 lg:order-1">
                            <div className="relative rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden aspect-[4/5] bg-gradient-to-br from-[var(--green-muted)]/30 to-[var(--green-primary)]/20">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-[var(--text-dark)]/40 text-sm font-medium">Community Impact Image</span>
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--accent-gold)]/20 rounded-full blur-3xl"></div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="order-1 lg:order-2 space-y-6">
                            <span className="inline-block uppercase tracking-widest text-xs font-medium text-[var(--green-muted)] mb-2">
                                Who We Are
                            </span>
                            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[var(--green-primary)]">
                                Who We Are
                            </h2>
                            <div className="space-y-5 text-lg leading-relaxed text-[var(--text-dark)]/80">
                                <p>
                                    Aspire Technologies is a socially committed and development-oriented organization working for holistic community empowerment through multi-sector interventions. Since our inception, we have been actively involved in youth development, women empowerment, sports promotion, digital skill enhancement, mental health awareness, public health programs, vaccination initiatives, and animal welfare.
                                </p>
                                <p>
                                    We believe that true development can only be achieved when youth are skilled, women are empowered, communities are healthy, and social responsibility is strengthened through awareness and inclusive programs. Our work is rooted in the belief that every person, regardless of their economic status, gender, or background, deserves access to opportunities that can help them build a better life.
                                </p>
                                <p>
                                    Aspire Technologies focuses on building strong community systems by promoting education, livelihood development, health awareness, sports culture, digital transformation, mental wellbeing, and compassionate welfare initiatives. We work with marginalized and underserved populations through structured training programs, awareness campaigns, and community-based initiatives that create lasting, sustainable change.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VISION & MISSION ================= */}
            <section className="py-24 md:py-32 bg-[var(--bg-cream)]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--green-primary)] to-[var(--green-muted)] rounded-3xl opacity-20 group-hover:opacity-30 transition blur-sm"></div>
                            <div className="relative bg-white rounded-3xl p-10 lg:p-12 shadow-lg border border-[var(--green-muted)]/20 text-center">
                                <div className="w-16 h-16 rounded-2xl bg-[var(--green-primary)]/10 flex items-center justify-center mx-auto mb-6">
                                    <Eye className="w-8 h-8 text-[var(--green-primary)]" />
                                </div>
                                <h2 className="text-[var(--green-primary)] mb-4 text-2xl font-semibold">Our Vision</h2>
                                <p className="text-[1.05rem] leading-relaxed text-[var(--text-dark)]/80">
                                    To build an inclusive, progressive, skilled, and healthy society where youth and women are empowered with opportunities, digital competencies, mental wellbeing, and sustainable livelihood for a dignified life.
                                </p>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--green-muted)] to-[var(--green-primary)] rounded-3xl opacity-20 group-hover:opacity-30 transition blur-sm"></div>
                            <div className="relative bg-white rounded-3xl p-10 lg:p-12 shadow-lg border border-[var(--green-muted)]/20 text-center">
                                <div className="w-16 h-16 rounded-2xl bg-[var(--green-primary)]/10 flex items-center justify-center mx-auto mb-6">
                                    <Target className="w-8 h-8 text-[var(--green-primary)]" />
                                </div>
                                <h2 className="text-[var(--green-primary)] mb-4 text-2xl font-semibold">Our Mission</h2>
                                <p className="text-[1.05rem] leading-relaxed text-[var(--text-dark)]/80">
                                    To empower communities through innovative, technology-driven, and socially responsible programs in youth development, women empowerment, sports, digital literacy, mental health awareness, medical camps, vaccination awareness, and animal welfare initiatives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CORE VALUES ================= */}
            <section className="py-24 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-[var(--green-primary)]">Our Core Values</h2>
                        <p className="text-lg text-[var(--text-dark)]/80 max-w-2xl mx-auto leading-relaxed">
                            These principles guide every decision we make and every program we implement
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="flex gap-4 items-start p-6 bg-[var(--green-muted)]/10 rounded-2xl border-l-4 border-[var(--green-primary)] hover:shadow-md transition">
                            <Users className="text-[var(--green-primary)] flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-[var(--text-dark)]">Inclusivity and Equality</h3>
                                <p className="text-[var(--text-dark)]/80 leading-relaxed">We believe in equal opportunities for all, regardless of background, gender, caste, religion, or economic status. Our programs are designed to reach the most marginalized and vulnerable members of society.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start p-6 bg-[var(--green-muted)]/10 rounded-2xl border-l-4 border-[var(--green-primary)] hover:shadow-md transition">
                            <Award className="text-[var(--green-primary)] flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-[var(--text-dark)]">Empowerment through Skills and Education</h3>
                                <p className="text-[var(--text-dark)]/80 leading-relaxed">We focus on building capabilities and providing people with the tools, knowledge, and skills they need to create their own opportunities and achieve economic independence.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start p-6 bg-[var(--green-muted)]/10 rounded-2xl border-l-4 border-[var(--green-primary)] hover:shadow-md transition">
                            <Globe className="text-[var(--green-primary)] flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-[var(--text-dark)]">Transparency and Accountability</h3>
                                <p className="text-[var(--text-dark)]/80 leading-relaxed">We maintain the highest standards of transparency in our operations and remain accountable to the communities we serve, our partners, and our stakeholders.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start p-6 bg-[var(--green-muted)]/10 rounded-2xl border-l-4 border-[var(--green-primary)] hover:shadow-md transition">
                            <Lightbulb className="text-[var(--green-primary)] flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-[var(--text-dark)]">Innovation and Technology</h3>
                                <p className="text-[var(--text-dark)]/80 leading-relaxed">We embrace innovative approaches and leverage technology to enhance the effectiveness and reach of our programs, ensuring we stay relevant in a rapidly changing world.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start p-6 bg-[var(--green-muted)]/10 rounded-2xl border-l-4 border-[var(--green-primary)] hover:shadow-md transition">
                            <Heart className="text-[var(--green-primary)] flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-[var(--text-dark)]">Community Participation</h3>
                                <p className="text-[var(--text-dark)]/80 leading-relaxed">Communities are at the heart of our work. We engage, listen, and collaborate with community members, ensuring programs address real needs and are sustainable.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start p-6 bg-[var(--green-muted)]/10 rounded-2xl border-l-4 border-[var(--green-primary)] hover:shadow-md transition">
                            <Shield className="text-[var(--green-primary)] flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-[var(--text-dark)]">Compassion and Humanity</h3>
                                <p className="text-[var(--text-dark)]/80 leading-relaxed">We approach our work with empathy and compassion, understanding that behind every statistic is a human story deserving of dignity and respect.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start p-6 bg-[var(--green-muted)]/10 rounded-2xl border-l-4 border-[var(--green-primary)] hover:shadow-md transition">
                            <Target className="text-[var(--green-primary)] flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-[var(--text-dark)]">Sustainability and Social Responsibility</h3>
                                <p className="text-[var(--text-dark)]/80 leading-relaxed">We design programs for long-term sustainability, creating systems that continue benefiting communities long after our direct intervention ends.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= OBJECTIVES ================= */}
            <section className="py-24 md:py-32 bg-[var(--green-primary)] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-gold)]/10 rounded-full blur-3xl"></div>
                
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block uppercase tracking-widest text-xs font-medium text-white/70 mb-4">
                            Our Goals
                        </span>
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6">Our Objectives</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition">
                            To empower youth through skill development, career guidance, and employment opportunities that prepare them for productive futures
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition">
                            To strengthen women through vocational training, entrepreneurship development, and leadership programs that create economic independence
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition">
                            To promote sports culture and physical wellbeing among youth and school students for healthier, disciplined communities
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition">
                            To enhance digital literacy and promote advanced digital technologies for future economic  participation
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition">
                            To conduct medical camps and community health screening programs that make healthcare accessible to all
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition">
                            To create awareness about vaccination and support immunization programs that protect community health
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition">
                            To promote mental health awareness and psychological wellbeing programs that reduce stigma and support those in need
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition">
                            To implement animal welfare awareness and vaccination programs that create safer, more compassionate communities
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition">
                            To support marginalized communities including economically weaker sections, rural areas, persons with disabilities, and vulnerable groups
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition">
                            To promote awareness on social issues including drug de-addiction, hygiene, sanitation, nutrition, and overall social wellbeing
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHO WE SERVE ================= */}
            <section className="py-24 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-[var(--green-primary)]">Who We Serve</h2>
                        <p className="text-lg text-[var(--text-dark)]/80 max-w-2xl mx-auto leading-relaxed">
                            Our programs reach diverse groups across communities
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                        <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[var(--green-muted)]/20 hover:shadow-md transition">
                            Youth & Students
                        </div>
                        <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[var(--green-muted)]/20 hover:shadow-md transition">
                            Women & SHG Members
                        </div>
                        <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[var(--green-muted)]/20 hover:shadow-md transition">
                            Children & Adolescents
                        </div>
                        <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[var(--green-muted)]/20 hover:shadow-md transition">
                            Economically Weaker Sections
                        </div>
                        <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[var(--green-muted)]/20 hover:shadow-md transition">
                            Rural Communities
                        </div>
                        <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[var(--green-muted)]/20 hover:shadow-md transition">
                            Persons with Disabilities
                        </div>
                        <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[var(--green-muted)]/20 hover:shadow-md transition">
                            Sports Aspirants
                        </div>
                        <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[var(--green-muted)]/20 hover:shadow-md transition">
                            Unemployed Individuals
                        </div>
                        <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[var(--green-muted)]/20 hover:shadow-md transition">
                            Marginalized Families
                        </div>
                        <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[var(--green-muted)]/20 hover:shadow-md transition">
                            Street & Domestic Animals
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;

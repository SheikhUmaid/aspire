import { Eye, Target, Heart, Users, Award, Globe, Shield, Lightbulb } from 'lucide-react';
import './About.css';

function About() {
    return (
        <div className="about-page">
            <section className="page-header">
                <div className="container">
                    <h1>About Aspire Technologies</h1>
                    <p className="header-subtitle">
                        Building an inclusive, progressive, skilled, and healthy society through holistic community empowerment
                    </p>
                </div>
            </section>

            <section className="intro-section">
                <div className="container">
                    <div className="intro-content">
                        <h2 className="text-green">Who We Are</h2>
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
            </section>

            <section className="vm-section bg-light-green">
                <div className="container">
                    <div className="vm-grid">
                        <div className="vm-box">
                            <Eye className="vm-icon" size={48} />
                            <h2>Our Vision</h2>
                            <p>
                                To build an inclusive, progressive, skilled, and healthy society where youth and women are empowered with opportunities, digital competencies, mental wellbeing, and sustainable livelihood for a dignified life.
                            </p>
                        </div>
                        <div className="vm-box">
                            <Target className="vm-icon" size={48} />
                            <h2>Our Mission</h2>
                            <p>
                                To empower communities through innovative, technology-driven, and socially responsible programs in youth development, women empowerment, sports, digital literacy, mental health awareness, medical camps, vaccination awareness, and animal welfare initiatives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="values-section">
                <div className="container">
                    <h2 className="section-title text-center">Our Core Values</h2>
                    <p className="section-subtitle text-center">
                        These principles guide every decision we make and every program we implement
                    </p>
                    <div className="values-list">
                        <div className="value-item">
                            <Users className="value-icon" />
                            <div>
                                <h3>Inclusivity and Equality</h3>
                                <p>We believe in equal opportunities for all, regardless of background, gender, caste, religion, or economic status. Our programs are designed to reach the most marginalized and vulnerable members of society.</p>
                            </div>
                        </div>
                        <div className="value-item">
                            <Award className="value-icon" />
                            <div>
                                <h3>Empowerment through Skills and Education</h3>
                                <p>We focus on building capabilities and providing people with the tools, knowledge, and skills they need to create their own opportunities and achieve economic independence.</p>
                            </div>
                        </div>
                        <div className="value-item">
                            <Globe className="value-icon" />
                            <div>
                                <h3>Transparency and Accountability</h3>
                                <p>We maintain the highest standards of transparency in our operations and remain accountable to the communities we serve, our partners, and our stakeholders.</p>
                            </div>
                        </div>
                        <div className="value-item">
                            <Lightbulb className="value-icon" />
                            <div>
                                <h3>Innovation and Technology</h3>
                                <p>We embrace innovative approaches and leverage technology to enhance the effectiveness and reach of our programs, ensuring we stay relevant in a rapidly changing world.</p>
                            </div>
                        </div>
                        <div className="value-item">
                            <Heart className="value-icon" />
                            <div>
                                <h3>Community Participation</h3>
                                <p>Communities are at the heart of our work. We engage, listen, and collaborate with community members, ensuring programs address real needs and are sustainable.</p>
                            </div>
                        </div>
                        <div className="value-item">
                            <Shield className="value-icon" />
                            <div>
                                <h3>Compassion and Humanity</h3>
                                <p>We approach our work with empathy and compassion, understanding that behind every statistic is a human story deserving of dignity and respect.</p>
                            </div>
                        </div>
                        <div className="value-item">
                            <Target className="value-icon" />
                            <div>
                                <h3>Sustainability and Social Responsibility</h3>
                                <p>We design programs for long-term sustainability, creating systems that continue benefiting communities long after our direct intervention ends.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="objectives-section bg-light-green">
                <div className="container">
                    <h2 className="section-title text-center text-green">Our Objectives</h2>
                    <div className="objectives-grid">
                        <div className="objective-card">
                            To empower youth through skill development, career guidance, and employment opportunities that prepare them for productive futures
                        </div>
                        <div className="objective-card">
                            To strengthen women through vocational training, entrepreneurship development, and leadership programs that create economic independence
                        </div>
                        <div className="objective-card">
                            To promote sports culture and physical wellbeing among youth and school students for healthier, disciplined communities
                        </div>
                        <div className="objective-card">
                            To enhance digital literacy and promote advanced digital technologies for future economic  participation
                        </div>
                        <div className="objective-card">
                            To conduct medical camps and community health screening programs that make healthcare accessible to all
                        </div>
                        <div className="objective-card">
                            To create awareness about vaccination and support immunization programs that protect community health
                        </div>
                        <div className="objective-card">
                            To promote mental health awareness and psychological wellbeing programs that reduce stigma and support those in need
                        </div>
                        <div className="objective-card">
                            To implement animal welfare awareness and vaccination programs that create safer, more compassionate communities
                        </div>
                        <div className="objective-card">
                            To support marginalized communities including economically weaker sections, rural areas, persons with disabilities, and vulnerable groups
                        </div>
                        <div className="objective-card">
                            To promote awareness on social issues including drug de-addiction, hygiene, sanitation, nutrition, and overall social wellbeing
                        </div>
                    </div>
                </div>
            </section>

            <section className="beneficiaries-section">
                <div className="container">
                    <h2 className="section-title text-center">Who We Serve</h2>
                    <p className="section-subtitle text-center">
                        Our programs reach diverse groups across communities
                    </p>
                    <div className="beneficiaries-grid">
                        <div className="beneficiary-card">Youth & Students</div>
                        <div className="beneficiary-card">Women & SHG Members</div>
                        <div className="beneficiary-card">Children & Adolescents</div>
                        <div className="beneficiary-card">Economically Weaker Sections</div>
                        <div className="beneficiary-card">Rural Communities</div>
                        <div className="beneficiary-card">Persons with Disabilities</div>
                        <div className="beneficiary-card">Sports Aspirants</div>
                        <div className="beneficiary-card">Unemployed Individuals</div>
                        <div className="beneficiary-card">Marginalized Families</div>
                        <div className="beneficiary-card">Street & Domestic Animals</div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;

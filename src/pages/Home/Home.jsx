import HeroCarousel from '../../components/HeroCarousel';
import MissionCards from '../../components/MissionCards';
import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';
import './Home.css';

function Home() {
    return (
        <div className="home-page">
            <HeroCarousel />

            {/* Mission Cards Section */}
            <MissionCards />

            {/* About Section */}
            <section className="about-section bg-light-green">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2 className="text-green">Building Stronger Communities Together</h2>
                            <p>
                                Aspire Technologies stands as a beacon of hope and progress for marginalized and underserved populations across our communities. We are not just an organization – we are a movement dedicated to transforming lives through education, empowerment, and sustainable development.
                            </p>
                            <p>
                                Since our inception, we have worked tirelessly to address the most pressing challenges facing our communities: unemployment among youth, economic vulnerability of women, declining physical health, digital divide, mental health stigma, healthcare access barriers, and animal welfare concerns. Our approach is comprehensive, compassionate, and community-driven.
                            </p>
                            <p>
                                What makes us different is our commitment to holistic development. We don't just provide temporary solutions – we build sustainable systems that empower individuals and communities to create their own opportunities. Through our multi-sector interventions, we ensure that development reaches every corner of society, leaving no one behind.
                            </p>
                        </div>
                        <div className="vision-mission">
                            <div className="vm-card">
                                <div className="vm-icon">
                                    <Eye size={32} />
                                </div>
                                <h3>Our Vision</h3>
                                <p>
                                    To build an inclusive, progressive, skilled, and healthy society where youth and women are empowered with opportunities, digital competencies, mental wellbeing, and sustainable livelihood for a dignified life.
                                </p>
                            </div>
                            <div className="vm-card">
                                <div className="vm-icon">
                                    <Target size={32} />
                                </div>
                                <h3>Our Mission</h3>
                                <p>
                                    To empower communities through innovative, technology-driven, and socially responsible programs in youth development, women empowerment, sports, digital literacy, mental health awareness, medical camps, vaccination awareness, and animal welfare initiatives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="values-section">
                <div className="container">
                    <h2 className="section-title text-center">Our Core Values</h2>
                    <p className="section-subtitle text-center">
                        These guiding principles shape every decision we make and every program we implement
                    </p>
                    <div className="values-grid">
                        <div className="value-card">
                            <Heart className="value-icon" />
                            <h4>Inclusivity & Equality</h4>
                            <p>We believe everyone deserves equal opportunities regardless of background, gender, or economic status.</p>
                        </div>
                        <div className="value-card">
                            <Users className="value-icon" />
                            <h4>Community Participation</h4>
                            <p>Communities are at the heart of our work. We engage, listen, and collaborate with those we serve.</p>
                        </div>
                        <div className="value-card">
                            <Award className="value-icon" />
                            <h4>Empowerment Through Skills</h4>
                            <p>We provide tools, training, and knowledge that enable people to create their own opportunities.</p>
                        </div>
                        <div className="value-card">
                            <Globe className="value-icon" />
                            <h4>Transparency & Accountability</h4>
                            <p>We maintain the highest standards of integrity and accountability in all our operations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="impact-section bg-light-green">
                <div className="container">
                    <h2 className="section-title text-center text-green">Creating Real Impact</h2>
                    <p className="section-subtitle text-center">
                        Our programs are designed to create measurable, sustainable change in communities
                    </p>
                    <div className="impact-grid">
                        <div className="impact-stat">
                            <div className="stat-number">1000+</div>
                            <div className="stat-label">Youth Trained in Skills</div>
                            <p className="stat-description">
                                Career guidance, vocational training, and leadership development programs helping youth secure employment
                            </p>
                        </div>
                        <div className="impact-stat">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Women Empowered</div>
                            <p className="stat-description">
                                Women gaining financial independence through SHGs, entrepreneurship, and livelihood programs
                            </p>
                        </div>
                        <div className="impact-stat">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Communities Served</div>
                            <p className="stat-description">
                                Rural and urban communities benefiting from our multi-sector development interventions
                            </p>
                        </div>
                        <div className="impact-stat">
                            <div className="stat-number">200+</div>
                            <div className="stat-label">Medical Camps Organized</div>
                            <p className="stat-description">
                                Free health check-ups and medical assistance provided to underserved populations
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Make a Difference?</h2>
                        <p>
                            Join us in our mission to empower communities and create sustainable social change. Whether you want to volunteer, partner with us, or support our programs, there are many ways to get involved.
                        </p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn btn-primary btn-large">Get in Touch</a>
                            <a href="/programs/youth-development" className="btn btn-secondary btn-large">Explore Programs</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;

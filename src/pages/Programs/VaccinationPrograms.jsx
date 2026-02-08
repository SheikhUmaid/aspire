import { Syringe, Target, Shield, Users, Heart, CheckCircle } from 'lucide-react';

function VaccinationPrograms() {
    return (
        <div className="program-page">
            <section className="program-header">
                <div className="container">
                    <div className="header-content">
                        <Syringe className="header-icon" size={64} />
                        <h1>Vaccination Awareness & Immunization Programs</h1>
                        <p className="header-tagline">
                            Protecting communities through vaccination education and support
                        </p>
                    </div>
                </div>
            </section>

            <section className="program-intro">
                <div className="container">
                    <div className="intro-content">
                        <div className="intro-text">
                            <h2>Prevention Through Immunization</h2>
                            <p>
                                Vaccines are one of the greatest public health achievements in human history, preventing millions of deaths every year from diseases that once killed and disabled countless people. Yet despite overwhelming scientific evidence of vaccine safety and effectiveness, misinformation, lack of awareness, and accessibility challenges mean that many children and adults miss crucial immunizations, leaving them vulnerable to preventable diseases.
                            </p>
                            <p>
                                Aspire Technologies is committed to supporting public immunization efforts and ensuring that every child and family has access to life-saving vaccines. Our Vaccination Awareness programswork to educate communities about the importance of immunization, dispel myths and misinformation, and support government vaccination drives to achieve maximum coverage.
                            </p>
                            <p>
                                We work closely with health workers, ASHA workers, and government health departments to mobilizing communities for vaccination campaigns, tracking children who missed vaccines, educating parents about vaccine schedules, and addressing vaccine hesitancy with factual, science-based information. Through our efforts, we're helping protect entire communities from outbreaks of preventable diseases like measles, polio, diphtheria, whooping cough, and many others.
                            </p>
                        </div>
                        <div className="intro-stats">
                            <div className="stat-box">
                                <Target className="stat-icon" />
                                <div className="stat-number">15,000+</div>
                                <div className="stat-label">Families Reached</div>
                            </div>
                            <div className="stat-box">
                                <Shield className="stat-icon" />
                                <div className="stat-number">300+</div>
                                <div className="stat-label">Awareness Camps</div>
                            </div>
                            <div className="stat-box">
                                <Heart className="stat-icon" />
                                <div className="stat-number">90%</div>
                                <div className="stat-label">Coverage Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="activities-section bg-light-green">
                <div className="container">
                    <h2 className="section-title text-center text-green">Our Vaccination Activities</h2>
                    <p className="section-subtitle text-center">
                        Supporting immunization through awareness, mobilization, and community education
                    </p>
                    <div className="activities-grid">
                        <div className="activity-card">
                            <div className="activity-number">01</div>
                            <h3>Routine Immunization Awareness</h3>
                            <p>
                                We educate parents and families about the national immunization schedule, which vaccines children need at different ages, why each vaccine is important, and the diseases they prevent. Understanding the science behind vaccines helps parents make informed decisions about their children's health.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">02</div>
                            <h3>Community Mobilization for Vaccination</h3>
                            <p>
                                During government immunization drives, we mobilize communities by spreading awareness about vaccination dates and locations, reminding parents to bring children, addressing concerns, and helping health workers reach every household. Community mobilization significantly improves vaccination coverage rates.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">03</div>
                            <h3>Myth & Misinformation Busting</h3>
                            <p>
                                Vaccine misinformation can be deadly. We counter myths with scientific facts, explaining how vaccines work, addressing safety concerns, sharing evidence-based information about vaccine testing and approval, and helping parents distinguish between credible health information and dangerous misinformation.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">04</div>
                            <h3>Door-to-Door Vaccine Awareness</h3>
                            <p>
                                In remote or underserved areas, we conduct door-to-door campaigns to identify unvaccinated or partially vaccinated children, educate families directly, address their specific concerns, and ensure they know when and where to get vaccines. Personal outreach reaches families who might miss mass campaigns.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">05</div>
                            <h3>Seasonal Vaccination Campaigns</h3>
                            <p>
                                We support awareness for seasonal vaccines like influenza vaccines and region-specific vaccines for diseases like Japanese Encephalitis. Educating communities about seasonal disease risks and available preventive vaccines helps reduce disease outbreaks during high-risk periods.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">06</div>
                            <h3>Coordination with Health Workers</h3>
                            <p>
                                We work closely with ANM workers, ASHA workers, and government health staff, supporting their vaccination efforts through community mobilization, record-keeping assistance, identifying missed children, and helping organize vaccination sessions. Partnership with health workers ensures comprehensive coverage.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">07</div>
                            <h3>Vaccine Safety Education</h3>
                            <p>
                                We educate communities about vaccine safety, normal side effects versus serious reactions, when to seek medical help after vaccination, and the rigorous safety testing vaccines undergo. Honest education about both benefits and rare risks builds justified confidence in vaccines.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">08</div>
                            <h3>Adult & Adolescent Vaccination</h3>
                            <p>
                                Vaccination isn't just for infants. We create awareness about vaccines recommended for adolescents (like HPV and tetanus boosters) and adults (COVID-19, influenza, tetanus). Many adults are unaware they need certain vaccines, missing important protection opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="impact-section">
                <div className="container">
                    <h2 className="section-title text-center">Impact of Vaccination Programs</h2>
                    <p className="section-subtitle text-center">
                        Strong immunization coverage protects individuals and entire communities
                    </p>
                    <div className="impact-list">
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Improved Vaccination Coverage</h4>
                                <p>Community mobilization and awareness directly increase the percentage of children receiving all recommended vaccines on schedule.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Prevention of Disease Outbreaks</h4>
                                <p>High vaccination rates create herd immunity that protects entire communities, preventing outbreaks of dangerous infectious diseases.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Reduced Child Mortality</h4>
                                <p>Vaccines prevent deaths from diseases like measles, pneumonia, diarrhea, and other conditions that disproportionately affect young children.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Stronger Public Health Systems</h4>
                                <p>Supporting government vaccination programs strengthens overall public health infrastructure and community trust in health services.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Economic Benefits</h4>
                                <p>Preventing illness through vaccination reduces healthcare costs, prevents loss of productivity, and allows families to invest resources in education and livelihood instead of medical treatment.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Increased Health Literacy</h4>
                                <p>Vaccination education improves overall health literacy, helping communities make better health decisions beyond just immunization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Support Vaccination Awareness</h2>
                        <p>
                            Help us ensure every child receives life-saving vaccines. Support our community mobilization efforts, sponsor awareness campaigns, or volunteer to spread accurate vaccination information in your community.
                        </p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn btn-primary btn-large">Get Involved</a>
                            <a href="/partners" className="btn btn-secondary btn-large">Partner With Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default VaccinationPrograms;

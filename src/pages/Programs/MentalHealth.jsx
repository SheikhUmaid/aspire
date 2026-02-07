import { Brain, Target, Heart, Users, Shield, CheckCircle } from 'lucide-react';
import '../Programs/YouthDevelopment.css';

function MentalHealth() {
    return (
        <div className="program-page">
            <section className="program-header">
                <div className="container">
                    <div className="header-content">
                        <Brain className="header-icon" size={64} />
                        <h1>Mental Health Awareness & Wellbeing Programs</h1>
                        <p className="header-tagline">
                            Breaking stigma and creating supportive communities for mental wellness
                        </p>
                    </div>
                </div>
            </section>

            <section className="program-intro">
                <div className="container">
                    <div className="intro-content">
                        <div className="intro-text">
                            <h2>Making Mental Health a Priority</h2>
                            <p>
                                Mental health is just as important as physical health, yet it remains one of the most neglected and stigmatized aspects of healthcare in our communities. Depression, anxiety, stress, trauma, and other mental health challenges affect millions of people, yet most suffer in silence due to social stigma, lack of awareness, or fear of judgment. This silence can have devastating consequences.
                            </p>
                            <p>
                                Aspire Technologies believes that everyone deserves access to mental health support and that communities need to create environments where people feel safe discussing mental health without shame or discrimination. Our Mental Health Awareness program works to reduce stigma, increase understanding, provide education about common mental health issues, and connect people with support services.
                            </p>
                            <p>
                                We focus heavily on prevention and early intervention through awareness programs in schools, colleges, workplaces, and communities. We teach people how to recognize warning signs in themselves and loved ones, practice self-care and stress management, support others experiencing mental health challenges, and access professional help when needed. Mental health isn't a weakness – it's a part of human experience that deserves compassion, understanding, and proper care.
                            </p>
                        </div>
                        <div className="intro-stats">
                            <div className="stat-box">
                                <Target className="stat-icon" />
                                <div className="stat-number">5000+</div>
                                <div className="stat-label">People Reached</div>
                            </div>
                            <div className="stat-box">
                                <Heart className="stat-icon" />
                                <div className="stat-number">200+</div>
                                <div className="stat-label">Awareness Sessions</div>
                            </div>
                            <div className="stat-box">
                                <Shield className="stat-icon" />
                                <div className="stat-number">100+</div>
                                <div className="stat-label">Counseling Referrals</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="activities-section bg-light-green">
                <div className="container">
                    <h2 className="section-title text-center text-green">Our Mental Health Activities</h2>
                    <p className="section-subtitle text-center">
                        Creating awareness, reducing stigma, and building supportive communities
                    </p>
                    <div className="activities-grid">
                        <div className="activity-card">
                            <div className="activity-number">01</div>
                            <h3>Mental Health Awareness in Schools</h3>
                            <p>
                                We conduct interactive sessions in schools and colleges to educate students about mental health, stress management, peer pressure, academic anxiety, and emotional wellbeing. Early education helps young people develop healthy coping mechanisms and reduces mental health stigma from a young age.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">02</div>
                            <h3>Depression & Anxiety Education</h3>
                            <p>
                                Many people don't recognize depression and anxiety as real medical conditions requiring treatment. Our programs explain symptoms, causes, treatment options, and the importance of seeking professional help. Understanding these common conditions reduces stigma and encourages people to get help.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">03</div>
                            <h3>Stress Management Workshops</h3>
                            <p>
                                Modern life brings constant stress from work, relationships, finances, and social pressures. We teach practical stress management techniques including breathing exercises, meditation, time management, prioritization, healthy boundaries, and recognizing when stress becomes overwhelming and requires additional support.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">04</div>
                            <h3>Suicide Prevention Programs</h3>
                            <p>
                                Suicide prevention requires community awareness and intervention. We teach warning signs, how to talk to someone in crisis, emergency response steps, and available helplines and resources. Creating a network of aware, caring people can save lives by ensuring struggling individuals get timely help.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">05</div>
                            <h3>Counseling Support & Referrals</h3>
                            <p>
                                While we're not a treatment center, we provide basic counseling support for common issues and maintain referral networks with qualified mental health professionals. We help connect people experiencing mental health challenges with appropriate professional support, making these services more accessible.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">06</div>
                            <h3>Addiction & Rehabilitation Awareness</h3>
                            <p>
                                Substance abuse often stems from or contributes to mental health issues. We create awareness about addiction as a health condition, not a moral failing, and provide information about de-addiction resources, rehabilitation centers, and family support for those dealing with addiction.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">07</div>
                            <h3>Workplace Mental Health</h3>
                            <p>
                                Work-related stress, burnout, and professional pressures significantly impact mental health. We conduct workplace mental health programs addressing work-life balance, managing workplace stress, recognizing burnout, creating supportive work environments, and employer responsibilities for employee wellbeing.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">08</div>
                            <h3>Family & Parenting Counseling</h3>
                            <p>
                                Family relationships deeply impact mental health. We offer guidance on healthy parenting practices, managing family conflicts, supporting children's emotional development, recognizing mental health issues in family members, and creating emotionally supportive home environments.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">09</div>
                            <h3>Trauma & PTSD Awareness</h3>
                            <p>
                                Traumatic experiences can have long-lasting mental health impacts. We educate communities about trauma, post-traumatic stress disorder (PTSD), supporting trauma survivors, and connecting people with specialized trauma treatment resources. Understanding trauma helps create more compassionate communities.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">10</div>
                            <h3>Mental Health First Aid Training</h3>
                            <p>
                                Just as physical first aid helps in medical emergencies, mental health first aid teaches people how to recognize mental health crises, provide initial support, and connect individuals with professional help. We train community members to be first responders for mental health emergencies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="impact-section">
                <div className="container">
                    <h2 className="section-title text-center">Creating Mentally Healthy Communities</h2>
                    <p className="section-subtitle text-center">
                        Our programs create lasting changes in attitudes, awareness, and support systems
                    </p>
                    <div className="impact-list">
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Reduced Mental Health Stigma</h4>
                                <p>Education and open discussion significantly reduce shame and discrimination associated with mental health challenges.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Increased Help-Seeking Behavior</h4>
                                <p>When stigma decreases and awareness increases, more people feel comfortable seeking professional help for mental health concerns.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Better Emotional Resilience</h4>
                                <p>Stress management and coping skills help people handle life's challenges more effectively, preventing minor stresses from becoming major crises.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Suicide Prevention</h4>
                                <p>Community awareness and intervention training can prevent suicides by ensuring troubled individuals receive timely support and professional help.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Stronger Support Networks</h4>
                                <p>When communities understand mental health, people feel more supported and less isolated during difficult times.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Overall Community Wellbeing</h4>
                                <p>Addressing mental health creates healthier, more compassionate, and more productive communities where people thrive.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Support Mental Health Awareness</h2>
                        <p>
                            Help us create communities where mental health is understood, supported, and prioritized. Sponsor awareness programs, invite us to your organization, or volunteer to support mental health initiatives in your community.
                        </p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn btn-primary btn-large">Contact Us</a>
                            <a href="/partners" className="btn btn-secondary btn-large">Partner With Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MentalHealth;

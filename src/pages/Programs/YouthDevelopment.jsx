import { Users, Target, Award, Briefcase, BookOpen, TrendingUp, Heart, CheckCircle } from 'lucide-react';
import './YouthDevelopment.css';

function YouthDevelopment() {
    return (
        <div className="program-page">
            {/* Header */}
            <section className="program-header">
                <div className="container">
                    <div className="header-content">
                        <Users className="header-icon" size={64} />
                        <h1>Youth Development & Empowerment</h1>
                        <p className="header-tagline">
                            Building skilled, confident, and responsible youth for a productive future
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="program-intro">
                <div className="container">
                    <div className="intro-content">
                        <div className="intro-text">
                            <h2>Investing in Our Future Leaders</h2>
                            <p>
                                Young people represent our greatest asset and our brightest hope for the future. Yet, millions of youth across our communities face significant barriers to employment, education, and opportunity. Many lack access to quality skill training, career guidance, or mentorship programs that could help them realize their full potential.
                            </p>
                            <p>
                                At Aspire Technologies, we believe that every young person deserves the chance to build a meaningful career and contribute positively to society. Our Youth Development program is designed to bridge the gap between education and employment, providing young people with the practical skills, knowledge, and confidence they need to succeed in today's competitive job market.
                            </p>
                            <p>
                                We don't just focus on technical skills. We understand that true empowerment comes from developing the whole person – building communication abilities, leadership qualities, problem-solving skills, and the kind of resilience that helps young people overcome challenges and seize opportunities. Through our comprehensive approach, we're helping create a generation of skilled, confident, and socially responsible young leaders.
                            </p>
                        </div>
                        <div className="intro-stats">
                            <div className="stat-box">
                                <Target className="stat-icon" />
                                <div className="stat-number">1000+</div>
                                <div className="stat-label">Youth Trained</div>
                            </div>
                            <div className="stat-box">
                                <Award className="stat-icon" />
                                <div className="stat-number">75%</div>
                                <div className="stat-label">Placement Rate</div>
                            </div>
                            <div className="stat-box">
                                <Briefcase className="stat-icon" />
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Skill Programs</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Major Activities */}
            <section className="activities-section bg-light-green">
                <div className="container">
                    <h2 className="section-title text-center text-green">What We Do for Youth</h2>
                    <p className="section-subtitle text-center">
                        Our comprehensive programs cover every aspect of youth development and career preparation
                    </p>
                    <div className="activities-grid">
                        <div className="activity-card">
                            <div className="activity-number">01</div>
                            <h3>Career Counseling & Guidance</h3>
                            <p>
                                We provide one-on-one career counseling sessions to help young people identify their strengths, interests, and career goals. Our experienced counselors help youth understand different career paths, educational requirements, and market opportunities, enabling them to make informed decisions about their future.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">02</div>
                            <h3>Vocational & Skill Training</h3>
                            <p>
                                Our hands-on vocational training programs equip youth with practical skills in high-demand fields like computer operations, digital marketing, electrical work, plumbing, mobile repair, tailoring, and other trades. These market-oriented skills increase employability and create immediate livelihood opportunities.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">03</div>
                            <h3>Leadership Development Workshops</h3>
                            <p>
                                We conduct intensive leadership workshops that develop critical thinking, decision-making, team management, and problem-solving abilities. Youth learn to take initiative, inspire others, and become positive change-makers in their communities. These soft skills complement technical training and prepare youth for leadership roles.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">04</div>
                            <h3>Communication & Personality Development</h3>
                            <p>
                                Strong communication is essential for career success. Our programs focus on improving spoken English, public speaking, presentation skills, interview techniques, and professional etiquette. We help youth build confidence and develop the interpersonal skills needed to excel in any workplace.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">05</div>
                            <h3>Entrepreneurship Training</h3>
                            <p>
                                Not every young person wants traditional employment. We offer entrepreneurship development programs that teach business planning, financial management, marketing strategies, and startup fundamentals. We encourage innovative thinking and support youth who want to create their own businesses and become job creators rather than job seekers.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">06</div>
                            <h3>Job Readiness & Placement Support</h3>
                            <p>
                                We prepare youth for the job market through resume writing workshops, mock interviews, aptitude test preparation, and professional grooming sessions. Our placement cell works with local businesses and organizations to connect trained youth with suitable employment opportunities, ensuring skills translate into actual jobs.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">07</div>
                            <h3>Competitive Exam Preparation</h3>
                            <p>
                                Many youth aspire to government jobs and competitive positions. We provide guidance and study materials for various competitive exams, entrance tests, and civil service preparations. Study circles and mentorship programs help youth stay motivated and focused on their examination goals.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">08</div>
                            <h3>Rural Youth Capacity Building</h3>
                            <p>
                                Rural youth often face additional challenges due to limited access to resources and opportunities. We run special programs in rural areas focusing on agricultural entrepreneurship, allied activities, rural technology adoption, and creating local livelihood opportunities that don't require migration to cities.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">09</div>
                            <h3>Life Skills Education</h3>
                            <p>
                                Beyond career skills, we teach essential life skills including financial literacy, health awareness, digital citizenship, time management, stress management, and emotional intelligence. These foundational skills help youth navigate life's challenges and make responsible decisions.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">10</div>
                            <h3>Social Awareness Programs</h3>
                            <p>
                                We engage youth in awareness campaigns on important social issues like drug abuse, gender equality, environmental protection, and civic responsibility. Through these programs, youth develop social consciousness and learn the importance of contributing positively to society beyond personal success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expected Impact */}
            <section className="impact-section">
                <div className="container">
                    <h2 className="section-title text-center">Creating Lasting Change</h2>
                    <p className="section-subtitle text-center">
                        Our programs create measurable outcomes that transform lives and communities
                    </p>
                    <div className="impact-list">
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Improved Employability</h4>
                                <p>Youth gain market-relevant skills and certifications that significantly increase their chances of securing quality employment in their chosen fields.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Reduced Unemployment</h4>
                                <p>By connecting trained youth with job opportunities and self-employment options, we actively contribute to reducing youth unemployment in served communities.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Enhanced Career Planning</h4>
                                <p>Youth develop clear career goals and realistic action plans, reducing uncertainty and helping them make informed educational and professional choices.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Increased Confidence</h4>
                                <p>Through skill development and mentorship, youth build self-confidence and self-belief, enabling them to pursue opportunities they might have previously thought beyond their reach.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Positive Social Engagement</h4>
                                <p>Empowered youth become active, responsible citizens who contribute to community development and inspire others through their success stories.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Reduction in Social Problems</h4>
                                <p>Engaged, employed youth are less vulnerable to negative influences like substance abuse, crime, and social unrest, creating safer, more stable communities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Want to Empower Youth in Your Community?</h2>
                        <p>
                            Partner with us to create youth development programs, sponsor skill training for unemployed youth, or volunteer as a mentor. Together, we can help young people realize their potential and build better futures.
                        </p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn btn-primary btn-large">Contact Us</a>
                            <a href="/partners" className="btn btn-secondary btn-large">Become a Partner</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default YouthDevelopment;

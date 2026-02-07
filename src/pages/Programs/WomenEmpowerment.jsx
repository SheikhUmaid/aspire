import { Heart, Target, Award, Briefcase, DollarSign, Users, CheckCircle } from 'lucide-react';
import '../Programs/YouthDevelopment.css';

function WomenEmpowerment() {
    return (
        <div className="program-page">
            <section className="program-header">
                <div className="container">
                    <div className="header-content">
                        <Heart className="header-icon" size={64} />
                        <h1>Women Empowerment & Livelihood Programs</h1>
                        <p className="header-tagline">
                            Strengthening women through education, skills, and economic independence
                        </p>
                    </div>
                </div>
            </section>

            <section className="program-intro">
                <div className="container">
                    <div className="intro-content">
                        <div className="intro-text">
                            <h2>Empowering Women, Transforming Communities</h2>
                            <p>
                                Women are the backbone of every community, yet they often face systemic barriers to education, employment, and economic participation. Many women in our communities possess incredible potential but lack access to resources, training, and opportunities that could help them achieve financial independence and social empowerment.
                            </p>
                            <p>
                                Aspire Technologies is committed to changing this reality. Our Women Empowerment program works to break down barriers and create pathways for women to become economically independent, socially active, and confident leaders in their families and communities. We believe that when women are empowered, entire families and communities benefit.
                            </p>
                            <p>
                                Our approach goes beyond just skill training. We address the multiple dimensions of women's empowerment – economic opportunity, social awareness, legal literacy, healthcare, and leadership development. Through Self Help Groups (SHGs), vocational training, entrepreneurship support, and awareness programs, we're creating a movement of empowered women who are transforming their lives and inspiring others.
                            </p>
                        </div>
                        <div className="intro-stats">
                            <div className="stat-box">
                                <Target className="stat-icon" />
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Women Trained</div>
                            </div>
                            <div className="stat-box">
                                <Award className="stat-icon" />
                                <div className="stat-number">100+</div>
                                <div className="stat-label">SHGs Formed</div>
                            </div>
                            <div className="stat-box">
                                <Briefcase className="stat-icon" />
                                <div className="stat-number">80%</div>
                                <div className="stat-label">Income Increase</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="activities-section bg-light-green">
                <div className="container">
                    <h2 className="section-title text-center text-green">Our Women Empowerment Activities</h2>
                    <p className="section-subtitle text-center">
                        Comprehensive programs designed to create lasting economic and social empowerment
                    </p>
                    <div className="activities-grid">
                        <div className="activity-card">
                            <div className="activity-number">01</div>
                            <h3>Self Help Group Formation</h3>
                            <p>
                                We organize and strengthen Women Self Help Groups (SHGs) that serve as platforms for collective savings, micro-credit, and mutual support. SHGs empower women to pool resources, access loans, start small businesses, and solve problems collectively. We provide training in group management, financial record-keeping, and democratic decision-making.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">02</div>
                            <h3>Vocational Training Programs</h3>
                            <p>
                                We offer practical vocational training in high-demand skills like tailoring, embroidery, beautician courses, handicrafts, food processing, packaging, computer operations, and other marketable trades. These skills enable women to earn income from home or establish small businesses without requiring large capital investments.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">03</div>
                            <h3>Entrepreneurship Development</h3>
                            <p>
                                For women who want to start their own businesses, we provide entrepreneurship training covering business planning, product development, pricing strategies, marketing, customer relations, and basic accounting. We help women identify viable business ideas based on local market demand and their own skills and interests.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">04</div>
                            <h3>Financial Literacy Training</h3>
                            <p>
                                Understanding money management is crucial for economic empowerment. We conduct financial literacy sessions teaching women about savings, budgeting, banking services, loans, insurance, digital payments, and financial planning. This knowledge helps women make informed financial decisions and avoid exploitation.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">05</div>
                            <h3>Micro-Business Support</h3>
                            <p>
                                We help women establish and grow micro-enterprises by providing business guidance, market linkages, and sometimes seed funding through SHG networks. Whether it's pickle-making, tailoring shops, beauty parlors, or small-scale manufacturing, we support women in turning skills into sustainable income sources.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">06</div>
                            <h3>Legal Rights Awareness</h3>
                            <p>
                                Many women are unaware of their legal rights regarding property, inheritance, domestic violence protection, workplace rights, and social security schemes. We conduct legal literacy sessions in partnership with legal aid organizations, empowering women with knowledge about laws that protect them and resources available for support.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">07</div>
                            <h3>Domestic Violence Prevention</h3>
                            <p>
                                We create safe spaces for women to discuss issues of domestic violence, harassment, and gender-based discrimination. Through awareness sessions, counseling support, and linkages with protection services, we help women recognize abuse, understand their rights, and access help when needed.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">08</div>
                            <h3>Digital Literacy for Women</h3>
                            <p>
                                In today's digital age, basic computer and internet skills open new opportunities. We provide digital literacy training specifically designed for women, teaching them how to use smartphones, access online services, make digital payments, communicate using apps, and even explore online business opportunities.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">09</div>
                            <h3>Health & Nutrition Awareness</h3>
                            <p>
                                We conduct special sessions on women's health, reproductive health, nutrition, menstrual hygiene, maternal care, and preventive healthcare. Healthy women are better able to work, care for families, and pursue their goals. Health awareness is a crucial component of overall empowerment.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">10</div>
                            <h3>Leadership & Confidence Building</h3>
                            <p>
                                We organize leadership development programs that help women build confidence, develop public speaking skills, learn decision-making and problem-solving, and understand community leadership roles. Empowered women become leaders who advocate for themselves and others in their communities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="impact-section">
                <div className="container">
                    <h2 className="section-title text-center">Impact on Women's Lives</h2>
                    <p className="section-subtitle text-center">
                        Our programs create real, measurable changes in women's economic and social status
                    </p>
                    <div className="impact-list">
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Economic Independence</h4>
                                <p>Women gain the skills and confidence to earn their own income, reducing financial dependency and increasing household income and stability.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Increased Decision-Making Power</h4>
                                <p>Economic contribution gives women greater voice in family decisions, improving their status within households and communities.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Reduced Vulnerability</h4>
                                <p>Skills, savings, and social networks reduce women's vulnerability to poverty, abuse, and exploitation during crisis situations.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Improved Family Welfare</h4>
                                <p>Empowered women invest more in children's education, nutrition, and healthcare, creating positive multi-generational impacts.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Community Leadership</h4>
                                <p>Trained women become role models and community leaders, inspiring other women and advocating for positive social change.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Enhanced Self-Confidence</h4>
                                <p>Skills mastery, income generation, and peer support significantly boost women's self-esteem and belief in their own capabilities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Support Women's Empowerment</h2>
                        <p>
                            Join us in creating opportunities for women to achieve economic independence and social empowerment. Your support can help us train more women, form new SHGs, and create sustainable livelihood programs.
                        </p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn btn-primary btn-large">Get Involved</a>
                            <a href="/partners" className="btn btn-secondary btn-large">Sponsor a Program</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WomenEmpowerment;

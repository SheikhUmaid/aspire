import { Trophy, Target, Award, Heart, Users, CheckCircle } from 'lucide-react';

function SportsPromotion() {
    return (
        <div className="program-page">
            <section className="program-header">
                <div className="container">
                    <div className="header-content">
                        <Trophy className="header-icon" size={64} />
                        <h1>Sports Promotion & Youth Fitness</h1>
                        <p className="header-tagline">
                            Building discipline, teamwork, and healthy lifestyles through sports
                        </p>
                    </div>
                </div>
            </section>

            <section className="program-intro">
                <div className="container">
                    <div className="intro-content">
                        <div className="intro-text">
                            <h2>Sports as a Tool for Youth Development</h2>
                            <p>
                                Sports and physical activity have the power to transform young lives. Beyond physical fitness, sports teach invaluable life lessons about discipline, perseverance, teamwork, leadership, and handling both success and failure with grace. Unfortunately, many youth in our communities lack access to proper sports facilities, coaching, or organized activities.
                            </p>
                            <p>
                                Aspire Technologies believes that every young person deserves the opportunity to participate in sports and experience its transformative benefits. Our Sports Promotion program works to create accessible sports opportunities, organize tournaments and competitions, provide coaching and training, and build a culture of physical fitness and healthy living among youth.
                            </p>
                            <p>
                                We've seen how sports can redirect youth energy into positive channels, keeping them away from harmful activities like substance abuse and violence. Sports participation builds confidence, teaches goal-setting, develops resilience, and creates strong peer networks. Through our programs, we're not just creating athletes – we're building character, promoting health, and developing future leaders through the power of sports.
                            </p>
                        </div>
                        <div className="intro-stats">
                            <div className="stat-box">
                                <Target className="stat-icon" />
                                <div className="stat-number">2000+</div>
                                <div className="stat-label">Youth Engaged</div>
                            </div>
                            <div className="stat-box">
                                <Award className="stat-icon" />
                                <div className="stat-number">100+</div>
                                <div className="stat-label">Tournaments</div>
                            </div>
                            <div className="stat-box">
                                <Trophy className="stat-icon" />
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Schools Reached</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="activities-section bg-light-green">
                <div className="container">
                    <h2 className="section-title text-center text-green">Our Sports Activities</h2>
                    <p className="section-subtitle text-center">
                        Creating opportunities for youth to engage in organized sports and physical fitness
                    </p>
                    <div className="activities-grid">
                        <div className="activity-card">
                            <div className="activity-number">01</div>
                            <h3>Sports Tournaments & Competitions</h3>
                            <p>
                                We organize regular sports tournaments in cricket, football, volleyball, kabaddi, athletics, and other popular sports. These tournaments provide platforms for youth to showcase talent, experience healthy competition, and develop sportsmanship. Inter-school and inter-community tournaments foster broader social connections.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">02</div>
                            <h3>School Sports Programs</h3>
                            <p>
                                We partner with schools to strengthen their sports programs through equipment support, coach training, and organizing school-level competitions. Regular physical education and sports activities help students develop healthy habits early in life and discover their athletic potential.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">03</div>
                            <h3>Coaching & Skills Training</h3>
                            <p>
                                For youth who show particular interest or talent, we provide access to qualified coaching and systematic skills training. Whether it's cricket coaching, football training, athletics preparation, or other sports, proper guidance helps youth improve techniques and potentially pursue sports more seriously.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">04</div>
                            <h3>Girls' Sports Promotion</h3>
                            <p>
                                We make special efforts to encourage girls' participation in sports, breaking social barriers and gender stereotypes. Girls-only tournaments, female coaches where possible, safe sports environments, and family awareness programs help create opportunities for girls to engage in sports confidently.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">05</div>
                            <h3>Fitness & Wellness Programs</h3>
                            <p>
                                Beyond competitive sports, we promote general fitness through yoga sessions, fitness camps, aerobics classes, and physical wellness workshops. These programs emphasize that staying active doesn't require being a competitive athlete – everyone can benefit from regular physical activity.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">06</div>
                            <h3>Talent Identification & Support</h3>
                            <p>
                                We identify talented young athletes who could benefit from additional support and guidance. Through connections with sports academies, scholarship information, and specialized training opportunities, we help gifted athletes pursue their sports dreams beyond local competitions.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">07</div>
                            <h3>Sports Equipment Support</h3>
                            <p>
                                Lack of equipment should never prevent youth from playing sports. We provide sports equipment support to schools, community centers, and youth groups, ensuring that financial constraints don't become barriers to sports participation and that quality equipment is available for training and competitions.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">08</div>
                            <h3>Sports-Based Life Skills</h3>
                            <p>
                                We integrate life skills education into sports programs, explicitly teaching lessons about teamwork, leadership, conflict resolution, goal-setting, time management, and handling pressure. Sports become a practical training ground for skills that benefit youth throughout life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="impact-section">
                <div className="container">
                    <h2 className="section-title text-center">Impact of Sports Programs</h2>
                    <p className="section-subtitle text-center">
                        Sports create positive changes in individual lives and community culture
                    </p>
                    <div className="impact-list">
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Improved Physical Health</h4>
                                <p>Regular sports participation significantly improves cardiovascular health, physical fitness, strength, and overall wellbeing among youth.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Enhanced Mental Wellbeing</h4>
                                <p>Sports reduce stress, improve mood, boost self-esteem, and help prevent depression and anxiety among young people.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Development of Discipline</h4>
                                <p>Sports training teaches punctuality, commitment, practice discipline, and the importance of preparation – lessons that transfer to academic and professional life.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Reduced Substance Abuse Risk</h4>
                                <p>Engaged youth involved in regular sports activities are significantly less likely to experiment with drugs, alcohol, or other harmful substances.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Stronger Community Bonds</h4>
                                <p>Sports events bring communities together, create shared experiences, and build connections across different social and economic backgrounds.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Leadership Development</h4>
                                <p>Captains, team organizers, and active participants develop leadership skills that benefit them in all areas of life.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Help Us Build a Sports Culture</h2>
                        <p>
                            Support our sports programs by sponsoring tournaments, donating sports equipment, volunteering as coaches, or helping us establish sports facilities in underserved areas. Together we can give every child the chance to play, compete, and grow through sports.
                        </p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn btn-primary btn-large">Contact Us</a>
                            <a href="/partners" className="btn btn-secondary btn-large">Become a Sponsor</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SportsPromotion;

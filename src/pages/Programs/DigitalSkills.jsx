import { Laptop, Target, Award, Briefcase, Wifi, CheckCircle } from 'lucide-react';
import '../Programs/YouthDevelopment.css';

function DigitalSkills() {
    return (
        <div className="program-page">
            <section className="program-header">
                <div className="container">
                    <div className="header-content">
                        <Laptop className="header-icon" size={64} />
                        <h1>Digital Technologies & Skill Development</h1>
                        <p className="header-tagline">
                            Preparing communities for the digital economy through technology education
                        </p>
                    </div>
                </div>
            </section>

            <section className="program-intro">
                <div className="container">
                    <div className="intro-content">
                        <div className="intro-text">
                            <h2>Bridging the Digital Divide</h2>
                            <p>
                                We live in an increasingly digital world where basic computer skills, internet literacy, and technology familiarity are no longer optional – they're essential for participating fully in modern economy and society. Yet millions of people in our communities lack access to digital education, creating a troubling digital divide that limits opportunities and perpetuates inequality.
                            </p>
                            <p>
                                Aspire Technologies recognizes that digital empowerment is fundamental to inclusive development. Our Digital Technologies & Skill Development program works to ensure that economic background or geographic location don't prevent anyone from accessing digital education and participating in the digital economy.
                            </p>
                            <p>
                                We provide comprehensive digital literacy training ranging from basic computer operations to advanced digital skills, e-commerce, digital marketing, and online entrepreneurship. Our programs are designed to be practical and job-oriented, ensuring that participants gain skills that immediately improve their employment prospects and income potential. We're not just teaching people how to use computers – we're opening doors to new careers, businesses, and opportunities in the digital age.
                            </p>
                        </div>
                        <div className="intro-stats">
                            <div className="stat-box">
                                <Target className="stat-icon" />
                                <div className="stat-number">800+</div>
                                <div className="stat-label">People Trained</div>
                            </div>
                            <div className="stat-box">
                                <Award className="stat-icon" />
                                <div className="stat-number">60%</div>
                                <div className="stat-label">Employment Rate</div>
                            </div>
                            <div className="stat-box">
                                <Wifi className="stat-icon" />
                                <div className="stat-number">30+</div>
                                <div className="stat-label">Training Centers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="activities-section bg-light-green">
                <div className="container">
                    <h2 className="section-title text-center text-green">Digital Skills Training Programs</h2>
                    <p className="section-subtitle text-center">
                        From basic literacy to advanced digital competencies for the modern workforce
                    </p>
                    <div className="activities-grid">
                        <div className="activity-card">
                            <div className="activity-number">01</div>
                            <h3>Basic Computer Literacy</h3>
                            <p>
                                We start with fundamentals for those new to computers: operating systems, file management, typing skills, using keyboard and mouse, basic software operations. This foundation is essential for anyone entering the formal job market or pursuing further digital training.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">02</div>
                            <h3>MS Office & Productivity Tools</h3>
                            <p>
                                Proficiency in Microsoft Office (Word, Excel, PowerPoint) and Google Workspace tools is required for most office jobs. Our comprehensive training ensures participants can create documents, manage spreadsheets, prepare presentations, and handle email professionally.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">03</div>
                            <h3>Internet & Email Skills</h3>
                            <p>
                                We teach effective internet usage including web browsing, online search techniques, email communication etiquette, downloading and uploading files, and using various online services. Understanding how to navigate the internet safely and effectively is crucial for modern work and life.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">04</div>
                            <h3>Digital Marketing Training</h3>
                            <p>
                                For those interested in entrepreneurship or marketing careers, we offer training in social media marketing, content creation, SEO basics, Google Ads, Facebook marketing, email marketing, and analytics. These in-demand skills open freelancing and business opportunities.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">05</div>
                            <h3>E-Commerce & Online Business</h3>
                            <p>
                                We teach how to start and manage online businesses using platforms like Amazon, Flipkart, Shopify, and social commerce. Participants learn product listing, inventory management, customer service, digital payments, and order fulfillment – skills that enable independent online entrepreneurship.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">06</div>
                            <h3>Graphic Design Basics</h3>
                            <p>
                                Using free tools like Canva and GIMP, we teach basic graphic design skills for creating social media posts, posters, marketing materials, and visual content. These skills are valuable for both employment and personal business ventures in the digital space.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">07</div>
                            <h3>Cyber Safety & Security</h3>
                            <p>
                                Digital literacy isn't com plete without understanding online safety. We teach password security, recognizing phishing and scams, protecting personal information, safe online shopping, social media privacy, and reporting cyber crimes. Staying safe online is as important as using it effectively.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">08</div>
                            <h3>Digital Payment Systems</h3>
                            <p>
                                Understanding UPI, mobile wallets, online banking, and digital payment platforms is essential in today's cashless economy. We provide hands-on training in using various payment systems safely and effectively for personal and business transactions.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">09</div>
                            <h3>Online Education Platforms</h3>
                            <p>
                                We introduce participants to online learning resources, MOOCs, educational websites, and free skill development platforms. Learning how to learn online opens endless possibilities for continued education and skill upgrading throughout life.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">10</div>
                            <h3>Digital Services & E-Governance</h3>
                            <p>
                                Government services are increasingly online. We help people access Aadhaar, PAN, ration cards, certificates, applications, and other e-governance services independently, reducing dependency on intermediaries and associated costs and delays.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="impact-section">
                <div className="container">
                    <h2 className="section-title text-center">Impact of Digital Skills</h2>
                    <p className="section-subtitle text-center">
                        Digital literacy transforms employment prospects and enables modern participation in economy
                    </p>
                    <div className="impact-list">
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Enhanced Employment Opportunities</h4>
                                <p>Digital skills significantly expand job options, as most modern employment requires at least basic computer competency.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Online Entrepreneurship Growth</h4>
                                <p>Digital skills enable people to start and manage online businesses with minimal capital investment, creating new income streams.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Reduced Cyber Crime Vulnerability</h4>
                                <p>Education about online safety and cyber security helps protect people from fraud, scams, and digital exploitation.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Access to Online Services</h4>
                                <p>Digital literacy enables independent access to banking, government services, healthcare, education, and other essential online services.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Continuous Learning Capability</h4>
                                <p>Once digitally literate, people can continue learning new skills independently through online resources throughout their lives.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Social and Economic Inclusion</h4>
                                <p>Digital skills reduce the digital divide, ensuring marginalized communities can participate fully in the digital economy and society.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Support Digital Empowerment</h2>
                        <p>
                            Help us bridge the digital divide by sponsoring computer training programs, donating equipment, or providing digital literacy trainers. Digital skills can transform lives and communities.
                        </p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn btn-primary btn-large">Get in Touch</a>
                            <a href="/partners" className="btn btn-secondary btn-large">Partner With Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DigitalSkills;

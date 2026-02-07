import { Stethoscope, Target, Heart, Users, Activity, CheckCircle } from 'lucide-react';
import '../Programs/YouthDevelopment.css';

function HealthMedicalCamps() {
    return (
        <div className="program-page">
            <section className="program-header">
                <div className="container">
                    <div className="header-content">
                        <Stethoscope className="header-icon" size={64} />
                        <h1>Health Awareness & Medical Camps</h1>
                        <p className="header-tagline">
                            Bringing healthcare services to underserved communities
                        </p>
                    </div>
                </div>
            </section>

            <section className="program-intro">
                <div className="container">
                    <div className="intro-content">
                        <div className="intro-text">
                            <h2>Healthcare for All</h2>
                            <p>
                                Access to basic healthcare remains a significant challenge for many communities, especially in rural and economically weaker areas. Long distances to health facilities, high medical costs, lack of health insurance, and limited awareness about preventive healthcare create barriers that prevent people from getting timely medical attention. Many health problems go undiagnosed until they become serious, leading to unnecessary suffering and financial burden on families.
                            </p>
                            <p>
                                Aspire Technologies believes that healthcare is a fundamental right, not a privilege determined by economic status. Our Health Awareness & Medical Camps program works to bring basic healthcare services directly to underserved communities, making medical consultation and screening accessible to those who might otherwise never seek professional medical help.
                            </p>
                            <p>
                                Through free medical camps, we provide general health check-ups, specialist consultations, basic diagnostics, medicine distribution, and health education. But beyond treating immediate health issues, we focus heavily on preventive healthcare education – teaching communities about nutrition, hygiene, disease prevention, and healthy lifestyles. An ounce of prevention is worth a pound of cure, and our health awareness programs help people avoid many common health problems through knowledge and healthy practices.
                            </p>
                        </div>
                        <div className="intro-stats">
                            <div className="stat-box">
                                <Target className="stat-icon" />
                                <div className="stat-number">10,000+</div>
                                <div className="stat-label">People Examined</div>
                            </div>
                            <div className="stat-box">
                                <Heart className="stat-icon" />
                                <div className="stat-number">200+</div>
                                <div className="stat-label">Camps Organized</div>
                            </div>
                            <div className="stat-box">
                                <Activity className="stat-icon" />
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Villages Covered</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="activities-section bg-light-green">
                <div className="container">
                    <h2 className="section-title text-center text-green">Our Healthcare Activities</h2>
                    <p className="section-subtitle text-center">
                        Comprehensive health services and awareness programs for community wellbeing
                    </p>
                    <div className="activities-grid">
                        <div className="activity-card">
                            <div className="activity-number">01</div>
                            <h3>General Health Check-up Camps</h3>
                            <p>
                                We organize free general health camps where qualified doctors examine patients, diagnose common ailments, provide prescriptions, and offer health advice. These camps are especially valuable for elderly people, women, and economically weaker families who cannot afford regular medical consultations.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">02</div>
                            <h3>Eye Check-up & Vision Care</h3>
                            <p>
                                Vision problems are common but often go untreated due to lack of access to eye care. Our eye camps provide vision testing, refractive error diagnosis, prescription of spectacles, and identification of serious eye conditions requiring specialized treatment. We partner with eye hospitals for surgeries when needed.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">03</div>
                            <h3>Dental Health Camps</h3>
                            <p>
                                Dental health is frequently neglected, especially in rural areas. We conduct dental camps offering check-ups, oral health education, basic treatments, and referrals for complex dental issues. Teaching proper dental hygiene practices can prevent most common dental problems.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">04</div>
                            <h3>Blood Pressure & Diabetes Screening</h3>
                            <p>
                                Hypertension and diabetes are silent killers often undiagnosed until complications arise. Our regular screening camps test blood pressure and blood sugar levels, identify at-risk individuals, provide lifestyle counseling, and ensure timely medical intervention for those with concerning results.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">05</div>
                            <h3>Women's Health Programs</h3>
                            <p>
                                We conduct special health camps focusing on women's health issues including reproductive health, maternal health, anemia screening, breast examination awareness, cervical cancer screening information, and menopause health. Creating women-friendly healthcare environments encourages women to seek necessary medical care.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">06</div>
                            <h3>Child Health & Nutrition</h3>
                            <p>
                                Children's health determines their entire life trajectory. We provide pediatric consultations, growth monitoring, nutritional assessment, deworming, vitamin supplementation, and parental education about child nutrition, common childhood illnesses, and developmental milestones.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">07</div>
                            <h3>Hygiene & Sanitation Awareness</h3>
                            <p>
                                Many diseases are preventable through proper hygiene and sanitation practices. We educate communities about handwashing, safe drinking water, toilet usage, food hygiene, waste disposal, and personal cleanliness. Behavioral change in hygiene practices significantly reduces disease burden.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">08</div>
                            <h3>Nutrition & Balanced Diet Education</h3>
                            <p>
                                Malnutrition and poor dietary habits contribute to numerous health problems. Our nutrition education programs teach about balanced diets, locally available nutritious foods, food preparation methods that preserve nutrients, dietary needs for different age groups, and managing common nutritional deficiencies.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">09</div>
                            <h3>Communicable Disease Awareness</h3>
                            <p>
                                We create awareness about prevention and control of communicable diseases like tuberculosis, malaria, dengue, COVID-19, and other infectious diseases. Education about symptoms, transmission routes, prevention methods, and treatment seeking helps control disease spread.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">10</div>
                            <h3>Medical Referral Support</h3>
                            <p>
                                When our camps identify serious health conditions requiring specialized treatment, we provide guidance and referrals to appropriate hospitals and specialists. We maintain networks with healthcare institutions for follow-up care and sometimes assist with connecting patients to government health schemes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="impact-section">
                <div className="container">
                    <h2 className="section-title text-center">Health Impact in Communities</h2>
                    <p className="section-subtitle text-center">
                        Accessible healthcare creates healthier, more productive communities
                    </p>
                    <div className="impact-list">
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Early Disease Detection</h4>
                                <p>Medical camps identify health problems in early stages when treatment is more effective and less costly.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Reduced Healthcare Costs</h4>
                                <p>Free basic healthcare and preventive care reduce the financial burden of medical expenses on poor families.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Improved Health Awareness</h4>
                                <p>Health education empowers communities with knowledge to make better health decisions and adopt healthier lifestyles.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Better Maternal & Child Health</h4>
                                <p>Focused programs on women's and children's health improve nutrition, reduce maternal mortality, and ensure better child development.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Community Health Culture</h4>
                                <p>Regular health camps and awareness programs create a culture where health is prioritized and medical help-seeking becomes normalized.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Reduced Disease Burden</h4>
                                <p>Preventive care and early treatment reduce the overall burden of disease, creating healthier and more productive communities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Support Community Healthcare</h2>
                        <p>
                            Help us organize medical camps and bring healthcare to underserved communities. Medical professionals can volunteer their services, organizations can sponsor camps, and supporters can help with logistics and outreach.
                        </p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn btn-primary btn-large">Contact Us</a>
                            <a href="/partners" className="btn btn-secondary btn-large">Support Health Programs</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HealthMedicalCamps;

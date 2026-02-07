import { PawPrint, Target, Shield, Heart, Users, CheckCircle } from 'lucide-react';
import '../Programs/YouthDevelopment.css';

function AnimalWelfare() {
    return (
        <div className="program-page">
            <section className="program-header">
                <div className="container">
                    <div className="header-content">
                        <PawPrint className="header-icon" size={64} />
                        <h1>Animal Welfare Awareness & Programs</h1>
                        <p className="header-tagline">
                            Promoting compassion and responsible care for animals in communities
                        </p>
                    </div>
                </div>
            </section>

            <section className="program-intro">
                <div className="container">
                    <div className="intro-content">
                        <div className="intro-text">
                            <h2>Compassion for All Living Beings</h2>
                            <p>
                                A truly compassionate society extends its care beyond human beings to include animals who share our communities and ecosystems. Unfortunately, street animals often face neglect, abuse, and health problems, while zoonotic diseases like rabies pose serious public health risks. The relationship between humans and animals – whether pets, street animals, or working animals – significantly impacts both animal welfare and community safety.
                            </p>
                            <p>
                                Aspire Technologies believes that animal welfare is both an ethical imperative and a public health necessity. Our Animal Welfare program works to promote humane treatment of animals, create awareness about animal protection laws, support vaccination programs to prevent rabies and other zoonotic diseases, and foster coexistence between humans and animals in our communities.
                            </p>
                            <p>
                                Through partnerships with veterinary professionals and animal welfare organizations, we organize animal vaccination camps, create awareness about responsible pet ownership, promote animal sterilization to control stray populations humanely, educate communities about zoonotic disease prevention, and advocate for compassionate treatment of all animals. A community's character is reflected in how it treats its most vulnerable members – including animals who cannot speak for themselves.
                            </p>
                        </div>
                        <div className="intro-stats">
                            <div className="stat-box">
                                <Target className="stat-icon" />
                                <div className="stat-number">5,000+</div>
                                <div className="stat-label">Animals Vaccinated</div>
                            </div>
                            <div className="stat-box">
                                <Shield className="stat-icon" />
                                <div className="stat-number">100+</div>
                                <div className="stat-label">Vaccination Camps</div>
                            </div>
                            <div className="stat-box">
                                <Heart className="stat-icon" />
                                <div className="stat-number">40+</div>
                                <div className="stat-label">Communities Served</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="activities-section bg-light-green">
                <div className="container">
                    <h2 className="section-title text-center text-green">Our Animal Welfare Activities</h2>
                    <p className="section-subtitle text-center">
                        Creating safer communities through animal care, vaccination, and awareness
                    </p>
                    <div className="activities-grid">
                        <div className="activity-card">
                            <div className="activity-number">01</div>
                            <h3>Anti-Rabies Vaccination Camps</h3>
                            <p>
                                Rabies is almost always fatal once symptoms appear but completely preventable through vaccination. We organize free anti-rabies vaccination camps for dogs and cats in collaboration with veterinary doctors, protecting both animals and humans from this deadly disease. Mass vaccination creates safer communities.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">02</div>
                            <h3>Rabies Awareness & Prevention</h3>
                            <p>
                                We educate communities about rabies transmission, symptoms, prevention methods, the importance of vaccination, what to do after animal bites, and the critical need for immediate post-exposure treatment. Awareness saves lives by ensuring people take animal bites seriously and seek prompt medical care.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">03</div>
                            <h3>Zoonotic Disease Education</h3>
                            <p>
                                Beyond rabies, several diseases can spread from animals to humans. We create awareness about leptospirosis, toxoplasmosis, ringworm, and other zoonotic infections, teaching prevention strategies, signs of animal illness, when to consult veterinarians, and proper hygiene when handling animals.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">04</div>
                            <h3>Animal Sterilization Awareness</h3>
                            <p>
                                Uncontrolled breeding of street animals leads to overpopulation, suffering, and human-animal conflict. We create awareness about ABC (Animal Birth Control) programs, the benefits of sterilization, and support government and NGO sterilization drives. Humane population control reduces suffering while maintaining ecological balance.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">05</div>
                            <h3>Responsible Pet Ownership</h3>
                            <p>
                                We educate pet owners about their responsibilities including proper feeding, shelter, veterinary care, vaccination, sterilization, training, and humane treatment. Responsible ownership prevents pet abandonment, reduces street animal populations, and ensures pets live healthy, happy lives with their families.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">06</div>
                            <h3>Community Feeding Programs</h3>
                            <p>
                                Street animals often struggle to find food and water, especially during harsh weather. We support and organize community feeding initiatives where volunteers provide food and water to street animals in humane, systematic ways that don't create public nuisance while ensuring animals don't starve.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">07</div>
                            <h3>Animal Protection Laws Awareness</h3>
                            <p>
                                Many people are unaware that animal cruelty is a punishable offense under law. We educate communities about animal protection laws, what constitutes cruelty, reporting mechanisms for animal abuse, and legal protections for animals. Legal awareness creates accountability and reduces cruelty.
                            </p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-number">08</div>
                            <h3>Emergency Animal Rescue Support</h3>
                            <p>
                                When community members find injured, sick, or distressed animals, they often don't know where to turn. We maintain networks with veterinary clinics and animal rescue organizations, helping coordinate rescue and treatment for animals in emergency situations and educating communities about available resources.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="impact-section">
                <div className="container">
                    <h2 className="section-title text-center">Impact of Animal Welfare Programs</h2>
                    <p className="section-subtitle text-center">
                        Compassionate animal care creates safer, healthier, more humane communities
                    </p>
                    <div className="impact-list">
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Reduced Rabies Risk</h4>
                                <p>Mass vaccination of dogs dramatically reduces rabies transmission, protecting both animals and humans from this fatal disease.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Improved Public Safety</h4>
                                <p>Vaccinated, sterilized, and healthier street animal populations reduce aggressive behavior and human-animal conflicts.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Controlled Animal Populations</h4>
                                <p>Sterilization programs humanely control street animal populations without cruel culling methods, achieving sustainable management.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Reduced Animal Suffering</h4>
                                <p>Medical care, feeding programs, and humane treatment reduce suffering among street animals who have no other source of care.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Increased Community Compassion</h4>
                                <p>Animal welfare awareness cultivates empathy and compassion that extends beyond animals to create more caring communities overall.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <CheckCircle className="impact-icon" />
                            <div className="impact-text">
                                <h4>Better Human-Animal Coexistence</h4>
                                <p>Education and responsible practices foster peaceful coexistence where humans and animals can share community spaces safely.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Support Animal Welfare</h2>
                        <p>
                            Help us create compassionate communities where animals are treated humanely. Support vaccination camps, sponsor  sterilization programs, volunteer for rescue efforts, or  help us spread awareness about animal welfare in your area.
                        </p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn btn-primary btn-large">Contact Us</a>
                            <a href="/partners" className="btn btn-secondary btn-large">Get Involved</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AnimalWelfare;

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Empowering Communities Through <span className="highlight">Holistic Development</span>
                        </h1>
                        <p className="hero-description">
                            Aspire Technologies is dedicated to building an inclusive, progressive, and healthy society through innovative programs in youth development, women empowerment, sports, digital literacy, mental health awareness, healthcare, and community welfare initiatives.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/about" className="btn btn-primary btn-large">
                                Learn More <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-large">
                                Get Involved
                            </Link>
                        </div>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-number">8</div>
                                <div className="stat-label">Program Areas</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">1000+</div>
                                <div className="stat-label">Lives Impacted</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Communities Served</div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="image-placeholder">
                            <div className="placeholder-text">Community Empowerment</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

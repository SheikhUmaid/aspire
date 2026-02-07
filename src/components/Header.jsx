import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProgramsOpen, setIsProgramsOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsProgramsOpen(false);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo" onClick={closeMobileMenu}>
                        <div className="logo-icon">AT</div>
                        <div className="logo-text">
                            <span className="logo-title">Aspire Technologies</span>
                            <span className="logo-tagline">Empowering Communities</span>
                        </div>
                    </Link>

                    <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                        <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
                        <Link to="/about" className="nav-link" onClick={closeMobileMenu}>About</Link>

                        <div className="dropdown">
                            <button
                                className="nav-link dropdown-toggle"
                                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                            >
                                Our Programs <ChevronDown size={16} />
                            </button>
                            <div className={`dropdown-menu ${isProgramsOpen ? 'dropdown-open' : ''}`}>
                                <Link to="/programs/youth-development" className="dropdown-item" onClick={closeMobileMenu}>
                                    Youth Development & Empowerment
                                </Link>
                                <Link to="/programs/women-empowerment" className="dropdown-item" onClick={closeMobileMenu}>
                                    Women Empowerment & Livelihood
                                </Link>
                                <Link to="/programs/sports-promotion" className="dropdown-item" onClick={closeMobileMenu}>
                                    Sports Promotion & Youth Fitness
                                </Link>
                                <Link to="/programs/digital-skills" className="dropdown-item" onClick={closeMobileMenu}>
                                    Digital Technologies & Skill Development
                                </Link>
                                <Link to="/programs/mental-health" className="dropdown-item" onClick={closeMobileMenu}>
                                    Mental Health Awareness
                                </Link>
                                <Link to="/programs/health-medical-camps" className="dropdown-item" onClick={closeMobileMenu}>
                                    Health Awareness & Medical Camps
                                </Link>
                                <Link to="/programs/vaccination-programs" className="dropdown-item" onClick={closeMobileMenu}>
                                    Vaccination Awareness Programs
                                </Link>
                                <Link to="/programs/animal-welfare" className="dropdown-item" onClick={closeMobileMenu}>
                                    Animal Welfare Programs
                                </Link>
                            </div>
                        </div>

                        <Link to="/community-awareness" className="nav-link" onClick={closeMobileMenu}>Community Awareness</Link>
                        <Link to="/approach" className="nav-link" onClick={closeMobileMenu}>Our Approach</Link>
                        <Link to="/partners" className="nav-link" onClick={closeMobileMenu}>Partners</Link>
                        <Link to="/impact" className="nav-link" onClick={closeMobileMenu}>Impact</Link>
                        <Link to="/contact" className="nav-link nav-link-cta" onClick={closeMobileMenu}>Contact Us</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;

import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* About Section */}
                    <div className="footer-section">
                        <h3 className="footer-heading">Aspire Technologies</h3>
                        <p className="footer-text">
                            A socially committed organization working for holistic community empowerment through youth development, women empowerment, sports, digital skills, healthcare, and community welfare programs.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/approach">Our Approach</Link></li>
                            <li><Link to="/partners">Partners</Link></li>
                            <li><Link to="/impact">Impact & Outcomes</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div className="footer-section">
                        <h4 className="footer-heading">Our Programs</h4>
                        <ul className="footer-links">
                            <li><Link to="/programs/youth-development">Youth Development</Link></li>
                            <li><Link to="/programs/women-empowerment">Women Empowerment</Link></li>
                            <li><Link to="/programs/sports-promotion">Sports Promotion</Link></li>
                            <li><Link to="/programs/digital-skills">Digital Skills</Link></li>
                            <li><Link to="/programs/mental-health">Mental Health</Link></li>
                            <li><Link to="/programs/health-medical-camps">Medical Camps</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4 className="footer-heading">Contact Us</h4>
                        <ul className="footer-contact">
                            <li>
                                <MapPin size={18} />
                                <span>123 Community Center Road<br />City, State - 123456</span>
                            </li>
                            <li>
                                <Phone size={18} />
                                <span>+91 1234567890</span>
                            </li>
                            <li>
                                <Mail size={18} />
                                <span>info@aspiretechnologies.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Aspire Technologies. All rights reserved.</p>
                    <p className="footer-credit">Empowering Communities | Building Futures</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

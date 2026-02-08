import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--green-primary)] text-white mt-20 py-12">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* About Section */}
                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[var(--accent-gold)]">
                            Aspire Technologies
                        </h3>
                        <p className="text-white/85 leading-relaxed mb-4 text-[0.95rem]">
                            A socially committed organization working for holistic community empowerment through youth development, women empowerment, sports, digital skills, healthcare, and community welfare programs.
                        </p>
                        <div className="flex gap-3 mt-2">
                            <a href="#" className="w-9 h-9 flex items-center justify-center bg-white/10 rounded text-white transition-all hover:bg-[var(--accent-gold)] hover:-translate-y-1" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-9 h-9 flex items-center justify-center bg-white/10 rounded text-white transition-all hover:bg-[var(--accent-gold)] hover:-translate-y-1" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-9 h-9 flex items-center justify-center bg-white/10 rounded text-white transition-all hover:bg-[var(--accent-gold)] hover:-translate-y-1" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-9 h-9 flex items-center justify-center bg-white/10 rounded text-white transition-all hover:bg-[var(--accent-gold)] hover:-translate-y-1" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col">
                        <h4 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[var(--accent-gold)]">
                            Quick Links
                        </h4>
                        <ul className="list-none p-0 m-0">
                            <li className="mb-2.5"><Link to="/" className="text-white/85 no-underline text-[0.95rem] transition-all inline-block hover:text-white hover:pl-2">Home</Link></li>
                            <li className="mb-2.5"><Link to="/about" className="text-white/85 no-underline text-[0.95rem] transition-all inline-block hover:text-white hover:pl-2">About Us</Link></li>
                            <li className="mb-2.5"><Link to="/approach" className="text-white/85 no-underline text-[0.95rem] transition-all inline-block hover:text-white hover:pl-2">Our Approach</Link></li>
                            <li className="mb-2.5"><Link to="/partners" className="text-white/85 no-underline text-[0.95rem] transition-all inline-block hover:text-white hover:pl-2">Partners</Link></li>
                            <li className="mb-2.5"><Link to="/impact" className="text-white/85 no-underline text-[0.95rem] transition-all inline-block hover:text-white hover:pl-2">Impact & Outcomes</Link></li>
                            <li className="mb-2.5"><Link to="/contact" className="text-white/85 no-underline text-[0.95rem] transition-all inline-block hover:text-white hover:pl-2">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div className="flex flex-col">
                        <h4 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[var(--accent-gold)]">
                            Our Programs
                        </h4>
                        <ul className="list-none p-0 m-0">
                            <li className="mb-2.5"><Link to="/programs/youth-development" className="text-white/85 no-underline text-[0.95rem] transition-all inline-block hover:text-white hover:pl-2">Youth Development</Link></li>
                            <li className="mb-2.5"><Link to="/programs/women-empowerment" className="text-white/85 no-underline text-[0.95rem] transition-all inline-block hover:text-white hover:pl-2">Women Empowerment</Link></li>
                            <li className="mb-2.5"><Link to="/programs/sports-promotion" className="text-white/85 no-underline text-[0.95rem] transition-all inline-block hover:text-white hover:pl-2">Sports Promotion</Link></li>
                            <li className="mb-2.5"><Link to="/programs/digital-skills" className="text-white/85 no-underline text-[0.95rem] transition-all inline-block hover:text-white hover:pl-2">Digital Skills</Link></li>
                            <li className="mb-2.5"><Link to="/programs/mental-health" className="text-white/85 no-underline text-[0.95rem] transition-all inline-block hover:text-white hover:pl-2">Mental Health</Link></li>
                            <li className="mb-2.5"><Link to="/programs/health-medical-camps" className="text-white/85 no-underline text-[0.95rem] transition-all inline-block hover:text-white hover:pl-2">Medical Camps</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col">
                        <h4 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[var(--accent-gold)]">
                            Contact Us
                        </h4>
                        <ul className="list-none p-0 m-0">
                            <li className="flex items-start gap-3 mb-4 text-white/85 text-[0.95rem] leading-relaxed">
                                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                                <span>123 Community Center Road<br />City, State - 123456</span>
                            </li>
                            <li className="flex items-start gap-3 mb-4 text-white/85 text-[0.95rem] leading-relaxed">
                                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                                <span>+91 1234567890</span>
                            </li>
                            <li className="flex items-start gap-3 mb-4 text-white/85 text-[0.95rem] leading-relaxed">
                                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                                <span>info@aspiretechnologies.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-6 text-center">
                    <p className="text-white/85 text-sm mb-1">&copy; {currentYear} Aspire Technologies. All rights reserved.</p>
                    <p className="font-medium text-[var(--accent-gold)] text-sm">Empowering Communities | Building Futures</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

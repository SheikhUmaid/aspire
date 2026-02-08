import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

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
        <header className="sticky top-0 z-[1000] bg-white/95 backdrop-blur-sm border-b border-[var(--green-muted)]/20">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex justify-between items-center py-3 h-20 md:h-[70px]">
                    <Link to="/" className="flex items-center gap-3 no-underline group" onClick={closeMobileMenu}>
                        <div className="w-[42px] h-[42px] bg-[var(--green-primary)] text-white flex items-center justify-center font-extrabold text-lg rounded-lg shadow-sm transition-transform group-hover:scale-105 group-hover:-rotate-2">
                            AT
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[1.35rem] font-extrabold text-[var(--green-primary)] leading-tight tracking-tight">
                                Aspire Technologies
                            </span>
                            <span className="text-[0.7rem] text-[var(--text-dark)]/60 font-medium uppercase tracking-wider">
                                Empowering Communities
                            </span>
                        </div>
                    </Link>

                    <button 
                        className="md:block lg:hidden bg-transparent border-none text-[var(--green-primary)] cursor-pointer p-2 transition-transform active:scale-95" 
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <Link 
                            to="/" 
                            className="text-[var(--text-dark)] no-underline font-semibold text-[0.95rem] py-2 relative inline-flex items-center gap-1 transition-colors hover:text-[var(--green-primary)] after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[var(--green-primary)] after:transition-all hover:after:w-full" 
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/about" 
                            className="text-[var(--text-dark)] no-underline font-semibold text-[0.95rem] py-2 relative inline-flex items-center gap-1 transition-colors hover:text-[var(--green-primary)] after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[var(--green-primary)] after:transition-all hover:after:w-full" 
                            onClick={closeMobileMenu}
                        >
                            About
                        </Link>

                        <div className="relative group">
                            <button
                                className="text-[var(--text-dark)] no-underline font-semibold text-[0.95rem] py-2 relative inline-flex items-center gap-1 transition-colors hover:text-[var(--green-primary)] bg-transparent border-none cursor-pointer font-inherit after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[var(--green-primary)] after:transition-all hover:after:w-full"
                                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                            >
                                Our Programs <ChevronDown size={16} />
                            </button>
                            <div className={`absolute top-full left-1/2 -translate-x-1/2 translate-y-2.5 bg-white shadow-xl rounded-xl min-w-[600px] p-4 z-[100] grid grid-cols-2 gap-2 border border-black/5 before:content-[''] before:absolute before:-top-1.5 before:left-1/2 before:-translate-x-1/2 before:rotate-45 before:w-3 before:h-3 before:bg-white before:border-l before:border-t before:border-black/5 transition-all ${isProgramsOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible translate-y-2.5 scale-95'}`}>
                                <Link to="/programs/youth-development" className="flex items-center px-4 py-3 text-[var(--text-dark)] no-underline font-medium text-[0.9rem] rounded-lg transition-all leading-snug hover:bg-[var(--green-muted)]/10 hover:text-[var(--green-primary)] hover:translate-x-1" onClick={closeMobileMenu}>
                                    Youth Development & Empowerment
                                </Link>
                                <Link to="/programs/women-empowerment" className="flex items-center px-4 py-3 text-[var(--text-dark)] no-underline font-medium text-[0.9rem] rounded-lg transition-all leading-snug hover:bg-[var(--green-muted)]/10 hover:text-[var(--green-primary)] hover:translate-x-1" onClick={closeMobileMenu}>
                                    Women Empowerment & Livelihood
                                </Link>
                                <Link to="/programs/sports-promotion" className="flex items-center px-4 py-3 text-[var(--text-dark)] no-underline font-medium text-[0.9rem] rounded-lg transition-all leading-snug hover:bg-[var(--green-muted)]/10 hover:text-[var(--green-primary)] hover:translate-x-1" onClick={closeMobileMenu}>
                                    Sports Promotion & Youth Fitness
                                </Link>
                                <Link to="/programs/digital-skills" className="flex items-center px-4 py-3 text-[var(--text-dark)] no-underline font-medium text-[0.9rem] rounded-lg transition-all leading-snug hover:bg-[var(--green-muted)]/10 hover:text-[var(--green-primary)] hover:translate-x-1" onClick={closeMobileMenu}>
                                    Digital Technologies & Skill Development
                                </Link>
                                <Link to="/programs/mental-health" className="flex items-center px-4 py-3 text-[var(--text-dark)] no-underline font-medium text-[0.9rem] rounded-lg transition-all leading-snug hover:bg-[var(--green-muted)]/10 hover:text-[var(--green-primary)] hover:translate-x-1" onClick={closeMobileMenu}>
                                    Mental Health Awareness
                                </Link>
                                <Link to="/programs/health-medical-camps" className="flex items-center px-4 py-3 text-[var(--text-dark)] no-underline font-medium text-[0.9rem] rounded-lg transition-all leading-snug hover:bg-[var(--green-muted)]/10 hover:text-[var(--green-primary)] hover:translate-x-1" onClick={closeMobileMenu}>
                                    Health Awareness & Medical Camps
                                </Link>
                                <Link to="/programs/vaccination-programs" className="flex items-center px-4 py-3 text-[var(--text-dark)] no-underline font-medium text-[0.9rem] rounded-lg transition-all leading-snug hover:bg-[var(--green-muted)]/10 hover:text-[var(--green-primary)] hover:translate-x-1" onClick={closeMobileMenu}>
                                    Vaccination Awareness Programs
                                </Link>
                                <Link to="/programs/animal-welfare" className="flex items-center px-4 py-3 text-[var(--text-dark)] no-underline font-medium text-[0.9rem] rounded-lg transition-all leading-snug hover:bg-[var(--green-muted)]/10 hover:text-[var(--green-primary)] hover:translate-x-1" onClick={closeMobileMenu}>
                                    Animal Welfare Programs
                                </Link>
                            </div>
                        </div>

                        <Link 
                            to="/community-awareness" 
                            className="text-[var(--text-dark)] no-underline font-semibold text-[0.95rem] py-2 relative inline-flex items-center gap-1 transition-colors hover:text-[var(--green-primary)] after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[var(--green-primary)] after:transition-all hover:after:w-full" 
                            onClick={closeMobileMenu}
                        >
                            Community Awareness
                        </Link>
                        <Link 
                            to="/approach" 
                            className="text-[var(--text-dark)] no-underline font-semibold text-[0.95rem] py-2 relative inline-flex items-center gap-1 transition-colors hover:text-[var(--green-primary)] after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[var(--green-primary)] after:transition-all hover:after:w-full" 
                            onClick={closeMobileMenu}
                        >
                            Our Approach
                        </Link>
                        <Link 
                            to="/partners" 
                            className="text-[var(--text-dark)] no-underline font-semibold text-[0.95rem] py-2 relative inline-flex items-center gap-1 transition-colors hover:text-[var(--green-primary)] after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[var(--green-primary)] after:transition-all hover:after:w-full" 
                            onClick={closeMobileMenu}
                        >
                            Partners
                        </Link>
                        <Link 
                            to="/impact" 
                            className="text-[var(--text-dark)] no-underline font-semibold text-[0.95rem] py-2 relative inline-flex items-center gap-1 transition-colors hover:text-[var(--green-primary)] after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[var(--green-primary)] after:transition-all hover:after:w-full" 
                            onClick={closeMobileMenu}
                        >
                            Impact
                        </Link>
                        <Link 
                            to="/contact" 
                            className="bg-[var(--green-primary)] text-white px-6 py-2.5 rounded-full shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg no-underline font-semibold text-[0.95rem] inline-flex items-center gap-1" 
                            onClick={closeMobileMenu}
                        >
                            Contact Us
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <nav className="lg:hidden fixed top-[70px] left-0 right-0 bg-white flex-col items-stretch p-4 shadow-lg max-h-[90vh] overflow-y-auto border-t border-[var(--green-muted)]/20">
                    <Link 
                        to="/" 
                        className="text-[var(--text-dark)] no-underline font-semibold text-base py-4 px-4 border-b border-[var(--green-muted)]/20 w-full block" 
                        onClick={closeMobileMenu}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/about" 
                        className="text-[var(--text-dark)] no-underline font-semibold text-base py-4 px-4 border-b border-[var(--green-muted)]/20 w-full block" 
                        onClick={closeMobileMenu}
                    >
                        About
                    </Link>

                    <div className="py-0">
                        <button
                            className="text-[var(--text-dark)] no-underline font-semibold text-base w-full justify-between py-4 px-4 border-b border-[var(--green-muted)]/20 bg-transparent border-x-0 border-t-0 cursor-pointer font-inherit flex items-center"
                            onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                        >
                            Our Programs <ChevronDown size={16} />
                        </button>
                        <div className={`overflow-hidden transition-all ${isProgramsOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-0 pl-4 bg-[#fafafa] flex flex-col">
                                <Link to="/programs/youth-development" className="flex items-center py-3 px-4 text-[var(--text-dark)] no-underline font-medium text-sm border-l-2 border-transparent hover:border-[var(--green-primary)] transition-all" onClick={closeMobileMenu}>
                                    Youth Development & Empowerment
                                </Link>
                                <Link to="/programs/women-empowerment" className="flex items-center py-3 px-4 text-[var(--text-dark)] no-underline font-medium text-sm border-l-2 border-transparent hover:border-[var(--green-primary)] transition-all" onClick={closeMobileMenu}>
                                    Women Empowerment & Livelihood
                                </Link>
                                <Link to="/programs/sports-promotion" className="flex items-center py-3 px-4 text-[var(--text-dark)] no-underline font-medium text-sm border-l-2 border-transparent hover:border-[var(--green-primary)] transition-all" onClick={closeMobileMenu}>
                                    Sports Promotion & Youth Fitness
                                </Link>
                                <Link to="/programs/digital-skills" className="flex items-center py-3 px-4 text-[var(--text-dark)] no-underline font-medium text-sm border-l-2 border-transparent hover:border-[var(--green-primary)] transition-all" onClick={closeMobileMenu}>
                                    Digital Technologies & Skill Development
                                </Link>
                                <Link to="/programs/mental-health" className="flex items-center py-3 px-4 text-[var(--text-dark)] no-underline font-medium text-sm border-l-2 border-transparent hover:border-[var(--green-primary)] transition-all" onClick={closeMobileMenu}>
                                    Mental Health Awareness
                                </Link>
                                <Link to="/programs/health-medical-camps" className="flex items-center py-3 px-4 text-[var(--text-dark)] no-underline font-medium text-sm border-l-2 border-transparent hover:border-[var(--green-primary)] transition-all" onClick={closeMobileMenu}>
                                    Health Awareness & Medical Camps
                                </Link>
                                <Link to="/programs/vaccination-programs" className="flex items-center py-3 px-4 text-[var(--text-dark)] no-underline font-medium text-sm border-l-2 border-transparent hover:border-[var(--green-primary)] transition-all" onClick={closeMobileMenu}>
                                    Vaccination Awareness Programs
                                </Link>
                                <Link to="/programs/animal-welfare" className="flex items-center py-3 px-4 text-[var(--text-dark)] no-underline font-medium text-sm border-l-2 border-transparent hover:border-[var(--green-primary)] transition-all" onClick={closeMobileMenu}>
                                    Animal Welfare Programs
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link 
                        to="/community-awareness" 
                        className="text-[var(--text-dark)] no-underline font-semibold text-base py-4 px-4 border-b border-[var(--green-muted)]/20 w-full block" 
                        onClick={closeMobileMenu}
                    >
                        Community Awareness
                    </Link>
                    <Link 
                        to="/approach" 
                        className="text-[var(--text-dark)] no-underline font-semibold text-base py-4 px-4 border-b border-[var(--green-muted)]/20 w-full block" 
                        onClick={closeMobileMenu}
                    >
                        Our Approach
                    </Link>
                    <Link 
                        to="/partners" 
                        className="text-[var(--text-dark)] no-underline font-semibold text-base py-4 px-4 border-b border-[var(--green-muted)]/20 w-full block" 
                        onClick={closeMobileMenu}
                    >
                        Partners
                    </Link>
                    <Link 
                        to="/impact" 
                        className="text-[var(--text-dark)] no-underline font-semibold text-base py-4 px-4 border-b border-[var(--green-muted)]/20 w-full block" 
                        onClick={closeMobileMenu}
                    >
                        Impact
                    </Link>
                    <Link 
                        to="/contact" 
                        className="bg-[var(--green-primary)] text-white px-6 py-3 rounded-full shadow-md my-6 mx-4 text-center justify-center no-underline font-semibold text-base inline-flex items-center w-auto" 
                        onClick={closeMobileMenu}
                    >
                        Contact Us
                    </Link>
                </nav>
            )}
        </header>
    );
}

export default Header;

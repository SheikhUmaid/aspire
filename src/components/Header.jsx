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

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3 no-underline group"
            onClick={closeMobileMenu}
          >
            <div className="w-[42px] h-[42px] rounded-lg overflow-hidden shadow-sm transition-transform group-hover:scale-105 group-hover:-rotate-2">
              <img
                src="/logo.jpeg"
                alt="Aspire Technologies Logo"
                className="w-full h-full object-cover "
              />
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

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:block lg:hidden bg-transparent border-none text-[var(--green-primary)] cursor-pointer p-2 transition-transform active:scale-95"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={closeMobileMenu}
                className="text-[var(--text-dark)] font-semibold text-[0.95rem] py-2 relative hover:text-[var(--green-primary)] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[var(--green-primary)] after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}

            {/* PROGRAMS DROPDOWN */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-[var(--text-dark)] font-semibold text-[0.95rem] py-2 hover:text-[var(--green-primary)]"
                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
              >
                Our Programs <ChevronDown size={16} />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white shadow-xl rounded-xl min-w-[600px] p-4 grid grid-cols-2 gap-2 border border-black/5 transition-all ${
                  isProgramsOpen
                    ? 'opacity-100 visible scale-100'
                    : 'opacity-0 invisible scale-95'
                }`}
              >
                {[
                  ['Youth Development & Empowerment', '/programs/youth-development'],
                  ['Women Empowerment & Livelihood', '/programs/women-empowerment'],
                  ['Sports Promotion & Youth Fitness', '/programs/sports-promotion'],
                  ['Digital Technologies & Skill Development', '/programs/digital-skills'],
                  ['Mental Health Awareness', '/programs/mental-health'],
                  ['Health Awareness & Medical Camps', '/programs/health-medical-camps'],
                  ['Vaccination Awareness Programs', '/programs/vaccination-programs'],
                  ['Animal Welfare Programs', '/programs/animal-welfare'],
                ].map(([label, path]) => (
                  <Link
                    key={label}
                    to={path}
                    onClick={closeMobileMenu}
                    className="px-4 py-3 rounded-lg text-[0.9rem] text-[var(--text-dark)] hover:bg-[var(--green-muted)]/10 hover:text-[var(--green-primary)] transition"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {[
              { to: '/community-awareness', label: 'Community Awareness' },
              { to: '/approach', label: 'Our Approach' },
              { to: '/partners', label: 'Partners' },
              { to: '/impact', label: 'Impact' },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={closeMobileMenu}
                className="text-[var(--text-dark)] font-semibold text-[0.95rem] py-2 hover:text-[var(--green-primary)]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="bg-[var(--green-primary)] text-white px-6 py-2.5 rounded-full shadow-md hover:-translate-y-0.5 hover:shadow-lg transition font-semibold text-[0.95rem]"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>

      {/* MOBILE NAV */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden fixed top-[70px] inset-x-0 bg-white shadow-lg border-t border-[var(--green-muted)]/20 max-h-[90vh] overflow-y-auto">
          <div className="flex flex-col">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Community Awareness', '/community-awareness'],
              ['Our Approach', '/approach'],
              ['Partners', '/partners'],
              ['Impact', '/impact'],
            ].map(([label, path]) => (
              <Link
                key={label}
                to={path}
                onClick={closeMobileMenu}
                className="px-6 py-4 border-b text-[var(--text-dark)] font-semibold"
              >
                {label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="m-6 bg-[var(--green-primary)] text-white py-3 rounded-full text-center font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;

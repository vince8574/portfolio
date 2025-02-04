import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      } bg-[#1C2321] text-[#F9F9F9]`}
    >
      <nav className="h-fit justify-between w-full">
        {/* Bouton Burger Menu (Mobile) */}
        <div className="flex justify-between items-center px-4 lg:hidden">
          <Link to="/" title="Accueil" className="font-poppins font-bold text-lg">
            Vincent Gaillard
          </Link>
          <button
            onClick={toggleMenu}
            className="p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Menu principal */}
        <ul
          className={`lg:flex lg:gap-4 lg:justify-center lg:items-center ${
            isMenuOpen ? "block" : "hidden"
          } lg:block absolute top-full left-0 w-full lg:static bg-[#1C2321] lg:bg-transparent`}
        >
          <li><Link to="/" className="block font-poppins font-bold text-lg md:text-xl lg:text-2xl py-2 px-4 hover:bg-[#2a3432]" onClick={closeMenu}>Accueil</Link></li>
          <li><Link to="/#competences" className="block font-poppins font-bold text-lg md:text-xl lg:text-2xl py-2 px-4 hover:bg-[#2a3432]" onClick={closeMenu}>Compétences</Link></li>
          <li><Link to="/#portfolio" className="block font-poppins font-bold text-lg md:text-xl lg:text-2xl py-2 px-4 hover:bg-[#2a3432]" onClick={closeMenu}>Portfolio</Link></li>
          <li><Link to="/#experience" className="block font-poppins font-bold text-lg md:text-xl lg:text-2xl py-2 px-4 hover:bg-[#2a3432]" onClick={closeMenu}>Mon expérience</Link></li>
          <li><Link to="/contact" className="block font-poppins font-bold text-lg md:text-xl lg:text-2xl py-2 px-4 hover:bg-[#2a3432]" onClick={closeMenu}>Contact</Link></li>
          <li>
            <a
              className="flex flex-row font-poppins font-bold text-lg md:text-xl lg:text-2xl py-2 px-4 hover:bg-[#2a3432] items-center"
              href="./src/assets/pdf/Gaillard cv full stack.pdf"
              download="cv_vincent_gaillard"
              title="CV"
              onClick={closeMenu}
            >
              CV <img className="w-6 h-6 ml-2" src="./src/assets/svg/download.svg" alt="Télécharger le CV" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

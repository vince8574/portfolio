import { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "./LanguageContext";
import download from "../assets/svg/download.svg";
import cvFR from "../assets/pdf/cv_fr.pdf";
import cvEN from "../assets/pdf/cv_en.pdf";

// Dictionnaire de traduction pour le header
const translations = {
  en: {
    home: "Home",
    skills: "Skills",
    portfolio: "Portfolio",
    experience: "My Experience",
    thanks: "Thanks",
    contact: "Contact",
    cv: "Resume"
  },
  fr: {
    home: "Accueil",
    skills: "Compétences",
    portfolio: "Portfolio",
    experience: "Mon expérience",
    thanks: "Merci",
    contact: "Contact",
    cv: "CV"
  }
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  
  // Utilisation du contexte de langue
  const { language, toggleLanguage } = useContext(LanguageContext);
  const t = translations[language];
  
  // Sélectionner le CV approprié selon la langue
  const cv = language === "fr" ? cvFR : cvEN;

  const handleToggleLanguage = () => {
    toggleLanguage(language === "fr" ? "en" : "fr");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-0" : "py-4"
      } bg-[#1C2321] text-[#F9F9F9]`}
    >
      <nav className="h-fit flex justify-between items-center px-4 lg:justify-center">
        {/* Title displayed only on mobile */}
        <Link
          to=""
          title={t.home}
          className="font-poppins font-bold text-lg lg:hidden"
          onClick={scrollToTop}
        >
          Vincent Gaillard
        </Link>

        {/* Large screen menu */}
        <ul className="hidden lg:flex gap-8">
          <li>
            <Link
              to=""
              onClick={scrollToTop}
              className="block font-poppins font-bold text-lg md:text-xl lg:text-2xl py-2 px-4 hover:bg-[#2a3432]"
            >
              {t.home}
            </Link>
          </li>
          <li>
            <Link
              to="/#competences"
              className="block font-poppins font-bold text-lg md:text-xl lg:text-2xl py-2 px-4 hover:bg-[#2a3432]"
            >
              {t.skills}
            </Link>
          </li>
          <li>
            <Link
              to="/#portfolio"
              className="block font-poppins font-bold text-lg md:text-xl lg:text-2xl py-2 px-4 hover:bg-[#2a3432]"
            >
              {t.portfolio}
            </Link>
          </li>
          <li>
            <Link
              to="/#experience"
              className="block font-poppins font-bold text-lg md:text-xl lg:text-2xl py-2 px-4 hover:bg-[#2a3432]"
            >
              {t.experience}
            </Link>
          </li>
          <li>
            <Link
              to="/#merci"
              className="block font-poppins font-bold text-lg md:text-xl lg:text-2xl py-2 px-4 hover:bg-[#2a3432]"
            >
              {t.thanks}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block font-poppins font-bold text-lg md:text-xl lg:text-2xl py-2 px-4 hover:bg-[#2a3432]"
            >
              {t.contact}
            </Link>
          </li>
          <li>
            <a
              href={cv}
              download={language === "fr" ? "cv_vincent_gaillard" : "resume_vincent_gaillard"}
              className="font-poppins font-bold text-lg md:text-xl lg:text-2xl py-2 px-4 hover:bg-[#2a3432] flex items-center"
            >
              {t.cv} <img className="w-5 h-5 ml-2" src={download} alt="CV" />
            </a>
          </li>
          
          {/* Toggle de langue */}
          <li className="flex items-center">
            <button 
              onClick={handleToggleLanguage}
              className="px-3 py-1 rounded flex items-center hover:bg-[#2a3432] font-poppins font-bold"
              aria-label="Changer de langue"
            >
              {language === "fr" ? "EN" : "FR"}
            </button>
          </li>
        </ul>

        {/* Burger Menu Button (Mobile) */}
        <button
          onClick={toggleMenu}
          className="p-2 focus:outline-none lg:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Mobile menu (full screen only on small screens) */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="fixed inset-0 bg-[#1C2321] bg-opacity-95 flex flex-col items-center justify-center lg:hidden"
          >
            {/* Button to close the menu */}
            <button
              onClick={closeMenu}
              className="absolute top-5 right-5 p-2 text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <ul className="space-y-6 text-center font-bold text-xl">
              <li>
                <Link to="" onClick={scrollToTop}>
                  {t.home}
                </Link>
              </li>
              <li>
                <Link to="/#competences" onClick={closeMenu}>
                  {t.skills}
                </Link>
              </li>
              <li>
                <Link to="/#portfolio" onClick={closeMenu}>
                  {t.portfolio}
                </Link>
              </li>
              <li>
                <Link to="/#experience" onClick={closeMenu}>
                  {t.experience}
                </Link>
              </li>
              <li>
                <Link to="/#merci" onClick={closeMenu}>
                  {t.thanks}
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu}>
                  {t.contact}
                </Link>
              </li>
              <li>
                <a
                  href={cv}
                  download={language === "fr" ? "cv_vincent_gaillard" : "resume_vincent_gaillard"}
                  className="flex items-center justify-center"
                  onClick={closeMenu}
                >
                  {t.cv} <img className="w-6 h-6 ml-2" src={download} alt="CV" />
                </a>
              </li>
              
              {/* Toggle de langue pour mobile */}
              <li>
                <button 
                  onClick={() => {
                    handleToggleLanguage();
                    closeMenu();
                  }}
                  className="px-4 py-2 rounded bg-[#2a3432] hover:bg-[#374542]"
                  aria-label="Changer de langue"
                >
                  {language === "fr" ? "Switch to English" : "Passer en Français"}
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
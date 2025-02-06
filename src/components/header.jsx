import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import download from "../assets/svg/download.svg";
import cv from "../assets/pdf/cv.pdf";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

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
          title="Accueil"
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
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/#competences"
              className="block font-poppins font-bold text-lg md:text-xl lg:text-2xl py-2 px-4 hover:bg-[#2a3432]"
            >
              Compétences
            </Link>
          </li>
          <li>
            <Link
              to="/#portfolio"
              className="block font-poppins font-bold text-lg md:text-xl lg:text-2xl py-2 px-4 hover:bg-[#2a3432]"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/#experience"
              className="block font-poppins font-bold text-lg md:text-xl lg:text-2xl py-2 px-4 hover:bg-[#2a3432]"
            >
              Mon expérience
            </Link>
          </li>
          <li>
            <Link
              to="/#merci"
              className="block font-poppins font-bold text-lg md:text-xl lg:text-2xl py-2 px-4 hover:bg-[#2a3432]"
            >
              Merci
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block font-poppins font-bold text-lg md:text-xl lg:text-2xl py-2 px-4 hover:bg-[#2a3432]"
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href={cv}
              download="cv_vincent_gaillard"
              className="font-poppins font-bold text-lg md:text-xl lg:text-2xl py-2 px-4 hover:bg-[#2a3432] flex items-center"
            >
              CV <img className="w-5 h-5 ml-2" src={download} alt="CV" />
            </a>
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
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/#competences" onClick={closeMenu}>
                  Compétences
                </Link>
              </li>
              <li>
                <Link to="/#portfolio" onClick={closeMenu}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/#experience" onClick={closeMenu}>
                  Mon expérience
                </Link>
              </li>
              <li>
                <Link to="/#merci" onClick={closeMenu}>
                  Merci
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={cv}
                  download="cv_vincent_gaillard"
                  className="flex items-center justify-center"
                  onClick={closeMenu}
                >
                  CV <img className="w-6 h-6 ml-2" src={download} alt="CV" />
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;

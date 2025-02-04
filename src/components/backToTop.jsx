import { useState, useEffect } from "react";
import arrowUp from "../assets/svg/arrow_up.svg"; 

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      title="Retour en haut"
      className={`fixed bottom-8 right-8 p-4 bg-[#f911be] text-white rounded-full shadow-lg transition duration-300 hover:bg-blue-600 ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <img src={arrowUp} alt="Retour en haut" className="w-6 h-6 pointer-events-none" />
    </button>
  );
}

export default BackToTop;

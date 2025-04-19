import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Footer = () => {
  const { language } = useContext(LanguageContext);

  // Dictionnaire de traduction
  const translations = {
    en: {
      text: "Site made by Vincent Gaillard with React.JS and TailwindCSS version 4"
    },
    fr: {
      text: "Site réalisé par Vincent Gaillard en React.JS et TailwindCSS version 4"
    }
  };

  const t = translations[language];

  return (
    <footer className="flex justify-center items-center bg-[#1C2321] text-[#F9F9F9] font-poppins border-t border-white border-solid w-full mt-auto">
      <p className="text-sm md:text-base lg:text-lg text-center px-4">
        {t.text}
      </p>
    </footer>
  );
};

export default Footer;
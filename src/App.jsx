import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { LanguageContext } from "./components/LanguageContext";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Certifications from "./components/certifications";
import BackToTop from "./components/backToTop";

function App() {
  const [language, setLanguage] = useState("en"); // Par défaut en anglais

  useEffect(() => {
    // Détection de la langue du navigateur au chargement
    const detectBrowserLanguage = () => {
      const browserLang = navigator.language || navigator.userLanguage;
      const langPrefix = browserLang.split('-')[0].toLowerCase();
      
      // Si français, on met en français, sinon en anglais
      if (langPrefix === "fr") {
        setLanguage("fr");
      } else {
        setLanguage("en");
      }
    };

    detectBrowserLanguage();
  }, []);

  // Fonction pour changer la langue avec un paramètre spécifique
  const toggleLanguage = (lang) => {
    if (lang && (lang === "fr" || lang === "en")) {
      setLanguage(lang);
    } else {
      // Si aucune langue n'est spécifiée, on bascule entre FR et EN
      setLanguage(prevLang => prevLang === "en" ? "fr" : "en");
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <Router basename="/portfolio">
        <div className="bg-complex-gradient min-h-screen flex flex-col">
          <Header />
          <BackToTop />
          <div className="px-4 md:px-16 lg:px-32 xl:px-64 flex-grow mb-16" id="root">
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="certifications" element={<Certifications />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
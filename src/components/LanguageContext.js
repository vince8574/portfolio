import { createContext } from "react";

// Création du contexte de langue
export const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {}
});
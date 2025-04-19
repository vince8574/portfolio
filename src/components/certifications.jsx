import { motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function Certifications() {
  const { language } = useContext(LanguageContext);
  
  // Dictionnaire de traduction pour les certifications
  const translations = {
    en: {
      fullStackTitle: "Full-Stack Developer Certification",
      frontEnd: "Front-End Web Development",
      languages: "Languages",
      frontEndLanguages: "HTML5 | CSS3 | JavaScript",
      cms: "CMS",
      wordpress: "Wordpress",
      library: "Library",
      react: "React",
      backEnd: "Back-End Web Development",
      backEndLanguages: "Python",
      frameworks: "Frameworks/Platforms",
      flaskFirebase: "Flask | Firebase",
      devTools: "Development Tools and Techniques",
      devOpsGit: "DevOps | Git",
      trainingStructure: "Training structure",
      trainingDuration: "The Full-Stack Developer training lasts one semester.",
      
      pythonTitle: "Python Software Engineer Certification",
      pythonDescription: "Work involving the design, development and implementation of a back-end application created with the Python programming language.",
      
      webProgrammerTitle: "WebProgrammer Certification",
      webProgrammerDescription: "Work involving the design, development and implementation of a web application created with JavaScript ES6, qualifying for the WebProgrammer profession.",
      
      webDesignerTitle: "WebDesigner Certification",
      webDesignerDescription: "The work corresponding to the site includes the design of a project, including client needs analysis, content management, information architecture, visual design and website development."
    },
    fr: {
      fullStackTitle: "Certification Full-Stack Developer",
      frontEnd: "Développement Web Front-End",
      languages: "Langages",
      frontEndLanguages: "HTML5 | CSS3 | JavaScript",
      cms: "CMS",
      wordpress: "Wordpress",
      library: "Librairie",
      react: "React",
      backEnd: "Développement Web Back-End",
      backEndLanguages: "Python",
      frameworks: "Framework / Plateforme",
      flaskFirebase: "Flask | Firebase",
      devTools: "Outils et techniques de développement",
      devOpsGit: "DevOps | Git",
      trainingStructure: "Structure de la formation",
      trainingDuration: "La formation de Full-Stack Developer se déroule sur une durée d'un semestre.",
      
      pythonTitle: "Certification Python Software Engineer",
      pythonDescription: "Travail de conception, de développement et d'implémentation d'une application back-end réalisée avec le langage de programmation Python.",
      
      webProgrammerTitle: "Certification WebProgrammer",
      webProgrammerDescription: "Travail de conception, de développement et d'implémentation d'une application web réalisée avec JavaScript ES6, le qualifiant pour le métier de WebProgrammer.",
      
      webDesignerTitle: "Certification WebDesigner",
      webDesignerDescription: "Le travail correspondant au site comporte la conception d'un projet, incluant l'analyse du besoin du client, la gestion des contenus, l'architecture de l'information, la conception visuelle et le développement du site web."
    }
  };

  const t = translations[language];

  return (
    <div className="flex flex-col gap-8 p-4 lg:p-8 overflow-hidden">
      {/* First certification */}
      <motion.div
        className="flex flex-col gap-4 p-4 lg:p-8 rounded-[15px] border border-solid border-white w-full lg:w-[75%] mx-auto lg:ml-0"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="m-auto font-poppins font-bold text-2xl text-center lg:text-left">
          {t.fullStackTitle}
        </h3>
        <div className="flex flex-col gap-4">
          <h4 className="font-poppins font-semibold text-xl">{t.frontEnd}</h4>
          <p className="font-poppins text-base">
            {t.languages} : {t.frontEndLanguages}
          </p>
          <p className="font-poppins text-base">{t.cms} : {t.wordpress}</p>
          <p className="font-poppins text-base">{t.library} : {t.react}</p>
          <h4 className="font-poppins font-semibold text-xl">{t.backEnd}</h4>
          <p className="font-poppins text-base">{t.languages} : {t.backEndLanguages}</p>
          <p className="font-poppins text-base">
            {t.frameworks} : {t.flaskFirebase}
          </p>
          <p className="font-poppins text-base">
            {t.devTools} : {t.devOpsGit}
          </p>
          <p className="font-poppins text-base">{t.trainingStructure}</p>
          <p className="font-poppins text-base">
            {t.trainingDuration}
          </p>
        </div>
      </motion.div>

      {/* Second certification */}
      <motion.div
        className="flex flex-col gap-4 p-4 lg:p-8 rounded-[15px] border border-solid border-white w-full lg:w-[75%] mx-auto lg:mr-0"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="m-auto font-poppins font-bold text-2xl text-center lg:text-left">
          {t.pythonTitle}
        </h3>
        <div className="flex flex-col gap-4">
          <p className="font-poppins text-base">
            {t.pythonDescription}
          </p>
        </div>
      </motion.div>

      {/* Third certification */}
      <motion.div
        className="flex flex-col gap-4 p-4 lg:p-8 rounded-[15px] border border-solid border-white w-full lg:w-[75%] mx-auto lg:ml-0"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="m-auto font-poppins font-bold text-2xl text-center lg:text-left">
          {t.webProgrammerTitle}
        </h3>
        <div className="flex flex-col gap-4">
          <p className="font-poppins text-base">
            {t.webProgrammerDescription}
          </p>
        </div>
      </motion.div>

      {/* Fourth certification */}
      <motion.div
        className="flex flex-col gap-4 p-4 lg:p-8 rounded-[15px] border border-solid border-white w-full lg:w-[75%] mx-auto lg:mr-0"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="m-auto font-poppins font-bold text-2xl text-center lg:text-left">
          {t.webDesignerTitle}
        </h3>
        <div className="flex flex-col gap-4">
          <p className="font-poppins text-base">
            {t.webDesignerDescription}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Certifications;
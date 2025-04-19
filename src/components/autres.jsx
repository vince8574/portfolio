import { motion } from 'framer-motion';
import wordpress from '../assets/svg/wordpress-icon.svg';
import flask from '../assets/svg/flask.svg';
import numpy from '../assets/svg/numpy.svg';
import pandas from '../assets/svg/pandas-icon.svg';
import git from '../assets/svg/git-icon.svg';
import docker from '../assets/svg/docker-icon.svg';
import vite from '../assets/svg/vitejs.svg';
import figma from '../assets/svg/figma.svg';
import postman from '../assets/svg/postman-icon.svg';
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function Autres() {
    const techs = [
      {src: wordpress, alt: "wordpress_icone", name: "wordpress"},
      {src: flask, alt: "flask_icone", name: "flask"},
      {src: numpy, alt: "NumPy_icone", name: "NumPy"},
      {src: pandas, alt: "pandas_icone", name: "pandas"},
      {src: git, alt: "git_icone", name: "git"},
      {src: docker, alt: "docker_icone", name: "docker"},
      {src: vite, alt: "vite_icone", name: "vite"},
      {src: figma, alt: "figma_icone", name: "figma"},
      {src: postman, alt: "postman_icone", name: "postman"},
    ];

    const { language } = useContext(LanguageContext);

  // Dictionnaire de traduction
  const translations = {
    en: {
      text: "Others"
    },
    fr: {
      text: "Autres"
    }
  };

  const t = translations[language];
    return (
        
      <motion.div
      className="flex flex-wrap flex-col gap-4 p-8 rounded-[15px] border border-solid border-white w-fit m-auto"
      initial={{ opacity: 0, scale: 0 }} // Start hidden and reduced
      whileInView={{ opacity: 1, scale: 1 }} // Becomes visible and grows
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
      viewport={{ once: true, amount: 0.2 }} // Scroll Trigger
    >
          <h3 className='m-auto font-poppins font-bold text-2xl'>{t.text}</h3>
          <div className='flex flex-row gap-4 flex-wrap items-center justify-center'>
          {techs.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="flex flex-col gap-2 items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }} // Gradual appearance
            viewport={{ once: true, amount: 0.2 }}
          >
            <img className="h-[100px]" src={tech.src} alt={tech.alt} />
            <span className="m-auto uppercase font-poppins text-center">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
      
    );
}
export default Autres
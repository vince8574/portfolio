import { motion } from "framer-motion";
import html from '../assets/svg/html-5.svg';
import css from '../assets/svg/css-3.svg';
import tailwindcss from '../assets/svg/tailwindcss-icon.svg';
import javascript from '../assets/svg/javascript.svg';
import reactIcon from '../assets/svg/react.svg';

export function Front() {
    const techs = [
      {src: html, alt: "html_5_icone", name: "html 5"},
      {src: css, alt: "css_3_icone", name: "css 3"},
      {src: tailwindcss, alt: "tailwindcss_icone", name: "tailwindcss"},
      {src: javascript, alt: "javascript_icone", name: "javascript"},
      {src: reactIcon, alt: "react_icone", name: "react"},
    ];
    return (
        
      <motion.div
      className="flex flex-wrap flex-col gap-4 p-8 rounded-[15px] border border-solid border-white w-fit m-auto"
      initial={{ opacity: 0, scale: 0 }} // Commence caché et réduit
      whileInView={{ opacity: 1, scale: 1 }} // Devient visible et grandit
      transition={{ duration: 0.8, ease: "easeOut" }} // Animation fluide
      viewport={{ once: true, amount: 0.2 }} // Déclenchement au scroll
    >
      <h3 className="m-auto font-poppins font-bold text-2xl">front end</h3>
      <div className="flex flex-row gap-4 flex-wrap">
        {techs.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="flex flex-col gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }} // Apparition progressive
            viewport={{ once: true, amount: 0.2 }}
          >
            <img className="h-[100px]" src={tech.src} alt={tech.alt} />
            <span className="m-auto uppercase font-poppins">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
      
    );
}
export default Front;
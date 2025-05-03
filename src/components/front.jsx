import { motion } from "framer-motion";
import html from '../assets/svg/html-5.svg';
import css from '../assets/svg/css-3.svg';
import tailwindcss from '../assets/svg/tailwindcss-icon.svg';
import javascript from '../assets/svg/javascript.svg';
import reactIcon from '../assets/svg/react.svg';
import angular from '../assets/svg/angular-icon.svg';
import typescript from '../assets/svg/typescript-icon.svg';
import rxjs from '../assets/svg/rxjs.svg';

export function Front() {
    const techs = [
      {src: html, alt: "html_5_icone", name: "html 5"},
      {src: css, alt: "css_3_icone", name: "css 3"},
      {src: tailwindcss, alt: "tailwindcss_icone", name: "tailwindcss"},
      {src: javascript, alt: "javascript_icone", name: "javascript"},
      {src: reactIcon, alt: "react_icone", name: "react"},
      {src: angular, alt: "angular_icone", name: "angular"},
      {src: typescript, alt: "typescript_icone", name: "typescript"},
      {src: rxjs, alt: "rxjs", name: "rxjs"},
    ];
    return (
        
      <motion.div
      className="flex flex-wrap flex-col gap-4 p-8 rounded-[15px] border border-solid border-white w-fit m-auto"
      initial={{ opacity: 0, scale: 0 }} // Start hidden and reduced
      whileInView={{ opacity: 1, scale: 1 }} // Becomes visible and grows
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
      viewport={{ once: true, amount: 0.2 }} // Scroll Trigger
    >
      <h3 className="m-auto font-poppins font-bold text-2xl">front end</h3>
      <div className="flex flex-row gap-4 flex-wrap items-center justify-center">
        {techs.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="flex flex-col gap-2 items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }} // Apparition progressive
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
export default Front;
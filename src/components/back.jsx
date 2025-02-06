import { motion } from "framer-motion";
import nodejs from '../assets/svg/nodejs-icon.svg';
import php from '../assets/svg/php.svg';
import laravel from '../assets/svg/laravel.svg';
import livewire from '../assets/jpg/laravel-livewire.jpg';
import python from '../assets/svg/python.svg';
import firebase from '../assets/svg/firebase.svg';
import mysql from '../assets/svg/mysql-icon.svg';

export function Back() {
    const techs = [
      {src: nodejs, alt: "nodejs_icone", name: "nodejs"},
      {src: php, alt: "php_icone", name: "php"},
      {src: laravel, alt: "laravel_icone", name: "laravel"},
      {src: livewire, alt: "livewire_icone", name: "livewire"},
      {src: python, alt: "python_icone", name: "python"},
      {src: firebase, alt: "firebase_icone", name: "firebase"},
      {src: mysql, alt: "mysql_icone", name: "MySQL"},
    ];
    return (
        
      <motion.div
      className="flex flex-wrap flex-col gap-4 p-8 rounded-[15px] border border-solid border-white w-fit m-auto"
      initial={{ opacity: 0, scale: 0 }} // Start hidden and reduced
      whileInView={{ opacity: 1, scale: 1 }} // Becomes visible and grows
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
      viewport={{ once: true, amount: 0.2 }} // Scroll Trigger
    >
      <h3 className="m-auto font-poppins font-bold text-2xl">back end</h3>
      <div className="flex flex-row gap-4 flex-wrap">
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
      
    )
}
export default Back
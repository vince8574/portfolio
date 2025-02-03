import Autres from './autres';
import Back from './back';
import Card from './card';
import Certifications from './certifications';
import Front from './front';
import Portfolio from './portfolio';
import '../styles/gradient.css';
import { motion } from 'framer-motion';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          const yOffset = -80; // Décalage pour compenser la hauteur du header
          const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <div className="flex flex-col items-center gap-0">
        {/* Section Photo, Ligne et Texte */}
        <div className="my-8 flex flex-col lg:flex-row items-center mt-32">
          {/* Photo */}
          <Card />

          {/* Ligne (horizontale sur les grands écrans, verticale sur les petits écrans) */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            {/* Ligne horizontale (grands écrans) */}
            <motion.div
              className="hidden lg:block bg-white border-t border-white"
              style={{ height: "1px", width: "420px" }}
              initial={{ scaleX: 0, transformOrigin: "right" }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 2 }}
            ></motion.div>

            {/* Ligne verticale (petits écrans) */}
            <motion.div
              className="block lg:hidden bg-white border-l border-white"
              style={{ width: "1px", height: "64px" }}
              initial={{ scaleY: 0, transformOrigin: "top" }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 2 }}
            ></motion.div>
          </motion.div>

          {/* Texte "Développeur Full Stack" */}
          <motion.div
            className="relative flex flex-col rounded-[15px] p-8 gap-4 w-full lg:max-w-[50%] h-auto"
            style={{ border: "1px solid transparent" }}
          >
            {/* Animation de la bordure */}
            <motion.div
              className="absolute inset-0 rounded-[15px] border border-white"
              initial={{
                clipPath: "polygon(100% 50%, 100% 50%, 100% 50%, 100% 50%)",
              }}
              animate={{
                clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0)",
              }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            ></motion.div>

            <h1 className="font-poppins font-bold text-3xl lg:text-[50px]">
              Développeur Full Stack
            </h1>
            <h2 className="font-poppins font-bold text-2xl lg:text-[38px]">
              Vincent Gaillard
            </h2>
            <span className="font-poppins font-regular text-base lg:text-[16px]">
              Je suis un développeur web passionné, avec un parcours atypique qui
              reflète mon envie constante de relever des défis. Ma carrière dans
              l’informatique est avant tout un retour aux sources, ayant commencé
              avec un BTS en informatique industrielle, où j’ai acquis des bases
              solides en programmation avec des langages comme C, C++, et Java.
              <br />
              Après une expérience enrichissante en tant que chef cuisinier et
              correspondant Qualité Prévention Environnement, j’ai décidé de
              renouer avec ma passion pour l’informatique et de me spécialiser
              dans le développement web.
            </span>
          </motion.div>
        </div>

        {/* Section Compétences */}
        <section id="competences">
          <div className="flex gap-16 flex-col relative">
            <h2 className="uppercase m-auto font-poppins font-bold text-2xl lg:text-[30px]">
              compétences
            </h2>
            <div className="relative flex flex-col items-center">
              <Front />

              {/* Ligne entre Front et Back */}
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-[1px] h-[64px] bg-white origin-top"
              />

              <Back />

              {/* Ligne entre Back et Autres */}
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-[1px] h-[64px] bg-white origin-top"
              />

              <Autres />
            </div>
          </div>
        </section>

        {/* Section Portfolio et Expérience */}
        <div className="flex gap-16 flex-col m-auto mt-32">
          <section id="portfolio" className="flex gap-16 flex-col">
            <h2 className="uppercase m-auto font-poppins font-bold text-2xl lg:text-[30px]">
              portfolio
            </h2>
            <Portfolio />
          </section>
          <section id="experience">
            <div className="flex gap-32 flex-col">
              <h2 className="uppercase m-auto font-poppins font-bold text-2xl lg:text-[30px]">
                mon expérience
              </h2>
              <Certifications />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
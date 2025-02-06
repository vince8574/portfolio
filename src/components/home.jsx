import Autres from './autres';
import Back from './back';
import Card from './card';
import Certifications from './certifications';
import Front from './front';
import Portfolio from './portfolio';
import Remerciements from './remerciement';
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
          const yOffset = -80; // Offset to compensate for header height
          const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <div className="flex flex-col items-center gap-16">
        {/* Photo, Line and Text Section */}
        <div className="my-8 flex flex-col lg:flex-row items-center mt-32">
          <Card />

          {/* Line (horizontal on large screens, vertical on small screens) */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            {/* Horizontal line (large screens) */}
            <motion.div
              className="hidden lg:block bg-white border-t border-white"
              style={{ height: "1px", width: "420px" }}
              initial={{ scaleX: 0, transformOrigin: "right" }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 2 }}
            ></motion.div>

            {/* Vertical line (small screens) */}
            <motion.div
              className="block lg:hidden bg-white border-l border-white"
              style={{ width: "1px", height: "64px" }}
              initial={{ scaleY: 0, transformOrigin: "top" }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 2 }}
            ></motion.div>
          </motion.div>

          {/* Text "Full Stack Developer" */}
          <motion.div
            className="relative flex flex-col rounded-[15px] p-8 gap-4 w-full lg:max-w-[50%] h-auto"
            style={{ border: "1px solid transparent" }}
          >
            {/* Border animation */}
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

        {/* Skills Section */}
        <section id="competences">
          <div className="flex gap-16 flex-col relative">
            <h2 className="uppercase m-auto font-poppins font-bold text-2xl lg:text-[30px]">
              compétences
            </h2>
            <div className="relative flex flex-col items-center">
              <Front />

              {/* Line between Front and Back */}
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-[1px] h-[64px] bg-white origin-top"
              />

              <Back />

              {/* Line between Back and Others */}
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

        {/* Portfolio and Experience Section */}
        <div className="flex gap-16 flex-col m-auto">
          <section id="portfolio" className="flex gap-16 flex-col">
            <h2 className="uppercase m-auto font-poppins font-bold text-2xl lg:text-[30px]">
              portfolio
            </h2>
            <Portfolio />
          </section>
          <section id="experience">
            <div className="flex  flex-col">
              <h2 className="uppercase m-auto font-poppins font-bold text-2xl lg:text-[30px]">
                mon expérience
              </h2>
              <Certifications />
            </div>
          </section>
          <section id="merci">
            <div className="flex  flex-col">
              <h2 className="uppercase m-auto font-poppins font-bold text-2xl lg:text-[30px]">
              ils m&apos;ont fait grandir et m&apos;ont fait confiance
              </h2>
              <Remerciements />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
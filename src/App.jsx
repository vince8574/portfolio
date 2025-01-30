import Autres from './components/autres';
import Back from './components/back';
import Card from './components/card';
import Certifications from './components/certifications';
import Front from './components/front';
import Portfolio from './components/portfolio';
import './styles/gradient.css';
import { motion } from 'framer-motion';

function App() {
  

  return (
    <>
     <div className='flex flex-wrap flex-col items-center gap-0'> 
      <div className='my-8 flex items-center mt-32'>
          <Card />
          {/* Ligne blanche entre la Card et la div "Vincent Gaillard" */}
          <motion.div
            className="bg-white border-t border-white"
            style={{ height: "1px", width: "420px" }}
            initial={{ scaleX: 0, transformOrigin: "right" }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 2 }} // Délai pour attendre la fin de la bordure
          ></motion.div>

          <motion.div
            className="relative flex flex-wrap flex-col rounded-[15px] p-8 gap-4 max-w-[50%]"
            style={{ border: "1px solid transparent" }} // Bordure transparente au départ
          >
            {/* Animation de la bordure */}
            <motion.div
              className="absolute inset-0 rounded-[15px] border border-white"
              initial={{ 
                clipPath: "polygon(100% 50%, 100% 50%, 100% 50%, 100% 50%)" // Point unique au milieu à droite
              }}
              animate={{ 
                clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0)" // S'étend vers le haut et le bas pour rejoindre le milieu à gauche
              }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }} // Durée et délai de l'animation
            ></motion.div>

          <h1 className="font-poppins font-bold text-[30px]">Vincent Gaillard</h1>
          <h2 className="font-poppins font-medium text-[30px]">Développeur Full Stack</h2>
          <span className="font-poppins font-regular text-[16px]">
            Je suis un développeur web passionné, avec un parcours atypique qui reflète mon envie constante de relever des défis.
            Ma carrière dans l’informatique est avant tout un retour aux sources, ayant commencé avec un BTS en informatique industrielle,
            où j’ai acquis des bases solides en programmation avec des langages comme C, C++, et Java.<br />
            Après une expérience enrichissante en tant que chef cuisinier et correspondant Qualité Prévention Environnement,
            j’ai décidé de renouer avec ma passion pour l’informatique et de me spécialiser dans le développement web.
          </span>
        </motion.div>

      </div>
    
    
        <div className='flex gap-16 flex-col relative'>
        <h2 className='uppercase m-auto font-poppins font-medium text-[30px]'>compétences</h2>
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
      <div className='flex gap-16 flex-col'>
        <h2 className='uppercase m-auto font-poppins font-medium text-[30px]'>portfolio</h2>
        <Portfolio />
      
      <div className='flex gap-32 flex-col'>
        <h2 className='uppercase m-auto font-poppins font-medium text-[30px]'>mon expérience</h2>
        <Certifications />
      </div>
      <div className='flex gap-32 flex-col'>
        <h2 className='uppercase m-auto font-poppins font-medium text-[30px]'>contact</h2>
      </div>
      </div>
    </div>
    </>
  )
}

export default App

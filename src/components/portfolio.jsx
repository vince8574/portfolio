import siteOlympe from '../assets/jpg/site_olympe.png';
import siteLabo from '../assets/jpg/labo.png';
import wordpressIcon from '../assets/svg/wordpress-icon.svg';
import figmaIcon from '../assets/svg/figma.svg';
import laravelIcon from '../assets/svg/laravel.svg';
import tailwindIcon from '../assets/svg/tailwindcss-icon.svg';
import savefood from '../assets/jpg/save-food.png';
import reactJS from '../assets/svg/react.svg';
import python from '../assets/svg/python.svg';
import flask from '../assets/svg/flask.svg';
import firebase from '../assets/svg/firebase.svg';

const Projects = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-between">
      {/* OlympeetOdin Project*/}
      <div className="flex flex-col gap-4 p-4 md:p-8 rounded-[15px] border border-solid border-white w-full md:w-[45%] lg:w-[40%]">
        <h3 className="text-center font-poppins font-bold text-xl md:text-2xl">olympeetodin.fr</h3>
        <div className="flex flex-col gap-4">
          <a href="https://olympeetodin.fr" target="_blank" rel="noreferrer">
            <img className="w-full h-auto object-contain mx-auto" src={siteOlympe} alt="site_olympeetodin" />
          </a>
          <div className="flex items-center gap-2">
            <p className="font-poppins text-sm md:text-base">
              Site e-commerce sous{" "}
              <span className="inline-flex items-center">
                Wordpress <img src={wordpressIcon} className="h-[16px] md:h-[18px] ml-1" alt="WordPress" />
              </span>, wireframe, maquette sous{" "}
              <span className="inline-flex items-center">
                Figma <img src={figmaIcon} className="h-[16px] md:h-[18px] ml-1" alt="Figma" />
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Le Laboratoire de l'Alpe Project */}
      <div className="flex flex-col gap-4 p-4 md:p-8 rounded-[15px] border border-solid border-white w-full md:w-[45%] lg:w-[40%]">
        <h3 className="text-center font-poppins font-bold text-xl md:text-2xl">lelaboratoiredelalpe.ch</h3>
        <div className="flex flex-col items-center gap-4">
          <a href="https://lelaboratoiredelalpe.ch" target="_blank" rel="noreferrer">
            <img className="w-full h-auto object-contain mx-auto" src={siteLabo} alt="site_laboratoiredelalpe" />
          </a>
          <div className="flex items-center gap-2">
            <p className="font-poppins text-sm md:text-base">
              Site pour une association sous{" "}
              <span className="inline-flex items-center">
                Laravel <img src={laravelIcon} className="h-[16px] md:h-[18px] ml-1" alt="Laravel" />
              </span> et {""}
              <span className="inline-flex items-center">
                Tailwindcss <img src={tailwindIcon} className="h-[16px] md:h-[18px] ml-1" alt="Tailwindcss" /></span>, wireframe, maquette sous{" "}
              <span className="inline-flex items-center">
                Figma <img src={figmaIcon} className="h-[16px] md:h-[18px] ml-1" alt="Figma" />
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* SaveFood Project */}
      <div className="flex flex-col gap-4 p-4 md:p-8 rounded-[15px] border border-solid border-white w-full md:w-[45%] lg:w-[40%]">
        <h3 className="text-center font-poppins font-bold text-xl md:text-2xl">SaveFood</h3>
        <div className="flex flex-col items-center gap-4">
          <a href="https://save-food-project.netlify.app/" target="_blank" rel="noreferrer">
            <img className="w-full h-auto object-contain mx-auto" src={savefood} alt="savefood-project" />
          </a>
          <div className="flex items-center gap-2">
            <p className="font-poppins text-sm md:text-base">
              Web app APIREST dont le front est développé en{" "}
              <span className="inline-flex items-center">
                React.JS <img src={reactJS} className="h-[16px] md:h-[18px] ml-1" alt="React.JS" />
              </span> et{""}
              <span className="inline-flex items-center">
                Tailwindcss <img src={tailwindIcon} className="h-[16px] md:h-[18px] ml-1" alt="Tailwindcss" /></span>, back-end architecture MVC, developpé en {""}
              <span className="inline-flex items-center">
                Python <img src={python} className="h-[16px] md:h-[18px] ml-1" alt="Python" /></span> et {""}
              <span className="inline-flex items-center">Flask <img src={flask} className="h-[16px] md:h-[18px] ml-1" alt="Flask" /></span> base de données NoSQL sous {""}
              <span className="inline-flex items-center">Firebase <img src={firebase} className="h-[16px] md:h-[18px] ml-1" alt="Firebase" /></span> wireframe, maquette sous{" "}
              <span className="inline-flex items-center">
                Figma <img src={figmaIcon} className="h-[16px] md:h-[18px] ml-1" alt="Figma" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
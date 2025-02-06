import siteOlympe from '../assets/jpg/site_olympe.png';
import siteLabo from '../assets/jpg/labo.png';
import wordpressIcon from '../assets/svg/wordpress-icon.svg';
import figmaIcon from '../assets/svg/figma.svg';
import laravelIcon from '../assets/svg/laravel.svg';
import tailwindIcon from '../assets/svg/tailwindcss-icon.svg';

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
    </div>
  );
};

export default Projects;
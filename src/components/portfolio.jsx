import siteOlympe from '../assets/jpg/site_olympe.png';
import siteLabo from '../assets/jpg/labo.jpg';
import wordpressIcon from '../assets/svg/wordpress-icon.svg';
import figmaIcon from '../assets/svg/figma.svg';
import laravelIcon from '../assets/svg/laravel.svg';
import tailwindIcon from '../assets/svg/tailwindcss-icon.svg';
import savefood from '../assets/jpg/save-food.png';
import reactJS from '../assets/svg/react.svg';
import python from '../assets/svg/python.svg';
import flask from '../assets/svg/flask.svg';
import firebase from '../assets/svg/firebase.svg';
import bootstrap from '../assets/svg/bootstrap.svg';
import html from '../assets/svg/html-5.svg';
import mysql from '../assets/svg/mysql-icon.svg';  
import crm from '../assets/jpg/crm.png';
import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const Projects = () => {
  const { language } = useContext(LanguageContext);

  // Dictionnaire de traduction
  const translations = {
    en: {
      olympeDesc: "E-commerce site built with",
      laboDesc: "Website for an association built with",
      savefoodDesc: "Web app APIREST with frontend developed in",
      savefoodBackend: "backend MVC architecture developed in",
      savefoodDb: "NoSQL database with",
      crmDesc: "Web app APIREST with frontend developed in",
      crmBackend: "backend MVC architecture developed in",
      crmDb: "SQL database with",
      wireframe: "wireframe, mockup with",
      and: "and"
    },
    fr: {
      olympeDesc: "Site e-commerce sous",
      laboDesc: "Site pour une association sous",
      savefoodDesc: "Web app APIREST dont le front est développé en",
      savefoodBackend: "back-end architecture MVC, developpé en",
      savefoodDb: "base de données NoSQL sous",
      crmDesc: "Web app APIREST dont le front est développé en",
      crmBackend: "back-end architecture MVC, developpé en",
      crmDb: "base de données SQL sous",
      wireframe: "wireframe, maquette sous",
      and: "et"
    }
  };

  const t = translations[language];

  return (
    <div className="flex flex-wrap gap-4 justify-between">
      {/* OlympeetOdin Project*/}
      <div className="flex flex-col gap-4 p-4 md:p-8 rounded-[15px] border border-solid border-white w-full md:w-[45%] lg:w-[40%]">
        <a href="https://olympeetodin.fr" target="_blank" rel="noreferrer">
          <h3 className="text-center font-poppins font-bold text-xl md:text-2xl">olympeetodin.fr</h3>
          <div className="flex flex-col gap-4">
              <img className="w-full h-auto object-contain mx-auto" src={siteOlympe} alt="site_olympeetodin" />
            <div className="flex items-center gap-2">
              <p className="font-poppins text-sm md:text-base">
                {t.olympeDesc}{" "}
                <span className="inline-flex items-center">
                  Wordpress <img src={wordpressIcon} className="h-[16px] md:h-[18px] ml-1" alt="WordPress" />
                </span>, {t.wireframe}{" "}
                <span className="inline-flex items-center">
                  Figma <img src={figmaIcon} className="h-[16px] md:h-[18px] ml-1" alt="Figma" />
                </span>
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* Le Laboratoire de l'Alpe Project */}
      <div className="flex flex-col gap-4 p-4 md:p-8 rounded-[15px] border border-solid border-white w-full md:w-[45%] lg:w-[40%]">
        <a href="https://lelaboratoiredelalpe.ch" target="_blank" rel="noreferrer">
          <h3 className="text-center font-poppins font-bold text-xl md:text-2xl">lelaboratoiredelalpe.ch</h3>
          <div className="flex flex-col items-center gap-4">
              <img className="w-full h-auto object-contain mx-auto" src={siteLabo} alt="site_laboratoiredelalpe" />
            <div className="flex items-center gap-2">
              <p className="font-poppins text-sm md:text-base">
                {t.laboDesc}{" "}
                <span className="inline-flex items-center">
                  Laravel <img src={laravelIcon} className="h-[16px] md:h-[18px] ml-1" alt="Laravel" />
                </span> {t.and}{" "}
                <span className="inline-flex items-center">
                  Tailwindcss <img src={tailwindIcon} className="h-[16px] md:h-[18px] ml-1" alt="Tailwindcss" /></span>, {t.wireframe}{" "}
                <span className="inline-flex items-center">
                  Figma <img src={figmaIcon} className="h-[16px] md:h-[18px] ml-1" alt="Figma" />
                </span>
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* SaveFood Project */}
      <div className="flex flex-col gap-4 p-4 md:p-8 rounded-[15px] border border-solid border-white w-full md:w-[45%] lg:w-[40%]">
        <a href="https://save-food-project.netlify.app/" target="_blank" rel="noreferrer">
          <h3 className="text-center font-poppins font-bold text-xl md:text-2xl">SaveFood</h3>
          <div className="flex flex-col items-center gap-4">
              <img className="w-full h-auto object-contain mx-auto" src={savefood} alt="savefood-project" />
            <div className="flex items-center gap-2">
              <p className="font-poppins text-sm md:text-base">
                {t.savefoodDesc}{" "}
                <span className="inline-flex items-center">
                  React.JS <img src={reactJS} className="h-[16px] md:h-[18px] ml-1" alt="React.JS" />
                </span> {t.and}{" "}
                <span className="inline-flex items-center">
                  Tailwindcss <img src={tailwindIcon} className="h-[16px] md:h-[18px] ml-1" alt="Tailwindcss" /></span>, {t.savefoodBackend}{" "}
                <span className="inline-flex items-center">
                  Python <img src={python} className="h-[16px] md:h-[18px] ml-1" alt="Python" /></span> {t.and}{" "}
                <span className="inline-flex items-center">Flask <img src={flask} className="h-[16px] md:h-[18px] ml-1" alt="Flask" /></span> {t.savefoodDb}{" "}
                <span className="inline-flex items-center">Firebase <img src={firebase} className="h-[16px] md:h-[18px] ml-1" alt="Firebase" /></span> {t.wireframe}{" "}
                <span className="inline-flex items-center">
                  Figma <img src={figmaIcon} className="h-[16px] md:h-[18px] ml-1" alt="Figma" />
                </span>
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* CRM project */}
      <div className="flex flex-col gap-4 p-4 md:p-8 rounded-[15px] border border-solid border-white w-full md:w-[45%] lg:w-[40%]">
        <a href="https://www.linkedin.com/posts/vincent-gaillard-164776287_crm-python-activity-7316547602018099200-TAGZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWz5FwBwAq8SJlibP20R1FalzRqeCG2SZk" target="_blank" rel="noreferrer">
          <h3 className="text-center font-poppins font-bold text-xl md:text-2xl">CRM</h3>
          <div className="flex flex-col items-center gap-4">
              <img className="w-full h-auto object-contain mx-auto" src={crm} alt="crm-project" />
            <div className="flex items-center gap-2">
              <p className="font-poppins text-sm md:text-base">
                {t.crmDesc}{" "}
                <span className="inline-flex items-center">
                  HTML5 Jinja2 <img src={html} className="h-[16px] md:h-[18px] ml-1" alt="HTML5" />
                </span> {t.and}{" "}
                <span className="inline-flex items-center">
                  Bootstrap <img src={bootstrap} className="h-[16px] md:h-[18px] ml-1" alt="Bootstrap" /></span>, {t.crmBackend}{" "}
                <span className="inline-flex items-center">
                  Python <img src={python} className="h-[16px] md:h-[18px] ml-1" alt="Python" /></span> {t.end}{" "}
                <span className="inline-flex items-center">Flask <img src={flask} className="h-[16px] md:h-[18px] ml-1" alt="Flask" /></span> {t.crmDb}{" "}
                <span className="inline-flex items-center">MySQL <img src={mysql} className="h-[16px] md:h-[18px] ml-1" alt="MySQL" /></span> {t.wireframe}{" "}
                <span className="inline-flex items-center">
                  Figma <img src={figmaIcon} className="h-[16px] md:h-[18px] ml-1" alt="Figma" />
                </span>
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
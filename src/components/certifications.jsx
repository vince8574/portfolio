import { motion } from "framer-motion";

export function Certifications() {
  return (
    <div className="flex flex-col gap-8 p-4 lg:p-8 overflow-hidden">
      {/* Première certification */}
      <motion.div
        className="flex flex-col gap-4 p-4 lg:p-8 rounded-[15px] border border-solid border-white w-full lg:w-[75%] mx-auto"
        initial={{ opacity: 0, x: -500 }} // Commence caché, décalé vers la gauche
        whileInView={{ opacity: 1, x: 0 }} // Devient visible en se déplaçant vers la droite
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation fluide
        viewport={{ once: true, amount: 0.2 }} // Déclenchement à 20% de la div visible
      >
        <h3 className="m-auto font-poppins font-bold text-2xl text-center lg:text-left">
          Certification Full-Stack Developper
        </h3>
        <div className="flex flex-col gap-4">
          <h4 className="font-poppins font-semibold text-xl">Développement Web Front-End</h4>
          <p className="font-poppins text-base">
            Langages : HTML5 | CSS3 | JavaScript CMS : Wordpress
          </p>
          <p className="font-poppins text-base">Librairie : React</p>
          <h4 className="font-poppins font-semibold text-xl">Développement Web Back-End</h4>
          <p className="font-poppins text-base">Langages : Python</p>
          <p className="font-poppins text-base">
            Framework / Plateforme : Flask | Firebase
          </p>
          <p className="font-poppins text-base">
            Outils et techniques de développement : DevOps | Git
          </p>
          <p className="font-poppins text-base">Structure de la formation</p>
          <p className="font-poppins text-base">
            La formation de Full-Stack Developer se déroule sur une durée d’un
            semestre.
          </p>
          <p className="font-poppins text-base">
            Elle est basée sur la conception et le développement de travaux de
            projets personnels lors de chaque module.
          </p>
          <p className="font-poppins text-base">
            Le Diplôme de Full-Stack Developer représente 800 heures de travail
            correspondant à 32 ECTS (European Credits Transfert System).
          </p>
        </div>
      </motion.div>

      {/* Deuxième certification */}
      <motion.div
        className="flex flex-col gap-4 p-4 lg:p-8 rounded-[15px] border border-solid border-white w-full lg:w-[75%] ml-auto"
        initial={{ opacity: 0, x: 500 }} // Commence caché, décalé vers la droite
        whileInView={{ opacity: 1, x: 0 }} // Devient visible en se déplaçant vers la gauche
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation fluide
        viewport={{ once: true, amount: 0.2 }} // Déclenchement à 20% de la div visible
      >
        <h3 className="m-auto font-poppins font-bold text-2xl text-center lg:text-left">
          Certification Python Software Engineer
        </h3>
        <div className="flex flex-col gap-4">
          <p className="font-poppins text-base">
            Travail de conception, de développement et d’implémentation d’une
            application back-end réalisée avec le langage de programmation
            Python.
          </p>
          <p className="font-poppins text-base">
            La durée totale de la formation est de huit semaines, dont deux
            semaines dédiées au travail de projet personnel.
          </p>
        </div>
      </motion.div>

      {/* Troisième certification */}
      <motion.div
        className="flex flex-col gap-4 p-4 lg:p-8 rounded-[15px] border border-solid border-white w-full lg:w-[75%] mx-auto"
        initial={{ opacity: 0, x: -500 }} // Commence caché, décalé vers la gauche
        whileInView={{ opacity: 1, x: 0 }} // Devient visible en se déplaçant vers la droite
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation fluide
        viewport={{ once: true, amount: 0.2 }} // Déclenchement à 20% de la div visible
      >
        <h3 className="m-auto font-poppins font-bold text-2xl text-center lg:text-left">
          Certification WebProgrammer
        </h3>
        <div className="flex flex-col gap-4">
          <p className="font-poppins text-base">
            Travail de conception, de développement et d’implémentation d’une
            application web réalisée avec JavaScript ES6, le qualifiant pour le
            métier de WebProgrammer.
          </p>
          <p className="font-poppins text-base">
            Ce projet comporte un travail de conception, incluant l’analyse des
            besoins du client, l’architecture de l’information, la conception
            visuelle et le design de l’interface. La durée totale de la formation
            est de huit semaines, dont deux semaines dédiées au travail de projet
            personnel.
          </p>
        </div>
      </motion.div>

      {/* Quatrième certification */}
      <motion.div
        className="flex flex-col gap-4 p-4 lg:p-8 rounded-[15px] border border-solid border-white w-full lg:w-[75%] ml-auto"
        initial={{ opacity: 0, x: 500 }} // Commence caché, décalé vers la droite
        whileInView={{ opacity: 1, x: 0 }} // Devient visible en se déplaçant vers la gauche
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation fluide
        viewport={{ once: true, amount: 0.2 }} // Déclenchement à 20% de la div visible
      >
        <h3 className="m-auto font-poppins font-bold text-2xl text-center lg:text-left">
          Certification WebDesigner
        </h3>
        <div className="flex flex-col gap-4">
          <p className="font-poppins text-base">
            Le travail correspondant au site comporte la conception d’un projet,
            incluant l’analyse du besoin du client, la gestion des contenus,
            l’architecture de l’information, la conception visuelle et le
            développement du site web.
          </p>
          <p className="font-poppins text-base">
            Ce projet comporte un travail de conception, incluant l’analyse des
            besoins du client, l’architecture de l’information, la conception
            visuelle et le design de l’interface. La durée totale de la formation
            est de huit semaines, dont deux semaines dédiées au travail de projet
            personnel.
          </p>
          <p className="font-poppins text-base">
            La durée totale de la formation est de sept semaines, dont deux
            semaines dédiées au travail de projet personnel.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Certifications;
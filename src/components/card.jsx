import { useRef } from "react";
import photo from "../assets/jpg/photo.jpg";

export function Card() {
  const cardRef = useRef(null); // Référence pour accéder à l'élément de la card

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    const elRect = el.getBoundingClientRect();
    const x = e.clientX - elRect.x;
    const y = e.clientY - elRect.y;

    const midCardWidth = elRect.width / 2;
    const midCardHeight = elRect.height / 2;

    const angleY = -(x - midCardWidth) / 8;
    const angleX = (y - midCardHeight) / 8;

    const glowX = (x / elRect.width) * 100;
    const glowY = (y / elRect.height) * 100;

    // Ajoute les transformations à l'élément et au "glow"
    el.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    el.querySelector("#glow").style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(184,196,211), transparent)`;
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;

    // Réinitialise les transformations
    el.style.transform = `rotateX(0) rotateY(0)`;
    el.querySelector("#glow").style.background = `radial-gradient(circle at 50% 0%, rgb(184, 196, 211), transparent)`;
  };

  return (
    <div
      id="container"
      ref={cardRef} // Attache la référence à la card
      className="rounded-[15px] w-[350px] perspective-[1000px] hover:z-10"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        id="glow"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgb(184, 196, 211), transparent)",
        }}
        className="absolute top-0 left-0 w-[100%] h-[100%] opacity-50 transition-all duration-150 ease-out rounded-[15px] mix-blend-hard-light"
      ></div>
      <div
        id="content_card"
        className="w-[100%] h-[100%] overflow-hidden rounded-[15px] transition-all duration-150 ease-out"
      >
        <img
          className="rounded-[15px] max-w-[350px]"
          src={photo}
          alt="Card Image"
        />
      </div>
    </div>
  );
}

export default Card;

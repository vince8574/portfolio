import kda from "../assets/jpg/kda.png";
import nomades from "../assets/jpg/nomades.jpg";
import sekoia from "../assets/svg/sekoia.svg";

const Remerciements = () => {
    return (
        
                     
            <div className="flex flex-wrap flex-row justify-center gap-8 mt-8">
                <a href="https://karsegard.dev/" target="_blank" rel="noreferrer"><img src={kda} className="h-[100px]"/></a>
                <a href="https://nomades.ch/" target="_blank" rel="noreferrer"><img src={nomades} className="h-[100px]"/></a>
                <a href="https://www.sekoia.ch/" target="_blank" rel="noreferrer"><img src={sekoia} className="h-[100px]"/></a>
            </div>
        
    );
};
export default Remerciements;

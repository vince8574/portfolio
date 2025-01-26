import Autres from './components/autres';
import Back from './components/back';
import Card from './components/card';
import Front from './components/front';
import './styles/gradient.css';

function App() {
  

  return (
    <>
     <div className='flex flex-wrap flex-col items-center gap-32'> 
      <div className='my-8 flex items-center mt-32'>
          <Card />

          <div className="relative flex-1 mx-4">
            <div className="h-[2px] bg-white scale-x-0 origin-left animate-line-grow"></div>
          </div>

          <div className='flex flex-wrap flex-col rounded-[15px] p-8 gap-4 border-1 border-solid border-white max-w-[40%]'>
            <h1>Vincent Gaillard</h1>
            <h2>Développeur Full Stack</h2>
            <span >
            Je suis un développeur web passionné, avec un parcours atypique qui reflète mon envie constante de relever des défis. Ma carrière dans l’informatique est avant tout un retour aux sources, ayant commencé avec un BTS en informatique industrielle, où j’ai acquis des bases solides en programmation avec des langages comme C, C++, et Java.<br/>
            Après une expérience enrichissante en tant que chef cuisinier et correspondant Qualité Prévention Environnement, j’ai décidé de renouer avec ma passion pour l’informatique et de me spécialiser dans le développement web.
            </span>
          </div>        
      </div>
        <div className='flex gap-32 flex-col'>
        <h2 className='uppercase m-auto'>compétences</h2>
        <Front />
        <Back />
        <Autres />
      </div>
      <div>
        <h2 className='uppercase m-auto'>portfolio</h2>
      </div>
    </div>
    </>
  )
}

export default App

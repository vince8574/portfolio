import Autres from './components/autres';
import Back from './components/back';
import Card from './components/card';
import Certifications from './components/certifications';
import Front from './components/front';
import Portfolio from './components/portfolio';
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

          <div className='flex flex-wrap flex-col rounded-[15px] p-8 gap-4 border-1 border-solid border-white max-w-[50%]'>
            <h1 className='font-poppins font-bold text-[30px]'>Vincent Gaillard</h1>
            <h2 className='font-poppins font-medium text-[30px]'>Développeur Full Stack</h2>
            <span className='font-poppins font-regular text-[16px]'>
            Je suis un développeur web passionné, avec un parcours atypique qui reflète mon envie constante de relever des défis. Ma carrière dans l’informatique est avant tout un retour aux sources, ayant commencé avec un BTS en informatique industrielle, où j’ai acquis des bases solides en programmation avec des langages comme C, C++, et Java.<br/>
            Après une expérience enrichissante en tant que chef cuisinier et correspondant Qualité Prévention Environnement, j’ai décidé de renouer avec ma passion pour l’informatique et de me spécialiser dans le développement web.
            </span>
          </div>        
      </div>
        <div className='flex gap-16 flex-col'>
        <h2 className='uppercase m-auto font-poppins font-medium text-[30px]'>compétences</h2>
        <Front />
        <Back />
        <Autres />
      </div>
      <div className='flex gap-16 flex-col'>
        <h2 className='uppercase m-auto font-poppins font-medium text-[30px]'>portfolio</h2>
        <Portfolio />
      </div>
      <div className='flex gap-32 flex-col'>
        <h2 className='uppercase m-auto font-poppins font-medium text-[30px]'>mon expérience</h2>
        <Certifications />
      </div>
      <div className='flex gap-32 flex-col'>
        <h2 className='uppercase m-auto font-poppins font-medium text-[30px]'>contact</h2>
      </div>
    </div>
    </>
  )
}

export default App

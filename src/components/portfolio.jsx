export function Portfolio() {
    return (
       <div className="flex flex-row flex-wrap gap-4 justify-between"> 
        <div className='flex flex-wrap flex-col gap-4 p-8 rounded-[15px] border-1 border-solid border-white w-[50%] m-auto'>
          <h3 className='m-auto font-poppins font-bold text-2xl'>olympeetodin.fr</h3>
          <div className='flex flex-row gap-4 flex-wrap'>
            <div className='flex flex-col gap-2'>
            <a href='https://olympeetodin.fr' target='_blank' rel='noreferrer'>
              <img className="h-[300px]" src='../src/assets/jpg/site_olympe.png' alt='site_olympeetodin'/>
            </a>
            <div className="flex flex-row">
              <p className="font-poppins">Site de e-commerce pour une jeune créatrice de bijoux en micro macramé développer sous Wordpress </p><img src="../src/assets/svg/wordpress-icon.svg" className="h-[18px]"/><p>, maquette sous FIGMA <img src="../src/assets/svg/figma.svg" className="h-[18px]"/></p> 
            </div>              
            </div>     
          </div>
        </div>
        <div className='flex flex-wrap flex-col gap-4 p-8 rounded-[15px] border-1 border-solid border-white w-[40%] m-auto'>
          <h3 className='m-auto font-poppins font-bold text-2xl'>lelaboratoiredelalpe.ch</h3>
          <div className='flex flex-row gap-4 flex-wrap'>
            <div className='flex flex-col gap-2 m-auto'>
            <a href='https://lelaboratoiredelalpe.ch' target='_blank' rel='noreferrer'>
              <img className="h-[300px]" src='../src/assets/jpg/labo.png' alt='site_laboratoiredelalpe'/>
            </a>               
            </div>     
          </div>
        </div>

      </div>
    )
}
export default Portfolio
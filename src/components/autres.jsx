export function Autres() {
    return (
        
        <div className='flex flex-wrap flex-col gap-4 p-8 rounded-[15px] border-1 border-solid border-white w-fit m-auto'>
          <h3 className='m-auto'>Autres</h3>
          <div className='flex flex-row gap-4 flex-wrap'>
            <div className='flex flex-col gap-2'>
              <img className="h-[100px]" src='../src/assets/svg/wordpress-icon.svg' alt='wordpress_icone'/>
              <span className='m-auto uppercase'>wordpress</span>
            </div>          
            <div className='flex flex-col gap-2'>
              <img className="h-[100px]" src='../src/assets/svg/flask.svg' alt='flask_icone'/>
              <span className='m-auto uppercase'>flask</span>
            </div>          
            <div className='flex flex-col gap-2'>
              <img className="h-[100px]" src='../src/assets/svg/numpy.svg' alt='NumPy_icone'/>
              <span className='m-auto'>NumPy</span>
            </div>          
            <div className='flex flex-col gap-2'>
              <img className="h-[100px]" src='../src/assets/svg/pandas-icon.svg' alt='pandas_icone'/>
              <span className='m-auto uppercase'>pandas</span>
            </div>          
            <div className='flex flex-col gap-2'>
              <img className="h-[100px]" src='../src/assets/svg/git-icon.svg' alt='git_icone'/>
              <span className='m-auto uppercase'>git</span>
            </div>          
            <div className='flex flex-col gap-2'>
              <img className="h-[100px]" src='../src/assets/svg/docker-icon.svg' alt='docker_icone'/>
              <span className='m-auto uppercase'>docker</span>
            </div>          
            <div className='flex flex-col gap-2'>
              <img className="h-[100px]" src='../src/assets/svg/vitejs.svg' alt='vite_icone'/>
              <span className='m-auto'>vite</span>
            </div>          
          </div>
        </div>
      
    )
}
export default Autres
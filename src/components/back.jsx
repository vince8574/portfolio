export function Back() {
    return (
        
        <div className='flex flex-wrap flex-col gap-4 p-8 rounded-[15px] border-1 border-solid border-white '>
          <h3 className='m-auto'>back end</h3>
          <div className='flex flex-row gap-4 flex-wrap'>
            <div className='flex flex-col gap-2'>
              <img className="h-[100px]" src='../src/assets/svg/nodejs-icon.svg' alt='nodejs_icone'/>
              <span className='m-auto uppercase'>nodejs</span>
            </div>          
            <div className='flex flex-col gap-2'>
              <img className="h-[100px]" src='../src/assets/svg/php.svg' alt='php_icone'/>
              <span className='m-auto uppercase'>php</span>
            </div>          
            <div className='flex flex-col gap-2'>
              <img className="h-[100px]" src='../src/assets/svg/laravel.svg' alt='laravel_icone'/>
              <span className='m-auto uppercase'>laravel</span>
            </div>          
            <div className='flex flex-col gap-2'>
              <img className="h-[100px]" src='../src/assets/jpg/laravel-livewire.jpg' alt='livewire_icone'/>
              <span className='m-auto uppercase'>livewire</span>
            </div>          
            <div className='flex flex-col gap-2'>
              <img className="h-[100px]" src='../src/assets/svg/python.svg' alt='python_icone'/>
              <span className='m-auto uppercase'>python</span>
            </div>          
            <div className='flex flex-col gap-2'>
              <img className="h-[100px]" src='../src/assets/svg/firebase.svg' alt='firebase_icone'/>
              <span className='m-auto uppercase'>firebase</span>
            </div>          
            <div className='flex flex-col gap-2'>
              <img className="h-[100px]" src='../src/assets/svg/mysql-icon.svg' alt='mysql_icone'/>
              <span className='m-auto'>MySQL</span>
            </div>          
          </div>
        </div>
      
    )
}
export default Back
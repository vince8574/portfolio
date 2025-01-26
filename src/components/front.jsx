export function Front() {
    return (
        
        <div className='flex flex-wrap flex-col gap-4 p-8 rounded-[15px] border-1 border-solid border-white w-fit m-auto'>
          <h3 className='m-auto'>front end</h3>
          <div className='flex flex-row gap-4 flex-wrap'>
            <div className='flex flex-col gap-2'>
              <img className="h-[100px]" src='../src/assets/svg/html-5.svg' alt='html_5_icone'/>
              <span className='m-auto uppercase'>html 5</span>
            </div>          
            <div className='flex flex-col gap-2'>
              <img className="h-[100px]" src='../src/assets/svg/css-3.svg' alt='css_3_icone'/>
              <span className='m-auto uppercase'>css 3</span>
            </div>          
            <div className='flex flex-col gap-2'>
              <img className="h-[100px]" src='../src/assets/svg/tailwindcss-icon.svg' alt='tailwindcss_icone'/>
              <span className='m-auto uppercase'>tailwindcss</span>
            </div>          
            <div className='flex flex-col gap-2'>
              <img className="h-[100px]" src='../src/assets/svg/javascript.svg' alt='javascript_icone'/>
              <span className='m-auto uppercase'>javascript</span>
            </div>          
            <div className='flex flex-col gap-2'>
              <img className="h-[100px]" src='../src/assets/svg/react.svg' alt='react_icone'/>
              <span className='m-auto uppercase'>react</span>
            </div>          
                     
          </div>
        </div>
      
    )
}
export default Front
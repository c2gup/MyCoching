import React from 'react'
import boy from '../../assets/Feathers/Group 12.png'
import tick from '../../assets/Feathers/vecteezy_approved-sign-and-symbol-clip-art_22068744.png'

function Feathers() {
  return (
    <>
    
   


    <section>
      <div className="px-2 lg:flex lg:flex-row lg:items-center">

      <div className="w-full lg:w-1/2">
          <img
            src={boy}
            alt="ManWith Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>


        <div className="w-full lg:w-1/2">
          <div className="my-10 lg:my-0 lg:px-10">
            <h2 className="text-3xl font-bold font-nunito leading-tight text-black sm:text-4xl lg:text-4xl">
            What will your child get after studying at Edudu?
            </h2>

            <div className='flex flex-row mt-8  items-center gap-2' >
               <div className='w-5 ' >

                 <img src={tick} alt="" srcset="" /> 
                  </div>  

                  <p className=" max-w-xl font-nunito  text-base leading-relaxed text-black">
          
                  Master program knowledge at school
            </p>
 
            </div>
            <div className='flex flex-row mt-1  items-center gap-2' >
               <div className='w-5 ' >

                 <img src={tick} alt="" srcset="" /> 
                  </div>  

                  <p className=" max-w-xl font-nunito  text-base leading-relaxed text-black">
          
                  Master program knowledge at school
            </p>
 
            </div>
            <div className='flex flex-row mt-1  items-center gap-2' >
               <div className='w-5 ' >

                 <img src={tick} alt="" srcset="" /> 
                  </div>  

                  <p className=" max-w-xl font-nunito  text-base leading-relaxed text-black">
          
                  Master program knowledge at school
            </p>
 
            </div>
            
          </div>
        </div>


        
      </div>
    </section>

    
    
    
    </>
  )
}

export default Feathers

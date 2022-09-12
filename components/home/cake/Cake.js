import Image from 'next/image'
import React from 'react'
import Background from '../../../assets/images/home/cake-background.jpg'

function GreenProducts() {
  return (
    <div className='mb-40 font-merri'>
    <div className='flex flex-col p-6 items-center w-full justify-around md:flex-row'>
    
        <div className=' pt-44 rounded-xl md:w-5/12'>
            <Image 
             src={Background}
             alt=''
             className='rounded-xl drop-shadow-xl'
            />
        </div>

        <div className=' rounded-lg mt-0 md:mt-32 md:w-1/2 md:ml-8'>
           <h1 className='mt-8 text-4xl md:text-5xl  md:mt-0 text-white'>Selbstgemachte Kuchen und Torten</h1>
         
           <p
            style={{color: '#0F3D3E'}}
            className='mt-4 text-lg'>Wir backen unsere Kuchen und Torten <span className='text-white font-bold'>ALLE SELBST</span>. Täglich wird etwas neues für euch gebacken. Unser Süssgebäck ist natürlich auch <span className='text-white font-bold'>SELBSTGEBACKEN</span>.</p> 
        </div>
       
    </div>
</div>
  )
}

export default GreenProducts

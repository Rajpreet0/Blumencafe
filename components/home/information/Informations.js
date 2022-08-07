import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Background from '../../../assets/images/home/background.jpg'

function Informations() {
  return (
<div className='mb-40 font-merri'>
        <div className='flex flex-col p-6 items-center w-full justify-around md:flex-row'>
      
        <div className=' rounded-lg md:w-1/2 '>
               <h1 className='mt-8 text-4xl md:text-5xl  md:mt-0' style={{color: '#0F3D3E'}}>Lorem ipsum dolor</h1>
             
               <p
                style={{color: '#876445'}}
                className='mt-4 text-lg'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
              
             <div className="flex"> 
               <Link href='/'>
                 <button
                 className='p-4 text-white tracking-wider mt-8 rounded-lg drop-shadow-lg cursor-pointer' style={{backgroundColor: '#0F3D3E'}}>
                    Events
                 </button>
               </Link>

             </div>

            </div>

            <div className=' mt-6 border-4 border-black rounded-xl md:w-1/2 md:ml-8'>
                <Image 
                 src={Background}
                 alt=''
                 className='rounded-xl '
                />
            </div>
     
        </div>
    </div>
  )
}

export default Informations

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Background from '../../../assets/images/home/event_background.jpg'
import EventIcon from '../../../assets/images/icons/event.png'

function Informations() {
  return (
<div className='mb-28 font-merri'>
        <div className='flex flex-col p-6 items-center w-full justify-around md:flex-row'>
      
        <div className=' rounded-lg md:w-1/2 '>
             
             <div className='flex'>
               <h1 className='mt-8 text-4xl md:text-5xl text-white md:mt-0'>Events</h1>
               <div className='mt-8 ml-4 w-32 md:mt-1'>
                <Image src={EventIcon} alt='Event in dem Blumencafe'/>
               </div>
             </div>

               <p
                style={{color: '#0F3D3E'}}
                className='mt-4 text-white text-lg'>Im oberen Stockwerk des Blumencafes können Sie bestimmte Events organisieren. Mehr Informationen zur Organisation und der Reservierung der Ebene Rufen Sie bitte an und klicken Sie auf den Button.</p>
              
             <div className="flex"> 
               <Link href='/events'>
                 <button
                 className='p-4 text-white tracking-wider mt-8 rounded-lg drop-shadow-lg cursor-pointer' style={{backgroundColor: '#0F3D3E'}}>
                    Events
                 </button>
               </Link>

             </div>

            </div>

            <div className=' mt-6 drop-shadow-xl md:w-1/2 md:ml-8'>
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

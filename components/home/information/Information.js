import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
<<<<<<< HEAD
import Background from '../../../assets/images/home/home_bg1.jpg'
=======
import Background from '../../../assets/images/home/background.jpg'
>>>>>>> 0220b18e001fa9ca051d6745e0eba28c63e0c6ec

function Information() {
  return (
    <div className='mb-28 font-merri'>
        <div className='flex flex-col p-6 items-center w-full justify-around md:flex-row'>
<<<<<<< HEAD
        
            <div className=' pt-44 rounded-xl md:w-5/12'>
=======

            <div className=' border-4 border-black rounded-xl md:w-1/2'>
>>>>>>> 0220b18e001fa9ca051d6745e0eba28c63e0c6ec
                <Image 
                 src={Background}
                 alt=''
                 className='rounded-xl drop-shadow-xl'
                />
            </div>

            <div className=' rounded-lg mt-0 md:mt-24 md:w-1/2 md:ml-8'>
               <h1 className='mt-8 text-4xl md:text-5xl  md:mt-0 text-white'>Besuche uns</h1>
             
               <p
                style={{color: '#0F3D3E'}}
                className='mt-4 text-lg'>Schalten Sie ab, nehmen Sie sich Zeit und Geniessen Sie unsere Spezialitäten. Wir werden Sie mit verschiedenen Variationen Ihren Gaumen mit Freude erfüllen.</p>
              
             <div className="flex"> 
               <Link href='/'>
                 <button
                 className='p-4 text-white tracking-wider mt-8 rounded-lg drop-shadow-lg cursor-pointer' style={{backgroundColor: '#0F3D3E'}}>
                    Speisekarte
                 </button>
               </Link>

               <Link href='/'>
                 <button
                 className='p-4 text-white tracking-wider mt-8 ml-4 rounded-lg drop-shadow-lg cursor-pointer' style={{backgroundColor: '#0F3D3E'}}>
                    Reservierung
                 </button>
               </Link>
             </div>

            </div>
<<<<<<< HEAD
           
=======
>>>>>>> 0220b18e001fa9ca051d6745e0eba28c63e0c6ec
        </div>
    </div>
  )
}

export default Information

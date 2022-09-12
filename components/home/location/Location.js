import Link from 'next/link'
import React from 'react'

function Location() {
  return (
    <div className='font-merri'>
       <div className='flex flex-col items-center justify-around md:flex-row'>
<<<<<<< HEAD
     
=======
      
>>>>>>> 0220b18e001fa9ca051d6745e0eba28c63e0c6ec
          <div className='w-4/5 md:w-5/12'>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000.4030046377619!2d7.5589059036668065!3d52.13261760567247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9c9c47d7e7667%3A0xff08d379b400dd78!2sDas%20Blumencaf%C3%A9%20-%20Mehr%20als%20Blumen!5e0!3m2!1sde!2sde!4v1659107035835!5m2!1sde!2sde" width="100%" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
              className='rounded-xl drop-shadow-md text-center'></iframe>
          </div>
<<<<<<< HEAD
     
          <div className='text-center mt-16 md:w-1/4 md:mt-0'>
            <h1 className='text-3xl font-bold mb-16 text-white'>Besuche uns 💐</h1>
          
=======
  
          <div className='text-center mt-16 md:w-1/4 md:mt-0'>
            <h1 className='text-3xl font-bold mb-16' style={{color: '#0F3D3E'}}>Besuche uns 💐</h1>
         
>>>>>>> 0220b18e001fa9ca051d6745e0eba28c63e0c6ec
            <a
            target='_blank' rel='noopener noreferrer'
            href='https://www.google.com/maps/dir//Das+Blumencaf%C3%A9+-+Mehr+als+Blumen+Bahnhofstra%C3%9Fe+37+48268+Greven/@52.1323323,7.560383,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47b9c9c47d7e7667:0xff08d379b400dd78!2m2!1d7.560383!2d52.1323323' className='p-3 text-xl px-4 rounded-lg tracking-widest text-white drop-shadow-md' style={{backgroundColor: '#0F3D3E'}}>
              Route 
            </a>
        
             <hr className='mt-16 mb-16' style={{borderColor: '#0F3D3E'}}/>
<<<<<<< HEAD
         
            <Link href='/kontakt'> 
=======
          
            <Link href='/'> 
>>>>>>> 0220b18e001fa9ca051d6745e0eba28c63e0c6ec
             <a className='p-3 text-xl px-4 drop-shadow-md rounded-lg tracking-widest text-white' style={{backgroundColor: '#0F3D3E'}}>
              Reservierung 
            </a>
            </Link>
<<<<<<< HEAD
=======
        
>>>>>>> 0220b18e001fa9ca051d6745e0eba28c63e0c6ec
          </div>
       </div>
    </div>
  )
}

export default Location

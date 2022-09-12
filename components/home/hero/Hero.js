import Image from 'next/image';
import React from 'react'
<<<<<<< HEAD
import HeroBackground from '../../../assets/images/home/hero.jpg';
=======
import HeroBackground from '../../../assets/images/home/hero_background.png';

>>>>>>> 0220b18e001fa9ca051d6745e0eba28c63e0c6ec

function Hero() {
  return (
  <div className='hero_container' style={{height: 950}}>
    <div className='hero_bg '>
        <Image src={HeroBackground} layout='fill' className='object-center'/>
    </div>
  
    <div className='hero_content'>
      <h1 className='text-white font-lobster text-center tracking-wider text-6xl md:text-8xl'>Das Blumencafe</h1>
    </div>
 </div>
  )
}

export default Hero


/*
 <div className='min-h-screen pt-36 font-merri'>
      <div className='flex flex-col items-center w-full justify-around md:flex-row'> 
<<<<<<< HEAD
 
=======
   
>>>>>>> 0220b18e001fa9ca051d6745e0eba28c63e0c6ec
        <div className='p-4 md:pl-12 md:text-left'>
            <h1 className='text-4xl md:text-5xl' style={{color: '#0F3D3E'}}>Lorem ipsum dolor<br/>sit amet,</h1>
            <h2 className='mt-4 text-xl' style={{color: '#876445'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elit <br/> consetetur sadipscing sit amet </h2>
          <div className='flex  mt-4'>
           <Link href='/kontakt'> 
             <button className='p-3 text-lg drop-shadow-md tracking-wide rounded-lg' style={{backgroundColor: '#F9B208', color: '#fff'}}>Reservierung</button>
           </Link>  
               <div className='ml-5 w-3 h-3 mt-5 rounded-full' style={{backgroundColor: '#0F3D3E'}}></div>
            <Link href='/speisekarte'>   
             <button className='p-3 ml-5 text-lg drop-shadow-md tracking-wide rounded-lg' style={{backgroundColor: '#F9B208', color: '#fff'}}>Speisekarte</button>
            </Link>
          </div>
        </div>
<<<<<<< HEAD
    
=======

>>>>>>> 0220b18e001fa9ca051d6745e0eba28c63e0c6ec
        <div className='md:pt-12'>
        <Image
            src={HeroBackground}
            alt=''
           />
        </div>
<<<<<<< HEAD
  
      </div>
    </div>
*/
=======

      </div>
    </div>
  )
}

export default Hero
>>>>>>> 0220b18e001fa9ca051d6745e0eba28c63e0c6ec

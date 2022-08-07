import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import HeroBackground from '../../../assets/images/home/hero_background.png';


function Hero() {
  return (
    <div className='min-h-screen pt-36 font-merri'>
      <div className='flex flex-col items-center w-full justify-around md:flex-row'> 
   
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

        <div className='md:pt-12'>
        <Image
            src={HeroBackground}
            alt=''
           />
        </div>

      </div>
    </div>
  )
}

export default Hero

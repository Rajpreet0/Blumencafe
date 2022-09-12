import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import {HiMenuAlt3} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';

import Logo from '../../assets/images/logo.png';
import DE from '../../assets/images/flags/de.png';
import EN from '../../assets/images/flags/en.png';

function header() {
 
    //Responsive Header Logic 
    const [toggle, setToggle] = useState(false);

    const toggleModal = () => {
        setToggle(!toggle);
    }

  return (
    <div className='font-merri'>
      <nav className='fixed w-full p-2 z-50' style={{backgroundColor: '#a4754a'}}>
         <div className='flex items-center justify-between'>
           <div className='p-4 cursor-pointer drop-shadow-md'>
              <Link href='/'>
                 <Image
                 priority
                 src={Logo}
                 height={80}
                 width={125}
                 alt=""/>
              </Link>
           </div>
           <div className='hidden md:flex space-x-5 text-xl lg:space-x-14 text-white'>
             <Link href='/' className='cursor-pointer hover:tracking-widest transition-all'>
               Home
             </Link>
             <Link href='/neuigkeiten' className='cursor-pointer hover:tracking-widest transition-all'>
               Neuigkeiten
             </Link>
             <Link href='/speisekarte' className='cursor-pointer hover:tracking-widest transition-all'>
               Speisekarte
             </Link>
             <Link href='/events' className='cursor-pointer hover:tracking-widest transition-all'>
               Events
             </Link>
           </div>
           <div className='hidden md:block p-3 px-6 pt-2 text-lg' style={{color: '#fff'}}>
             <div className='flex'>
              <Link href='/kontakt'>
                <button
                className='px-8 py-2 rounded-full tracking-widest hover:scale-110 transition-all drop-shadow-md'
                style={{backgroundColor: '#0F3D3E'}}>
                  Reservieren
                </button>
              </Link>  

                 <div className='ml-2 pt-3   cursor-pointer hover:scale-110 transition-all'>
                  <Image src={DE} alt=''/>
                 </div>
                 <div className='ml-2 mt-3 cursor-pointer hover:scale-110 transition-all'>
                  <Image src={EN} alt=''/>
                 </div>
             </div>
           </div> 
    

            {/* Mobile Menu */}
            {
              !toggle && (
                <button id='menu-btn'
                className='block hamburger md:hidden focus:outline-none'>
                   <HiMenuAlt3
                     style={{color: '#0F3D3E'}}
                     onClick={toggleModal}
                     className='text-3xl cursor-pointer'
                    />
                </button>
              )}
              {toggle && (
                <button id='menu-btn'
                className='block hamburger md:hidden focus:outline-none'>
                     <AiOutlineClose
                       style={{color: '#0F3D3E'}}
                       onClick={toggleModal}
                       className='text-3xl cursor-pointer'
                      />
                </button>
              )}           
         </div>

        {
          toggle && (
            <div>
               <div className='min-h-screen flex flex-col items-center justify-center pb-32  space-y-6 text-xl sm:w-auto
                               sm:self-center  transition-all' style={{backgroundColor: '#a4754a', color: '#fff'}}>
                    <Link href='/' className='cursor-pointer hover:tracking-widest transition-all'>
                      Home
                   </Link>
                   <Link href='/neuigkeiten' className='cursor-pointer hover:tracking-widest transition-all'>
                      Neuigkeiten
                   </Link>
                  <Link href='/speisekarte' className='cursor-pointer hover:tracking-widest transition-all'>
                      Speisekarte
                   </Link>
                  <Link href='/events' className='cursor-pointer hover:tracking-widest transition-all'>
                      Events
                  </Link>
                <div className='block p-3 px-6 pt-2 cursor-pointer' style={{color: '#fff'}}>
                  <Link href='/kontakt'>
                    <button
                     className='px-8 py-2 rounded-full tracking-widest'
                     style={{backgroundColor: '#0F3D3E'}}>
                       Reservieren
                    </button>
                  </Link>  

                <div className='flex justify-around   '>
                 <div className=' mt-3 '>
                  <Image src={DE} alt='' className=' hover:scale-105'/>
                 </div>
                 <div className=' mt-3 '>
                  <Image src={EN} alt='' className='hover:scale-105'/>
                 </div>
                </div>

             </div>
               </div>
            </div>
          )
        }

      </nav>
    </div>
  )
}

export default header
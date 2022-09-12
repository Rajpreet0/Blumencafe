import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {animateScroll as scroll} from 'react-scroll';

import {BsFacebook, BsInstagram, BsFillArrowUpSquareFill} from 'react-icons/bs'
import Logo from '../../assets/images/logo.png';

function Footer() {
 
    const scrollToTop = () => {
        scroll.scrollToTop();
    }

  return (
    <div className='font-merri'>
        <footer className='p-4 sm:p-6' style={{backgroundColor: '#0F3D3E'}}>
           <div className='md:flex md:justify-between'>
              <div className='flex mb-6 md:mb-0'>
                
              <div className='text-white p-2 mt-8 mr-4 md:mt-0 md:mr-0'>
                 <BsFillArrowUpSquareFill className='w-7 h-7 cursor-pointer' onClick={() => scrollToTop()}/>
                </div>

                <Link href='/'>
                   <a className='flex items-center'>
                      <Image
                      src={Logo}
                      height={100}
                      width={145}
                      className='mr-3 h-8'/>
                   </a>
                </Link>
              </div>
              <div className='grid gird-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
                 
                 <div>
                    <h2 className='mb-6 text-md tracking-wider font-semibold text-white uppercase text-center'>Quik Links</h2>
                    <ul className='text-white text-center'>
                        <li className='mb-4'>
                            <Link href='/'><a className='hover:underline'>Home</a></Link>
                        </li>
                        <li className='mb-4'>
                            <Link href='/neuigkeiten'><a className='hover:underline'>Neuigkeiten</a></Link>
                        </li>
                        <li className='mb-4'>
                            <Link href='/speisekarte'><a className='hover:underline'>Speisekarte</a></Link>
                        </li>
                        <li className='mb-4'>
                            <Link href='/events'><a className='hover:underline'>Events</a></Link>
                        </li>
                        <li className='mb-4'>
                            <Link href='/'><a className='hover:underline'>Kontakt</a></Link>
                        </li>
                    </ul>
                 </div>
              
                 <div>
                    <h2 className='mb-6 text-md tracking-wider font-semibold text-white uppercase text-center'>Andere Links</h2>
                    <ul className='text-white text-center '>
                        <li className='mb-4'>
                            <Link href='/jobs'><a className='hover:underline'>Jobs</a></Link>
                        </li>
                        <li className='mb-4'>
                            <Link href='/impressum'><a className='hover:underline'>Impressum</a></Link>
                        </li>

                    </ul>
                 </div>

                 <div>
                    <h2 className='mb-6 text-md tracking-wider font-semibold text-white uppercase text-center'>Kontakt Info</h2>
                    <ul className='text-white text-center '>
                        <li className='mb-4'>
                            <Link href='/kontakt'><a className='hover:underline'>Kontakt</a></Link>
                        </li>
                        <li className='mb-4'>
                            <a href='mailto:blumencafe.kontakt@gmail.com' className='hover:underline'>Email</a>
                        </li>
                        <li className='mb-4'>
                            <a href='tel:' className='hover:underline'>Anruf</a>
                        </li>
                    </ul>
                 </div>

               

              </div>
        
           </div>
           <hr className='my-6 border-white sm:mx-auto lg:my-8'></hr>
           <div className='sm:flex sm:items-center sm:justify-between'>
             <span className='text-sm text-white sm:text-center'>© 2022 Blumencafe. Erstellt von <a href="https://honet.page" className='font-bold hover:underline'>Honet</a></span>
             <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
                <a href='#' className='text-white hover:scale-105 transition-all'>
                  <BsFacebook className='w-5 h-5'/>
                </a>
                <a href='#' className='text-white hover:scale-105 transition-all'>
                  <BsInstagram className='w-5 h-5'/>
                </a>
             </div>
           </div>
        </footer>
    </div>
  )
}

export default Footer
import React from 'react'
import BackgroundHero from '../../assets/images/home/background.jpg'
import Image from 'next/image'
import {Link} from 'react-scroll'
import {BiDownArrowCircle} from 'react-icons/bi'

function Kontakt_Hero() {
  return (
    <div className='hero_container'>
       <div className='hero_bg'>
           <Image src={BackgroundHero} layout='fill' className='object-center'/>
       </div>
       <div className='hero_content'>
          <h1 className='text-white text-center tracking-wider text-5xl'>Kontaktiere Uns</h1>
          <p className='pt-4 text-center text-gray-200 md:max-w-4xl'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
         <div className='pt-5'> 
         <Link activeClass="active" to="reserve" smooth="true"> 
          <BiDownArrowCircle className='text-white mt-4 w-8 h-8 cursor-pointer hover:scale-105'/>
         </Link>
        </div>
       </div>
    </div>
  )
}

export default Kontakt_Hero
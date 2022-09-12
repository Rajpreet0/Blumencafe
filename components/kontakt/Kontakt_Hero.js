import React from 'react'
import BackgroundHero from '../../assets/images/kontakt_background.jpg'
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
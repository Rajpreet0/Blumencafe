import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/Footer'
import Background from '../../assets/images/event-background.jpg'
import {BsCheckCircleFill, BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import Image from 'next/image'

function Jobs() {
  return (
    <div>
      <Header/>  
        <div className='min-h-screen pt-40 pb-12 font-merri' style={{backgroundColor: '#FFDF9BFF'}}>
         
           <h1 className='font-satisfy text-center text-6xl' style={{color: '#0F3D3E'}}>Jobs</h1>

          <div className='flex flex-col w-full items-center'> 
           
           <p className='text-center p-4 mt-4 md:max-w-3xl'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At</p>
            
            <div className='p-4 md:max-w-3xl md:p-0'>
              <Image
               src={Background}
               alt=''
               className='rounded-lg'/>
            </div>

            <p className='text-center p-4 mt-2 mb-2 md:max-w-3xl'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At</p>
           
            <h2 className='font-bold tracking-widest text-2xl mb-4'>Wir suchen</h2>
            
            <div className='flex mt-4'>
                <BsCheckCircleFill className='w-5 h-5 mt-1' style={{color: '#0F3D3E'}}/>
                <p className='ml-4 text-xl'>Kellner</p>
            </div>
            <div className='flex mt-4'>
                <BsCheckCircleFill className='w-5 h-5 mt-1' style={{color: '#0F3D3E'}}/>
                <p className='ml-4 text-xl'>Kellner</p>
            </div>
            <div className='flex mt-4'>
                <BsCheckCircleFill className='w-5 h-5 mt-1' style={{color: '#0F3D3E'}}/>
                <p className='ml-4 text-xl'>Kellner</p>
            </div>
            
            <hr className='w-10/12 mt-8 border border-black '/>

            <h2 className='text-2xl mt-4'>Kontaktiere uns Jetzt</h2>
           
           <a href='tel:+49 176 76729010'>
            <div className='flex text-white p-4 rounded-lg mt-6 cursor-pointer' style={{backgroundColor: '#0F3D3E'}}>
                <BsFillTelephoneFill className='w-5 h-5 mt-1'/>
                <p className='ml-4'>+49 176 76729010</p>
            </div>
           </a> 

          <a href='mailto:blumencafe.kontakt@gmail.com'>
            <div className='flex text-white p-4 rounded-lg mt-4 cursor-pointer ' style={{backgroundColor: '#0F3D3E'}}>
                <MdEmail className='w-6 h-6 '/>
                <p className='ml-4'>blumencafe.kontakt@gmail.com</p>
            </div>
          </a>  

          </div>
        </div>
      <Footer/>  
    </div>
  )
}

export default Jobs
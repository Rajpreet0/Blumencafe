import React from 'react'
import Header from '../../components/header/header';
import Footer from '../../components/footer/Footer';
import Image from 'next/image';
import Link from 'next/link';
import Background from '../../assets/images/event-background.jpg'
import I_Wedding from '../../assets/images/icons/rings.png'
import I_Catering from '../../assets/images/icons/catering.png';
import I_Birthday from '../../assets/images/icons/birthday-cake.png'

function Events() {
  return (
    <div>
     <Header/> 
        <div className='min-h-screen pt-36 pb-20 font-merri' style={{backgroundColor: '#FFDF9BFF'}}>
      
            <h1 className='text-center mb-5 text-6xl font-satisfy' style={{color: '#0F3D3E'}}>Events</h1>

           <div className='flex flex-col p-4  justify-between items-center md:p-0 '>
              <div className='p-4 bg-white  rounded-lg border shadow-md md:max-w-2xl md:p-0 '>
              <Image
              src={Background}
              alt=''
              className='object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
              />
              <div className='flex flex-col justify-between p-4 leading-normal'>
                <h5 className='md-2 text-2xl font-bold tracking-tight text-black'>Noteworthy technology acquisitions 2021</h5>
                <p className='mb-1 font-normal text-gray-700'>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>

               <hr className='m-1 border  border-gray-600'/>
                   
                   <div className='flex flex-col mt-4 mb-4 justify-around items-center md:flex-row '>
                      <Image
                       src={I_Wedding}
                       alt=''
                       className=''
                      />
                      <p className='max-w-lg mt-2 md:mt-0'><span className='font-bold'>Here</span>  <br/> are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                   </div>
        
                <hr className='m-4 '/>  

                <div className='flex flex-col mt-4 mb-4 justify-around items-center md:flex-row '>
                      <Image
                       src={I_Catering}
                       alt=''
                       className=''
                      />
                      <p className='max-w-lg mt-2 md:mt-0'><span className='font-bold'>Here</span>  <br/> are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>

                <hr className='m-4 '/>  

                <div className='flex flex-col mt-4 mb-4 justify-around items-center md:flex-row '>
                      <Image
                       src={I_Birthday}
                       alt=''
                       className=''
                      />
                      <p className='max-w-lg mt-2 md:mt-0'><span className='font-bold'>Here</span> <br/> are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>

                <hr className='m-1 border  border-gray-600'/>

            
                <Link href='/kontakt'>
                  <button className='p-4 m-4 text-xl rounded-lg tracking-wider text-white' style={{backgroundColor: '#0F3D3E'}}>
                     Kontaktieren
                  </button>
                </Link>
            

             </div>
           </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Events
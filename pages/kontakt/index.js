import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/Footer'
import Kontakt_Hero from '../../components/kontakt/Kontakt_Hero'
import Reservierung from '../../components/kontakt/Reservierung'
import KontaktForm from '../../components/kontakt/Kontakt'
import {BsTelephoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {RiInstagramFill} from 'react-icons/ri';


function Kontakt() {
  return (
    <div>
        <Header/>
         <div className='font-merri min-h-screen pt-30' style={{backgroundColor: '#FFDF9BFF'}}>
            <Kontakt_Hero/>
            <Reservierung/>
            <hr className='border border-black '/>
            <div className='mt-14'>
              <h1 className='text-center text-4xl tracking-wide'>Anliegen ?</h1>
              <h2 className='text-center text-xl mt-2'>Erreiche uns auf andere Wege</h2>
              
          <div className='flex justify-around mt-24'>
              <div className=' p-4 rounded-full hover:scale-110 transition-all cursor-pointer' style={{backgroundColor: '#0F3D3E'}}> 
               <a href='mailto:rajpreet.singh@gmx.de'><BsTelephoneFill style={{width: 30, height: 30}} className="text-white" /></a>
               
             </div>              
             <div className=' p-4 rounded-full hover:scale-110 transition-all cursor-pointer' style={{backgroundColor: '#0F3D3E'}}> 
               <a href='mailto:rajpreet.singh@gmx.de'><MdEmail style={{width: 30, height: 30}} className="text-white" /></a>
             </div>
             <div className=' p-4 rounded-full hover:scale-110 transition-all cursor-pointer' style={{backgroundColor: '#0F3D3E'}}> 
               <a href='mailto:rajpreet.singh@gmx.de'><RiInstagramFill style={{width: 30, height: 30}} className="text-white" /></a>
             </div>
           </div> 
          </div>
            
            <KontaktForm/>
         </div>
        <Footer/>
    </div>
  )
}

export default Kontakt
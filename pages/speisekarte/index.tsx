import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/header'
import {FcCloseUpMode} from 'react-icons/fc'
import { sanityClient, urlFor } from '../../sanity'
import { SpeisekarteData } from '../../typings'


interface Props {
  speisekarte: [SpeisekarteData]
}

export default function Speisekarte({speisekarte}:Props) {
 
  return (
    <div>
      <Header/>
        <div className='min-h-screen font-merri pt-44' style={{backgroundColor: '#a4754a'}}>
            
           <div className='flex flex-col w-full items-center'>
                <h1 className='font-satisfy text-white  text-7xl' >Speisekarte</h1>
                <div className='flex justify-center'>
                  <div className='w-6 h-1 bg-black rounded-full mr-4 flex mt-6 border  ' style={{borderColor: '#0F3D3E'}}></div>  
                   <FcCloseUpMode className='w-14 h-14'/>
                  <div className='w-6 h-1 bg-black ml-4 mt-6 rounded-full border  ' style={{borderColor: '#0F3D3E'}}></div>
                </div>
                <p className='mt-4 text-center md:max-w-3xl md:p-4' style={{color: '#0F3D3E'}}>
                 Unsere Speisekarte wird wöchentlich geändert, also lohnt es sich mal hier vorbeischauen.
                </p>
           </div>

           {speisekarte.map(speisekarte => (
             
           <div className='flex items-center justify-center'>  
             <div className='p-6 mt-24 max-w-4xl md:mt-0'>
                 
                <img
                 src={urlFor(speisekarte.speisekarte).url()!}
                 className="rounded-lg hover:scale-125 transition-all md:hover:scale-150"
              
                />
               
             </div>
           </div>
           ))}

        </div>
       <Footer/>
    </div>
  )
}




export const getServerSideProps = async () => {
   const query = `*[_type == "speisekarte"]{
    _id,
    speisekarte,
  }`
 
  const speisekarte = await sanityClient.fetch(query);

  return  {
    props: {
      speisekarte,
    }
  }

}
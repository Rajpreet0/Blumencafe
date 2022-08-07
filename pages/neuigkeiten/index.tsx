import React from 'react'
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/header';
import {sanityClient, urlFor} from '../../sanity';
import { NeuigkeitData } from '../../typings';
import Link from 'next/link';

interface Props {
  neuigkeiten: [NeuigkeitData];
}

export default function Neuigkeiten({neuigkeiten}:Props) {
  return (
    <div>
        <Header/>
        <div className='min-h-screen pt-28 font-merri' style={{backgroundColor: '#FFDF9BFF'}}> 
        <div className='flex justify-between items-center 
        border-y border-black text-white py-10 lg:py-0' style={{backgroundColor: '#0F3D3E'}}>
         <div
         className='px-10 p-20 space-y-5'>
           <h1 className='text-6xl max-w-xl font-serif'>
            <span
             className='underline decoration-white text-white decoration-4'
            >Medium</span> {" "} is a place to write, read, and connect
            </h1>
           <h2 >
             It's easy and free to post your thinking on any topic and connect
             with millions of readers.
           </h2>
         </div> 
         
       </div>

    <div className='flex flex-col items-center mt-20  justify-center p-6 md:p-0'>
 
      {neuigkeiten.map(neuigkeiten => (

        <Link
        key={neuigkeiten._id}
        href={`/neuigkeit/${neuigkeiten.slug.current}`}>

       <div className='flex flex-col mb-12 items-center cursor-pointer bg-white rounded-lg border drop-shadow-lg md:flex-row md:max-w-2xl hover:bg-gray-100 hover:scale-105 transition-all'>
          <img
           src={urlFor(neuigkeiten.neuigkeitenBild).url()!}
           alt=''
           className='object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
               <p className='text-lg mb-2 tracking-wider md:text-xl'>{neuigkeiten.zeitraum}</p>
               <h5 className='text-2xl mb-2 font-bold tracking-tight md:text-3xl'>{neuigkeiten.titel}</h5>
           </div>
        </div>

        </Link>
       ))}
         
    </div> 
       </div>
 
        <Footer/>
    </div>
  )
}


export const getServerSideProps = async () => {
  const query = `*[_type == "neuigkeiten"] | order(todaydate desc) {
    _id,
    titel,
    zeitraum,
    slug,
    beschreibung,
    neuigkeitenBild,
  }`
 
  const neuigkeiten = await sanityClient.fetch(query);

  return {
    props:{
      neuigkeiten,
    }
  }

}
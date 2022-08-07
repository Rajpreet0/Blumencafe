import React from 'react'
import Header from '../components/header/header';
import Footer from '../components/footer/Footer';
import Lottie from 'react-lottie';
import Coffee from '../assets/error_coffee.json';
import {BsFacebook, BsInstagram} from 'react-icons/bs'
import Link from 'next/link';

function Custom404() {
 
    //Lottie Animation Logic 
    const defaultLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: Coffee,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
         }
    }

  return (
    <div className='font-merri '>
        <Header/>
          <div className='flex flex-col items-center justify-around min-h-screen p-44 md:flex-row' style={{backgroundColor: '#FFDF9BFF'}}>
            <div >
               <h1 className='font-bold mb-4 text-white text-9xl'>404</h1>
               <p className='mb-2  text-2xl font-bold  text-black md:text-3xl'>
                 <span className='text-black'>Oops!</span> Seite nicht gefunden
               </p>
               <p className=' mb-4  text-black md:text-lg'>
                Diese Seite existiert leider nicht.</p>
               
                <div className='flex mb-5'>
                <a href='#' className='text-white hover:scale-105 transition-all'>
                  <BsInstagram className='w-6 h-6'/>
                </a>
                <a href='#' className='text-white ml-4 hover:scale-105 transition-all'>
                <BsFacebook className='w-6 h-6'/>
                </a>
                </div>

                  <Link href='/'>
                    <a className='px-6  py-2 text-sm font-semibold rounded-md text-black bg-white'>
                      Zurück
                    </a>
                  </Link>  
        

            </div>
            <div style={{backgroundColor: '#FFDF9BFF'}}>
              <Lottie options={defaultLottieOptions} height={400} width={300}/>
            </div>
          </div>
        <Footer/>
    </div>
  )
}

export default Custom404
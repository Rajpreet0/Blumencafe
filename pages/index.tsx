import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import Loading from '../components/home/loading/Loading';
import Header from '../components/header/header';
import Hero from '../components/home/hero/Hero';
import Footer from '../components/footer/Footer';
import Location from '../components/home/location/Location';
import Gallery from '../components/home/gallery/Gallery';
import Link from 'next/link';
import Information from '../components/home/information/Information'
import Informations from '../components/home/information/Informations'
import Banner from '../components/home/banner/Banner'

const Home: NextPage =  () => {

  // Ladescreen Logic
 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);


  return (
    <div>
      <Head>
        <title>Blumencafe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
       {loading ? (
        <div>
          <Loading/>
        </div>
       ):(
        <>
          <Header/>
          <div className='min-h-screen' style={{backgroundColor: '#FFDF9BFF'}}>
            <Hero/>
            <Information/>
            <Informations/> 
            <Gallery/>
            <Banner/>
            <Location/>
          </div>
          <div className='font-merri' style={{backgroundColor: '#FFDF9BFF'}}>
            
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#0F3D3E" fill-opacity="1" d="M0,192L60,208C120,224,240,256,360,261.3C480,267,600,245,720,234.7C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
             </svg>

           <div className='flex flex-col items-center justify-around w-full pb-44 md:flex-row' style={{backgroundColor: '#0F3D3E'}}>  
             <h1 className='text-white text-6xl pt-8 md:pt-0' >Jobs ?</h1>
            <Link href='/jobs'> 
             <button className='text-white text-lg tracking-wider p-5 mt-8 rounded-lg drop-shadow-lg md:mt-0' style={{backgroundColor: '#F9B208'}}>
               Bewerben
             </button>
             </Link>
           </div>

          </div>
          <Footer/>
        </>
       )}

    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me?fields=id,username&access_token?grant_type=ig_exchange_token&client_secret=${process.env.INSTAGRAM_CLIENT_SECRET}&access_token=${process.env.INSTAGRAM_TOKEN}`
  const data = await fetch(url);
  const feed = await data.json();

  console.log(feed);

  return {
    props: {

    }
  }
}

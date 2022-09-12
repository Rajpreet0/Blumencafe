import Link from 'next/link'
import React from 'react'
import Fade from 'react-reveal/Fade'

function Banner() {
  return (
    <div className='mb-40 font-merri'>
    
       <div class=" mx-auto py-9 md:py-12 px-4 md:px-6">
            <div class="flex  justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div class="flex flex-col rounded-xl md:flex-row items-strech justify-between py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12" style={{backgroundColor: '#0F3D3E'}}>
                    <div class="flex flex-col justify-center md:w-1/2">
                        <h1 class="text-3xl lg:text-4xl font-semibold text-white">Neuigkeiten</h1>
                        <p class="text-base lg:text-xl text-white mt-2">Alle Neuigkeiten, Rabatte etc. können Sie hier finden.</p>
                    </div>
                    <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                        <Link href='/neuigkeiten'>
                          <button className='p-4 text-white rounded-lg px-10 text-xl' style={{backgroundColor:'#F9B208'}}>Hier</button>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
     
    </div>
  )
}

export default Banner
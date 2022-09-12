import Image from 'next/image'
import React from 'react'
import Background from '../../../assets/images/home/background.jpg';

import One from '../../../assets/images/galerie/One.jpg';
import Two from '../../../assets/images/galerie/Two.jpg';
import Three from '../../../assets/images/galerie/Three.jpg';
import Four from '../../../assets/images/galerie/Four.jpg';
import Five from '../../../assets/images/galerie/Five.jpg';
import Six from '../../../assets/images/galerie/Six.jpg';

function Gallery() {
  return (
    <div className='min-h-screen pb-40 font-merri'>
        <h1 className='text-center text-4xl text-white pb-8 tracking-wider'>Unsere Galerie</h1>
    <div class="container mx-auto">
    <div class="grid-cols-3  drop-shadow-lg p-20 space-y-2 rounded-lg lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
        <div class="w-full rounded">
            <Image src={Two} className='rounded-lg'
                alt="image"/>
        </div>
       
        <div class="w-full col-span-2 row-span-2 rounded">
        <Image src={One} className='rounded-lg'
                alt="image"/>
        </div>
        
        <div class="w-full rounded">
        <Image src={Three} className='rounded-lg'
                alt="image"/>
        </div>
        <div class="w-full rounded">
        <Image src={Four} className='rounded-lg'
                alt="image"/>
        </div>
        <div class="w-full rounded">
        <Image src={Five} className='rounded-lg'
                alt="image"/>
        </div>
        <div class="w-full rounded">
        <Image src={Six} className='rounded-lg'
                alt="image"/>
        </div>
    </div>
</div>
    </div>
  )
}

export default Gallery
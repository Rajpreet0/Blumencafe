import React from 'react'
import ProductOne from '../../../assets/images/products/p_one.jpg'
import ProductTwo from '../../../assets/images/products/p_two.jpg'
import ProductThree from '../../../assets/images/products/p_three.jpg'
import Image from 'next/image'

function SpeicalProducts() {
  return (
   <div className='mb-40 font-merri'>
    <h1 className='text-center text-4xl text-white pb-8 tracking-wider'>Unsere einzigartigen Produkte</h1>
    <div className="offer_main">
            
             <div className="container_middle">
              <section className="container_offer">
                 <div className="container_card">
                    <div className="container_imgBx">
                       <Image src={ProductOne} ></Image>
                    </div>
                    <div className="container_contentBx">
                       <div className="container_content">
                          <h3 className='underline mb-4'>Aufstriche</h3>
                          <p>
Hier im Blumencafe gibt es Premium Aufstriche unteranderem auch con ST.Dalifour ein Fruchtaufstrich aus Frankreich, hergestellt mit einem speziellen Familienrezept.
</p>
                       </div>
                    </div>
                 </div>
                 <div className="container_card">
                    <div className="container_imgBx">
                   
                       <Image src={ProductTwo}></Image>
                
                    </div>
                    <div className="container_contentBx">
                       <div className="container_content">
                          <h3 className='underline mb-4'>Teesorten</h3>
                          <p>
Exklusiv hier im Blumencafe finden Sie Teemischungen, die nach Meer schmecken: Meer Friesennerz, Meer Gummistiefel, Meer Schlick. Feiner Geschmack korrespondiert mit rauem Klima. Und das Ganze natürlich in Bioqualität. Kommen Sie her und testen Sie die Produkte von "Trink Meer Tee".</p>
                       </div>
                    </div>
                 </div>
                 <div className="container_card">
                    <div className="container_imgBx">
                       <Image src={ProductThree}></Image>
                    </div>
                    <div className="container_contentBx">
                       <div className="container_content">
                          <h3 className='underline mb-4'>Liköre</h3>
                          <p>Die Allgäu-Brennerei erstellt premium Liköre her die auch hier im Blumencafe verkauft werden.</p>
                       </div>
                    </div>
                 </div>
                 
                 
                 
              </section>
              </div>
        </div>
   </div>
  )
}

export default SpeicalProducts
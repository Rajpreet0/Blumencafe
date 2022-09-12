import { GetStaticProps } from 'next'
import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/header'
import { sanityClient,urlFor } from '../../sanity'
import { NeuigkeitData } from '../../typings'
import {BsArrowLeftCircle} from 'react-icons/bs';
import PortableText from 'react-portable-text';
import Link from 'next/link'


interface Props {
    neuigkeits: NeuigkeitData;
    
}

export default function Neuigkeit({ neuigkeits }: Props) {
 
  return (
    <div>
        <Header/>
        <div className='pb-32 font-merri pt-40' style={{backgroundColor: '#a4754a'}}>  
            
            <Link href='/neuigkeiten'>
             <div className='flex p-4'>   
               <BsArrowLeftCircle className='w-6 h-6 cursor-pointer text-white'/>
               <p className='pl-3 text-md cursor-pointer text-white'>Zurück</p>
             </div>
            </Link> 

            <div className='flex  flex-col p-6 md:flex-row'>
               
               <img
                src={urlFor(neuigkeits.neuigkeitenBild).url()!}
                alt=''
                className='h-40 w-40 rounded-2xl  drop-shadow-lg hover:scale-105 transition-all'
                style={{borderColor: '#0F3D3E', borderWidth: 2}}
               ></img> 
      
              <div className='flex flex-col justify-center'>
                <p className='pl-4 text-xl mt-4 text-white  md:mt-0'>{neuigkeits.zeitraum}</p>
                <p className='pl-4 pt-2 text-4xl text-white '>{neuigkeits.titel}</p>
              </div>

            </div>
            
             <article className='m-4 p-8 rounded-lg shadow-lg bg-white '>
                <div className=''>
                  <PortableText
                   className='tracking-wide'
                   dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                   projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                   content={neuigkeits.beschreibung}
                   serializers={{
                    h1: (props: any) => (
                        <h1 className="text-2xl font-bold my-5" {...props}/>
                    ),
                    h2: (props: any) => (
                        <h1 className="text-xl font-bold my-5" {...props}/>
                    ),
                    li: ({ children }: any) => (
                        <li className="ml-4 list-disc">{children}</li>
                    ),
                    link: ({ href, children}: any) => (
                       <a href={href} className="text-blue-500 hover:underline">
                           {children}
                       </a>
                    ),
                }}
                  />
                </div>
             </article>

            </div>
        <Footer/>
    </div>
  )
}


export const getStaticPaths = async () => {
    const query = `*[_type == "neuigkeiten"]{
        _id,
        slug {
            current
        }
    }`;

    const neuigs = await sanityClient.fetch(query);

    const paths = neuigs.map((neuigkeits: NeuigkeitData) => ({
        params: {
            slug: neuigkeits.slug.current,
        },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    const query = `*[_type == "neuigkeiten" && slug.current == $slug][0]{
        _id,
        titel,
        zeitraum,
        neuigkeitenBild,
        beschreibung,
        slug,
    }`

    const neuigkeits = await sanityClient.fetch(query, {
        slug: params?.slug
    });

    if(!neuigkeits) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            neuigkeits,
        },
        revalidate: 60,
    }
}


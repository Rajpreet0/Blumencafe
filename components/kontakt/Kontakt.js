import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function KontaktForm() {

 
  const [surname_k, setSurname_k] = useState('')
  const [lastname_k, setLastname_k] = useState('')
  const [event, setEvent] = useState(null)
  const [email_k, setEmail_k] = useState('')
  const [telefon_k, setTelefon_k] = useState('')
  const [anliegen, setAnliegen] = useState('')

  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm(
      'service_lmhud3c',
      'template_nuhpyif',
      e.target,
      'zj8F7niepheGNfeNU',
    ).then(res => {
      toast.success(`Deine Email wurde an uns weitergeleitet. Wir werden uns melden!`);
      setSurname_k('');
      setLastname_k('');
      setEvent(null);
      setEmail_k('');
      setTelefon_k('');
      setAnliegen('');
    }).catch(err => {
      toast.error(`Leider hat was nicht geklappt`)
    });
  }

  return (
    <div> 
     <ToastContainer/> 
       <div className='flex flex-col w-full md:pt-40 itesms-center justify-center min-h-screen md:flex-row'>
           <form 
           onSubmit={sendEmail}
           className='md:max-w-6xl'>
             <div className='flex flex-col   justify-center md:flex-col'>

                <div className='flex flex-col mt-8 md:flex-row w-full px-6 md:mt-0'>
      
                  <div className='md:w-1/2 px-0.5'>
                    <input 
                    placeholder='Vorname' required value={surname_k} onChange={() => setSurname_k()}
                    name='surname_k' className='apperance-none w-full md:w-4/5 rounded-lg p-6 mb-3 leading-tight shadow-inner bg-white focus:outline-none focus:bg-white '/>
                  </div>
                  <div className='md:w-1/2 '>
                    <input 
                    placeholder='Nachname' required value={lastname_k} onChange={() => setLastname_k()}
                    name='lastname_k' className='apperance-none w-full md:w-4/5 rounded-lg p-6 mb-3 leading-tight shadow-inner bg-white focus:outline-none focus:bg-white '/>
                  </div>
  

                </div>


                <div className='flex flex-col md:flex-row w-full px-6'>
                 
                  
                 <div className='md:w-1/3 px-0.5'>
                   <select 
                   name='event' value={event} onChange={() => setEvent()}
                   className='apperance-none w-full md:w-4/5 rounded-lg p-6 mb-3 leading-tight shadow-inner bg-white focus:outline-none focus:bg-white '>
                    <option>Event (optional)</option>
                    <option>Hochzeit</option>
                    <option>Catering</option>
                    <option>Geburtstag</option>
                   </select>
                 </div>
                 <div className='md:w-1/3 '>
                   <input 
                   placeholder='Email' required value={email_k} onChange={() => setEmail_k()}
                   name='email_k' className='apperance-none w-full md:w-4/5 rounded-lg p-6 mb-3 leading-tight shadow-inner bg-white focus:outline-none focus:bg-white '/>
                 </div>
                
                 <div className='md:w-1/4'>
                <input
                name='telefon_k'  
                placeholder='Telefon (optional)' value={telefon_k} onChange={() => setTelefon_k()}
                className='apperance-none w-full md:w-4/5  rounded-lg p-6 mb-3 leading-tight shadow-inner bg-white focus:outline-none focus:bg-white ' 
                     />
                </div>
               </div>
               <div className='px-6'>
                <textarea  
                placeholder='Anliegen...'
                name='anliegen'
                required  value={anliegen} onChange={() => setAnliegen()}
                className='apperance-none w-full md:w-11/12 h-80 no-resize rounded-lg p-6 mb-3 leading-tight shadow-inner focus:outline-none focus:bg-white '/>
                </div>

                <input 
                 
                type='submit' className='ml-6 px-8 py-3 text-xl max-w-xs  rounded-lg drop-shadow-md text-white cursor-pointer hover:scale-110 transition-all' style={{backgroundColor: '#0F3D3E'}} ></input>
               
             
             </div>
             
            </form>
       </div>
      <div className='p-4 '> 
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.7101838473845!2d7.5542898810068735!3d52.1304475681219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9c9c47d7e7667%3A0xff08d379b400dd78!2sDas%20Blumencaf%C3%A9%20-%20Mehr%20als%20Blumen!5e0!3m2!1sde!2sde!4v1659879821508!5m2!1sde!2sde" width="100%" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
              className='rounded-lg border-4 text-center' style={{borderColor: '#0F3D3E'}}></iframe>
      </div>
      
    </div>              
     
  )
}

export default KontaktForm


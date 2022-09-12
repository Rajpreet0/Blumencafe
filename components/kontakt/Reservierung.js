import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import de from 'date-fns/locale/de';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com'
import {ToastContainer, toast} from 'react-toastify'
function Reservierung() {
 
    
 
    const [surname, setSurname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [selectedDate, setSelectedDate] = useState(null)
    const [clock, setClock] = useState(null)
    const [members, setMembers] = useState("")
    const [message, setMessage] = useState("")

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm(
          'service_lmhud3c',
          'template_ip7wxkp',
          e.target,
          'zj8F7niepheGNfeNU'
        ).then(res => {
          toast.success(`Die Reservierung wurde an uns weitergeleitet. Wir werden uns melden!`);
          setSurname('');
          setLastname('');
          setEmail('');
          setPhone('');
          setSelectedDate(null);
          setClock(null);
          setMembers('');
          setMessage('');
        }).catch(err => {
            toast.error(`Leider hat was nicht geklappt`)
        });
      }
   
 
  return (
  <>  
  <ToastContainer/>
    <div className='font-merri mt-14 pb-8' id='reserve'>
         <h1 className='text-center text-4xl tracking-wide text-white'>Reservierung</h1>
       <div className='flex justify-center mt-4 w-full'> 
         <p className='text-center text-lg max-w-3xl' style={{color: '#0f3d3e'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At</p>
       </div>
       

  
  <div className='flex pt-14 w-full justify-center'>
      
    <div className=' flex p-5 '>  
    <form 
    onSubmit={sendEmail}
    className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-4">


    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
      <label className="block  uppercase tracking-widest text-white text-xs font-bold mb-2" for="grid-first-name">
        Vorname
      </label>
      <input
      name="surname"
      required 
       value={surname} onChange={() => setSurname()}
      className="appearance-none block w-full bg-white text-gray-700  rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Max"/>
     
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
         Nachname
      </label>
      <input 
      name="lastname"
      required
       value={lastname} onChange={() => setLastname()}
      className="appearance-none block w-full bg-white text-gray-700  rounded py-5 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" placeholder="Mustermann"/>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-4">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block  uppercase tracking-widest text-white text-xs font-bold mb-2" for="grid-first-name">
        E-mail
      </label>
      <input 
      name="email"
      required
        value={email} onChange={() => setEmail()}
      className="appearance-none block w-full bg-white text-gray-700  rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="max@gmail.de"/>
     
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
         Telefon
      </label>
      <input 
      name="phone"
      required
      value={phone} onChange={() => setPhone()}
      className="appearance-none block w-full bg-white text-gray-700  rounded py-5 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" placeholder="+123 456789"/>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
        Datum
      </label>
      <DatePicker
         className='appearance-none block w-full py-5 px-4 leading-tight focus:outline-none rounded cursor-pointer text-black bg-white  border-none'
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat='dd.MM.yyyy '
          minDate={new Date()}
          filterDate={date => date.getDay() != 1}
          withPortal
          locale={de}
          placeholderText='06/08/19'
          required
          name="date"
          />
    </div>
    <div class="w-full md:w-1/3 px-3 mb-4 md:mb-0">
     <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
         Uhrzeit
      </label>
      <input 
      name="clock"
      required
      value={clock} onChange={() => setClock()}
      className="appearance-none block w-full bg-white text-gray-700  rounded py-5 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="time" min="09:00" max="18:00"   placeholder="13:30"/>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-zip">
        Personenanzahl
      </label>
      <input 
      name="members"
      required
      value={members} onChange={() => setMembers()}
      className="appearance-none block w-full bg-white text-gray-700   rounded py-5 px-4 leading-tight focus:outline-none focus:bg-white " id="grid-zip" type="number" placeholder="1" min="1" max="10"/>
    </div>
    
   <div className='w-full px-3 mt-4 mb-6 md:mb-0'>
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-zip">
        Notiz <span className='text-white lowercase'>(optional)</span>
      </label>
      <textarea
      name="note" 
      value={message} onChange={() => setMessage()}
      className="appearance-none block w-full bg-white text-gray-700   rounded py-5 px-4 leading-tight focus:outline-none focus:bg-white" placeholder="Deine Nachricht..." required></textarea>
   </div>

   <div className='w-full px-3 mt-4 mb-6 md:mb-0'>
       <input type="submit" className="text-white text-xl px-6 py-4 rounded-lg cursor-pointer" value="Reservieren" style={{backgroundColor: '#0F3D3E'}}></input>
   </div>

  </div>
</form>
</div>
</div>
   
    </div>

    </>
  )
}

export default Reservierung


/*
  
  For DatePicker 
 
  -> If you want to filter Days Out 

   filterDate={date => date.getDay() != 4 && date.getDay() != 0}
    
   0 = Su
   1 = Mo 
   .
   .
   .
   .
   6 = Sa 

   isClearable [To clear a selected Date]

            <DatePicker
         className=' p-4 rounded text-white bg-emerald-900 shadow-xl border-none'
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat='dd.MM.yyyy, h:mm '
          minDate={new Date()}
          withPortal
          locale={de}
          showTimeSelect
          timeFormat='hh:mm '
          timeCaption='Zeit'
          placeholderText='Reservierung hier klicken'
          />


*/ 

/*
         <DatePicker
         className=' p-4 rounded text-white bg-emerald-900 shadow-xl border-none'
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat='dd.MM.yyyy '
          minDate={new Date()}
          withPortal
          locale={de}
          placeholderText='Reservierung hier klicken'
          />
*/ 
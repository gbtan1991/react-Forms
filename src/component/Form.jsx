import React, { useState } from 'react'

const Form = () => {

   const [name, setName] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
   const [bookingTime, setBookingTime] = useState('');
   const [bookingDate, setBookingDate] = useState('');
   const [diningPackage, setDiningPackage] = useState('');
   const [guests, setGuests] = useState('');
   


  return (
    <div className=' bg-hunyadi-yellow w-auto mx-4 my-5 p-4 rounded-br-xl rounded-bl-xl'>
        <div className='grid place-content-center text-center h-full w-full '>
      <h1 className='text-xl font-bold w-auto'>
        Book your Italian experience.
      </h1>

      <fieldset >
      <form action="#" method="get" className='flex flex-col gap-5 my-5'>
        <div className='relative'>
        <input 
            type="text" 
            id="name" 
            name="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className='bg-transparent border-2 border-tigers-eye w-full h-10 rounded-lg px-3 outline-none textinput z-10 text-tigers-eye'
          />
          <label htmlFor="name" className='w-auto h-8 absolute text-xl text-left text-tigers-eye font-semibold top-1 left-3 label bg-hunyadi-yellow '>Your Name</label>
         
        </div>
        
        <div className='relative'>
          <input 
            type="text" 
            id="phone-number" 
            name="phone-number" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            className='bg-transparent border-2 border-tigers-eye w-full h-10 rounded-lg px-3 outline-none textinput z-10 text-tigers-eye'
          />
          <label htmlFor="phone-number" className='w-auto h-8 absolute text-xl text-left text-tigers-eye font-semibold top-1 left-3 label bg-hunyadi-yellow'>Phone Number</label>
        </div>
      </form>
    </fieldset>

    </div>

    </div>
  )
}

export default Form

import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [guests, setGuests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const formData = {
      name,
      phoneNumber,
      bookingTime,
      bookingDate,
      guests,
    };

    console.log("Form Data:", formData);
    // Here you can send the formData object to a server or handle it as needed
    // For example, using fetch:
    /*
    fetch('your-api-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch((error) => console.error('Error:', error));
    */
  };

  return (
    <div className="bg-onyx mx-4 mb-5 p-4 rounded-br-xl rounded-bl-xl lg:mx-0 lg:mb-0 lg:rounded-tr-xl lg:rounded-bl-none">
      <div className="grid place-content-center text-center h-full w-full">
        <h1 className="text-xl font-bold w-auto text-white">
          Book your Italian experience.
        </h1>

        <fieldset>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 my-5">
            <div className="relative border-b-[1px] border-white">
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`bg-transparent w-full h-10 px-3 outline-none textinput z-10 text-white ${
                  name ? "has-content" : ""
                }`}
                required
              />
              <label
                htmlFor="name"
                className={`w-auto h-8 absolute text-left text-white top-1 left-1 label bg-hunyadi-yellow ${
                  name ? "shrink" : ""
                }`}
              >
                Your Name
              </label>
            </div>

            <div className="relative border-b-[1px] border-white">
              <input
                type="tel"
                id="phone-number"
                name="phone-number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={`bg-transparent w-full h-10 px-3 outline-none textinput z-10 text-white ${
                  phoneNumber ? "has-content" : ""
                }`}
                required
              />
              <label
                htmlFor="phone-number"
                className={`w-auto h-8 absolute text-left text-white top-1 left-1 label bg-hunyadi-yellow ${
                  phoneNumber ? "shrink" : ""
                }`}
              >
                Phone Number
              </label>
            </div>
                
            <div className="relative border-b-[1px] border-white">
              <input
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                className="w-full bg-transparent outline-none text-white textinput-date"
                required
              />
            </div>
              
            <div className="border-b-[1px] border-white">
              <select
                id="options"
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
                className="w-full bg-transparent outline-none text-white"
                required
              >
                <option value="" disabled hidden>
                  Select Meal Time
                </option>
                <option value="lunch1">Lunch Time - 12:00 PM</option>
                <option value="lunch2">Lunch Time - 1:00 PM</option>
                <option value="lunch3">Lunch Time - 2:00 PM</option>
                <option value="dinner1">Dinner Time - 6:00 PM</option>
                <option value="dinner2">Dinner Time - 7:00 PM</option>
                <option value="dinner3">Dinner Time - 8:00 PM</option>
              </select>
            </div>

            <div className="flex flex-col gap-5 text-left">
              <h3 className="text-white">How many guests will be joining you?</h3>
              <div className="flex justify-around">
                {['2', '4', '6', '8', '10'].map((num) => (
                  <div key={num} className="relative">
                    <input
                      type="radio"
                      id={`number_${num}`}
                      name="guests"
                      value={num}
                      checked={guests === num}
                      onChange={(e) => setGuests(e.target.value)}
                      className="hidden peer inputGuest"
                    />
                    <label
                      htmlFor={`number_${num}`}
                      className="cursor-pointer outline-none rounded-full border-2 border-white px-3 text-white py-1  text-xl peer-checked:bg-white peer-checked:text-onyx "
                    >
                      {num}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 rounded-md font-bold bg-onyx text-white border border-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <span>Book Now</span>
              </button>
            </div>  
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default Form;

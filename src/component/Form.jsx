import React, { useState } from "react";
import { CiUser } from "react-icons/ci";

const Form = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [diningPackage, setDiningPackage] = useState("");
  const [guests, setGuests] = useState("");

  return (
    <div className="bg-onyx w-auto mx-4 mb-5 p-4 rounded-br-xl rounded-bl-xl">
      <div className="grid place-content-center text-center h-full w-full">
        <h1 className="text-xl font-bold w-auto text-white">
          Book your Italian experience.
        </h1>

        <fieldset>
          <form action="#" method="get" className="flex flex-col gap-5 my-5">
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
                type="number"
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
              <input type="date" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} className="w-full bg-transparent outline-none text-white textinput-date"  />
            </div>
              

            <div className="border-b-[1px] border-white">
              <select
                id="options"
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
                className="w-full bg-transparent outline-none text-white"
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


          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default Form;

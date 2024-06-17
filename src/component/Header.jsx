import React from 'react'
import food from '../assets/food.png'


const Header = () => {
  return (
    <div className='mx-4 mt-8 rounded-tl-xl rounded-tr-xl lg:mt-0 lg:mx-0 lg:w-[600px] lg:rounded-bl-xl lg:rounded-tr-none'>
      <img src={food} alt="food" className='rounded-tl-xl rounded-tr-xl lg:rounded-bl-xl lg:rounded-tr-none' />
    </div>
  )
}

export default Header

import React from 'react'
import food from '../assets/food.png'


const Header = () => {
  return (
    <div className='mx-4 mt-8 rounded-tl-xl rounded-tr-xl'>
      <img src={food} alt="food" className='rounded-tl-xl rounded-tr-xl ' />
    </div>
  )
}

export default Header

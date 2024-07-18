import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-black text-white flex items-baseline  px-4 py-2 justify-between' >


      <NavLink to='/' className='text-2xl'>Tail Web </NavLink>
      <nav className='space-x-2'>
        <NavLink to='/about' className={(e) => {
          return e.isActive ? ' hover:bg-white hover:text-black p-3 text-purple-500 ' : ' hover:bg-white hover:text-black p-3 '
        }} href="about">About</NavLink>
        <NavLink to='/contact' className=' hover:bg-white hover:text-black p-3 ' href="contact">Contact</NavLink>
      </nav>



    </header>
  )
}

export default Header
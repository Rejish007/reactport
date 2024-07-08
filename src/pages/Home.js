import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <h1>This is home</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sed. Dolores odit non possimus cupiditate distinctio sit quia. Corrupti laudantium voluptate libero iure, officiis enim? Quidem asperiores culpa maxime saepe?</p>
      <p>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++</p>
      <div className="navs divide-x-8 divide-black">
        <NavLink to='/' >Page1</NavLink>
        <NavLink to='/page2'>Page2</NavLink>

      </div>
      <Outlet />
    </div>
  )
}

export default Home
import React from 'react'
import { NavLink } from 'react-router-dom'
import RideDetails from '../pages/RideDetails'
import Itinerary from '../pages/Itinerary'
import Ticket from '../pages/Ticket'
import Icons from './Icons'

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">
        <Icons icon="list" fill="white"/>
      </NavLink>
      <NavLink to="/">
        <Icons icon="favorites" fill="white"/>
      </NavLink>
      <NavLink to="/ticket">
        <Icons icon="ticket" fill="white"/>
      </NavLink>
      <NavLink to="/">
        <Icons icon="logout" fill="white"/>
      </NavLink>
    </nav>
      
    
  )
}

export default Nav

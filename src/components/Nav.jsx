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
        <Icons icon="list"/>
      </NavLink>
      <NavLink to="/">
        <Icons icon="favorites"/>
      </NavLink>
      <NavLink to="/ticket">
        <Icons icon="ticket"/>
      </NavLink>
      <NavLink to="/">
        <Icons icon="logout"/>
      </NavLink>
    </nav>
      
    
  )
}

export default Nav

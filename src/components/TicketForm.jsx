import React from 'react'
import TicketCard from './TicketCard'

const TicketForm = () => {
  const tickets = [
    {standard: {
      description: "A multi-day ticket with access to all rides in one location",
      background: "#4C4E5950"
    } 
  }, 
  {express: {
    description: "Access to the express line and get shorter wait times.", 
    background: "#1A1C28"
  }}, 
  {magic: {
    description: "Exclusive access to the front of both the express and regular line so you won't have to wait at all.",
    background: "#00000050"
  }}

  ]

  return (
    <div className='max-container flex-col'>
     
    </div>

)
}

export default TicketForm

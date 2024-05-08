import React from 'react'
import TicketCard from './TicketCard'
import axios from 'axios'
import { useState, useEffect } from 'react'


const TicketForm = () => {
  const [tickets, setTickets] = useState([])

  const fetchTickets = async () => {
    let response = await axios.get(
      "https://park-pass-plus-server-845d186c79ad.herokuapp.com/ticket"
    );
    setTickets(response.data);
  };

  useEffect(() => {
    fetchTickets()
    
  }, []);
  
  
  return (
    <div className='flex-col'>
      {
        tickets.map((ticket) => (
          <TicketCard type={ticket.name} description={ticket.description} background={ticket.color}/>
        ))
      }
    </div>

)
}

export default TicketForm

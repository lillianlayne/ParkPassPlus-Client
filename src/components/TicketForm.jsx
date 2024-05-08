import React from "react";
import TicketCard from "./TicketCard";
import axios from "axios";
import { useState, useEffect } from "react";

const TicketForm = () => {
  const [tickets, setTickets] = useState([]);
  const [ticketType, setTicketType] = useState("");

  const fetchTickets = async () => {
    let response = await axios.get(
      "https://park-pass-plus-server-845d186c79ad.herokuapp.com/ticket"
    );
    setTickets(response.data);
  };

  const handleType = (e) => {
    
  };



  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    
    <div className="flex-col">
      
      <h4>Choose Your Ticket Type</h4>
      {
        tickets.map((ticket) => (
            <TicketCard key={ticket._id} type={ticket.name} background={ticket.color} description={ticket.description} id={ticket._id} handleType={(e) => handleType(e.target)}/>
        ))
      }
      
    </div>
  );
};

export default TicketForm;

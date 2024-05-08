import React from "react";

const TicketCard = ({type, background, description}) => {

  return (
    <div className="ticket-container max-container flex-col justify-between" style={{background: background}}>
      <div className="caption">{type} Pass</div>
      <p>{description}</p>
    </div>
  );
};

export default TicketCard;

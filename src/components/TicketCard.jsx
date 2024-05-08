import React from "react";

const TicketCard = ({type, background, description}) => {
  const colors = {
    standard: {
      background: "#4C4E5950",
    },
    express: {
      background: "#1A1C28",
    }, 
    magic: {
      background: "#00000050",
    }
  };

  return (
    <div className="ticket-container max-container flex-col justify-between" style={background}>
      <div className="label">{type} Pass</div>
      <div className="body-copy">{description}</div>
    </div>
  );
};

export default TicketCard;

import React from "react";

const TicketCard = (props) => {
  const colors = {
    standard: {
      background: "#4C4E5950",
    },
    express: {
      background: "#1A1C28",
    }, 
    magin: {
      background: "#00000050",
    }
  };

  return (
    <div className="ticket-container max-container flex-col justify-between" style={colors[props.type]}>
      <div className="label">{props.type} Pass</div>
      <div className="body-copy">{props.description}</div>
    </div>
  );
};

export default TicketCard;

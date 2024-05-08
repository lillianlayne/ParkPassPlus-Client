import React from "react";

const TicketCard = ({type, background, description, handleType, id}) => {

  return (
    <button className="btn-override" onClick={handleType} value={id}>

    <div defaultValue={id} className="ticket-container max-container flex-col justify-between" style={{background: background}}>
      <div className="caption">{type} Pass</div>
      <p>{description}</p>
    </div>
    
    </button>
  );
};

export default TicketCard;

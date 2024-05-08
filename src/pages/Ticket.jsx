import React from "react";
import { useState } from "react";
import Icons from "../components/Icons";
import RideCard from "../components/RideCard";

const Ticket = () => {
  const [accordion, setAccordion] = useState(false);
  const [ride, setRide] = useState("");

  const openAccordion = (event) => {
    if (accordion === false) {
      setAccordion(true);
    }
    if (accordion === true) {
      setAccordion(false);
    }

    event.preventDefault();
  };

  const handleSelection = (event) => {
    console.log(event);
  };
  const userRides = ["Rollercoaster1", "Rollercoaster2", "Rollercoaster3"];

  return (
    <div className="max-container">
      <h1>My Ticket</h1>
      <div className="ticket-card flex-col center-items">
        <h3>Name</h3>
        <div className="qr"></div>
        <p>ticket type</p>
      </div>
      <div className="accordion">
        <div
          className="flex-row justify-btwn"
          onClick={(event) => openAccordion(event)}
        >
          <div className="label">Select a ride</div>
          <Icons icon="arrow" fill="none" stroke="white" />
        </div>
        {accordion ? (
          <div className="flex-col">
            {userRides.map((ride) => (
              <RideCard
                key={ride}
                title={ride}
                onClick={(event) => handleSelection(event.target)}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Ticket;

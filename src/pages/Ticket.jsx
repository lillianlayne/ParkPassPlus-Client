import React from "react";
import { useState } from "react";
import Icons from "../components/Icons";
import RideCard from "../components/RideCard";
import qrcode from "../assets/qrcode.svg"

const Ticket = ({user}) => {
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
        <h3>{user.email}</h3>
        <div className="qr">
        <img src="https://genqrcode.com/embedded?style=2&inner_eye_style=0&outer_eye_style=6&logo=null&color=%23000000&inner_eye_color=%23000000&outer_eye_color=%23000000&imageformat=svg&language=en&frame_style=0&frame_text=SCAN%20ME&frame_color=%23000000&invert_colors=false&gradient_style=0&gradient_color_start=%23FF0000&gradient_color_end=%237F007F&gradient_start_offset=5&gradient_end_offset=95&stl_type=1&logo_remove_background=null&stl_size=100&stl_qr_height=1.5&stl_base_height=2&stl_qr_magnet_type=3&stl_qr_magnet_count=0&type=0&text=https%3A%2F%2Fgithub.com%2Flillianlayne%2FParkPassPlus-Server&width=500&height=500&bordersize=2" alt="qr code" />
        </div>
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

import React from "react";
import { Link } from "react-router-dom";
import Icons from "../components/Icons";
import TicketForm from "../components/TicketForm";

const Home = ({user}) => {
  return (
    <div className="max-container flex-col home-container">
      <div className="flex-col">
        <h1>Welcome, <br /> {user}</h1>
        
        <div className="subhead">ticket type</div>
      </div>
      <div className="flex-col home-links">
        <Link to="/ticket">
        <div className="flex-row">
          <h3>Ticket</h3>
          <Icons icon="forward" stroke="white"/>
        </div>
        </Link>
        <Link to="/rides">
        <div className="flex-row">
          <h3>Rides</h3>
          <Icons icon="forward" stroke="white"/>
        </div>
        </Link>
        <Link to="/itinerary">
        <div className="flex-row">
          <h3>Itinerary
</h3>
          <Icons icon="forward" stroke="white"/>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;

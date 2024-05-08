import React from "react";
import { Link } from "react-router-dom";
import Icons from "../components/Icons";

const Home = () => {
  return (
    <div className="max-container flex-col home-container">
      <div className="flex-col">
        <h1>Welcome, <br /> username</h1>
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
        <Link>
        <div className="flex-row">
          <h3>Schedule</h3>
          <Icons icon="forward" stroke="white"/>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;

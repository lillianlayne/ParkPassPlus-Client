import React from "react";
import { NavLink } from "react-router-dom";
import RideDetails from "../pages/RideDetails";
import Itinerary from "../pages/Itinerary";
import Ticket from "../pages/Ticket";
import Icons from "./Icons";

const Nav = (props) => {
  return (
    <nav>
      <NavLink to="/home">
        <Icons icon="list" fill="white" />
      </NavLink>
      <NavLink to="/itinerary">
        <Icons icon="favorites" fill="white" />
      </NavLink>
      <NavLink to="/ticket">
        <Icons icon="ticket" fill="white" />
      </NavLink>
      <NavLink to="/">
        <div onClick={props.handleLogOut} user={props.user}>
          <Icons icon="logout" fill="white" />
        </div>
      </NavLink>
    </nav>
  );
};

export default Nav;

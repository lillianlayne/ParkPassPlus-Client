import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import Icons from "./components/Icons";
import TicketCard from "./components/TicketCard";

function App() {
  const [count, setCount] = useState(0);

  return (
   <div>
      <nav>
        <NavLink><Icons icon="list" />{/* to RideView */}</NavLink>
        <NavLink><Icons icon="favorites" />{/* to MyRides */}</NavLink>
        <NavLink><Icons icon="ticket" />{/* to Ticket */}</NavLink>
        <NavLink><Icons icon="logout" />{/* to Logout */}</NavLink>
      </nav>
   </div>
    
  );
}

export default App;

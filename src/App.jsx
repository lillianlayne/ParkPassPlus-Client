import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav>
        <NavLink>{/* to RideView */}</NavLink>
        <NavLink>{/* to MyRides */}</NavLink>
        <NavLink>{/* to Ticket */}</NavLink>
        <NavLink>{/* to Logout */}</NavLink>
      </Nav>
    </>
  );
}

export default App;

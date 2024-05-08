import { useState } from "react";
import "./App.css";
import { Route, Routes, NavLink, useParams } from "react-router-dom";
import Icons from "./components/Icons";
import RideView from "./pages/RideView";
import RideDetails from "./pages/RideDetails"
import Ticket from "./pages/Ticket";

function App() {

  return (
   <div className="App">
      <nav>
        <NavLink to="/"><Icons icon="list" />{/* to RideView */}</NavLink>
        <NavLink><Icons icon="favorites" />{/* to MyRides */}</NavLink>
        <NavLink to="/ticket"><Icons icon="ticket" />{/* to Ticket */}</NavLink>
        <NavLink><Icons icon="logout" />{/* to Logout */}</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="*" element={ <RideView /> } />
          <Route path="/ride/:id" element={ <RideDetails /> } />
          <Route path="/ticket" element={ <Ticket /> } />
        </Routes>
      </main>
   </div>
    
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { Route, Routes, NavLink, useParams } from "react-router-dom";
import Icons from "./components/Icons";
import RideView from "./pages/RideView";
import RideDetails from "./pages/RideDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RideDetails from "./pages/RideDetails"
import Ticket from "./pages/Ticket";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink>
          <Icons icon="list" />
          {/* to RideView */}
        </NavLink>
        <NavLink>
          <Icons icon="favorites" />
          {/* to MyRides */}
        </NavLink>
        <NavLink>
          <Icons icon="ticket" />
          {/* to Ticket */}
        </NavLink>
        <NavLink>
          <Icons icon="logout" />
          {/* to Logout */}
        </NavLink>
        <NavLink to="/auth/register">
          <Icons icon="newUser" />
        </NavLink>
        <NavLink>
          <Icons icon="login" />
          {/* to Login */}
        </NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="*" element={<RideView />} />
          <Route path="/ride/:id" element={<RideDetails />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
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

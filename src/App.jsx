import { useState } from "react";
import "./App.css";
import { Route, Routes, NavLink, useParams } from "react-router-dom";
import Icons from "./components/Icons";
import RideView from "./pages/RideView";
import RideDetails from "./pages/RideDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Ticket from "./pages/Ticket";
import Nav from "./components/Nav";
import Home from "./pages/Home";


function App() {
  const [user, setUser] = useState(true)

  return (
    <div className="App">
     {user ? <Nav /> : <Login /> }
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rides" element={<RideView />} />
          <Route path="/rides/:id" element={<RideDetails />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

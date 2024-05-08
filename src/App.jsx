import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, NavLink, useParams } from "react-router-dom";
import axios from "axios";
import Icons from "./components/Icons";
import RideView from "./pages/RideView";
import RideDetails from "./pages/RideDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Ticket from "./pages/Ticket";
import Nav from "./components/Nav";
import Home from "./pages/Home";


function App() {
  const [user, setUser] = useState(false);

  

  let app;

  if (user) {
    app =  <Home />
     
  } else {
    app = <Login />
  }

  return (

    <div className="App">
     <Routes>
          <Route path="/" element={app} />
          <Route path="/rides" element={<RideView />} />
          <Route path="/rides/:id" element={<RideDetails />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
    </div>
  );
}

export default App;

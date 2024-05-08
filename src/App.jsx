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
import { CheckSession } from "./services/Auth";

function App() {
  const [user, setUser] = useState(null);

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
  };

  const handleLogOut = () => {
    setUser(null);
    localStorage.clear();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken();
    }
  }, []);

  let app;

  if (user) {
    app = <Home />;
  } else {
    app = <Login setUser={setUser} />;
  }

  return (
    <div className="App">
      {/* {user ? <Nav user={user} handleLogout={handleLogOut} /> : null } */}
      <Nav user={user} handleLogOut={handleLogOut} />
      
      
      <Routes>
        <Route path="/" element={app} />
        <Route path="/home" element={<Home user={user}/>} />
        <Route path="/rides" element={<RideView />} />
        <Route path="/rides/:id" element={<RideDetails />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login setUser={setUser} />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </div>
  );
}

export default App;

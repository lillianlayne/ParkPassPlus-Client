import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import RideCard from "../components/RideCard";
import RideDetails from "./RideDetails";

const RideView = () => {
  const [rides, setRides] = useState([]);

  const fetchRides = async () => {
    let response = await axios.get(
      "https://park-pass-plus-server-845d186c79ad.herokuapp.com/ride"
    );
    setRides(response.data);
  };

  useEffect(() => {
    fetchRides();
  }, []);

  return (
    <div className="max-container">
      <h1>Rides</h1>
      <div className="flex-col rides-wrapper">
        {rides.map((ride) => (
          <RideCard
            title={ride.name}
            park={ride.location}
            key={ride._id}
            rideId={ride._id}
          />
        ))}
      </div>
    </div>
  );
};

export default RideView;

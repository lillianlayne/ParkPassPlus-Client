import { useState, useEffect } from "react";
import axios from "axios";
import RideCard from "../components/RideCard";

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

  const parks = [...new Set(rides.map((ride) => ride.location))];
  const parksObj = {};

  parks.forEach((park) => {
    parksObj[park] = rides.filter((ride) => ride.location === park);
  });

  return (
    <div className="max-container">
      <h1>Rides</h1>
      <div className="flex-col rides-container">
        {Object.keys(parksObj).map((park) => (
          <div className="flex-col rides-parks" key={park}>
            <div className="caption subhead">{park}</div>
            <div className="flex-col rides-wrapper">
              {parksObj[park].map((ride) => (
                <RideCard
                  title={ride.name}
                  park={ride.location}
                  rideId={ride._id}
                  key={ride._id}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideView;

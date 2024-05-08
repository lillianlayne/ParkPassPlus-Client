import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import {assets} from '../assets'

const RideDetails = () => {
  let { id } = useParams();
  const [ride, setRide] = useState([]);
  const [image, setImage] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  const fetchRides = async () => {
    let response = await axios.get(
      `https://park-pass-plus-server-845d186c79ad.herokuapp.com/ride/${id}`
    );
    setRide(response.data);
  };

  useEffect(() => {
    fetchRides();
  }, []);

  useEffect(() => {
    const fetchPhoto = async () => {
      if (ride && ride.name) {
        let rideName = ride.name;
        const imageUrl = rideName.replaceAll(" ", "-").replace(":", "");
        setImage(imageUrl.toLowerCase());
      }
    };
    fetchPhoto();
  }, [ride]);

  const handleAddToItinerary = () => {
    setIsAdded(true);
  };

  return (
    <div className="max-container">
      <h1>{ride.name}</h1>
      <div className="label"> {ride.location}</div>
      <br></br>
      <img
        src={`https://assets.codepen.io/10852085/${image}.png`}
        alt=""
        className="ride-image"
      />
      <div>
         {ride.description}
      </div>
      <br></br>
      <div>
        <strong>MIN. HEIGHT:</strong> {ride.inches} inches
      </div>
      <br></br>
      <button className="btn-primary" onClick={handleAddToItinerary}>
        {isAdded ? "ADDED!" : "ADD TO ITENERARY"}
      </button>
      <br></br>
      <br></br>
      <div className="label">CURRENT WAIT TIMES</div>
      <br></br>
      <div className="flex-col">
      <button className="btn-primary"> STANDARD LINE: 24 minutes
      </button>
      </div>
      <br></br>
      <div className="flex-col">
      <button className="btn-primary"> EXPRESS LINE: 0 minutes
      </button>
      </div>
      
    </div>
  );
};



export default RideDetails;

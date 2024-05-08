import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import {assets} from '../assets'

const RideDetails = () => {
  let { id } = useParams();
  const [ride, setRide] = useState([]);
  const [image, setImage] = useState("");

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

  return (
    <div className="max-container">
      <h1>{ride.name}</h1>
      <img
        src={`https://assets.codepen.io/10852085/${image}.png`}
        alt=""
        className="ride-image"
      />
    </div>
  );
};

export default RideDetails;

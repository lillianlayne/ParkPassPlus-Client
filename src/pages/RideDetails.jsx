import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const RideDetails = () => {
  let {id} = useParams();
  const [ride, setRide] = useState([]);

  const fetchRides = async () => {
    let response = await axios.get(`https://park-pass-plus-server-845d186c79ad.herokuapp.com/ride/${id}`);
    setRide(response.data);
  };

  useEffect(() => {
    fetchRides();
  }, []);

  return (
    <div>
      <h1>{ride.name}</h1>
    </div>
  )
}

export default RideDetails

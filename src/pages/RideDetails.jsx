import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const RideDetails = () => {
  let {id} = useParams();

  const [ride, setRide] = useState('');

  const fetchRides = async () => {
    let response = await axios.get(
      `https://park-pass-plus-server-845d186c79ad.herokuapp.com/ride/${id}`
    );
    setRide(response.data);
  };


  return (
    <div>
      
    </div>
  )
}

export default RideDetails

import { useState, useEffect } from 'react'
import axios from 'axios'
import RideCard from '../components/RideCard'

const RideView = () => {
  const [rides, setRides] = useState([])

  const fetchRides = async () => {
    let response = await axios.get("https://park-pass-plus-server-845d186c79ad.herokuapp.com/ride")
    setRides(response.data)
  }

  useEffect(() => {
    fetchRides()
  }, []);
 
  return (
    <div className='max-container'>
      <h1>Rides</h1>
      <div className="flex-col wrapper rides-wrapper">
        {
          rides.map((ride) => (
            <RideCard title={ride.name} park={ride.location}/>
          ))
        }
      </div>
    </div>
  )
}

export default RideView

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Icons from "../components/Icons";
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
    <div className="flex-col max-container">
      <h1 style={{ marginBottom: 1 }}>{ride.name}</h1>
      <div className="caption">{ride.location}</div>
      <img
        src={`https://assets.codepen.io/10852085/${image}.png`}
        alt=""
        className="ride-image"
      />
      <p>{ride.description}</p>
      <div className="border-bottom"></div>
      <div className="flex-col padding-top">
        <div className="label ">min. height</div>
        <h2>{ride.inches} inches</h2>
      </div>

        <div className="flex-col padding-top">
          <div className="label border-bottom">
            wait times
          </div>
          <div className="flex-row justify-btwn ride-card">
            <span className="label large">Standard pass</span>{" "}
            <span>
              <p>:24</p>
            </span>
          </div>
          <div className="flex-row justify-btwn ride-card">
            <span className="label large">Express pass</span>{" "}
            <span>
              {" "}
              <p>:12</p>{" "}
            </span>
          </div>
        </div>
        <button className="btn-primary added-btn" onClick={handleAddToItinerary}>
        {isAdded ? "ADDED!" : "ADD TO ITENERARY"}
      </button>
      </div>
    // <div className="max-container">
    //   <h1>{ride.name}</h1>
    //   <div className="label"> {ride.location}</div>
    //   <div className="flex-col">

    //   <img
    //     src={`https://assets.codepen.io/10852085/${image}.png`}
    //     alt=""
    //     className="ride-image"
    //     />
    //   <p>{ride.description}</p>

    //   <div>

    //   </div>
    //     </div>
    //   <button className="btn-primary" onClick={handleAddToItinerary}>
    //     {isAdded ? "added" : "Add To Itenerary"}
    //   </button>
    //   <div className="label border-bottom">CURRENT WAIT TIMES</div>
    //   <div className="flex-col">
    //     <div className="flex-row justify-btwn ride-card"><span className="label large">Standard pass</span> <span><p>:24</p></span></div>
    //     <div className="flex-row justify-btwn ride-card"><span className="label large">Express pass</span> <span> <p>:12</p> </span></div>
    //   </div>
    // </div>
  );
};

export default RideDetails;

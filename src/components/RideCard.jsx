import React from "react";
import { Link } from "react-router-dom";

const RideCard = ({ title, park, rideId }) => {
  return (
    <Link to={`ride/${rideId}`}>
      <div className="ride-card flex-col">
        <h4>{title}</h4>
        <div className="caption">{park}</div>
      </div>
    </Link>
  );
};

export default RideCard;


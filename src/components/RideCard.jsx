import React from "react";
import { Link } from "react-router-dom";

const RideCard = ({ title, park, rideId }) => {
  return (
    <Link to={`ride/${rideId}`}>
      <div className="ride-card flex-col">
        <h3 className="card-title">{title}</h3>
      </div>
    </Link>
  );
};

export default RideCard;

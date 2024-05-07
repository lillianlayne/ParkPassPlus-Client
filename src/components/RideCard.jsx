import React from 'react'

const RideCard = ({title, park}) => {
  return (
    <div className='ride-wrapper wrapper flex-col'>
      <h4>{title}</h4>
      <div className="caption">
        {park}
      </div>
    </div>
  )
}

export default RideCard

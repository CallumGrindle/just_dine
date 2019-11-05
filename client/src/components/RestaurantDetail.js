import React from 'react';

const RestaurantDetail = ({selectedRestaurant}) => {
  if (!selectedRestaurant) return null;
  return (
    <div className="restaurant-detail">
      <h1> {selectedRestaurant.restaurant.name} </h1>
      <p> {selectedRestaurant.restaurant.location.address} </p>
      <p>Tel: {selectedRestaurant.restaurant.phone_numbers} </p>
      <p>Hours: {selectedRestaurant.restaurant.timings} </p>
    


    </div>



  )
}

export default RestaurantDetail;

import React from 'react';

const RestaurantDetail = ({ selectedRestaurant, selectedFavourite }) => {
  if ((!selectedRestaurant) && (!selectedFavourite)) return null;
  return (
    <div>
      <h1>{selectedRestaurant.restaurant.name}</h1>
    </div>
  )
}

export default RestaurantDetail;

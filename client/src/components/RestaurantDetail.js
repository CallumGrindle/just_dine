import React from 'react';

const RestaurantDetail = ({selectedRestaurant}) => {
  if (!selectedRestaurant) return null;
  return (
    <h1>{selectedRestaurant.restaurant.name}</h1>
  )
}

export default RestaurantDetail;

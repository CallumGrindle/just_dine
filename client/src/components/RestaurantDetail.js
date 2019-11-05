import React from 'react';
import './RestaurantDetail.css'

const RestaurantDetail = ({
  selectedRestaurant, selectedFavourite, markFav, favourite }) => {
    if ((!selectedRestaurant) && (!selectedFavourite)) return null;
    return (
      <div className="restaurant-detail">
        <h1>{selectedRestaurant.restaurant.name}</h1>
        <p> {selectedRestaurant.restaurant.location.address} </p>
        <p>Tel: {selectedRestaurant.restaurant.phone_numbers} </p>
        <p>Hours: {selectedRestaurant.restaurant.timings} </p>


        <button onClick={ () => markFav(selectedRestaurant) }>
          Add to favourites
        </button>
      </div>
    )
}

export default RestaurantDetail;

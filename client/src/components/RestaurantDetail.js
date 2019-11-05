import React from 'react';

const RestaurantDetail = ({
  selectedRestaurant, favID, markFav, deleteFav }) => {
    if (!selectedRestaurant) return null;
    return (
      <div>
        <h1>{selectedRestaurant.restaurant.name}</h1>
        <p> {selectedRestaurant.restaurant.location.address} </p>
        <p>Tel: {selectedRestaurant.restaurant.phone_numbers} </p>
        <p>Hours: {selectedRestaurant.restaurant.timings} </p>
        <button class="fab fa-gratipay" onClick={ () => markFav(selectedRestaurant) }>
          Add to favourites
        </button>
        <button onClick={ () => deleteFav(selectedRestaurant) }>
          Delete from favourites
        </button>
        <i class="fab fa-gratipay"></i>
      </div>
    )
}

export default RestaurantDetail;

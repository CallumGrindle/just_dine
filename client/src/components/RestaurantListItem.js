import React from 'react';


const RestaurantListItem = ({
  name, cuisine, location, price_range, price_level, id, fav,
  onSelect, selectedRestaurant, onFavCheck }) => {

  return (
    <div className="restaurant-list-item">
      <h3> { name } </h3>
      <p>Cuisine: { cuisine }</p>
      <p>Location: { location }</p>
      <p>Price Range: { price_range },
      Average Cost for Two: £ { price_level }</p>
      <button onClick={ () => onSelect(id) }>
      More info...
      </button>
      <input type="checkbox" id="favourite" name="favourite"
         checked={ fav }
         onFavCheck={ onFavCheck } />
      <label for="favourite">One of my favourites!</label>
    </div>
  );
};

export default RestaurantListItem;

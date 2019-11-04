import React from 'react';
import RestaurantDetail from './RestaurantDetail';

const RestaurantListItem = ({
  name, cuisine, location, price_range, price_level, id, onSelect }) => {

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
    </div>
  );
};

export default RestaurantListItem;

import React from 'react';
import RestaurantDetail from './RestaurantDetail';
import './RestaurantListItem.css'

const RestaurantListItem = ({
    name,
    cuisine,
    location,
    price_range,
    price_level,
    id,
    onSelect,
    selectedRestaurant }) => {

    function handleSelect() {
      onSelect(id);
    }

  return (
    <div onClick={ () => onSelect(id) }  className="restaurant-list-item">
      <h3> { name } </h3>
      <p>{ cuisine }</p>
      <p>{ location }</p>
      <p>{ price_range }</p>
      <p>£{ price_level }</p>
    </div>
  );
};

export default RestaurantListItem;

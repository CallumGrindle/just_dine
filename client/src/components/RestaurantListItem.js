import React from 'react';


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
    <div className="restaurant-list-item">
      <h3> { name } </h3>
      <p>Cuisine: { cuisine }</p>
      <p>Location: { location }</p>
      <p>Price Range:{ price_range },
      Average Cost for Two: £{ price_level }</p>
      <button onClick={ handleSelect }>
      More info...
      </button>

    </div>
  );
};

export default RestaurantListItem;

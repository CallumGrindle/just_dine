import React from 'react';

const RestaurantListItem = ({ name, cuisine, location, price_range }) => {



  return (
    <div className="restaurant-list-item">
      <h3> { name } </h3>
      <p>Cuisine: { cuisine }</p>
      <p>Location: { location }</p>
      <p>Price Level: { price_range }</p>

    </div>
  );
};

export default RestaurantListItem;

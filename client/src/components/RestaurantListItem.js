import React from 'react';

const RestaurantListItem = ({name}) => {



  return (
    <div className="restaurant-list-item">
      <h2> { name } </h2>
    </div>
  );
};

export default RestaurantListItem;

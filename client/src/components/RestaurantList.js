import React from 'react';
import RestaurantListItem from './RestaurantListItem';

const RestaurantList = (props) => {
  const restaurantNodes = props.restaurants.map((restaurant, index) => {
    return (
      <RestaurantListItem />
  );
});

return (
  <div className="restaurant-list">
    { restaurantNodes }
    <RestaurantListItem></RestaurantListItem>

  </div>
);
};

export default RestaurantList;

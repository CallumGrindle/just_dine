import React from 'react';
import RestaurantListItem from './RestaurantListItem';

const RestaurantList = (props) => {
const restaurantNodes = props.restaurants.map((restaurant, index) => {
  return (
    <RestaurantListItem
      name={ restaurant.restaurant.name }
    />
  );
});

return (
  <div className="restaurant-list">
    { restaurantNodes }
  </div>
);
};

export default RestaurantList;

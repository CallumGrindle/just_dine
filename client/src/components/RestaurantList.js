import React from 'react';
import RestaurantListItem from './RestaurantListItem';

const RestaurantList = ({ restaurants }) => {
const restaurantNodes = restaurants.map((restaurant, index) => {
  return (
    <RestaurantListItem
      name={ restaurant.restaurant.name }
      cuisine={ restaurant.restaurant.cuisines }
      location={ restaurant.restaurant.location.city }
      price_range={ restaurant.restaurant.price_range }
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

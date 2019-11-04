import React from 'react';
import RestaurantListItem from './RestaurantListItem';
import './RestaurantList.css'

const RestaurantList = ({ restaurants }) => {
  const restaurantNodes = restaurants.map((restaurant, index) => {
    return (
      <RestaurantListItem
      key={ restaurant.restaurant.id }
      id={ restaurant.restaurant.id }
      name={ restaurant.restaurant.name }
      cuisine={ restaurant.restaurant.cuisines }
      location={ restaurant.restaurant.location.city }
      price_range={ restaurant.restaurant.price_range }
      price_level={ restaurant.restaurant.average_cost_for_two }
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

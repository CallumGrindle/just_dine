import React from 'react';
import RestaurantListItem from './RestaurantListItem';

const RestaurantList = ({ restaurants, selectedRestaurant, onSelect }) => {
const restaurantNodes = restaurants.map((restaurant, index) => {
  if (restaurants === [] || restaurants.length === 0){
    return <p>Loading...</p>;
  }
  return (
    <RestaurantListItem
      key={ restaurant.restaurant.id }
      id={ restaurant.restaurant.id }
      name={ restaurant.restaurant.name }
      cuisine={ restaurant.restaurant.cuisines }
      location={ restaurant.restaurant.location.city }
      price_range={ restaurant.restaurant.price_range }
      price_level={ restaurant.restaurant.average_cost_for_two }
      onSelect={ onSelect }
      selectedRestaurant={ selectedRestaurant }>
    </RestaurantListItem>
  );
});

  return (
    <div className="restaurant-list">
    { restaurantNodes }
    </div>
  );
};

export default RestaurantList;

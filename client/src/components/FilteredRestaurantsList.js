import React from 'react'
import RestaurantListItem from './RestaurantListItem';
import './RestaurantList.css'

const RestaurantList = ({ restaurants, onSelect, favListChecked, showFilteredRestaurants }) => {
  if (!showFilteredRestaurants) return null;
  const restaurantNodes = restaurants.map((restaurant, index) => {
    return (
      <RestaurantListItem
        key={ restaurant.restaurant.id }
        id={ restaurant.restaurant.id }
        name={ restaurant.restaurant.name }
        cuisine={ restaurant.restaurant.cuisines }
        location={ restaurant.restaurant.location.city }
        currency= { restaurant.restaurant.currency }
        price_range={ restaurant.restaurant.price_range }
        price_level={ restaurant.restaurant.average_cost_for_two }
        onSelect={ onSelect }>
      </RestaurantListItem>
    );

  });

  return (
    <div className="restaurant-list">
    <header className="list-header">
    <h3>Restaurant</h3>
    <h3>Cuisine</h3>
    <h3>Location</h3>
    <h3>Price Range</h3>
    <h3>Average cost for 2</h3>
    </header>
    { restaurantNodes }
    </div>
  );
};

export default RestaurantList;

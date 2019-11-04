import React from 'react';
import RestaurantListItem from './RestaurantListItem';

const FavouritesList = ({
  favListChecked, favRestaurants, selectedRestaurant,
  onSelect, onFavCheck }) => {
    if (!favListChecked) return null;
    const restaurantNodes = favRestaurants.map((restaurant, index) => {
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
          fav={ restaurant.fav }
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

export default FavouritesList;

import React from 'react';
import RestaurantDetail from './RestaurantDetail';
import './RestaurantListItem.css'

const RestaurantListItem = ({
  name,
  cuisine,
  location,
  currency,
  price_range,
  price_level,
  id,
  onSelect,
  selectedRestaurant }) => {

    function handleSelect() {
      onSelect(id);
    }

    function priceDisplay() {
      let string ="";
      for (let count=0; count<price_range; count++) {
        string+=currency||'*'
      }
      return string
    }

    return (
      <div className="restaurant-list-item">
      <h3> { name } </h3>
      <p>{ cuisine }</p>
      <p>{ location }</p>
      <p>{ priceDisplay() }</p>
      <p>{ currency }{ price_level }</p>
      <button onClick={ () => onSelect(id) }>
      More info...
      </button>
      </div>
    );
  };

  export default RestaurantListItem;

import React from 'react';
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


    function priceDisplay() {
      let string ="";
      for (let count=0; count<price_range; count++) {
        string+=currency||'*'
      }
      return string
    }

    return (
      <article onClick={ () => onSelect(id) }  className="restaurant-list-item">
        <h3> { name } </h3>
        <p>{ cuisine }</p>
        <p>{ location }</p>
        <p>{ priceDisplay() }</p>
        <p>{ currency }{ price_level }</p>
      </article>
    );
  };

  export default RestaurantListItem;

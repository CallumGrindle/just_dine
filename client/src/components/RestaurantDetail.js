import React from 'react';
import ReviewListItem from './ReviewListItem';
import './RestaurantDetail.css'

const RestaurantDetail = ({
  selectedRestaurant, favID, markFav, deleteFav }) => {
    if (!selectedRestaurant) return null;

    const reviewNodes = selectedRestaurant.restaurant.all_reviews.reviews
      .map((review, index) => {
        return (
          <ReviewListItem
            key={ index }
            review={ review.review.review_text }
            index={ index }
          />
        );
      });

    return (
      <div className="restaurant-detail">
        <h1>{selectedRestaurant.restaurant.name}</h1>
        <p> {selectedRestaurant.restaurant.location.locality} </p>
        <p> {selectedRestaurant.restaurant.location.address} </p>
        <p>Hours: {selectedRestaurant.restaurant.timings} </p>
        <p>Tel: {selectedRestaurant.restaurant.phone_numbers} </p>
        <img src={selectedRestaurant.restaurant.thumb} />
        <a href={selectedRestaurant.restaurant.menu_url}>View menu</a>
        <button onClick={ () => markFav(selectedRestaurant) }>
          Add to favourites
        </button>
        <button onClick={ () => deleteFav(selectedRestaurant) }>
          Delete from favourites
        </button>

        <ul>{ reviewNodes }</ul>



      </div>
    )
}

export default RestaurantDetail;

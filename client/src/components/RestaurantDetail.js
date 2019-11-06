import React from 'react';
import ReviewListItem from './ReviewListItem';
import './RestaurantDetail.css';
import HeartCheckbox from 'react-heart-checkbox';

const RestaurantDetail = ({
  selectedRestaurant, favourite, checkboxFav }) => {

    function priceDisplay() {
      let string ="";
      for (let count=0; count<selectedRestaurant.restaurant.price_range; count++) {
        string+=selectedRestaurant.restaurant.currency||'*'
      }
      return string
    }




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
        <p>{selectedRestaurant.restaurant.cuisines} </p>
        <p> {selectedRestaurant.restaurant.location.address} </p>
        <p>Hours: {selectedRestaurant.restaurant.timings} </p>
        <p>Tel: {selectedRestaurant.restaurant.phone_numbers} </p>
        <p>Price Range: { priceDisplay() } </p>
        <p>Average Cost for 2: { selectedRestaurant.restaurant.currency }{ selectedRestaurant.restaurant.average_cost_for_two }</p>
        <a href={selectedRestaurant.restaurant.menu_url}>View Menu</a>
        <a href="mailto:booking@restaurant.com?Subject=Request Booking%20" target="_top">Request Booking</a>
        <img src={selectedRestaurant.restaurant.thumb} />

        <section id="fav-section">
        <h2>{favourite ? '' : 'Add to my favourites'}</h2>
        <HeartCheckbox
          checked={ favourite }
          onClick={ () => checkboxFav(selectedRestaurant) } />
        </section>

        <section id="reviews">
        <h2>Reviews</h2>
        <ul> { reviewNodes } </ul>
        </section>

      </div>
    )
}

export default RestaurantDetail;

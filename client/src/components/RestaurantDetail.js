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
        <p><section className="box-section">Cuisines offered</section>{selectedRestaurant.restaurant.cuisines} </p>
        <p><section className="box-section">Address</section> {selectedRestaurant.restaurant.location.address} </p>
        <p><section className="box-section">Hours</section> {selectedRestaurant.restaurant.timings} </p>
        <p><section className="box-section">Telephone</section> {selectedRestaurant.restaurant.phone_numbers} </p>
        <p><section className="box-section">Price Range</section> { priceDisplay() } </p>
        <p><section className="box-section">Average Cost for 2</section> { selectedRestaurant.restaurant.currency }{ selectedRestaurant.restaurant.average_cost_for_two }</p>
        <a href={selectedRestaurant.restaurant.menu_url}>View Menu</a>
        <a href="mailto:booking@restaurant.com?Subject=Request Booking%20" target="_top">Request Booking</a>
        <img src={selectedRestaurant.restaurant.thumb} />

        <section id="fav-section">
        <h2>{favourite ? 'Remove from my favourites' : 'Add to my favourites'}</h2>
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

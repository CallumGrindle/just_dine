import React, {Component} from 'react';
import {GoogleKey} from '../keys.js'
import RestaurantList from '../components/RestaurantList';

class RestaurantContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      currentRestaurant: null
    }
  }

  componentDidMount() {
    // const place_id = null
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${GoogleKey}`
    fetch(url)
      .then(res => res.json())
      .then(data => this.state({ restaurants: data }))
      .catch(err => console.error(err))
  }




  render() {
    return (
        <div className="restaurant-container">
          <h1>Container</h1>
          <RestaurantList
            restaurants={ this.state.restaurants } />
        </div>
      );


  }

}

export default RestaurantContainer;

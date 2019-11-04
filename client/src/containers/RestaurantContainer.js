import React, {Component} from 'react';
import { ZomatoKey } from '../keys.js'
import RestaurantList from '../components/RestaurantList';
import AppHeader from '../components/AppHeader'


class RestaurantContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      searchTerm: null,
      selectedRestaurant: null
    }
  }

  componentDidMount() {
    let lat;
    let lon;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        (this.apiCall(lat, lon))
      }, (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      })
    }
  }

  apiCall(lat, lon) {
    const url = `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lon}`
    fetch(url, {
      headers: {
        'user-key': `${ZomatoKey}`
      }
    })
    .then(res => res.json())
    .then(data => this.setState({ restaurants: data.restaurants }))
    .catch(err => console.error(err))
  }

  apiQueryCall(query) {
    const url = `https://developers.zomato.com/api/v2.1/search?q=${query}`
    fetch(url, {
      headers: {
        'user-key': `${ZomatoKey}`
      }
    })
    .then(res => res.json())
    .then(data => this.setState({ restaurants: data }))
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="restaurant-container">
      <AppHeader />
      <RestaurantList
      restaurants={ this.state.restaurants } />
      </div>
    );
  }
}

export default RestaurantContainer;

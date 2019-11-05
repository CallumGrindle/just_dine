import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ZomatoKey } from '../keys.js';
import RestaurantList from '../components/RestaurantList';
import ControlsContainer from '../containers/ControlsContainer.js';
import RestaurantDetail from '../components/RestaurantDetail';
import AppHeader from '../components/AppHeader';
import './RestaurantContainer.css'

class RestaurantContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      searchTerm: '',
      selectedRestaurant: null
    }

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.apiCitySearch = this.apiCitySearch.bind(this);
    this.apiSearchCityId = this.apiSearchCityId.bind(this);
  }

  handleSearchChange(value) {
    this.setState({ searchTerm: value })
  }

  handleSelect(id) {
    const restaurant = this.state.restaurants.find((restaurant) => {
      return restaurant.restaurant.id === id
    })
    this.setState({ selectedRestaurant: restaurant })
  };

  componentDidMount() {
    let lat;
    let lon;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        this.apiCall(lat, lon);
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

  apiCitySearch() {
    const searchTerm = this.state.searchTerm
    const url = `https://developers.zomato.com/api/v2.1/cities?q=${searchTerm}`
    fetch(url, {
      headers: {
        'user-key': `${ZomatoKey}`
      }
    })
    .then(res => res.json())
    .then(data => this.apiSearchCityId(data['location_suggestions'][0].id))
    .catch(err => console.error(err));
  }

  apiSearchCityId(id) {
    const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${id}&entity_type=city`
    fetch(url, {
      headers: {
        'user-key': `${ZomatoKey}`
      }
    })
    .then(res => res.json())
    .then(data => this.setState({ restaurants: data.restaurants }))
    .catch(err => console.error(err))
  }

  render() {

    return (
      <div className="restaurant-container" id="main-container">

      <AppHeader
      onSearchChange={ this.handleSearchChange }
      onSearchSubmit={ this.apiCitySearch }
      searchTerm={ this.state.searchTerm } />
      <h1>Just Dine!</h1>
      <RestaurantList
        restaurants={ this.state.restaurants }
        onSelect={this.handleSelect}
        selectedRestaurant={ this.state.selectedRestaurant }/>
      <RestaurantDetail selectedRestaurant={ this.state.selectedRestaurant }/>
      </div>
    );
  }
}

export default RestaurantContainer;

import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';
import { ZomatoKey } from '../keys.js';
import RestaurantList from '../components/RestaurantList';
import ControlsContainer from '../containers/ControlsContainer.js';
import RestaurantDetail from '../components/RestaurantDetail';
import AppHeader from '../components/AppHeader';
import FavouritesList from '../components/FavouritesList';
import Favourites from '../models/favourites.js'


class RestaurantContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        restaurants: [],
        searchTerm: '',
        selectedRestaurant: null,
        favRestaurants: [],
        favListChecked: false,
        selectedFavourite: null
      }
      this.handleSearchChange = this.handleSearchChange.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
      this.apiCitySearch = this.apiCitySearch.bind(this);
      this.apiSearchCityId = this.apiSearchCityId.bind(this);
      this.handleAddFav = this.handleAddFav.bind(this);
    }

    componentDidMount() {
      let lat;
      let lon;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          lat = position.coords.latitude;
          lon = position.coords.longitude;
          (this.apiCall(lat, lon))
        })
      }

      Favourites.get()
        .then(favRestaurants => this.setState({ favRestaurants }));
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

    handleFavListSelect(event){
      this.setState({ favListChecked: event.target.checked })
    }

  handleAddFav(restaurant) {
    Favourites.post(restaurant)
      .then(addRestaurant => this.setState({
      favRestaurants: [...this.state.favRestaurants, addRestaurant]
    }))
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

      <Router>
        <Fragment>

          <AppHeader
            onSearchChange={ this.handleSearchChange }
            onSearchSubmit={ this.apiCitySearch }
            searchTerm={ this.state.searchTerm } />

          <Route exact path='/restaurant/:id/show'>
            <RestaurantDetail
            selectedRestaurant={ this.state.selectedRestaurant }
            selectedFavourite={ this.state.selectedFavourite }
            markFav={ this.handleAddFav }/>
          </Route>

          <Route exact path='/restaurants'>
            <RestaurantList
              restaurants={ this.state.restaurants }
              onSelect={this.handleSelect}
              selectedRestaurant={ this.state.selectedRestaurant }/>
          </Route>

          <Route exact path='/favourites'>
            <FavouritesList
              favListChecked={ this.state.favListChecked }
              favRestaurants={ this.state.favRestaurants }
              onSelect={this.handleSelect}
              selectedFavourite={ this.state.selectedFavourite }/>
          </Route>

        </Fragment>
      </Router>

    )
  }
}

export default RestaurantContainer;

import React, { Component } from 'react';
import { ZomatoKey } from '../keys.js';
import RestaurantList from '../components/RestaurantList';
<<<<<<< HEAD
import ControlsContainer from '../containers/ControlsContainer.js';
=======
import RestaurantDetail from '../components/RestaurantDetail';
import AppHeader from '../components/AppHeader'


>>>>>>> bb1bd4a13365b7e40fee6802bf4c08c31e4fdcea

  class RestaurantContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
<<<<<<< HEAD
        restaurants: null,
        searchTerm: '',
        selectedRestaurant: null
      }

      this.handleSearchChange = this.handleSearchChange.bind(this);
      this.apiCitySearch = this.apiCitySearch.bind(this);
      this.apiSearchCityId = this.apiSearchCityId.bind(this);
    }

    handleSearchChange(value) {
      this.setState({ searchTerm: value })
=======
        restaurants: [],
        searchTerm: null,
        selectedRestaurant: null
      }
      this.handleSelect = this.handleSelect.bind(this);

>>>>>>> bb1bd4a13365b7e40fee6802bf4c08c31e4fdcea
    }

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

<<<<<<< HEAD
    apiCall(lat, lon) {
      const url = `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lon}`
      fetch(url, {
        headers: {
          'user-key': `${ZomatoKey}`
        }
      })
        .then(res => res.json())
        .then(data => this.setState({ restaurants: data }))
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
        .then(data => this.setState({ restaurants: data }))
        .catch(err => console.error(err))
=======

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

    handleSelect(id){
      const restaurant = this.state.restaurants.find((rest) => {
        return rest.restaurant.id === id
      });

      this.setState({ selectedRestaurant: restaurant})
>>>>>>> bb1bd4a13365b7e40fee6802bf4c08c31e4fdcea
    }

  render() {
    return (
<<<<<<< HEAD
        <ControlsContainer
          onSearchChange={ this.handleSearchChange }
          onSearchSubmit={ this.apiCitySearch }
          searchTerm={ this.state.searchTerm } />
=======
        <div className="restaurant-container">
        <AppHeader />
          <h1>Just Dine!</h1>
            <RestaurantList
                restaurants={ this.state.restaurants }
                onSelect={this.handleSelect}
                selectedRestaurant={ this.state.selectedRestaurant }/>
            <RestaurantDetail selectedRestaurant={ this.state.selectedRestaurant }/>
        </div>
>>>>>>> bb1bd4a13365b7e40fee6802bf4c08c31e4fdcea
      );
  }
}

export default RestaurantContainer;

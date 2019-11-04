import React, {Component} from 'react';
import { ZomatoKey } from '../keys.js'
import RestaurantList from '../components/RestaurantList';
import RestaurantDetail from '../components/RestaurantDetail';
import AppHeader from '../components/AppHeader';
import FavouritesList from '../components/FavouritesList';


class RestaurantContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        restaurants: [],
        searchTerm: null,
        selectedRestaurant: null,
        favRestaurants: [],
        favListChecked: false,
        selectedFavourite: null
      }
      this.handleSelect = this.handleSelect.bind(this);
      this.handleFavouriteCheckbox = this.handleFavouriteCheckbox.bind(this);
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

  handleSelect(id){
    const restaurant = this.state.restaurants.find((rest) => {
      return rest.restaurant.id === id
    });
    this.setState({ selectedRestaurant: restaurant})
  }

  handleFavListSelect(event) {
    this.setState({ favListChecked: event.target.checked })
  }

  handleFavouriteCheckbox(event) {
    this.setState({ favRestaurants: {...this.state.favRestaurants,
      fav: event.target.checked} });
  }

  render() {
    return (
        <div className="restaurant-container">
          <AppHeader />
            <h1>Just Dine!</h1>
          <RestaurantList
            restaurants={ this.state.restaurants }
            onSelect={this.handleSelect}
            selectedRestaurant={ this.state.selectedRestaurant }/>
          <RestaurantDetail
            selectedRestaurant={ this.state.selectedRestaurant }
            selectedFavourite={ this.state.selectedFavourite }/>
          <FavouritesList
            favListChecked={ this.state.favListChecked }
            favRestaurants={ this.state.favRestaurants }
            onSelect={this.handleSelect}
            selectedFavourite={ this.state.selectedFavourite }
            onFavCheck={ this.handleFavouriteCheckbox}/>
        </div>
      );
  }
}

export default RestaurantContainer;

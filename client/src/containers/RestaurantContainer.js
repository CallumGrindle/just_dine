import React, {Component} from 'react';
import { ZomatoKey } from '../keys.js'
import RestaurantList from '../components/RestaurantList';
import RestaurantListItem from '../components/RestaurantListItem';


  class RestaurantContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        restaurants: [],
        searchTerm: null,
        selectedRestaurant: null
      }
      this.handleSelect = this.handleSelect.bind(this);

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
      this.setState({ selectedRestaurant: id });
    }

  render() {
    return (
        <div className="restaurant-container">
          <h1>Just Dine!</h1>
            <RestaurantList
            restaurants={ this.state.restaurants }
            onSelect={this.handleSelect}/>
        </div>
      );
  }
}

export default RestaurantContainer;

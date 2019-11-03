import React, {Component} from 'react';
import { ZomatoKey } from '../keys.js'

class ApiContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      coords: null
    }
  }

  componentDidMount() {
    let lat;
    let lon;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        this.setState({coords: {lat: lat, lon: lon}})
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
      .then(data => this.setState({ data: data }))
      .catch(err => console.error(err))
  }

  render() {
    return <h1>Container</h1>
  }

}

export default ApiContainer;

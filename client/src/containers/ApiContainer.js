import React, {Component} from 'react';
import {ZomatoKey} from '../keys.js'

class ApiContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      coords: null
    }
  }

  componentDidMount() {
    // const place_id = null
    const url = ``
    fetch(url)
      .then(res => res.json())
      .then(data => this.state({ data: data }))
      .catch(err => console.error(err))

    let lat;
    let lon;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        this.setState({latlon: {lat: lat, lon: lon}});
      })
    }

  }

  apiCall() {
    const url = ``
    fetch(url)
      .then(res => res.json())
      .then(data => this.state({ data: data }))
      .catch(err => console.error(err))
  }

  render() {
    return <h1>Container</h1>
  }

}

export default ApiContainer;

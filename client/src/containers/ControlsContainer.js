import React from 'react';
import Search from '../components/Search.js';
import Filter from '../components/Filter.js'
import './ControlsContainer.css'

const ControlsContainer = (props) => {

  return (
    <div id="search-items">
      <Search
        onSearchChange={ props.onSearchChange }
        searchTerm={ props.searchTerm }
        onSearchSubmit={ props.onSearchSubmit }/>
      <Filter
        cuisineTypes={ props.cuisineTypes }
        onCuisineSelect={ props.onCuisineSelect }/>
    </div>
  )
}

export default ControlsContainer;

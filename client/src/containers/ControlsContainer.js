import React from 'react';
import Search from '../components/Search.js';
import Filter from '../components/Filter.js'

const ControlsContainer = (props) => {

  return (
    <div>
      <Search
        onSearchChange={props.onSearchChange}
        searchTerm={props.searchTerm}
        onSearchSubmit={props.onSearchSubmit}/>
      <Filter
        cuisineTypes={props.cuisineTypes}/>
    </div>
  )
}

export default ControlsContainer;

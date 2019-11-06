import React from 'react';
import Search from '../components/Search.js';
import Filter from '../components/Filter.js'
import NameFilter from '../components/NameFilter.js'
import FilterTypeSelect from '../components/FilterTypeSelect.js'

const ControlsContainer = (props) => {



  return (
    <div>
      <Search
        onSearchChange={ props.onSearchChange }
        searchTerm={ props.searchTerm }
        onSearchSubmit={ props.onSearchSubmit }/>
      <FilterTypeSelect onFilterTypeSelect={ props.onFilterTypeSelect }/>
      <Filter
        cuisineTypes={ props.cuisineTypes }
        onCuisineSelect={ props.onCuisineSelect }/>
      <NameFilter
        nameFilter={ props.nameFilter }
        onNameFilterInput={ props.onNameFilterInput }/>
    </div>
  )
}

export default ControlsContainer;

import React from 'react';
import Search from '../components/Search.js';
import Filter from '../components/Filter.js'
import NameFilter from '../components/NameFilter.js'
import FilterTypeSelect from '../components/FilterTypeSelect.js'

const ControlsContainer = (props) => {

  const filterType = () => {
    if (props.filterType === 'Cuisine') {
    return (
      <Filter
        cuisineTypes={ props.cuisineTypes }
        onCuisineSelect={ props.onCuisineSelect }/>
      )
    }
    else if (props.filterType === 'Name') {
      return (
      <NameFilter
        nameFilter={ props.nameFilter }
        onNameFilterInput={ props.onNameFilterInput }/>
      )
    }
  }

  // <FilterTypeSelect onFilterTypeSelect={ props.onFilterTypeSelect }/>
  return (
    <div>
      <Search
        onSearchChange={ props.onSearchChange }
        searchTerm={ props.searchTerm }
        onSearchSubmit={ props.onSearchSubmit }/>
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

import React from 'react';

const FilterTypeSelect = (props) => {

  function handleChange(event) {
    props.onFilterTypeSelect(event.target.value);
  }

  return (
      <select defaultValue='' onChange={ handleChange }>
        <option disabled></option>
        <option>Cuisine</option>
        <option>Name</option>
      </select>
 )
}

export default FilterTypeSelect;

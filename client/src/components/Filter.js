import React from 'react'

const Filter = (props) => {

  const cuisineTypeNodes = Array.from(props.cuisineTypes).map((cuisine, index) => {
    return (
      <option key={index}>{cuisine}</option>
    )
  });

  function handleCuisineSelect(event) {
    props.onCuisineSelect(event.target.value)
  }

  return (
    <select onChange={handleCuisineSelect}>
      {cuisineTypeNodes}
    </select>
  )

}

export default Filter

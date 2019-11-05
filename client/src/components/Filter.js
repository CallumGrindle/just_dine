import React from 'react'

const Filter = (props) => {

  const cuisineTypeNodes = Array.from(props.cuisineTypes).map((cuisine) => {
    return (
      <option>{cuisine}</option>
    )
  });

  return (
    <select>
      {cuisineTypeNodes}
    </select>
  )

}

export default Filter

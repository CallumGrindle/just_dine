import React from 'react'

const Search = (props) => {

  function handleChange(event) {
    props.onSearchChange(event.target.value)
  }

  return (
    <div className='search-box'>
      <label for="search-box" >Search:</label>
      <input name="search"
      type='text'
      value={ props.searchTerm }
      onChange={ handleChange }></input>
    </div>
  )
}

export default Search

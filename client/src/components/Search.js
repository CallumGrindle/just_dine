import React from 'react'
import './Search.css'

const Search = (props) => {

  function handleChange(event) {
    props.onSearchChange(event.target.value)
  }

  return (
    <div className='search-box'>
      <label htmlFor="search-box" >Search city:</label>
      <input name="search"
        type='text'
        value={ props.searchTerm }
        onChange={ handleChange }>
      </input>
      <button onClick={props.onSearchSubmit}>Go!</button>
    </div>
  )
}

export default Search

import React from 'react'

const NameFilter = (props) => {

  function handleInput(event) {
    props.onNameFilterInput(event.target.value)
  }

  return (
    <div>
      <label for='select'>Find a restaurant</label>
      <input className='select' onChange={ handleInput } type='text' value={props.nameFilter}/>
    </div>
  )
}

export default NameFilter;

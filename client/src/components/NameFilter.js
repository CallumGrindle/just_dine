import React from 'react'

const NameFilter = (props) => {

  function handleInput(event) {
    props.onNameFilterInput(event.target.value)
  }

  return (
    <input onChange={ handleInput } type='text' value={props.nameFilter}/>
  )
}

export default NameFilter;

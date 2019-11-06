import React from 'react'

const NameFilter = (props) => {

  function handleInput(event) {
    props.handleInput(event.target.value)
  }

  return (
    <input onChange={ props.onNameFilterInput } type='text' value={props.nameFilter}/>
  )
}

export default NameFilter;

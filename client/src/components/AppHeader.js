import React from 'react'
import './AppHeader.css'
import logo from '../images/colours_160.png'
import ControlsContainer from '../containers/ControlsContainer.js'

const AppHeader = (props) => {

  return (
    <header id="page-header">
      <section id="logo"><img src={logo} alt="Just Dine Logo"></img>
        <h1>Why eat in when you can dine out?</h1></section>
      <section id="search-box"><h2>Search for a restaurant</h2>
      <ControlsContainer
      onSearchChange={ props.onSearchChange }
      onSearchSubmit={ props.onSearchSubmit }
      searchTerm={ props.searchTerm } />
      </section>
      <section id="favourites-box"><h2>Take me to my favourite restaurants</h2></section>
    </header>
  )
}






export default AppHeader;

import React from 'react'
import './AppHeader.css'
import logo from '../images/colours_160.png'

const AppHeader = (props) => {

  return (
    <header id="page-header">
      <section id="logo"><img src={logo} alt="Just Dine Logo"></img>
<h1>Why stay in when you can go out?</h1></section>
      <section>Search component</section>
      <section>Favourites button</section>
    </header>
  )
}






export default AppHeader;

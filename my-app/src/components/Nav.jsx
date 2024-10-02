import { Router, Route, A } from "@solidjs/router";

import logo from '../assets/logo_transparent.png';

function Nav(props) {

  return (
    <nav class="nav nav-dark">
      <A href="/" class="nav-item nav-logo">
        <img class="img" src={logo} alt="World Engineer Logo" />
        <h1>World Engineer</h1>
      </A>
      <div class='nav-item nav-search-bar'>
        <input type="text" name="" id="" />
      </div>
      <div class='nav-item nav-links'>
        <A href="/about" class="nav-link">About</A>
        <A href="/contact" class="nav-link">Contact</A>
      </div>
      
    </nav>
  );
}

export default Nav;
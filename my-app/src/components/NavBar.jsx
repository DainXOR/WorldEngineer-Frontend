import { A } from "@solidjs/router";

import logo from '../assets/logo_transparent.png';

function NavBar(props) {

  return (
    <nav class="fixed flex flex-row w-full m-0 p-4 gap-8 text-xl font-bold bg-we-blue-950 text-white">
      <A href="/" class="nav-item nav-logo">
        <img class="img" src={logo} alt="World Engineer Logo" />
        <h1>
          World Engineer
        </h1>
      </A>
      <div class='nav-item nav-search-bar'>
        <input type="text" name="" id="" />
      </div>
      <div class='nav-item nav-links'>
        <A href="/about" class="nav-link ">About</A>
        <A href="/sign" class="nav-link">Sign In</A>
      </div>
      
    </nav>
  );
}

export default NavBar;
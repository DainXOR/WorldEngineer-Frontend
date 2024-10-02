import logo from '../assets/logo_transparent.png';

function Nav(props) {

  return (
    <nav class="nav nav-dark">
      <a to="/" class="nav-item nav-logo">
        <img class="img" src={logo} alt="World Engineer Logo" />
        <h1>World Engineer</h1>
      </a>
      <div class='nav-item nav-search-bar'>
        <input type="text" name="" id="" />
      </div>
      <div class='nav-item nav-links'>
        <a to="/about" class="nav-link">About</a>
        <a to="/contact" class="nav-link">Contact</a>
      </div>
      
    </nav>
  );
}

export default Nav;
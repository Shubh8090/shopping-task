
import './Header.css'
const Header = () => {
  


  return (
    <div className='head-container'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <a class="navbar-brand" href="#">Start Bootstrap</a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item dropdown">
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">All Products</a>
                <a class="dropdown-item" href="#">Popular Items</a>
                <a class="dropdown-item" href="#">New Arrival</a>
              </div>
            </li>
          </ul>
        </div>
        {/* <form class="form-inline my-2 my-lg-0">
            <button class="btn btn-outline-dark my-2 my-sm-0 cart-button">Cart</button>
        </form> */}
      </nav>
    </div>
  )
}

export default Header;
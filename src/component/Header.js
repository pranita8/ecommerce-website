import "./Header.css";
import { FcShop } from "react-icons/fc";
import { AiOutlineSearch } from "react-icons/ai";
import { SlBasket } from 'react-icons/sl';
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="brand">
          <FcShop className="fcshop" />
          SHOPPERS HUB
        </div>

        <div className="search_bar">
          <input type="search" placeholder="Search here"></input>
          <AiOutlineSearch className="search_icon" />
        </div>

        <ul className="Headerlogin">
          <li>
          <Link to="/login">
              <div class="login_btn" id="log">
             <div id="dub-arrow"><img src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true" alt="" /></div>
             <a href="#">Login</a>
              </div>
                </Link>

            <Link className="cart" to='addtocart'>
              <SlBasket className='basket' />
              <span className="counter">1</span>
            </Link>

            <Link className="wishlist" to="wishlisticon">
              <AiOutlineHeart className="hearticon" />
            </Link>
          </li>

        </ul>

      </nav>
    </div>

  )
}
export default Header;
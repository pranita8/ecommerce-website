import "./Header.css";
import { FcShop } from "react-icons/fc";
import { SlBasket } from 'react-icons/sl';
import { AiOutlineSearch,AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

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

          <li className="iconsheader">
          <Link to="/login"><button className="loginbutton">Login</button></Link>
   

            <Link className="cart" to='addtocart'>
              <SlBasket className='basket' />
              <span className="counter">1</span>
            </Link>
            <Link className="wishlist" to="wishlisticon">
              <AiOutlineHeart className="hearticon" />
            </Link>
          </li>
          <li>
     <Link className="wishlist" to="wishlisticon">
            </Link>

          </li>
        </ul>

      </nav>
    </div>

  )
}
export default Header;

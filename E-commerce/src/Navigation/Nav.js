import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navigation = ({ query, handleInputChange }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="search-input"
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <Link to="">
          <FiHeart className="nav-icons" />
        </Link>
        <Link to="/cart">
          <AiOutlineShoppingCart className="nav-icons" />
        </Link>
        <Link to="">
          <AiOutlineUserAdd className="nav-icons" />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;

import "./navbar.scss";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import defaultUser from "../../assets/default-user.png";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const [showLogout, setShowLogout] = useState(false);

  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    navigate("/landing");
  };

  return (
    <div className="navigation">
      <nav>
        <div className="logo">
          <Logo />
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <Hyperlink to="/">Home</Hyperlink>
          </li>
          <li className="nav-item">
            <Hyperlink to="listings">Listings</Hyperlink>
          </li>
          <li className="nav-item">
            <Hyperlink to="bookings">Bookings</Hyperlink>
          </li>
        </ul>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.username || "Join today!"}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button type="button" className="dropdown-btn" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

const Hyperlink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;

  &:visited {
    color: black;
  }

  &:hover {
    color: #f5b70a;
    transition-duration: 0.3s;
  }
`;

export default Navbar;

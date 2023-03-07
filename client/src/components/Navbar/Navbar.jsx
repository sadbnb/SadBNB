import "./navbar.scss";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import defaultUser from "../../assets/default-user.png";

const Navbar = () => {
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

        <div className="user">
          <img src={defaultUser} alt="" />
          <span>Dwayne</span>
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

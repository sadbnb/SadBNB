import "./navbar.scss";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  return (
    <header>
      <div className="navigation">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">Listings</li>
            <li className="nav-item">Booking</li>
          </ul>

          <div className="rightbar">
            <BsPersonCircle />
          </div>
        </div>
      </div>
    </header>
  );
};

const Hyperlink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;

  &:visited {
    color: white;
  }

  &:hover {
    color: #f5b70a;
    transition-duration: 0.3s;
    text-decoration: underline;
  }
`;

export default Navbar;

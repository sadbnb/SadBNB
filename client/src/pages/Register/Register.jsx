import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
  return (
    <div className="register">
      <div className="register-container">
        <h1>Register</h1>
        <form>
          <div className="text-field">
            <input type="text" required name="username" />
            <span></span>
            <label>Username</label>
          </div>
          <div className="text-field">
            <input type="Email" required name="email" />
            <label>Email</label>
            <span></span>
          </div>
          <div className="text-field">
            <input type="password" required name="password" />
            <label>Password</label>
            <span></span>
          </div>
          <button>Register</button>
          <div className="sign-in-btn">
            Have an account?
            <Hyperlink to="/login">Sign in</Hyperlink>
          </div>
        </form>
      </div>
    </div>
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

export default Register;

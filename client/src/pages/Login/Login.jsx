import "./login.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Cookies from 'js-cookie';
import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

const Login = ({ user, setUser }) => {
  const navigate = useNavigate()
  const form = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData(form.current)
    let req = await fetch("http://localhost:3000/login", {
      method: 'POST',
      body: formData
    })
    let res = await req.json()
    if (req.ok) {
      console.log(res.user)
      Cookies.set('token', res.token)
      setUser(res.user)
      navigate("/home")
    }
  }

  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} ref={form}>
          <div className="text-field">
            <input type='username' required name='username' />
            <span></span>
            <label>Username</label>
          </div>
          <div className="text-field">
            <input  type="password" required name="password" />
            <label>Password</label>
            <span></span>
          </div>
          <button>Login</button>
          <div className="sign-up-btn">
            Don't have an account?
            <Hyperlink to="/register">Sign up</Hyperlink>
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

export default Login;

import "./login.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Cookies from 'js-cookie';
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom'

const Login = ({ user, setUser }) => {
  
  // const [loginState, setLoginState] = useState({
  //   username: "",
  //   password: ""
  // })
  const form = useRef()

  const navigate = useNavigate()
  useEffect(() => {
    const loadUser = async () => {
      let req = await fetch("me", {
        // method: 'GET',
        headers: { Authorization: Cookies.get('token')}
      })
      let res = await req.json()
      if (res.user) setUser(res.user)
    }
    if (Cookies.get('token')) loadUser()
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let formData = new FormData(form.current)
      let req = await fetch("login", {
      method: 'POST',
      body: formData,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      })
    })
    let res = await req.json()
    if (req.ok) {
      console.log("Res", res)
      Cookies.set('token', res.token)
      setUser(res.user)
      navigate('/')
    }
    } catch (error) {
      console.log(error)
    }
   
  }

  return (
    <div className="login">
      <div className="login-container">
        {user}
        <h1>Login</h1>
        <form onSubmit={handleSubmit} ref={form}>
          <div className="text-field">
            <input name='username' type='username'  />
            {/* <input type="text" required name="username" /> */}
            <span></span>
            <label>Username</label>
          </div>
          <div className="text-field">
            <input  type="password" required name="password" />
            {/* <input name='password' type='password' placeholder="password" /> */}
            <label>Password</label>
            <span></span>
          </div>
          <button>Login</button>
          <div className="sign-up-btn">
            Don't have an account?
            <Hyperlink to="/register"> Sign up</Hyperlink>
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

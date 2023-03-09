import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Cookies from "js-cookie";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ user, setUser }) => {
  const navigate = useNavigate();
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const createUser = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData(form.current);
      let req = await fetch("http://localhost:3000/signup", {
        method: "POST",
        body: formData,
      });
      let res = await req.json();
      if (req.ok) {
        console.log(res.user);
        Cookies.set("token", res.token);
        setUser(res.user);
        setIsLoading(true);
      }
    } catch (error) {
      setIsLoading(false);
      alert("The email has been taken");
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
        setIsLoading(false);
      }, 3000);
    }
  }, [user, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="register">
      <div className="register-container">
        <h1>Register</h1>
        <form onSubmit={createUser} ref={form}>
          <div className="text-field">
            <input type="username" required name="username" />
            <span></span>
            <label>Username</label>
          </div>
          <div className="text-field">
            <input type="email" required name="email" />
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

const Spinner = styled.div`
  margin: auto;
  border: 0.2rem solid rgba(0, 0, 0, 0.1);
  border-top-color: magenta;
  border-radius: 50%;
  height: 20rem;
  width: 20rem;
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
export default Register;

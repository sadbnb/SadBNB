import "./register.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../components/context/AppContext";

const Register = () => {
  const navigate = useNavigate();
  const form = useRef();
  const { isLoading, setIsLoading, registerUser, user } = useAppContext();

  const createUser = async (e) => {
    e.preventDefault();
    let formData = new FormData(form.current);
    registerUser(formData);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
        setIsLoading(false);
      }, 3000);
    }
  }, [user, navigate, setIsLoading]);

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
  position: absolute;
  top: 30%;
  right: 40%;
  transform: translate(30%, -40%);
  border: 0.2rem solid rgba(0, 0, 0, 0.1);
  border-top-color: #ff00f7;
  border-radius: 50%;
  height: 20rem;
  width: 20rem;

  animation: chase 0.75s linear infinite;
  @keyframes chase {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0.8rem;
    height: 0.8rem;
    background-color: #ff00f7;
    border-radius: 50%;
    animation: dot1 1s linear infinite;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0.8rem;
    height: 0.8rem;
    background-color: #ff00f7;
    border-radius: 50%;
    animation: dot2 1s linear infinite;
  }
  @keyframes dot1 {
    0% {
      transform: translate(-150%, -50%);
    }
    25% {
      transform: translate(-50%, -50%);
    }
    100% {
      transform: translate(0, -50%);
    }
  }
  @keyframes dot2 {
    0% {
      transform: translate(-50%, -50%);
    }
    25% {
      transform: translate(50%, -50%);
    }
    100% {
      transform: translate(150%, -50%);
    }
  }
`;
export default Register;

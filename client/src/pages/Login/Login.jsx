import "./login.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <form>
          <div className="text-field">
            <input type="text" required name="username" />
            <span></span>
            <label>Username</label>
          </div>
          <div className="text-field">
            <input type="password" required name="password" />
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

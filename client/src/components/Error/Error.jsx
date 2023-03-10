import { Link } from "react-router-dom";
import img from "../../assets/not-found.svg";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="Not-found" />
        <h3>You seem to be in the wrong page</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Home</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  text-align: center;
  display: flex;
  height: 100vh;
  img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: linear-gradient(#e61e4d 27.5%, #e31c5f 40%, #d70466 57.5%, #bd1e59);
    text-decoration: underline;
    text-transform: capitalize;
  }
`;

export default Error;

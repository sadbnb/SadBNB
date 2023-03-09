import Logo from "../../components/Logo/Logo";
import main from "../../assets/bg.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Luxury <span>Booking</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            veritatis ad asperiores fugit suscipit? Accusamus, quod! Error
            ducimus magni cum eos, laudantium velit natus quas labore quam
            voluptatibus, odio fugit?
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: 90vw;
    max-width: 1120px;
    margin: 0 auto;
    height: 6rem;
    display: flex;
    align-items: center;
    border-radius: 50%;
    object-fit: cover;

    img {
      width: 100px;
      display: block;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .page {
    min-height: calc(100vh - 6rem);
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    margin-top: 0;
    font-size: 3.052rem;
    span {
      color: red;
    }
  }
  p {
    color: #486581;
  }

  .main-img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-radius: 50%;
  }

  .btn {
    cursor: pointer;
    color: white;
    background: linear-gradient(
      #e61e4d 27.5%,
      #e31c5f 40%,
      #d70466 57.5%,
      #bd1e59
    );
    border: transparent;
    border-radius: 0.25rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: 0.3s ease-in-out all;
    text-transform: capitalize;
    display: inline-block;
    text-decoration: none;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;

import "./home.scss";
import Slider from "../../components/Slider/Slider";
import { useNavigate } from 'react-router-dom';


const Home = ({ user }) => {
  const navigate = useNavigate()

  return (
    <div>
      {/* {user?<h1>Welcome {user.username}!</h1>:null} */}
      <Slider />
    </div>
  );
};
export default Home;
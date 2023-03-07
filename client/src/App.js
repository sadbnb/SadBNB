import "./App.css";
import Home from "./pages/Home/Home";
import Listings from "./components/Listings/Listings";
import Bookings from "./components/Bookings/Bookings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {
  createBrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/bookings",
      element: <Bookings />,
    },
    {
      path: "/listings",
      element: <Listings />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

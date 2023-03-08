import "./App.css";
import Home from "./pages/Home/Home";
import Listings from "./components/Listings/Listings";
import Bookings from "./components/Bookings/Bookings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Landing from "./pages/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import {useState} from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(null)

  const Layout = () => {
    return (
      <>
        <Navbar user={user} setUser={setUser}/>
        <Outlet />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
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
        
      ]
    },
    {
      path: "/login",
      element: <Login user={user} setUser={setUser}/>,
    },
    {
      path: "/register",
      element: <Register user={user} setUser={setUser}/>,
    },
    {
      path: "/landing",
      element: <Landing />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

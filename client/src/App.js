import "./App.css";
import Navbar from "./components/Navbar/Navbar";
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
      element: <Navbar />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

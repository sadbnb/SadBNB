import "./App.css";
import Home from "./pages/Home/Home";
import Listings from "./components/Listings/Listings";
import Bookings from "./components/Bookings/Bookings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Landing from "./pages/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Routes,
  Route,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Error from "./components/Error/Error";

const App = () => {
<<<<<<< HEAD
=======
  const [user, setUser] = useState(null)
    // const navigate = useNavigate()

  useEffect(() => {
    const loadUser = async () => {
      let req = await fetch("http://localhost:3000/me", {
        headers: { Authorization: Cookies.get('token') }
      })
      let res = await req.json()
      if (res.user) setUser(res.user)
    }
    if (Cookies.get('token')) loadUser()
  }, [])
  
  // console.log(user)

>>>>>>> b83f7a809356af380a6cc272160014ae38b31f8f
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },
  //       {
  //         path: "/bookings",
  //         element: <Bookings />,
  //       },
  //       {
  //         path: "/listings",
  //         element: <Listings />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
  //   {
  //     path: "/landing",
  //     element: <Landing />,
  //   },
  // ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="listings" element={<Listings />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// const Paul = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <Layout />
//             </ProtectedRoute>
//           }
//         >
//           <Route index element={<Home />} />
//           <Route path="bookings" element={<Bookings />} />
//           <Route path="listings" element={<Listings />} />
//         </Route>
//         <Route path="/register" element={<Register />} />
//         <Route path="/landing" element={<Landing />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="*" element={<Error />} />
//         <Route />
//       </Routes>
//     </BrowserRouter>
//   );
// };

import Cookies from "js-cookie";
import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      let req = await fetch("http://localhost:3000/me", {
        headers: { Authorization: Cookies.get("token") },
      });
      let res = await req.json();
      if (res.user) setUser(res.user);
    };
    if (Cookies.get("token")) loadUser();
  }, []);

  const registerUser = async (formData) => {
    let { data } = await axios.post("/signup", formData);
    const { user, token } = data;

    try {
      setUser(user);
      setIsLoading(true);
      Cookies.set("token", token);
    } catch (error) {
      setIsLoading(false);
      alert("The email has been taken");
    }
  };

  const loginUser = async (formData) => {
    let { data } = await axios.post("/login", formData);

    const { user, token } = data;

    try {
      setUser(user);
      setIsLoading(true);
      Cookies.set("token", token);
    } catch (err) {
      setIsLoading(false);
      alert("Invalid Credentials");
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
  };
  return (
    <AppContext.Provider
      value={{ setIsLoading, isLoading, user, logout, registerUser, loginUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };

// const navigate = useNavigate()

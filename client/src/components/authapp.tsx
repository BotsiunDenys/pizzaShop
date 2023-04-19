/* import React, { useEffect } from "react";
import LoginForm from "./components/loginForm";
import "./assets/styles/style.css";
import { useAppDispatch, useAppSelector } from "./store/store";
import { checkAuth, logout } from "./store/slice/AuthSlice";

const App = () => {
  const isLogged = useAppSelector((state) => state.isLogged);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
  }, []);
  return (
    <div className="app">
      <h1>{isLogged ? user?.username : "Log in"}</h1>
      {isLogged ? (
        <button
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </button>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default App;
 */
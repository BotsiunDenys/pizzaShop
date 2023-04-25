import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Login from "./components/Login";
import AdminPanel from "./components/AdminPanel";
import OrderPage from "./components/OrderPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/order" element={<OrderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

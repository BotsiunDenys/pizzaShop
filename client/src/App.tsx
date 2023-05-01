import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import OrderPage from "./pages/OrderPage";

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

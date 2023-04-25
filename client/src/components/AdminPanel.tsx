import React, { useEffect } from "react";
import { useAppSelector } from "../store/store";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogged) navigate("/");
  }, [isLogged]);
  return <div>AdminPanel</div>;
};

export default AdminPanel;

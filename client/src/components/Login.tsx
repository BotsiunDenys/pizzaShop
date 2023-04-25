import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { login, registration } from "../store/slice/AuthSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import loginFormSchema from "./form/formValidationSchema";
import CustomInput from "./form/CustomInput";
import "react-toastify/dist/ReactToastify.css";

interface LoginFormValues {
  username: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthFailed = useAppSelector((state) => state.auth.error);
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const [isRegForm, setIsRegForm] = useState(false);
  const initialValues: LoginFormValues = {
    username: "",
    password: "",
  };
  useEffect(() => {
    if (isLogged) {
      navigate("/");
    } else {
      if (isAuthFailed && !isRegForm) {
        toastLogin("Wrong username or password");
      } else if (isAuthFailed && isRegForm) {
        toastLogin("User with this username already exists");
      }
    }
  }, [isAuthFailed, isLogged]);
  const toastLogin = (message: string) => {
    toast(message);
  };
  return (
    <div className="min-h-[60vh] flex justify-center items-center pt-10">
      <div className=" bg-slate-300 py-10 px-14 rounded-md">
        <header className="text-blue text-3xl text-center mb-3">
          {isRegForm ? "Registration" : "Sign in"}
        </header>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            if (isRegForm) {
              dispatch(registration(values));
            } else {
              dispatch(login(values));
            }
            actions.resetForm();
          }}
          validationSchema={loginFormSchema}
        >
          <Form className="flex flex-col gap-10">
            <CustomInput
              label="Username"
              name="username"
              placeholder="Username"
              type="text"
              className="flex flex-col gap-1 text-xl text-blue"
            />
            <CustomInput
              label="Password"
              name="password"
              placeholder="Password"
              type="password"
              className="flex flex-col gap-1 text-xl text-blue"
            />
            <p className="text-center text-xl text-blue">
              {isRegForm ? "" : `New client?${" "}`}
              <button
                type="button"
                className=" text-cyan-600 hover:text-cyan-800 transition-colors outline-none"
                onClick={() => {
                  setIsRegForm((prev) => !prev);
                }}
              >
                {isRegForm ? "Sign in" : "Sign up"}
              </button>
            </p>
            <button
              className="text-2xl px-4 py-2 text-white hover:bg-hoverMain bg-main rounded-md transition-colors"
              type="submit"
            >
              {isRegForm ? "Sign up" : "Sign in"}
            </button>
          </Form>
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

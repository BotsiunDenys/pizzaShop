import * as yup from "yup";

const loginFormSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be shorter than 30 characters")
    .required("Required"),
  password: yup
    .string()
    .min(5, "Password must be longer than 5 characters")
    .max(20, "Password must be shorter than 20 characters")
    .required("Required"),
});

export default loginFormSchema;

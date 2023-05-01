import * as yup from "yup";

const createProductFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must be shorter than 30 characters")
    .required("Required"),
  description: yup
    .string()
    .min(5, "Description must be longer than 5 characters")
    .max(500, "Description must be shorter than 500 characters")
    .required("Required"),
  price: yup.number().required("Required"),
  img: yup.string().url("Enter valid URL").required("Required"),
  category: yup.string().required("Required"),
});

export default createProductFormSchema;

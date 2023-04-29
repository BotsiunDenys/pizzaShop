import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const orderFormSchema = yup.object().shape({
  address: yup.string().required("Required"),
  phone: yup
    .string()
    .required("Required")
    .matches(phoneRegExp, "Phone number is not valid"),
});

export default orderFormSchema;

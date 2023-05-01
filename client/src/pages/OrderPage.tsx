import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { clearProducts } from "../store/slice/OrderSlice";
import { Formik, Form } from "formik";
import { AiOutlineClose } from "react-icons/ai";
import SingleOrderProduct from "../components/SingleOrderProduct";
import Modal from "../components/Modal";
import CustomInput from "../components/form/CustomInput";
import orderFormSchema from "../components/form/orderValidationSchema";
import { blockAnimation } from "../components/animations/animations";
import "react-toastify/dist/ReactToastify.css";

interface OrderFormValues {
  address: string;
  phone: string;
}

const OrderPage = () => {
  const orderProducts = useAppSelector((state) => state.order.products);
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [modalForm, setModalForm] = useState(false);
  const initialValues: OrderFormValues = {
    address: "",
    phone: "",
  };
  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, []);
  const toastOrder = (message: string) => {
    toast(message);
  };

  return (
    <>
      <motion.main
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={blockAnimation}
        custom={1}
        className="flex flex-col justify-center items-center mt-10 min-h-[60vh]"
      >
        <header className="text-3xl text-main font-dancing font-bold">
          Your order
        </header>
        <section className="grid md:grid-cols-2 grid-cols-1 gap-3 my-10 md:mx-5">
          {orderProducts.map((product) => (
            <SingleOrderProduct key={product._id} product={product} />
          ))}
        </section>
        <footer>
          <div className="flex gap-5">
            <button
              className="px-7 py-4 bg-main hover:bg-hoverMain text-white transition-colors rounded-md"
              onClick={() => dispatch(clearProducts())}
              type="button"
            >
              Clear all
            </button>
            <button
              className="px-7 py-4 bg-main hover:bg-hoverMain text-white transition-colors rounded-md"
              type="button"
              onClick={() => {
                if (!orderProducts.length) {
                  toastOrder("Your cart is empty!");
                } else {
                  setModalForm(true);
                }
              }}
            >
              Order
            </button>
          </div>
        </footer>
      </motion.main>
      <Modal visible={modalForm} setVisible={setModalForm}>
        <div>
          <header className="flex justify-between text-2xl  text-main items-center">
            <p className="font-dancing font-bold">Order form</p>
            <AiOutlineClose
              onClick={() => setModalForm(false)}
              className="cursor-pointer"
            />
          </header>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log(values);
              dispatch(clearProducts());
              toastOrder("Order proceed!");
              actions.resetForm();
              setModalForm(false);
            }}
            validationSchema={orderFormSchema}
          >
            <Form className="flex flex-col gap-5">
              <CustomInput
                label="Address"
                name="address"
                placeholder="Enter your address"
                type="text"
                className="flex flex-col gap-1 text-xl text-blue"
              />
              <CustomInput
                label="Phone number"
                name="phone"
                placeholder="Enter your phone number"
                type="text"
                className="flex flex-col gap-1 text-xl text-blue"
              />
              <button
                className="text-2xl px-4 py-2 text-white hover:bg-hoverMain bg-main rounded-md transition-colors"
                type="submit"
              >
                Order
              </button>
            </Form>
          </Formik>
        </div>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default OrderPage;

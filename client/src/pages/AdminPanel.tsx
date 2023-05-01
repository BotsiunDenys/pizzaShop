import React, { useEffect, useState, useMemo } from "react";
import ReactLoading from "react-loading";
import { Field } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { FaHamburger, FaPizzaSlice, FaCoffee } from "react-icons/fa";
import { GiCupcake } from "react-icons/gi";
import { CgMenuCake } from "react-icons/cg";
import { useAppSelector, useAppDispatch } from "../store/store";
import { useNavigate } from "react-router-dom";
import { Product } from "../models/MenuModels";
import { getProducts } from "../store/slice/MenuSlice";
import Modal from "../components/Modal";
import { AiOutlineClose } from "react-icons/ai";
import { Form, Formik } from "formik";
import CustomInput from "../components/form/CustomInput";
import createProductFormSchema from "../components/form/createProductValidationSchema";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../store/slice/AdminSlice";
import "../styles/adminPanel.css";

interface ProductValues {
  name: string;
  description: string;
  price: string;
  img: string;
  category: string;
}

const AdminPanel = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const loading = useAppSelector((state) => state.menu.loading);
  const adminLoading = useAppSelector((state) => state.admin.loading);
  const [menu, setMenu] = useState<Product[] | []>([]);
  const products = useAppSelector((state) => state.menu.products);
  const [modalCreate, setModalCreate] = useState(false);
  const [changeableModal, setChangeableModal] = useState("");
  const [productId, setProductId] = useState("");
  const error = useAppSelector((state) => state.admin.error);
  const success = useAppSelector((state) => state.admin.success);
  const initialProductValues: ProductValues = {
    name: "",
    price: "",
    description: "",
    img: "",
    category: "",
  };
  const burgers = useMemo(
    () => products.filter((product) => product.category === "burger"),
    [products]
  );
  const pizzas = useMemo(
    () => products.filter((product) => product.category === "pizza"),
    [products]
  );
  const beverages = useMemo(
    () => products.filter((product) => product.category === "beverage"),
    [products]
  );
  const desserts = useMemo(
    () => products.filter((product) => product.category === "dessert"),
    [products]
  );
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    setMenu(beverages);
  }, [beverages]);

  useEffect(() => {
    if (!isLogged) navigate("/");
  }, [isLogged]);

  useEffect(() => {
    if (success) {
      toast("Success!");
    } else if (error) {
      toast("Something went wrong!");
    }
  }, [error, success]);

  if (loading || adminLoading)
    return (
      <div className="flex items-center justify-center mt-52">
        <ReactLoading type="bars" color="#616469" />
      </div>
    );

  return (
    <>
      <main>
        <div className="flex items-center flex-col mt-10">
          <header className="md:text-[50px] text-[30px] text-main font-dancing">
            Admin panel
          </header>
          <div className="my-5">
            <button
              onClick={() => {
                setChangeableModal("Create");
                setModalCreate(true);
              }}
              className="bg-main text-xl sm:py-3 py-2 text-white hover:bg-hoverMain sm:px-4 px-2 transition-colors rounded-md"
            >
              Add new product
            </button>
          </div>
          <section>
            <ul className="md:flex grid grid-cols-3 md:gap-5 gap-3">
              <li onClick={() => setMenu(products)} className="adminLi">
                <CgMenuCake />
                <p className="text-blue fond-bold">All</p>
              </li>
              <li onClick={() => setMenu(burgers)} className="adminLi">
                <FaHamburger />
                <p className="text-blue fond-bold">Burgers</p>
              </li>
              <li onClick={() => setMenu(pizzas)} className="adminLi">
                <FaPizzaSlice />
                <p className="text-blue fond-bold">Pizza</p>
              </li>
              <li onClick={() => setMenu(beverages)} className="adminLi">
                <FaCoffee />
                <p className="text-blue fond-bold">Beverages</p>
              </li>
              <li onClick={() => setMenu(desserts)} className="adminLi">
                <GiCupcake />
                <p className="text-blue fond-bold">Desserts</p>
              </li>
            </ul>
          </section>
          <main className="grid md:grid-cols-2 grid-cols-1 gap-3 my-10 md:mx-5">
            {menu.map((item) => (
              <div
                className="border-2 rounded-md p-3 sm:max-w-lg max-w-[300px] animate-fade-in"
                key={item._id}
              >
                <div className="flex gap-3 mb-3">
                  <input
                    className="rounded-md sm:h-[150px] h-[100px] sm:w-[200px] w-[150px] cursor-default"
                    type="image"
                    src={item.img}
                    alt={`${item.name} image`}
                  />
                  <div className="flex flex-col justify-around">
                    <header className="sm:text-[20px] text-[18px] max-w-[200px] text-main">
                      {item.name}
                    </header>
                    <p className="font-bold">Price: {item.price}$</p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setChangeableModal("Update");
                          setProductId(item._id);
                          setModalCreate(true);
                        }}
                        className="sm:px-3 px-1 sm:py-2 py-1 bg-green-600 rounded-sm text-white hover:bg-green-800 max-w-fit transition-colors"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => {
                          dispatch(deleteProduct(item._id));
                          dispatch(getProducts());
                        }}
                        className="sm:px-3 px-1 sm:py-2 py-1 bg-red-600 rounded-sm text-white hover:bg-red-800 max-w-fit transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </main>
        </div>
      </main>
      <Modal visible={modalCreate} setVisible={setModalCreate}>
        <div className="flex flex-col">
          <header className="flex justify-between text-2xl  text-main items-center">
            <p className="font-dancing font-bold">{changeableModal} product</p>
            <AiOutlineClose
              onClick={() => setModalCreate(false)}
              className="cursor-pointer"
            />
          </header>
          <Formik
            initialValues={initialProductValues}
            validationSchema={createProductFormSchema}
            onSubmit={(values, actions) => {
              if (changeableModal === "Create") {
                dispatch(createProduct(values));
              } else if (changeableModal === "Update" && productId) {
                const product = { _id: productId, ...values };
                dispatch(updateProduct(product));
              }
              dispatch(getProducts());
              actions.resetForm();
              setModalCreate(false);
            }}
          >
            <Form className="flex flex-col gap-5">
              <CustomInput
                label="Name"
                name="name"
                placeholder="Enter product name"
                type="text"
                className="adminInput"
              />
              <CustomInput
                label="Price"
                name="price"
                placeholder="Enter product price"
                type="number"
                className="adminInput"
              />
              <CustomInput
                label="Description"
                name="description"
                placeholder="Enter product description"
                type="text"
                className="adminInput"
              />
              <CustomInput
                label="Image"
                name="img"
                placeholder="Enter product image URL"
                type="text"
                className="adminInput"
              />
              <Field
                className="py-2 px-1 text-xl rounded-sm outline-none"
                as="select"
                name="category"
              >
                <option value="">Select a category</option>
                <option value="pizza">Pizza</option>
                <option value="burger">Burger</option>
                <option value="beverage">Beverage</option>
                <option value="dessert">Dessert</option>
              </Field>
              <button
                type="submit"
                className="text-2xl px-4 py-2 text-white hover:bg-hoverMain bg-main rounded-md transition-colors"
              >
                {changeableModal}
              </button>
            </Form>
          </Formik>
        </div>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default AdminPanel;

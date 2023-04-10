import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import PizzaRouter from "./Routers/PizzaRouter.js";
import DesertRouter from "./Routers/DesertRouter.js";
import BeverageRouter from "./Routers/BeverageRouter.js";
import BurgerRouter from "./Routers/BurgerRouter.js";

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(express.json());
app.use("/apiPizza", PizzaRouter);
app.use("/apiDrink", DesertRouter);
app.use("/apiBeverage", BeverageRouter);
app.use("/apiBurger", BurgerRouter);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log("SERVER STARTED"));
  } catch (e) {
    console.log(e);
  }
}

startApp();

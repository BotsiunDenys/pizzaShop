import Router from "express";
import BeverageController from "../Controllers/BeverageController.js";

const BeverageRouter = new Router();

BeverageRouter.post("/beverage", BeverageController.create);
BeverageRouter.get("/beverages", BeverageController.getAllBeverages);
BeverageRouter.put("/beverage", BeverageController.updateBeverage);
BeverageRouter.delete("/beverage/:id", BeverageController.deleteBeverage);

export default BeverageRouter;

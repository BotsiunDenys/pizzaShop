import Router from "express";
import BurgerController from "../Controllers/BurgerController.js";

const BurgerRouter = new Router();

BurgerRouter.post("/burger", BurgerController.create);
BurgerRouter.get("/burgers", BurgerController.getAllBurgers);
BurgerRouter.put("/burger", BurgerController.updateBurger);
BurgerRouter.delete("/burger/:id", BurgerController.deleteBurger);

export default BurgerRouter;

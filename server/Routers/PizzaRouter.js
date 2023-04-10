import Router from "express";
import PizzaController from "../Controllers/PizzaController.js";

const PizzaRouter = new Router();

PizzaRouter.post("/pizza", PizzaController.create);
PizzaRouter.get("/pizzas", PizzaController.getAllPizzas);
PizzaRouter.put("/pizza", PizzaController.updatePizza);
PizzaRouter.delete("/pizza/:id", PizzaController.deletePizza);

export default PizzaRouter;

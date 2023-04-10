import PizzaService from "../Services/PizzaService.js";

class PizzaController {
  async create(req, res) {
    try {
      const pizza = await PizzaService.create(req.body);
      return res.json(pizza);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAllPizzas(req, res) {
    try {
      const pizzas = await PizzaService.getAllPizzas();
      return res.json(pizzas);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async updatePizza(req, res) {
    try {
      const updatedPizza = await PizzaService.updatePizza(req.body);
      return res.json(updatedPizza);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async deletePizza(req, res) {
    try {
      const pizza = await PizzaService.deletePizza(req.params.id);
      return res.json(pizza);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PizzaController();

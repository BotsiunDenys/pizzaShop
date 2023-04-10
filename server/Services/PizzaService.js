import Pizza from "../models/PizzaModel.js";

class PizzaService {
  async create(pizza) {
    const createdPizza = await Pizza.create(pizza);
    return createdPizza;
  }

  async getAllPizzas() {
    const pizzas = await Pizza.find();
    return pizzas;
  }

  async updatePizza(pizza) {
    if (!pizza._id) {
      throw new Error("Enter ID");
    }
    const updatedPizza = await Pizza.findByIdAndUpdate(pizza._id, pizza, {
      new: true,
    });
    return updatedPizza;
  }

  async deletePizza(id) {
    if (!id) {
      throw new Error("Enter ID");
    }
    const pizza = await Pizza.findByIdAndDelete(id);
    return pizza;
  }
}

export default new PizzaService();

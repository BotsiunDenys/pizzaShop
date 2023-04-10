import Burger from "../models/BurgerModel.js";

class BurgerService {
  async create(burger) {
    const createdBurger = await Burger.create(burger);
    return createdBurger;
  }

  async getAllBurgers() {
    const burgers = await Burger.find();
    return burgers;
  }

  async updateBurger(burger) {
    if (!burger._id) {
      throw new Error("Enter ID");
    }
    const updatedBurger = await Burger.findByIdAndUpdate(burger._id, burger, {
      new: true,
    });
    return updatedBurger;
  }

  async deleteBurger(id) {
    if (!id) {
      throw new Error("Enter ID");
    }
    const burger = await Burger.findByIdAndDelete(id);
    return burger;
  }
}

export default new BurgerService();

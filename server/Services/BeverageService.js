import Beverage from "../models/BeverageModel.js";

class BeverageService {
  async create(beverage) {
    const createdbeverage = await Beverage.create(beverage);
    return createdbeverage;
  }

  async getAllBeverages() {
    const beverages = await Beverage.find();
    return beverages;
  }

  async updateBeverage(beverage) {
    if (!beverage._id) {
      throw new Error("Enter ID");
    }
    const updatedbeverage = await Beverage.findByIdAndUpdate(beverage._id, beverage, {
      new: true,
    });
    return updatedbeverage;
  }

  async deleteBeverage(id) {
    if (!id) {
      throw new Error("Enter ID");
    }
    const beverage = await Beverage.findByIdAndDelete(id);
    return beverage;
  }
}

export default new BeverageService();

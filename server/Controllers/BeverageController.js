import BeverageService from "../Services/BeverageService.js";

class BeverageController {
  async create(req, res) {
    try {
      const beverage = await BeverageService.create(req.body);
      return res.json(beverage);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAllBeverages(req, res) {
    try {
      const beverages = await BeverageService.getAllBeverages();
      return res.json(beverages);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async updateBeverage(req, res) {
    try {
      const updatedBeverage = await BeverageService.updateBeverage(req.body);
      return res.json(updatedBeverage);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async deleteBeverage(req, res) {
    try {
      const beverage = await BeverageService.deleteBeverage(req.params.id);
      return res.json(beverage);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new BeverageController();

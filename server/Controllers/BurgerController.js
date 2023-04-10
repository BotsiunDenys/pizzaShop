import BurgerService from "../Services/BurgerService.js";

class BurgerController {
  async create(req, res) {
    try {
      const burger = await BurgerService.create(req.body);
      return res.json(burger);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAllBurgers(req, res) {
    try {
      const burgers = await BurgerService.getAllBurgers();
      return res.json(burgers);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async updateBurger(req, res) {
    try {
      const updatedBurger = await BurgerService.updateBurger(req.body);
      return res.json(updatedBurger);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async deleteBurger(req, res) {
    try {
      const burger = await BurgerService.deleteBurger(req.params.id);
      return res.json(burger);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new BurgerController();

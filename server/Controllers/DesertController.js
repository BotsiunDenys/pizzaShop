import DesertService from "../Services/DesertService.js";

class DesertController {
  async create(req, res) {
    try {
      const desert = await DesertService.create(req.body);
      return res.json(desert);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAllDeserts(req, res) {
    try {
      const deserts = await DesertService.getAllDeserts();
      return res.json(deserts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async updateDesert(req, res) {
    try {
      const updateddesert = await DesertService.updateDesert(req.body);
      return res.json(updateddesert);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async deleteDesert(req, res) {
    try {
      const desert = await DesertService.deleteDesert(req.params.id);
      return res.json(desert);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new DesertController();

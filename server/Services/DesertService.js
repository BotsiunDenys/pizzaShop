import Desert from "../models/DesertModel.js";

class DesertService {
  async create(desert) {
    const createdDesert = await Desert.create(desert);
    return createdDesert;
  }

  async getAllDeserts() {
    const deserts = await Desert.find();
    return deserts;
  }

  async updateDesert(desert) {
    if (!desert._id) {
      throw new Error("Enter ID");
    }
    const updatedDesert = await Desert.findByIdAndUpdate(desert._id, desert, {
      new: true,
    });
    return updatedDesert;
  }

  async deleteDesert(id) {
    if (!id) {
      throw new Error("Enter ID");
    }
    const desert = await Desert.findByIdAndDelete(id);
    return desert;
  }
}

export default new DesertService();

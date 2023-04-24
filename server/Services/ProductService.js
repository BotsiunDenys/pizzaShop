import Product from "../models/ProductModel.js";

class ProductService {
  async create(product) {
    const createdProduct = await Product.create(product);
    return createdProduct;
  }

  async getAllProducts() {
    const products = await Product.find();
    return products;
  }

  async updateProduct(product) {
    if (!product._id) {
      throw new Error("Enter ID");
    }
    const updatedProduct = await Product.findByIdAndUpdate(product._id, product, {
      new: true,
    });
    return updatedProduct;
  }

  async deleteProduct(id) {
    if (!id) {
      throw new Error("Enter ID");
    }
    const product = await Product.findByIdAndDelete(id);
    return product;
  }
}

export default new ProductService();

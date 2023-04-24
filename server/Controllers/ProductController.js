import ProductService from "../Services/ProductService.js";

class ProductController {
  async create(req, res) {
    try {
      const product = await ProductService.create(req.body);
      return res.json(product);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      return res.json(products);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async updateProduct(req, res) {
    try {
      const updatedProduct = await ProductService.updateProduct(req.body);
      return res.json(updatedProduct);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async deleteProduct(req, res) {
    try {
      const product = await ProductService.deleteProduct(req.params.id);
      return res.json(product);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new ProductController();

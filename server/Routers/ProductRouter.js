import Router from "express";
import ProductController from "../Controllers/ProductController.js";

const ProductRouter = new Router();

ProductRouter.post("/product", ProductController.create);
ProductRouter.get("/products", ProductController.getAllProducts);
ProductRouter.put("/product", ProductController.updateProduct);
ProductRouter.delete("/product/:id", ProductController.deleteProduct);

export default ProductRouter;

import Router from "express";
import DesertController from "../Controllers/DesertController";

const DesertRouter = new Router();

DesertRouter.post("/desert", DesertController.create);
DesertRouter.get("/deserts", DesertController.getAllDeserts);
DesertRouter.put("/desert", DesertController.updateDesert);
DesertRouter.delete("/desert/:id", DesertController.deleteDesert);

export default DesertRouter;

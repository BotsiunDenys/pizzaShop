import { Router } from "express";
import AuthController from "../Controllers/AuthController.js";
const AuthRouter = new Router();

AuthRouter.post("/registration", AuthController.registration);
AuthRouter.post("/login", AuthController.login);
AuthRouter.post("/logout", AuthController.logout)
AuthRouter.get("/refresh", AuthController.refresh);

export default AuthRouter;

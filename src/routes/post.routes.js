import { Router } from "express";
import UserController from "../controllers/post.controller";

const routes = Router();
const user = new UserController();

routes.post("/posts", user.create);
routes.get("/posts", user.listAll);
routes.get("/posts/:id", user.listOne);
routes.put("/posts/:id", user.update);

export default routes;

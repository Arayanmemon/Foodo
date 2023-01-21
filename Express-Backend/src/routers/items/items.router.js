import { Router } from "express";
import { itemsService } from "../../services/items/items.service";

const itemsRouter = Router();

itemsRouter.get("/", itemsService.getAll);
itemsRouter.get("/:id" , itemsService.getById)
itemsRouter.post("/", itemsService.create);
itemsRouter.patch("/", itemsService.update);
itemsRouter.delete("/:id", itemsService.delete);

export default itemsRouter;

import { Router } from "express";
import { itemsService } from "../../services/items/items.service";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const itemsRouter = Router();


const verify = (req , res , next) => {
        const bearerHeader = req.headers['authorization']
        if(typeof bearerHeader !== 'undefined'){
                const bearer = bearerHeader.split(' ')
                const bearerToken = bearer[1]
                jwt.verify(bearerToken , process.env.SECRET_KEY , (err , result) => {
                        if(err){
                                res.status(403).send("not authenticated")
                        }else{
                                next()
                        }
                })

        }
        else{
                res.sendStatus(403)
        }
}
itemsRouter.get("/" ,itemsService.getAll);
itemsRouter.get("/:id", itemsService.getById)
itemsRouter.post("/" , itemsService.create);
itemsRouter.patch("/", itemsService.update);
itemsRouter.delete("/:id", itemsService.delete);

export default itemsRouter;

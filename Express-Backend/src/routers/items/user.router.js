import { Router } from "express";
import { UserModel } from "../../models/items/user.model";
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()
const userRouter = Router();

userRouter.get("/", async (req , res) => {
        try {
                const users = await UserModel.find({});
                res.status(201).send(items);
              } catch (err) {
                res
                  .status(500)
                  .send({ message: err.message || "Some error while fetching data" });
              }
});
userRouter.post("/signup", (req , res) => {
        const user = {
                email:req.body.email,
                password : req.body.password
        }
        try {
                UserModel.create(user)
                res.status(201).send(user)
        } catch (err) {
                res
                  .status(500)
                  .send({ message: err.message || "Some error while fetching data" });
                
        }
});
userRouter.post("/login" ,async (req , res) => {
          try {
                const user = await UserModel.findOne({email:req.body.email})
                if(user){
                        if(user.password == req.body.password){
                                const token= generateAccessToken(
                                        {
                                                "email":user.email
                                        }
                                )

                                res.json({
                                        token:token
                                })

                        }else{
                                res.send("Email or password maybe wrong")

                        }
                }
                else{
                        res.status(404).send("User doesn't exist")
                }
          } catch (err) {
                res
                .status(500)
                .send({ message: err.message || "Some error while fetching data" });
          
          }      
})

function generateAccessToken(email) {
        return jwt.sign(email, process.env.SECRET_KEY , {expiresIn:"25s"});
}

export default userRouter;
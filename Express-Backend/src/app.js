import express from 'express'
import itemsRoutes from './routers/items/items.router'
import userRouter from './routers/items/user.router'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.set('port' , process.env.PORT || 3000)
app.set('key' , process.env.SECRET_KEY)
mongoose
        .connect(process.env.MONGOURI , {
                useNewUrlParser: true,
                useUnifiedTopology:true,
                
        })
        .then((res)=>{
                console.log('Database Connected')
        })
        .catch((err) => {

                console.log(err)
                console.log('Database Connection failed!!!')
                console.log('Shutting server down!!!!!');
                process.exit(0)
        })

app.use('/items' , itemsRoutes)
app.use('/user' , userRouter)

app.use((req , res) => {
        res.status(404).json({
                result:"Not Found"
        })
})


export default app
import express from 'express'
import itemsRoutes from './routers/items/items.router'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
dotenv.config()
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.set('port' , process.env.PORT || 3000)

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


app.use((req , res) => {
        res.status(404).json({
                result:"Not Found"
        })
})


export default app
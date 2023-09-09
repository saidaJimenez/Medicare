import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoute from "./Routes/auth.js"


dotenv.config()


const app = express()

const port = process.env.PORT || 8000

const corsOptions = {
    origin: true
}


app.get('/',(req,res) => {
    res.send('Api trabajando')
})

//Conección a la base de datos
mongoose.set('strictQuery',false)
const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })

        console.log("La Base de Datos MongoDB esta conectada ")
        
    } catch (error) {
        console.log("Error de coneccion  ")
    }
}


//middelware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('api/v1/auth',authRoute) //dominio/api/v1/auth/register

app.listen(port, () =>{
    connectDB()
    console.log('El servidor esta corrriendo en el puerto ' + port)
})
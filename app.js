import 'dotenv/config'
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { connectDb } from './src/config/database.js'
import { userRouter } from './src/routes/user.routes.js'

const app = express()
const PORT = process.env.PORT || 3003

//middlewares globales
app.use(express.json()) // para que mi servidor entienda JSON (poder hacer POSTs)
app.use(cookieParser()) // para poder leer cookies
app.use(cors()) // para poder consultar backend desde frontend

//rutas exportadas en app
app.use("/api", userRouter)

app.listen(PORT, async () => {
    await connectDb(),
    console.log(`Servidor corriendo en ${PORT}`)
})
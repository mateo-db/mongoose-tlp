
import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/db_mongoose'); // si esto da error, salta directo al catch
        console.log("Conectado a la base de datos exitosamente")
    } catch (error) {
        console.log("No se pudo conectar a la base de datos", error)
    }
}
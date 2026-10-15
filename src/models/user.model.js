
//importamos herramientas de mongoose
import { model, Schema } from "mongoose"

//armamos el esquema (o "plantilla") de user
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
},
{
    versionKey: false
})

//model recibe como primer parametro nombre de la coleccion en la base de datos y como 2do parametro el schema correspondiente
export const UserModel = model("User", userSchema)
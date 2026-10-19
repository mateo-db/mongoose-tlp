
//importamos herramientas de mongoose
import { model, Schema, Types } from "mongoose"

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
    // address: { // objeto con propiedades con otros objetos
    //     street: {
    //         type: String,
    //         required: true,
    //     },
    //     city: {
    //         type: String,
    //         required: true,
    //     },
    //     country: {
    //         type: String,
    //         required: true,
    //     }
    // }
    addresses: [{ //arreglo de objetos
        // _id: false, //para eliminar ids de cada objeto en el arreglo
        street: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        }
    }],
    roles: [
        {
            type: Types.ObjectId,
            ref: "Role",
            required: true
        }
    ]
            // investigar propiedad para traer desde user todas las tareas, como validar arreglo también,
},
{
    versionKey: false
})

//model recibe como primer parametro nombre de la coleccion en la base de datos y como 2do parametro el schema correspondiente
export const UserModel = model("User", userSchema)
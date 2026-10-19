import {model, Schema, Types} from 'mongoose';

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,      
    },
    author: {
        type: Types.ObjectId, //para realizar las claves foráneas en el modelo dependiente 
        ref: "User", //para indicar a que módelo independiente hace referencia esta fk, debe ser el nombre del modelo guardado 
        // ej: "UserModel = model("User"<-propiedad que va en ref, userSchema)"
        required: true,
        // unique: true si necesito hacer un 1:1
    }
},
//opciones posibles en mongoose
{
    timestamps: true,
    versionKey: false
}
)
//usamos model que viene de mongoose, primer parametro es el nombre de nuestro modelo que vamos a guardar y segundo parametro es el schema que creamos para ese modelo.. exportamos taskModel
export const TaskModel = model("Task", taskSchema)
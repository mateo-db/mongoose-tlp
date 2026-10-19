import {model, Schema} from 'mongoose';

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,      
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
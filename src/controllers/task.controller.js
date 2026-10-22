import { TaskModel } from "../models/task.model.js";

export const createTask = async (req, res) => {
    try {
        const { title, description, author } = req.body //reemplazar por método de express validator
        //verificar unicidad de author y user antes de crear task 
        const newTask = await TaskModel.create({
            title,
            description,
            author
        })

        return res.status(201).json({
            message: "Tarea creada correctamente",
            data: newTask //usamos propiedad data en lugar de otra clave o variable para enviar datos de respuesta
        })

    } catch (error) {
        //para ver error en mi consola
        console.log(error)
        //respuesta que verá el que hace la petición
        return res.status(500).json({
            message: "Error interno del servidor"
        })
    }
}
export const getAllTasks = async (_req, res) => {
    try {
        const tasks = await TaskModel.find().populate("author", "-password") //con propiedad populate para que vaya a buscar la propiedad que tiene la referencia fk de objectId que apunta hacia el User
        //guion medio es como el exclude, es para evitar traer esa propiedad. por ej ("username -_id") traemos solo username menos id
        //si traigo el author, tengo que validar en el controlador que exista manualmente

        return res.status(200).json({
            message: "Se encontró todas las tareas",
            data: tasks
        })
    } catch (error) {
        //para ver error en mi consola
        console.log(error)
        //respuesta que verá el que hace la petición
        return res.status(500).json({
            message: "Error interno del servidor"
        })
    }
}
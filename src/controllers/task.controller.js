import { TaskModel } from "../models/task.model.js";

export const createTask = async (req, res) => {
    try {
        const { title, description } = req.body //reemplazar por método de express validator 
        const newTask = await TaskModel.create({
            title,
            description
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
        const tasks = await TaskModel.find()

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
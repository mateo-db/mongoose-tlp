import { RoleModel } from "../models/role.model.js"

export const createRole = async (req, res) => {
    try {
        const { rolename } = req.body //reemplazar por método de express validator 
        const newRole = await RoleModel.create({
            rolename
        })

        return res.status(201).json({
            message: "Tarea creada correctamente",
            data: newRole //usamos propiedad data en lugar de otra clave o variable para enviar datos de respuesta
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
export const getAllRoles = async (_req, res) => {
    try {
        const roles = await RoleModel.find().populate("role") 
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
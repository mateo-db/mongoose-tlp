import { UserModel } from "../models/user.model.js"

export const createUser = async (req, res) => {
    try {
        const {username, email, password, addresses, roles } = req.body //reemplazar por método de express validator 
        const newUser = await UserModel.create({
            username,
            email,
            password,
            addresses,
            roles
        })

        return res.status(201).json({
            message: "Usuario creado correctamente",
            data: newUser //usamos propiedad data en lugar de otra clave o variable para enviar datos de respuesta
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
export const getAllUsers = async (_req, res) => {
    try {
        const users = await UserModel.find().populate("roles")

        return res.status(200).json({
            message: "Se encontró todos los usuarios",
            data: users
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
export const getUserById = async (req, res) => {
    try {
        const userById = await UserModel.findById(req.params)
        return res.status(200).json({
            message: "Se encontró usuario por id",
            data: userById
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
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params //otra opción valida para encontrar id
        const { username } = req.body

        //este metodo pide primer parametro id y segundo lo que se quiere actualizar, como tercer parametro le mandamos opciones: ej, returnDocument: "after" (para que devuelva el nuevo estado del usuario)
        const updatedUser = await UserModel.findByIdAndDelete(id, { username }, {returnDocument: "after"})

        return res.status(200).json({
            message: "Se actualizó usuario",
            data: updatedUser //se actualiza pero me devuelve el estado anterior del usuario
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
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const deletedUser = await UserModel.findByIdAndDelete(id)

        return res.status(200).json({
            message: "Usuario eliminado",
            data: deletedUser
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


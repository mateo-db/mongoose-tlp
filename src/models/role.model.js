import {model, Schema} from 'mongoose'

const roleSchema = new Schema({
    rolename: {
        type: String,
        required: true
    }
})

export const RoleModel = model("Role", roleSchema)
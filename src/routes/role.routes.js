import { Router } from "express";
import { createRole, getAllRoles } from "../controllers/role.controller.js";

export const roleRouter = Router()

roleRouter.post("/roles", createRole)
roleRouter.get("/roles", getAllRoles)
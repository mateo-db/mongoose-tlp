import { Router } from "express";
import { createTask, getAllTasks } from "../controllers/task.controller.js";

export const taskRouter = Router()

taskRouter.post("/tasks", createTask)
taskRouter.get("/tasks", getAllTasks)
import { Router } from "express";
import { PersonaController } from "../controllers/persona.js";

export const personasRouter = Router();

personasRouter.get("/", PersonaController.getAll);
personasRouter.post("/", PersonaController.create);
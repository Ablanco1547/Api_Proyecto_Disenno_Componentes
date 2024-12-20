import { Router } from "express";

//Aqui importamos el controlador que vamos a usar (citaController)
import { CitaController } from "../controllers/citas.js";

export const citasRouter = Router();

//Aqui hacemos las rutas ejemplo:

citasRouter.get("/", CitaController.getAll);

citasRouter.post("/", CitaController.create);

// citasRouter.get("/", CitaController.getAll);

// citasRouter.get("/:id", CitaController.getOne);

// citasRouter.post("/", CitaController.create);

// citasRouter.put("/:id", CitaController.update);

// citasRouter.delete("/:id", CitaController.delete);

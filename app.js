import express, { json } from "express";
import { citasRouter } from "./routes/citas.js";

import { corsMiddleware } from "./middlewares/cors.js";

const app = express();
app.use(json());
app.disable("x-powered-by");

//Aqui ponemos los routers que vayamos a usar
app.use("/citas", citasRouter);

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

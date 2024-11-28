import express, { json } from "express";
import { citasRouter } from "./routes/citas.js";
import { personasRouter } from "./routes/persona.js";

import { corsMiddleware } from "./middlewares/cors.js";

const app = express();
app.use(json());
app.disable("x-powered-by");
// Apply CORS middleware before defining routes
app.use(corsMiddleware());

//Aqui ponemos los routers que vayamos a usar
app.use("/citas", citasRouter);

app.use("/persona", personasRouter);

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
app.get("/", (req, res) => {
	res.send("<h1>Hello World</h1>");
});

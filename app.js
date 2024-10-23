import express, { json } from "express";
import { corsMiddleware } from "./middlewares/cors";
import { citasRouter } from "./routes/citas";

const app = express();
app.use(json());
app.disable("x-powered-by");

//Aqui ponemos los routers que vayamos a usar
app.use("/citas", citasRouter);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

import cors from "cors";

//Aqui van los origenes aceptados para utilizar el API
const ACCEPTED_ORIGINS = [
	"http://localhost:3000",
	"http://localhost:3001",
	"http://localhost:1234",
	"http://localhost:8080",
	"http://localhost:4200",
	"https://api-proyecto-disenno-componentes-qq5k8ggrt.vercel.app",
];

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
	cors({
		origin: (origin, callback) => {
			if (acceptedOrigins.includes(origin)) {
				return callback(null, true);
			}

			if (!origin) {
				return callback(null, true);
			}

			return callback(new Error("Not allowed by CORS"));
		},
	});

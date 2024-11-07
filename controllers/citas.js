//Aqui va la logica de los controladores, del getall, getbyiD y todo eso tambien la devolucion de los codigos 400/200/500 etc

//AQUI HAY QUE IMPORTAR EL MODELO DE CITAS QUE VAMOS A USAR

import { CitaModel } from "../models/cita.js";

//AQUI HAY QUE IMPORTAR LA FUNCION DE VALIDACION DE CITAS
import { validateCita } from "../schemas/citas.js";

export class CitaController {
	//Ejemplo del get, acepta parametros de query (mascota)
	static async getAll(req, res) {
		const { mascota } = req.query;
		const citas = await CitaModel.getAll({ mascota });
		res.json(citas);
	}

	//EJEMPLO DEL POST
	static async create(req, res) {
		//se validan los datos de la cita utilizando la funcion validateCita del schema
		const result = validateCita(req.body);
		if (!result.success) {
			//422 Unprocessable Entity
			return res.status(400).json({ error: JSON.parse(result.error.message) });
		}

		//Del modelo citas se crea una nueva cita con los datos del body

		const newCita = await CitaModel.create({ input: result.data });

		res.status(201).json(newCita);
	}
}

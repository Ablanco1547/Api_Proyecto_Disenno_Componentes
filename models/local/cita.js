import { randomUUID } from "node:crypto";
import { readJSON } from "../../utils.js";
import { writeFile } from "node:fs/promises";

const citas = readJSON("./citas.json");

export class CitaModel {
	//crear citas
	static async create({ input }) {
		const newCita = {
			id: randomUUID(),
			...input,
		};

		citas.push(newCita);

		await writeFile("./citas.json", JSON.stringify(citas, null, 2));

		return newCita;
	}

	//obtener citas

	static async getAll({ mascota }) {
		if (mascota) {
			return citas.filter((cita) => cita.mascota === mascota);
		}

		return citas;
	}
}

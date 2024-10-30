import { randomUUID } from "node:crypto";
import { readJSON } from "../../utils.js";
import { writeFile } from "node:fs/promises";

const citas = readJSON("./citas.json");

export class CitaModel {
	connectionString = "mongodb://localhost:27017/citas";

	//crear citas
	static async create({ input }) {
		return newCita;
	}

	//obtener citas

	static async getAll({ mascota }) {}
}

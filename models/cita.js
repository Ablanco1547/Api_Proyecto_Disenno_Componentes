import { randomUUID } from "node:crypto";
import { BigQuery } from "@google-cloud/bigquery";

const bigquery = new BigQuery();
const datasetId = "veterinaria";
const tableId = "citas";

export class CitaModel {
	static async getAll() {
		const query = `SELECT * FROM \`${datasetId}.${tableId}\``;
		const [rows] = await bigquery.query(query);
		return rows;
	}

	static async create({ input }) {
		input.cita_id = randomUUID();
		const rows = [input];
		try {
			await bigquery.dataset(datasetId).table(tableId).insert(rows);
			return input;
		} catch (error) {
			console.error("BigQuery Insert Error:", error);
			throw error;
		}
	}
}

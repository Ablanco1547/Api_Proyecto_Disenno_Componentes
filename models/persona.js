import { BigQuery } from "@google-cloud/bigquery";
import { randomUUID } from "node:crypto";

const bigquery = new BigQuery();
const datasetId = "veterinaria";
const tableId = "personas";

export class PersonaModel {
	static async getAll() {
		const query = `SELECT * FROM \`${datasetId}.${tableId}\``;
		const [rows] = await bigquery.query(query);
		return rows;
	}

	static async create({ input }) {
		input.id = randomUUID();
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

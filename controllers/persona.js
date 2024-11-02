import { PersonaModel } from "../models/persona.js";

export class PersonaController {
    static async getAll(req, res) {
        try {
            const personas = await PersonaModel.getAll();
            res.json(personas);
        } catch (error) {
            console.error('ERROR:', error);
            res.status(500).json({ error: 'Error fetching data from BigQuery' });
        }
    }

    // Crear una nueva persona
    static async create(req, res) {
        try {
            const newPersona = await PersonaModel.create({ input: req.body });
            res.status(201).json(newPersona);
        } catch (error) {
            console.error('ERROR:', error);
            console.error('ERROR DETAILS:', error.errors);
            res.status(500).json({ error: 'Error inserting data into BigQuery' });
        }
    }
}
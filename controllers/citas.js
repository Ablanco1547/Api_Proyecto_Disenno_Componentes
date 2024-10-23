//Aqui va la logica de los controladores, del getall, getbyiD y todo eso tambien la devolucion de los codigos 400/200/500 etc

export class CitaController {
	static async getCitas(req, res) {
		try {
			const citas = await Cita.find();
			res.json(citas);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}
	//EJEMPLO DEL GET BY ID
	static async getCitaById(req, res) {
		const { id } = req.params;
		try {
			const cita = await Cita.findById(id);
			if (!cita) {
				return res.status(404).json({ message: "Cita not found" });
			}
			res.json(cita);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}
}

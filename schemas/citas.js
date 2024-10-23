import z from "zod";

//AQUI VAN TODAS LAS VALIDACIONES UTILIZANDO ZOD
export const citaSchema = z.object({
	id: z.string(),
	fecha: z.string(),
	hora: z.string(),
	paciente: z.string(),
	medico: z.string(),
	consultorio: z.string(),
});

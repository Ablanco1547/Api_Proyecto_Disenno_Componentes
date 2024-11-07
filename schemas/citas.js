import z from "zod";

//AQUI VAN TODAS LAS VALIDACIONES UTILIZANDO ZOD
export const citaSchema = z.object({
	fecha: z.string().date(),
	hora: z.string().time(),
	paciente_id: z.string(),
	medico_id: z.string(),
	consultorio_id: z.string(),
	descripcion: z.string(),
});

//esta funcion valida que los datos de la cita sean correctos
export function validateCita(input) {
	return citaSchema.safeParse(input);
}

//esta funcion valida que alguno de los datos sea correcto (para los updates)
export function validatePartialCita(input) {
	return citaSchema.partial().safeParse(input);
}

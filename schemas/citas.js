import z from "zod";

//AQUI VAN TODAS LAS VALIDACIONES UTILIZANDO ZOD
export const citaSchema = z.object({
	fecha: z.string().date(),
	hora: z.string().time(),
	paciente: z.string(),
	medico: z.string(),
	consultorio: z.string(),
});

//esta funcion valida que los datos de la cita sean correctos
export function validateCita(input) {
	return citaSchema.safeParse(input);
}

//esta funcion valida que alguno de los datos sea correcto (para los updates)
export function validatePartialCita(input) {
	return citaSchema.partial().safeParse(input);
}

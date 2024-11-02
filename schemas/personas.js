import z from "zod";

// Validaciones utilizando Zod
export const personaSchema = z.object({
    id: z.string().uuid(),
    nombre: z.string().min(1),
    apellido: z.string().min(1),
    fecha_nacimiento: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // YYYY-MM-DD
    telefono: z.string().optional(),
    email: z.string().email()
});

// Función para validar los datos de la persona
export function validatePersona(input) {
    return personaSchema.safeParse(input);
}
import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(3, "El nombre es obligatorio"),
    email: z.string().email("Correo electrónico inválido"),
    password: z
      .string()
      .min(8, "Mínimo 8 caracteres")
      .regex(/[A-Z]/, "Debe tener una mayúscula")
      .regex(/[0-9]/, "Debe tener un número"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

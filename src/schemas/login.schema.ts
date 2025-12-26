import z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),
  password: z
    .string()
    .min(3, "Password minimal 3 karakter")
    .max(20, "Password maksimal 20 karakter"),
});

export type LoginFormType = z.infer<typeof loginSchema>;

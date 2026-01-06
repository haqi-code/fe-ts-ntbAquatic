import { z } from "zod";

export const addAtletSchema = z.object({
  full_name: z
    .string()
    .min(3, "Nama minimal 3 karakter"),

  nis: z
    .string()
    .min(5, "NIS minimal 5 digit"),

  nik: z
    .string()
    .length(16, "NIK harus 16 digit"),

  tempat_lahir: z
    .string()
    .min(3, "Tempat lahir wajib diisi"),

  tanggal_lahir: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Format tanggal tidak valid"),

  alamat_ktp: z
    .string()
    .min(5, "Alamat terlalu pendek"),

  agama: z.enum([
    "Islam",
    "Kristen",
    "Katolik",
    "Hindu",
    "Buddha",
    "Konghucu",
  ]),

  email: z
    .string()
    .email("Email tidak valid"),

  jenis_kelamin: z.enum(["Laki", "Perempuan"]),
  status: z.enum(["Verify", "NotVerify"]).default("NotVerify"),
});

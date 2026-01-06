import { useState } from "react";
import { addAtletSchema } from "../../schemas/atlet.schema";
import api from "../../libs/api";
import type { Role } from "../../types/roleType";
import { atletEndpointMap } from "../../data/atletEndpointMap";
import { AxiosError } from "axios";

export default function useAddFormAtlet(role: Exclude<Role, "Juri">) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(null);
    setFieldErrors({});
    setSuccess("");

    const formData = new FormData(e.currentTarget);

    const rawData = {
      full_name: formData.get("full_name"),
      nis: formData.get("nis"),
      nik: formData.get("nik"),
      tempat_lahir: formData.get("tempat_lahir"),
      tanggal_lahir: formData.get("tanggal_lahir"),
      alamat_ktp: formData.get("alamat_ktp"),
      agama: formData.get("agama"),
      email: formData.get("email"),
      jenis_kelamin: formData.get("jenis_kelamin"),
      status: "NotVerify",
    };

    const parsed = addAtletSchema.safeParse(rawData);

    if (!parsed.success) {
      const errors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as string;
        errors[fieldName] = issue.message;
      });
      setFieldErrors(errors);
      return;
    }

    try {
        setLoading(true);

      const endpoint = atletEndpointMap[role];
      await api.post(endpoint, parsed.data);
      setSuccess("Data atlet berhasil ditambahkan");
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data?.message;

        if (message?.includes("NIK")) {
          setFieldErrors({
            nik: "NIK tidak valid, silakan periksa kembali",
          });
        } else {
          setError("Gagal menambahkan data atlet");
        }
      } else {
        setError("Terjadi kesalahan");
      }
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, fieldErrors, loading, success, error };
}

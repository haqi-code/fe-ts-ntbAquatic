import { useEffect, useState } from "react";
import type { Role } from "../../types/roleType";
import api from "../../libs/api";
import { atletEndpointMap } from "../../data/atletEndpointMap";
import { addAtletSchema } from "../../schemas/atlet.schema";
import { AxiosError } from "axios";
import type { editAtletType } from "../../types/atletType";
import { useNavigate } from "react-router";

export default function useEditAtlet(role: Exclude<Role, "Juri">, id: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState("");
  const [atlets, setAtlets] = useState<editAtletType | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAtlet = async () => {
      try {
        setLoading(true);
        const res = await api.get(`${atletEndpointMap[role]}/${id}`);
        setAtlets(res.data.data);
      } catch (error) {
        setError(error + "Gagal mengambil data atlet");
      } finally {
        setLoading(false);
      }
    };

    fetchAtlet();
  }, [id, role]);

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

      await api.put(`${atletEndpointMap[role]}/${id}`, parsed.data);
      setSuccess("Data atlet berhasil diperbarui");
      navigate(atletEndpointMap[role]);
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data?.message;

        if (message?.includes("NIK")) {
          setFieldErrors({
            nik: "NIK tidak valid, silakan periksa kembali",
          }); 
        } else {
          setError("Gagal mengedit data atlet");
        }
      } else {
        setError("Terjadi kesalahan");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    success,
    fieldErrors,
    atlets,
    handleSubmit,
  };
}

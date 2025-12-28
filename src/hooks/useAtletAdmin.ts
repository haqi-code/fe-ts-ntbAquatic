import { useEffect, useState } from "react";
import api from "../libs/api";
import type { AtletAdminType } from "../types/atletAdminType";

export default function useAtletAdmin() {
  const [atlets, setAtlets] = useState<AtletAdminType[]>([]);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await api.get("admin/atlet");
      setAtlets(res.data.data.data);
    } catch (error) {
      console.log(error);
      setError("Gagal mengambil data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { atlets, error, loading };
}

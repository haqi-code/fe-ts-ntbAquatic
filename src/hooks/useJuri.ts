import { useEffect, useState } from "react";
import api from "../libs/api";
import type { Role } from "../types/roleType";
import { juriEndpointMap } from "../data/juriEndpointMap";
import type { JuriType } from "../types/juriType";

export default function useJuri(role: Exclude<Role, "Juri">) {
  const [listJuri, setlistJuri] = useState<JuriType[]>([]);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const endpoint = juriEndpointMap[role];

        const res = await api.get(endpoint);
        setlistJuri(res.data.data);
      } catch (error) {
        console.log(error);
        setError("Gagal mengambil data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [role]);

  return { listJuri, error, loading };
}

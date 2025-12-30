import { useEffect, useState } from "react";
import api from "../libs/api";
import type { AtletType } from "../types/atletType";
import { atletEndpointMap } from "../data/atletEndpointMap";
import type { Role } from "../types/roleType";



export default function useAtlet(role : Exclude<Role,"Juri">) {
  const [atlets, setAtlets] = useState<AtletType[]>([]);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const endpoint = atletEndpointMap[role];

        const res = await api.get(endpoint);
        setAtlets(res.data.data.data);
      } catch (error) {
        console.log(error);
        setError("Gagal mengambil data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [role]);

  return { atlets, error, loading };
}

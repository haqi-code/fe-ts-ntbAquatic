import { useEffect, useState } from "react";
import api from "../libs/api";
import type { TimeKeeperType } from "../types/TimeKeeperType";
import { TimeKeeperEndpointMap } from "../data/timeKeeperEndpointMap";
import type { Role } from "../types/roleType";

export default function useTimeKeeper(role: Exclude<Role, "Juri">) {
  const [listTimeKeeper, setListTimeKeeper] = useState<TimeKeeperType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const endpoint = TimeKeeperEndpointMap[role];
        const res = await api.get(endpoint);
        setListTimeKeeper(res.data.data);
      } catch (error) {
        console.log(error);
        setError("Gagal mengambil data time keeper");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [role]);

  return { listTimeKeeper, loading, error };
}

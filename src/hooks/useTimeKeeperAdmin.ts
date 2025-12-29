import { useEffect, useState } from "react";
import api from "../libs/api";
import type { TimeKeeperType } from "../types/TimeKeeperType";

export default function useTimeKeeperAdmin() {
  const [listTimeKeeper, setListTimeKeeper] = useState<TimeKeeperType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await api.get("admin/time-keeper");
      setListTimeKeeper(res.data.data);
    } catch (error) {
      console.log(error);
      setError("Gagal mengambil data time keeper");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { listTimeKeeper, loading, error };
}

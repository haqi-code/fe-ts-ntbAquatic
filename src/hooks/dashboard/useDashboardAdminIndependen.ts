import { useEffect, useState } from "react";
import api from "../../libs/api";

type StatistikProps = {
  total_atlet: number,
};

export default function useDashboardAdminIndependen() {
  const [statistik, setStatistik] = useState<StatistikProps>({
    total_atlet: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await api.get<{ data: StatistikProps }>(
          "/independen-admin/statistik"
        );
        setStatistik(res.data.data);
      } catch (error) {
        console.log(error);
        setError("Gagal mengambil data statistik");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { statistik, loading, error };
}

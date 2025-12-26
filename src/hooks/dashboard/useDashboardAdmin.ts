import { useEffect, useState } from "react";
import api from "../../libs/api";

type StatistikProps = {
  total_atlet: number;
  total_pelatih: number;
  total_event_diikuti: number;
  total_event_ditolak: number;
  total_event_menunggu_persetujuan: number;
  total_event_dibuat: number;
};

export default function useDashboardAdmin() {
  const [statistik, setStatistik] = useState<StatistikProps>({
    total_atlet: 0,
    total_pelatih: 0,
    total_event_diikuti: 0,
    total_event_ditolak: 0,
    total_event_menunggu_persetujuan: 0,
    total_event_dibuat: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await api.get<{ data: StatistikProps }>(
          "/admin/statistik"
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

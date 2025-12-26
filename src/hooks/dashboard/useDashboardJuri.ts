import { useEffect, useState } from "react";
import api from "../../libs/api";

type statistikProps = {
  total_pertandingan_event: number;
  total_pertandingan_event_berlangsung: number;
  total_pertandingan_event_belum_berlangsung: number;
  total_pertandingan_event_selesai: number;
  total_pertandingan_multi_event: number;
  total_pertandingan_multi_event_berlangsung: number;
  total_pertandingan_multi_event_belum_berlangsung: number;
  total_pertandingan_multi_event_selesai: number;
};

export default function useDashboardJuri() {
  const [statistik, setStatistik] = useState<statistikProps>({
    total_pertandingan_event: 0,
    total_pertandingan_event_berlangsung: 0,
    total_pertandingan_event_belum_berlangsung: 0,
    total_pertandingan_event_selesai: 0,
    total_pertandingan_multi_event: 0,
    total_pertandingan_multi_event_berlangsung: 0,
    total_pertandingan_multi_event_belum_berlangsung: 0,
    total_pertandingan_multi_event_selesai: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await api.get<{ data: statistikProps }>(
          "/juri/statistik"
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

import { useEffect, useState } from "react";
import api from "../libs/api";
import type { baseEventType } from "../types/baseEventType";
import { multiEventEndpointMap } from "../data/multiEventEndpoinMap";
import type { Role } from "../types/roleType";
import type { MenuType } from "../types/menuType";
import { useNavigate } from "react-router";

export function useMultiEvent(role: Exclude<Role, "Juri">) {
  const [activeMenu, setActiveMenu] = useState<MenuType>("semua");
  const [listMultiEvent, setListMultiEvent] = useState<baseEventType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const endpoint = multiEventEndpointMap[role][activeMenu];
        const res = await api.get(endpoint);
        setListMultiEvent(res.data.data.data);
      } catch (error) {
        console.log(error);
        setError("Gagal mengambil data event");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeMenu, role]);

  return {
    activeMenu,
    setActiveMenu,
    listMultiEvent,
    loading,
    error,
    navigate
  };
}

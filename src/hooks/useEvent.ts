import { useEffect, useState } from "react";
import api from "../libs/api";
import type { baseEventType } from "../types/baseEventType";
import type { Role } from "../types/roleType";
import type { MenuType } from "../types/menuType";
import { eventEndpointMap } from "../data/eventData";

export function useEvent(role: Exclude<Role, "Juri">) {
  const [activeMenu, setActiveMenu] = useState<MenuType>("semua");
  const [listMultiEvent, setListMultiEvent] = useState<baseEventType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const endpoint = eventEndpointMap[role][activeMenu];
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
  };
}

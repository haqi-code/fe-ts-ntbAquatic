import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import type { MenuType } from "../../types/MenuType";
import api from "../../libs/api";
import Button from "../../Components/Button";

type MultiEvent = {
    id: number;
    nama_event: string;
    tingkat: string;
    deskripsi: string;
    start_date: string;
    end_date: string;
}

export default function MultiEventAdminPage() {
    const [activeMenu, setActiveMenu] = useState<MenuType>("semua");
    const [listMultiEvent, setListMultiEvent] = useState<MultiEvent[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const endpointMap: Record<MenuType, string> = {
        semua: "/admin/multi-event",
        akanDatang: "/admin/multi-event",
        sedangBerlangsung: "/admin/multi-event?status=Berlangsung",
        selesai: "/admin/multi-event?status=Selesai",
    };

    const fetchData = async () => {
        try {
            setLoading(true)
            setError(null)

            const res = await api.get<{ data: { data: MultiEvent[] } }>(
                endpointMap[activeMenu]
            );

            setListMultiEvent(res.data.data.data)
        } catch (error) {
            console.log(error);
            setError("Gagal mengambil data event")
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchData();
    }, [activeMenu]);

    return (
        <div>
            <header className="p-5 border border-gray-600">
                <h1 className="font-bold text-2xl ">Multi Event</h1>
                <p className="text-sm text-gray-600">
                    Lihat multi event gabungan & jadwal lomba
                </p>
            </header>

            <div className="flex gap-7 pt-5 pl-10">
                {(["semua", "akanDatang", "sedangBerlangsung", "selesai"] as MenuType[]).map((menu) => (
                    <button
                        key={menu}
                        onClick={() => setActiveMenu(menu)}
                        className={`text-sm cursor-pointer capitalize ${activeMenu === menu
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-800"
                            }`}
                    >
                        {menu.replace("-", " ")}
                    </button>
                ))}
            </div>

            <div className="flex gap-2 p-4">
                {loading && <p className="text-gray-500">Memuat data...</p>}
                {error && <p className="text-red-500">{error}</p>}

                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {listMultiEvent.map((multiEvent) => (
                            <div
                                key={multiEvent.id}
                                className="flex flex-col justify-between rounded-lg border bg-white p-5 shadow-sm hover:shadow-md transition"
                            >
                                <div>
                                    <h1 className="font-semibold text-lg">
                                        {multiEvent.nama_event}
                                    </h1>

                                    <p className="text-sm text-blue-500 mt-1">
                                        {multiEvent.tingkat}
                                    </p>

                                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                                        {multiEvent.deskripsi}
                                    </p>

                                    <div className="flex gap-1 text-sm text-gray-500 mt-3">
                                        <span>{multiEvent.start_date}</span>
                                        <span>-</span>
                                        <span>{multiEvent.end_date}</span>
                                    </div>
                                </div>

                                {/* BUTTON */}
                                <div className="pt-4">
                                    <Button
                                        className="w-full"
                                        onClick={() =>
                                            navigate(
                                                `/independen-admin/multi-event-independen/detail/${multiEvent.id}`
                                            )
                                        }
                                    >
                                        Lihat Detail
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}
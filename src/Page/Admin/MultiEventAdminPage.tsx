import Button from "../../Components/Button";
import { useMultiEvent } from "../../hooks/useMultiEvent";
import type { MenuType } from "../../types/menuType";
import type { Role } from "../../types/roleType";

type Props = {
    role: Exclude<Role, "Juri">
}

export default function MultiEventAdminPage({ role }: Props) {

    const { activeMenu, error, listMultiEvent, loading, setActiveMenu, navigate } = useMultiEvent(role)

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
                        {menu}
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

                                <div className="pt-4">
                                    <Button
                                        className="w-full"
                                        onClick={() =>
                                            navigate(
                                                `/admin/multi-event/detail/${multiEvent.id}`
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
import { RefreshCw, Users } from "lucide-react";
import useDashboardJuri from "../../hooks/dashboard/useDashboardJuri";

export default function DashboardJuriPage() {

    const { statistik, loading, error } = useDashboardJuri()
    if (loading) {
        return <p className="p-6">Loading data...</p>;
    }

    if (error) {
        return <p className="p-6 text-red-500">{error}</p>;
    }
    return (
        <>
            <div className="p-6">
                <div className="flex justif items-center gap-3">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <RefreshCw size={18} className="cursor-pointer" />
                </div>
                <p className="text-gray-600">Ringkasan data & monitoring aplikasi.</p>
            </div>

            <div className="bg-gray-600 h-48 p-5">
                <h1 className="text-xl font-bold text-white mt-5">Selamat Datang!</h1>
                <p className="text-white mt-2">Pantau kegiatan renang dengan mudah.</p>
            </div>
            <div className="p-6">
                <h1 className="text-xl font-bold mb-4">Rekap Data</h1>
                {loading && (
                    <p className="text-gray-500">Mengambil data...</p>
                )}
                {error && (
                    <p className="text-red-500 font-semibold">
                        {error}
                    </p>
                )}
                {!loading && !error && (
                    <div className="flex flex-wrap gap-3 ">
                        <div className="flex items-center py-6 px-10 bg-sky-300/30 rounded-md gap-4">
                            <div className="p-2 bg-sky-300/50 rounded-full">
                                <Users size={24} color="blue" strokeWidth={2} className="" />
                            </div>
                            <div className="">
                                <p className="font-bold text-sm">Total Pertandingan</p>
                                <p className="font-bold text-xl">{loading ? "Loading..." : statistik.total_pertandingan_event}</p>
                                <p className="text-green-600 font-bold text-sm">Event Terdata</p>
                            </div>
                        </div>
                        <div className="flex items-center py-6 px-10 bg-sky-300/30 rounded-md gap-4">
                            <div className="p-2 bg-sky-300/50 rounded-full">
                                <Users size={24} color="blue" strokeWidth={2} className="" />
                            </div>
                            <div className="">
                                <p className="font-bold text-sm">Total Pertandingan Belum Berlangsung</p>
                                <p className="font-bold text-xl">{loading ? "Loading..." : statistik.total_pertandingan_event_belum_berlangsung}</p>
                                <p className="text-green-600 font-bold text-sm">Event Terdata</p>
                            </div>
                        </div>
                        <div className="flex items-center py-6 px-10 bg-sky-300/30 rounded-md gap-4">
                            <div className="p-2 bg-sky-300/50 rounded-full">
                                <Users size={24} color="blue" strokeWidth={2} className="" />
                            </div>
                            <div className="">
                                <p className="font-bold text-sm">Total Pertandingan Berlangsung</p>
                                <p className="font-bold text-xl">{loading ? "Loading..." : statistik.total_pertandingan_event_berlangsung}</p>
                                <p className="text-green-600 font-bold text-sm">Event Terdata</p>
                            </div>
                        </div>
                        <div className="flex items-center py-6 px-10 bg-sky-300/30 rounded-md gap-4">
                            <div className="p-2 bg-sky-300/50 rounded-full">
                                <Users size={24} color="blue" strokeWidth={2} className="" />
                            </div>
                            <div className="">
                                <p className="font-bold text-sm">Total Pertandingan Selesai</p>
                                <p className="font-bold text-xl">{loading ? "Loading..." : statistik.total_pertandingan_event_selesai}</p>
                                <p className="text-green-600 font-bold text-sm">Event Terdata</p>
                            </div>
                        </div>
                        <div className="flex items-center py-6 px-10 bg-sky-300/30 rounded-md gap-4">
                            <div className="p-2 bg-sky-300/50 rounded-full">
                                <Users size={24} color="blue" strokeWidth={2} className="" />
                            </div>
                            <div className="">
                                <p className="font-bold text-sm">Total Pertandingan Multi Event</p>
                                <p className="font-bold text-xl">{loading ? "Loading..." : statistik.total_pertandingan_multi_event}</p>
                                <p className="text-green-600 font-bold text-sm">Event Terdata</p>
                            </div>
                        </div>
                        <div className="flex items-center py-6 px-10 bg-sky-300/30 rounded-md gap-4">
                            <div className="p-2 bg-sky-300/50 rounded-full">
                                <Users size={24} color="blue" strokeWidth={2} className="" />
                            </div>
                            <div className="">
                                <p className="font-bold text-sm">Total Pertandingan Multi Event Belum Berlangsung</p>
                                <p className="font-bold text-xl">{loading ? "Loading..." : statistik.total_pertandingan_multi_event_belum_berlangsung}</p>
                                <p className="text-green-600 font-bold text-sm">Event Terdata</p>
                            </div>
                        </div>
                        <div className="flex items-center py-6 px-10 bg-sky-300/30 rounded-md gap-4">
                            <div className="p-2 bg-sky-300/50 rounded-full">
                                <Users size={24} color="blue" strokeWidth={2} className="" />
                            </div>
                            <div className="">
                                <p className="font-bold text-sm">Total Pertandingan Multi Event Berlangsung</p>
                                <p className="font-bold text-xl">{loading ? "Loading..." : statistik.total_pertandingan_multi_event_berlangsung}</p>
                                <p className="text-green-600 font-bold text-sm">Event Terdata</p>
                            </div>
                        </div>
                        <div className="flex items-center py-6 px-10 bg-sky-300/30 rounded-md gap-4">
                            <div className="p-2 bg-sky-300/50 rounded-full">
                                <Users size={24} color="blue" strokeWidth={2} className="" />
                            </div>
                            <div className="">
                                <p className="font-bold text-sm">Total Pertandingan Multi Event Selesai</p>
                                <p className="font-bold text-xl">{loading ? "Loading..." : statistik.total_pertandingan_multi_event_selesai}</p>
                                <p className="text-green-600 font-bold text-sm">Event Terdata</p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}
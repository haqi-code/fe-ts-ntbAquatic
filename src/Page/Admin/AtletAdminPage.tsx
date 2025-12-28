import useAtletAdmin from "../../hooks/useAtletAdmin";

export default function AtletAdminPage() {
    const { atlets, error, loading } = useAtletAdmin()

    return (
        <div className="p-6 max-w-6xl mx-auto text-white">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold">Master Data Atlet</h1>
                <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
                    Tambah Atlet
                </button>
            </div>

            {loading && (
                <p className="text-gray-400">Memuat data...</p>
            )}

            {error && (
                <p className="text-red-500">{error}</p>
            )}

            {!error && !loading && (
                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-700">
                        <thead>
                            <tr className="bg-gray-800">
                                <th className="px-4 py-2 border border-gray-700">No</th>
                                <th className="px-4 py-2 border border-gray-700">Nama</th>
                                <th className="px-4 py-2 border border-gray-700">NIS</th>
                                <th className="px-4 py-2 border border-gray-700">NIK</th>
                                <th className="px-4 py-2 border border-gray-700">Email</th>
                                <th className="px-4 py-2 border border-gray-700">Aksi</th>
                            </tr>
                        </thead>



                        <tbody>
                            {atlets.map((atlet, i) => (
                                <tr key={i} className="">
                                    <td className="px-4 py-2 text-gray-800 border border-gray-700 text-center">{i + 1}</td>
                                    <td className="px-4 py-2 text-gray-800 border border-gray-700">{atlet.nama}</td>
                                    <td className="px-4 py-2 text-gray-800 border border-gray-700">{atlet.nis}</td>
                                    <td className="px-4 py-2 text-gray-800 border border-gray-700">{atlet.nik}</td>
                                    <td className="px-4 py-2 text-gray-800 border border-gray-700">{atlet.email}</td>
                                    <td className="px-4 py-2 text-gray-800 border border-gray-700 space-x-2">
                                        <button className="px-3 py-1 bg-yellow-500 rounded hover:bg-yellow-600">
                                            Edit
                                        </button>
                                        <button className="px-3 py-1 bg-red-600 rounded hover:bg-red-700">
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))}


                        </tbody>

                    </table>
                </div>
            )}



        </div>
    );
}
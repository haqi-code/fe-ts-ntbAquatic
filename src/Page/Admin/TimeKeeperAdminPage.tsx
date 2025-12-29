import useTimeKeeperAdmin from "../../hooks/useTimeKeeperAdmin";

export default function TimeKeeperAdminPage() {

    const { error, loading, listTimeKeeper } = useTimeKeeperAdmin()
    return (
        <div className="p-6 max-w-6xl mx-auto text-white">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl text-gray-900 font-bold">Master Data Atlet</h1>
                <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
                    Tambah Atlet
                </button>
            </div>

            {loading && (
                <p className="text-gray-800">Loading</p>
            )}

            {error && (
                <p className="text-red-500">{error}</p>
            )}

            {!loading && !error && (
                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-700">
                        <thead>
                            <tr className="bg-gray-800">
                                <th className="px-4 py-2 border border-gray-700">No</th>
                                <th className="px-4 py-2 border border-gray-700">Nama</th>
                                <th className="px-4 py-2 border border-gray-700">Disiplin & Fungsi</th>
                                <th className="px-4 py-2 border border-gray-700">Email</th>
                                <th className="px-4 py-2 border border-gray-700">NIK</th>
                                <th className="px-4 py-2 border border-gray-700">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listTimeKeeper.map((timeKeeper, i) => (
                                <tr key={i} className="">
                                    <td className="px-4 py-2 text-gray-800 border border-gray-700 text-center">{i + 1}</td>
                                    <td className="px-4 py-2 text-gray-800 border border-gray-700">{timeKeeper.full_name}</td>
                                    <td className="px-4 py-2 text-gray-800 border border-gray-700">{timeKeeper.discipline_and_function}</td>
                                    <td className="px-4 py-2 text-gray-800 border border-gray-700">{timeKeeper.email}</td>
                                    <td className="px-4 py-2 text-gray-800 border border-gray-700">{timeKeeper.nik}</td>
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


            {/*
            <div className="mt-10 border border-gray-700 rounded p-6">
                <h2 className="text-lg font-semibold mb-4">Form Atlet</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Nama"
                        className="p-2 rounded bg-gray-800 border border-gray-700"
                    />
                    <input
                        type="text"
                        placeholder="NIS"
                        className="p-2 rounded bg-gray-800 border border-gray-700"
                    />
                    <input
                        type="text"
                        placeholder="NIK"
                        className="p-2 rounded bg-gray-800 border border-gray-700"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-2 rounded bg-gray-800 border border-gray-700"
                    />
                </div>

                <div className="mt-4 flex gap-2">
                    <button className="px-4 py-2 bg-green-600 rounded hover:bg-green-700">
                        Simpan
                    </button>
                    <button className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700">
                        Batal
                    </button>
                </div>
            </div> */}
        </div>
    );

}
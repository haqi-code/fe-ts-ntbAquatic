import useJuri from "../../hooks/useJuri";
import type { Role } from "../../types/roleType";

type JuriRoleProps = {
    role: Exclude<Role, "Juri">;
};

export default function JuriAdminPage({ role }: JuriRoleProps) {
    const { listJuri, error, loading } = useJuri(role)

    return (
        <div className="p-6 max-w-6xl mx-auto text-white">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl text-gray-800 font-bold">Master Data Atlet</h1>

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
                                <th className="px-4 py-2 border border-gray-700">Disiplin & Fungsi</th>
                                <th className="px-4 py-2 border border-gray-700">NIK</th>
                                <th className="px-4 py-2 border border-gray-700">Email</th>
                            </tr>
                        </thead>

                        <tbody>
                            {listJuri.map((juri, i) => (
                                <tr key={i} className="">
                                    <td className="px-4 py-2 text-gray-800 border border-gray-700 text-center">{i + 1}</td>
                                    <td className="px-4 py-2 text-gray-800 border border-gray-700">{juri.full_name}</td>
                                    <td className="px-4 py-2 text-gray-800 border border-gray-700">{juri.discipline_and_function}</td>
                                    <td className="px-4 py-2 text-gray-800 border border-gray-700">{juri.nik}</td>
                                    <td className="px-4 py-2 text-gray-800 border border-gray-700">{juri.email}</td>
                                </tr>
                            ))}


                        </tbody>

                    </table>
                </div>
            )}



        </div>
    );
}
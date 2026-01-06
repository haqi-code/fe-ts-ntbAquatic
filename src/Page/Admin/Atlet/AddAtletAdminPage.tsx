import useAddFormAtlet from "../../../hooks/atlet/useAddAtlet";
import type { Role } from "../../../types/roleType";

type AtletRoleProps = {
    role: Exclude<Role, "Juri">
}

export default function AddAtletAdminPage({ role }: AtletRoleProps) {

    const { error, fieldErrors, handleSubmit, loading, success } = useAddFormAtlet(role)

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full h-full bg-white border border-gray-200 rounded-xl shadow-sm p-9">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Form Tambah Atlet
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                        Nama Lengkap
                    </label>
                    <input
                        name="full_name"
                        type="text"
                        placeholder="Masukkan nama lengkap atlet"
                        className={`p-2.5 rounded-md border focus:ring-blue-500 ${fieldErrors.full_name ? "border-red-500" : "border-gray-300"
                            }`}
                    />

                    {fieldErrors.full_name && (
                        <p className="text-sm text-red-600 mt-1">
                            {fieldErrors.full_name}
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                        NIS
                    </label>
                    <input
                        name="nis"
                        type="text"
                        placeholder="Masukkan NIS atlet"
                        className={`p-2.5 rounded-md border focus:ring-blue-500 ${fieldErrors.nis ? "border-red-500" : "border-gray-300"}`}
                    />
                    {fieldErrors.nis && (
                        <p className="text-sm text-red-600 mt-1">
                            {fieldErrors.nis}
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                        NIK
                    </label>
                    <input
                        name="nik"
                        type="text"
                        placeholder="Masukkan NIK atlet"
                        className={`p-2.5 rounded-md border focus:ring-blue-500 ${fieldErrors.nik ? "border-red-500" : "border-gray-300"}`}
                    />
                    <p className="text-sm text-red-600 mt-1">
                        {fieldErrors.nik}
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                        Tempat Lahir
                    </label>
                    <input
                        name="tempat_lahir"
                        type="text"
                        placeholder="Masukkan tempat lahir atlet"
                        className={`p-2.5 rounded-md border focus:ring-blue-500 ${fieldErrors.tempat_lahir ? "border-red-500" : "border-gray-300"}`}
                    />
                    <p className="text-sm text-red-600 mt-1">
                        {fieldErrors.tempat_lahir}
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                        Tanggal Lahir
                    </label>
                    <input
                        name="tanggal_lahir"
                        type="date"
                        placeholder="Masukkan tanggal lahir atlet"
                        className={`p-2.5 rounded-md border focus:ring-blue-500 ${fieldErrors.tanggal_lahir ? "border-red-500" : "border-gray-300"}`}
                    />
                    <p className="text-sm text-red-600 mt-1">
                        {fieldErrors.tanggal_lahir}
                    </p>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                        Alamat KTP
                    </label>
                    <input
                        name="alamat_ktp"
                        type="text"
                        placeholder="Masukkan alamat ktp atlet"
                        className={`p-2.5 rounded-md border focus:ring-blue-500 ${fieldErrors.alamat_ktp ? "border-red-500" : "border-gray-300"}`}
                    />
                    <p className="text-sm text-red-600 mt-1">
                        {fieldErrors.alamat_ktp}
                    </p>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                        Agama
                    </label>
                    <select name="agama" className="p-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500">
                        <option value="">-- Pilih Agama --</option>
                        <option value="Islam">Islam</option>
                        <option value="Kristen">Kristen</option>
                        <option value="Katolik">Katolik</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Buddha">Buddha</option>
                        <option value="Konghucu">Konghucu</option>
                    </select>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Masukkan email atlet"
                        className={`p-2.5 rounded-md border focus:ring-blue-500 ${fieldErrors.email ? "border-red-500" : "border-gray-300"}`}
                    />
                    <p className="text-sm text-red-600 mt-1">
                        {fieldErrors.email}
                    </p>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                        Jenis Kelamin
                    </label>
                    <select name="jenis_kelamin" className="p-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500">
                        <option value="">-- Pilih Jenis Kelamin --</option>
                        <option value="Laki">Laki - Laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
                <button
                    type="button"
                    className="px-5 py-2.5 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                    Batal
                </button>

                <button
                    type="submit"
                    disabled={loading}
                    className="px-5 py-2.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                >
                    {loading ? "Menyimpan..." : "Simpan"}
                </button>
            </div>
            {success && (
                <p className="text-green-500">{success}</p>
            )}
            {error && (
                <p className="text-red-500">{error}</p>
            )}
        </form>
    );
}

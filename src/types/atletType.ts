import type { AgamaType } from "./agamaType";
import type { JenisKelaminType } from "./jenisKelaminType";

export type AtletType = {
  id: number
  full_name: string;
  nis: string;
  nik: string;
  email: string;
};

export type editAtletType = {
  full_name: string;
  nis: string;
  nik: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  alamat_ktp: string;
  agama: AgamaType;
  email: string;
  jenis_kelamin: JenisKelaminType;
};

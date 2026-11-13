import { companyConfig, type MediaAssetConfig } from '../config/company';

export interface ProductionStage {
  stepNumber: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  supportingPoints: string[];
  image: MediaAssetConfig;
}

export interface QualityPillar {
  code: string;
  title: string;
  description: string;
  checkpoints: string[];
}

export interface CertificationRecord {
  id: string;
  name: string;
  scope: string;
  status: 'verified' | 'pending';
  documentNumber?: string;
}

export const productionStages: ProductionStage[] = [
  {
    stepNumber: '01',
    slug: 'penerimaan-pemeriksaan-bahan',
    title: 'Penerimaan dan Pemeriksaan Bahan',
    summary: 'Seleksi awal serta verifikasi kesesuaian bahan sebelum memasuki area pengolahan.',
    description:
      'Setiap bahan baku yang datang diperiksa kondisi fisik, kebersihan kemasan pelindung, kejelasan identitas pemasok, serta kesesuaiannya dengan spesifikasi internal yang ditetapkan sebelum disimpan.',
    supportingPoints: [
      'Pencatatan identitas penerimaan bahan baku',
      'Pemeriksaan kondisi fisik dan keutuhan kemasan',
      'Penempatan bahan sesuai kategori penyimpanan',
    ],
    image: companyConfig.media.intro,
  },
  {
    stepNumber: '02',
    slug: 'penimbangan-bahan',
    title: 'Penimbangan Bahan Sesuai Kebutuhan Produksi',
    summary: 'Pengukuran proporsi bahan secara tertib mengacu pada lembar kerja produksi.',
    description:
      'Bahan yang telah lolos pemeriksaan awal ditimbang menggunakan peralatan terkalibrasi sesuai takaran batch yang ditetapkan, guna menjaga konsistensi komposisi di setiap siklus produksi.',
    supportingPoints: [
      'Penimbangan terukur sesuai catatan batch produksi',
      'Peralatan kontak bahan dijaga kebersihannya sebelum pemakaian',
      'Pemisahan area kerja untuk meminimalkan kontaminasi silang',
    ],
    image: companyConfig.media.productSample,
  },
  {
    stepNumber: '03',
    slug: 'proses-pencampuran-blending',
    title: 'Proses Pencampuran (Blending)',
    summary: 'Pengolahan dan pencampuran bahan kering secara merata mengikuti prosedur operasional.',
    description:
      'Bahan-bahan yang telah ditimbang diproses pada tahap pencampuran untuk memperoleh kehomogenan tekstur, warna, dan distribusi komponen susu kambing Etawa bubuk sesuai standar internal.',
    supportingPoints: [
      'Pengaturan urutan pencampuran sesuai prosedur kerja',
      'Pemantauan kondisi mesin dan waktu proses',
      'Kebersihan ruang pengolahan dijaga selama berlangsungnya batch',
    ],
    image: companyConfig.media.productionShowcase,
  },
  {
    stepNumber: '04',
    slug: 'pemeriksaan-proses-produk',
    title: 'Pemeriksaan Proses dan Produk',
    summary: 'Pengecekan kesesuaian organoleptik serta dokumentasi mutu sebelum pengemasan.',
    description:
      'Sebelum produk diteruskan ke lini pengemasan, tim melakukan pemeriksaan kesesuaian visual, aroma, serta kelengkapan catatan proses untuk memastikan keseragaman hasil antar batch.',
    supportingPoints: [
      'Evaluasi keseragaman fisik serbuk hasil pencampuran',
      'Pencatatan hasil pemeriksaan pada lembar kontrol mutu',
      'Penahanan sementara apabila ditemukan ketidaksesuaian prosedur',
    ],
    image: companyConfig.media.teamWorkplace,
  },
  {
    stepNumber: '05',
    slug: 'pengemasan',
    title: 'Pengemasan Produk',
    summary: 'Pengisian dan penyegelan kemasan dengan perhatian penuh terhadap kerapatan serta kebersihan.',
    description:
      'Produk dimasukkan ke dalam kemasan sesuai spesifikasi ukuran dan material pelindung yang disepakati, diikuti pemeriksaan kerapatan segel untuk menjaga ketahanan isi selama distribusi.',
    supportingPoints: [
      'Pemeriksaan kebersihan kemasan primer sebelum pengisian',
      'Kontrol berat bersih pada setiap unit kemasan',
      'Verifikasi kerapatan segel dan penandaan kode produksi',
    ],
    image: companyConfig.media.hero,
  },
  {
    stepNumber: '06',
    slug: 'pencatatan-penyimpanan',
    title: 'Pencatatan dan Penyimpanan Produk',
    summary: 'Administrasi stok akhir dan penataan di ruang penyimpanan yang tertib.',
    description:
      'Produk jadi dicatat berdasarkan tanggal produksi dan identitas batch, lalu ditempatkan di area penyimpanan yang bersih, kering, dan tertata untuk menjaga mutu hingga proses pengiriman.',
    supportingPoints: [
      'Dokumentasi keluar-masuk barang jadi secara sistematis',
      'Penataan penyimpanan dengan prinsip sirkulasi stok yang teratur',
      'Pengecekan kondisi akhir sebelum penyerahan kepada mitra',
    ],
    image: companyConfig.media.intro,
  },
];

export const qualityPillars: QualityPillar[] = [
  {
    code: '01',
    title: 'Pemeriksaan Bahan',
    description:
      'Setiap bahan baku yang masuk melalui pemeriksaan kondisi kemasan, kebersihan, serta kesesuaian dokumen pemasok sebelum dinyatakan layak masuk area produksi.',
    checkpoints: [
      'Verifikasi fisik dan kebersihan wadah bahan',
      'Pencatatan tanggal penerimaan dan identitas batch bahan',
    ],
  },
  {
    code: '02',
    title: 'Kebersihan dan Sanitasi',
    description:
      'Penerapan tata tertib kebersihan ruang produksi, peralatan pengolahan, serta kelengkapan higienis personel selama berada di area kerja.',
    checkpoints: [
      'Pembersihan berkala peralatan sebelum dan sesudah proses',
      'Kepatuhan penggunaan perlengkapan kerja higienis',
    ],
  },
  {
    code: '03',
    title: 'Pengendalian Proses',
    description:
      'Pelaksanaan penimbangan, pencampuran, dan pengawasan parameter kerja mengikuti urutan prosedur operasional yang terdokumentasi.',
    checkpoints: [
      'Kesesuaian takaran terhadap lembar kerja batch',
      'Pemantauan konsistensi visual dan tekstur produk',
    ],
  },
  {
    code: '04',
    title: 'Pengemasan',
    description:
      'Pemastian berat bersih, kerapatan segel kemasan, serta keterbacaan penandaan kode produksi guna menjaga perlindungan produk.',
    checkpoints: [
      'Pengecekan acak kesesuaian berat bersih kemasan',
      'Inspeksi fisik segel untuk mencegah kebocoran udara',
    ],
  },
  {
    code: '05',
    title: 'Pencatatan dan Dokumentasi',
    description:
      'Setiap tahapan dari penerimaan bahan hingga barang jadi dicatat secara tertib untuk mendukung penelusuran riwayat produksi.',
    checkpoints: [
      'Arsip lembar produksi dan kontrol mutu per batch',
      'Keterlacakan antara bahan masuk dan hasil akhir',
    ],
  },
  {
    code: '06',
    title: 'Evaluasi dan Peningkatan Proses',
    description:
      'Peninjauan berkala atas catatan operasional serta masukan mitra bisnis sebagai dasar penyempurnaan ketertiban kerja.',
    checkpoints: [
      'Evaluasi internal alur kerja antar bagian',
      'Tindak lanjut perbaikan yang terukur dan terarah',
    ],
  },
];

// Sertifikasi & perizinan hanya ditampilkan secara publik setelah nomor dokumen dan ruang lingkupnya terverifikasi oleh manajemen BMMF.
export const verifiedCertifications: CertificationRecord[] = [];

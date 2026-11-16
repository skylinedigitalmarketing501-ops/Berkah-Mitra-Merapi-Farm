import { companyConfig } from '../config/company';

export interface B2BProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  variants: string | null;
  packagingInfo: string | null;
  approvedSpecifications: string[];
  imageSrc: string;
  imageSrcSet?: string;
  imageAlt: string;
  isPlaceholderImage: boolean;
}

export interface MaklonTimelineStep {
  step: string;
  title: string;
  description: string;
}

export interface MaklonFaqItem {
  question: string;
  answer: string;
}

export const productCategories = [
  'Semua Kategori',
  'Susu Kambing Etawa Bubuk',
] as const;

// Katalog B2B terstruktur berdasarkan data perusahaan yang terverifikasi.
// Varian spesifik, berat bersih, dan izin per SKU hanya ditambahkan setelah disetujui resmi untuk publikasi.
export const b2bProducts: B2BProductItem[] = [
  {
    id: 'etawa-powder-b2b',
    name: 'Susu Kambing Etawa Bubuk (Pengadaan & Kemitraan B2B)',
    category: 'Susu Kambing Etawa Bubuk',
    description:
      'Kategori produk inti pengolahan CV. Berkah Mitra Merapi Farm dalam bentuk susu kambing Etawa bubuk untuk kebutuhan pemesanan bisnis, distribusi, maupun pengembangan merek melalui layanan maklon.',
    variants:
      'Pilihan varian dan penyesuaian formula dibahas langsung pada tahap konsultasi sesuai ketentuan yang disepakati.',
    packagingInfo:
      'Opsi kemasan (jenis material pelindung dan ukuran gramasi) dikonfirmasi bersama tim teknis BMMF.',
    approvedSpecifications: [
      'Bentuk sediaan: Serbuk / bubuk kering',
      'Fokus bahan utama: Susu kambing Etawa',
      'Skema pemesanan: B2B (pembelian bisnis & kerja sama maklon)',
      'Detail komposisi, nomor izin edar, dan MOQ: Dibahas sesuai spesifikasi pesanan resmi',
    ],
    imageSrc: companyConfig.media.productSample.src,
    imageSrcSet: companyConfig.media.productSample.srcSet,
    imageAlt: companyConfig.media.productSample.alt,
    isPlaceholderImage: companyConfig.media.productSample.isPlaceholder,
  },
];

export const maklonTargetPartners = [
  {
    number: '01',
    title: 'Pemilik Merek Produk Susu',
    description:
      'Pemilik merek yang membutuhkan mitra pengolahan susu bubuk guna menjaga keberlanjutan pasokan dan konsistensi proses produksi.',
  },
  {
    number: '02',
    title: 'Pelaku Usaha yang Mengembangkan Merek Baru',
    description:
      'Pengusaha yang berencana meluncurkan lini produk susu kambing Etawa bubuk dengan identitas merek milik sendiri.',
  },
  {
    number: '03',
    title: 'Distributor yang Ingin Memiliki Produk Sendiri',
    description:
      'Distributor atau jaringan pemasaran yang telah memiliki akses pasar dan ingin mengembangkan produk berlabel eksklusif.',
  },
  {
    number: '04',
    title: 'Perusahaan yang Membutuhkan Mitra Pengolahan',
    description:
      'Entitas bisnis yang memerlukan dukungan produksi susu bubuk sesuai kesepakatan spesifikasi dan tata kelola operasional.',
  },
];

export const maklonTimelineSteps: MaklonTimelineStep[] = [
  {
    step: '01',
    title: 'Konsultasi Awal Kebutuhan Produk',
    description:
      'Penyampaian gambaran merek, jenis produk susu bubuk yang diminati, serta target distribusi bisnis Anda.',
  },
  {
    step: '02',
    title: 'Pembahasan Spesifikasi & Kelayakan Produksi',
    description:
      'Peninjauan teknis bersama tim BMMF terkait kesesuaian bahan, kemasan, dan kemampuan lini pengolahan.',
  },
  {
    step: '03',
    title: 'Penawaran Harga & Ketentuan Kerja Sama',
    description:
      'Penyusunan penawaran resmi mencakup skema biaya, ketentuan pemesanan, serta ruang lingkup layanan yang disepakati.',
  },
  {
    step: '04',
    title: 'Persetujuan Spesifikasi serta Pemesanan',
    description:
      'Konfirmasi tertulis atas spesifikasi produk, kemasan, dan jadwal pemesanan oleh kedua belah pihak.',
  },
  {
    step: '05',
    title: 'Pelaksanaan Produksi',
    description:
      'Proses penimbangan, pencampuran, dan pengemasan dijalankan mengikuti prosedur operasional dan dokumentasi batch.',
  },
  {
    step: '06',
    title: 'Pemeriksaan & Penyelesaian Pesanan',
    description:
      'Pengecekan kesesuaian hasil akhir, kerapatan kemasan, serta pencatatan administrasi penyelesaian batch.',
  },
  {
    step: '07',
    title: 'Pengiriman atau Serah Terima Sesuai Kesepakatan',
    description:
      'Penyerahan produk jadi kepada pihak mitra sesuai mekanisme distribusi atau pengambilan yang telah disetujui.',
  },
];

export const maklonFaqs: MaklonFaqItem[] = [
  {
    question: 'Bagaimana cara memulai kerja sama maklon?',
    answer:
      'Anda dapat memulai dengan menghubungi tim BMMF melalui formulir Permintaan Penawaran atau WhatsApp resmi. Pada tahap awal, sampaikan profil usaha serta gambaran produk susu bubuk yang ingin dikembangkan untuk dijadwalkan konsultasi teknis.',
  },
  {
    question: 'Apakah saya bisa menggunakan merek sendiri?',
    answer:
      'Ya, layanan maklon susu bubuk di BMMF ditujukan bagi pelaku usaha atau calon pemilik merek yang ingin menghadirkan produk dengan identitas merek sendiri sesuai kesepakatan kerja sama.',
  },
  {
    question: 'Apa saja jenis susu bubuk yang dapat diproduksi?',
    answer:
      'Fokus utama BMMF saat ini adalah pengolahan susu kambing Etawa bubuk. Untuk kebutuhan penyesuaian jenis atau pengembangan varian tertentu, silakan konsultasikan langsung bersama tim kami agar dapat ditinjau kelayakan produksinya.',
  },
  {
    question: 'Apakah ada minimum pemesanan?',
    answer:
      'Ketentuan minimum pemesanan (MOQ) bergantung pada spesifikasi produk dan jenis kemasan yang dipilih. Informasi MOQ yang berlaku dibahas secara transparan pada saat sesi konsultasi dan penawaran resmi.',
  },
  {
    question: 'Bagaimana proses penawaran harga?',
    answer:
      'Penawaran harga disusun setelah rincian spesifikasi produk, pilihan kemasan, serta perkiraan volume pemesanan dibahas bersama tim BMMF sehingga rincian biaya sesuai dengan kebutuhan riil mitra.',
  },
  {
    question: 'Berapa estimasi waktu produksi?',
    answer:
      'Estimasi waktu penyelesaian produksi disesuaikan dengan kesiapan bahan, kemasan, antrean jadwal produksi, serta volume pesanan. Jadwal pengerjaan akan diinformasikan secara tertulis sebelum pemesanan disetujui.',
  },
  {
    question: 'Apakah tersedia pilihan kemasan?',
    answer:
      'Kebutuhan jenis dan ukuran kemasan dapat didiskusikan selama tahap pembahasan spesifikasi agar selaras dengan karakteristik produk susu bubuk dan rencana distribusi merek Anda.',
  },
  {
    question: 'Bagaimana proses konsultasi?',
    answer:
      'Isi formulir Konsultasi & Permintaan Penawaran di halaman Kontak atau klik tombol WhatsApp Maklon. Tim kami akan menindaklanjuti untuk menjadwalkan komunikasi lanjutan sesuai kebutuhan bisnis Anda.',
  },
];

import { companyConfig } from '../config/company';

export type ArticleCategory =
  | 'Informasi Perusahaan'
  | 'Kegiatan Produksi'
  | 'Pengembangan SDM'
  | 'Industri Susu'
  | 'Edukasi Pangan'
  | 'Layanan Maklon & Kemitraan';

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: ArticleCategory;
  publishedAt: string;
  readTime: string;
  excerpt: string;
  isExample: boolean;
  featured?: boolean;
  coverImage: string;
  coverImageSrcSet?: string;
  coverAlt: string;
  body: string[];
}

export const articleCategories: ('Semua Kategori' | ArticleCategory)[] = [
  'Semua Kategori',
  'Informasi Perusahaan',
  'Kegiatan Produksi',
  'Industri Susu',
  'Edukasi Pangan',
  'Layanan Maklon & Kemitraan',
  'Pengembangan SDM',
];

// Konten berikut ditandai jelas sebagai contoh struktur editorial hingga artikel resmi perusahaan diterbitkan.
export const editorialArticles: ArticleItem[] = [
  {
    id: 'art-1',
    slug: 'pentingnya-ketertiban-proses-dalam-pengolahan-susu-etawa-bubuk',
    title: 'Pentingnya Ketertiban Proses dalam Industri Pengolahan Susu Kambing Etawa Bubuk',
    category: 'Kegiatan Produksi',
    publishedAt: '2026-10-14',
    readTime: '4 menit baca',
    excerpt:
      'Gambaran umum mengenai bagaimana pemeriksaan bahan baku, kebersihan ruang pengolahan, serta dokumentasi batch berperan menjaga konsistensi produk pangan bubuk bagi mitra bisnis.',
    isExample: true,
    featured: true,
    coverImage: companyConfig.media.articleProcessControl.src,
    coverImageSrcSet: companyConfig.media.articleProcessControl.srcSet,
    coverAlt: companyConfig.media.articleProcessControl.alt,
    body: [
      'Dalam industri pengolahan pangan berbentuk serbuk, ketertiban alur kerja merupakan faktor mendasar yang menentukan konsistensi hasil dari satu siklus produksi ke siklus berikutnya. Setiap tahapan mulai dari penerimaan bahan hingga penyimpanan akhir saling berkaitan.',
      'Pemeriksaan awal terhadap kesesuaian bahan dan kebersihan wadah pelindung membantu memastikan hanya bahan yang memenuhi kriteria internal yang diteruskan ke tahap penimbangan. Setelah itu, pencampuran dilakukan dengan memperhatikan waktu serta kebersihan peralatan.',
      'Selain aspek teknis pada lini pengolahan, pencatatan dokumen batch secara rapi memungkinkan tim operasional menelusuri riwayat setiap kelompok produksi. Catatan ini menjadi pijakan penting untuk evaluasi berkala serta komunikasi yang transparan dengan mitra bisnis.',
      'Catatan Redaksi: Artikel ini merupakan contoh tata letak konten editorial dan akan diperbarui dengan publikasi resmi kegiatan CV. Berkah Mitra Merapi Farm setelah peninjauan manajemen.',
    ],
  },
  {
    id: 'art-2',
    slug: 'memahami-karakteristik-susu-kambing-etawa-dalam-bentuk-bubuk',
    title: 'Mengenal Karakteristik Umum Susu Kambing Etawa dalam Bentuk Bubuk',
    category: 'Edukasi Pangan',
    publishedAt: '2026-09-28',
    readTime: '3 menit baca',
    excerpt:
      'Tinjauan edukatif mengenai keunggulan penyimpanan pangan kering berbentuk bubuk serta faktor kemasan yang memengaruhi ketahanan mutu selama distribusi.',
    isExample: true,
    coverImage: companyConfig.media.articleEtawaPowder.src,
    coverImageSrcSet: companyConfig.media.articleEtawaPowder.srcSet,
    coverAlt: companyConfig.media.articleEtawaPowder.alt,
    body: [
      'Pengolahan susu kambing Etawa menjadi bentuk bubuk bertujuan memudahkan penanganan logistik, memperpanjang stabilitas penyimpanan pada suhu ruang yang tepat, serta mempermudah penakaran dalam penyajian.',
      'Karena bersifat higroskopis atau mudah menyerap kelembapan dari udara, produk susu bubuk memerlukan perhatian khusus pada tahap pengemasan dan penyegelan. Kerapatan segel kemasan menjadi salah satu titik pemeriksaan utama sebelum produk didistribusikan.',
      'Penyimpanan di ruangan yang kering, bersih, dan terhindar dari paparan panas langsung juga membantu menjaga tekstur serbuk tetap baik hingga sampai ke tangan konsumen akhir.',
      'Catatan Redaksi: Artikel ini disajikan sebagai contoh konten edukasi pangan tanpa memuat klaim medis atau kesehatan tertentu.',
    ],
  },
  {
    id: 'art-3',
    slug: 'peran-disiplin-kerja-dan-sanitasi-tim-produksi-pangan',
    title: 'Membangun Budaya Disiplin Kerja dan Sanitasi pada Lini Pengolahan Pangan',
    category: 'Pengembangan SDM',
    publishedAt: '2026-09-10',
    readTime: '3 menit baca',
    excerpt:
      'Kesadaran kebersihan personal dan keteraturan prosedur operasional merupakan fondasi utama sumber daya manusia di lingkungan manufaktur makanan dan minuman.',
    isExample: true,
    coverImage: companyConfig.media.teamWorkplace.src,
    coverImageSrcSet: companyConfig.media.teamWorkplace.srcSet,
    coverAlt: companyConfig.media.teamWorkplace.alt,
    body: [
      'Peralatan produksi yang tertata rapi perlu diimbangi dengan kedisiplinan personel yang mengoperasikannya setiap hari. Di lingkungan pengolahan pangan, kepatuhan terhadap penggunaan perlengkapan pelindung higienis serta prosedur sanitasi merupakan kebiasaan kerja yang tidak terpisahkan.',
      'Pembiasaan pelaporan kondisi ruang kerja dan koordinasi lintas bagian—mulai dari gudang bahan, pencampuran, pengemasan, hingga kendali mutu—membantu mengurangi kesalahan operasional dan menjaga alur kerja tetap tertib.',
      'Catatan Redaksi: Konten contoh untuk kategori Pengembangan SDM BMMF.',
    ],
  },
  {
    id: 'art-4',
    slug: 'persiapan-awal-menjalin-kemitraan-distribusi-dan-pengadaan-produk-susu-bubuk',
    title: 'Hal yang Perlu Disiapkan Pelaku Usaha Sebelum Mendiskusikan Kerja Sama Produksi',
    category: 'Industri Susu',
    publishedAt: '2026-08-22',
    readTime: '4 menit baca',
    excerpt:
      'Panduan ringkas bagi pemilik merek atau pelaku distribusi mengenai poin komunikasi awal agar pembahasan kerja sama produksi dan pengadaan berjalan efektif.',
    isExample: true,
    coverImage: companyConfig.media.articleB2bMeeting.src,
    coverImageSrcSet: companyConfig.media.articleB2bMeeting.srcSet,
    coverAlt: companyConfig.media.articleB2bMeeting.alt,
    body: [
      'Komunikasi awal yang terstruktur membantu kedua belah pihak memahami ruang lingkup kerja sama secara realistis. Sebelum pertemuan teknis, calon mitra sebaiknya menyiapkan gambaran kategori produk yang dibutuhkan, target pasar, serta perkiraan alur distribusi.',
      'Melalui diskusi terbuka, pihak manufaktur dan mitra usaha dapat menyelaraskan jadwal komunikasi, kebutuhan dokumentasi administratif, serta kesiapan operasional sebelum melangkah ke tahap kerja sama formal.',
      'Catatan Redaksi: Contoh artikel kategori Industri Susu yang dapat disesuaikan dengan kebijakan kemitraan resmi BMMF.',
    ],
  },
  {
    id: 'art-5',
    slug: 'mengenal-struktur-operasional-kantor-dan-lokasi-produksi-bmmf',
    title: 'Pembagian Fungsi Administrasi di Magelang dan Kegiatan Produksi di Sleman',
    category: 'Informasi Perusahaan',
    publishedAt: '2026-08-05',
    readTime: '3 menit baca',
    excerpt:
      'Informasi ringkas mengenai letak administratif kantor perusahaan dan lokasi produksi yang tercatat dalam profil CV. Berkah Mitra Merapi Farm.',
    isExample: true,
    coverImage: companyConfig.media.articleMerapiOffice.src,
    coverImageSrcSet: companyConfig.media.articleMerapiOffice.srcSet,
    coverAlt: companyConfig.media.articleMerapiOffice.alt,
    body: [
      'Dalam menjalankan operasionalnya, CV. Berkah Mitra Merapi Farm memiliki alamat kantor di Jl. Penggaron - Gn. Lemah No.89, Payakan, Gondowangi, Kec. Sawangan, Kabupaten Magelang, Jawa Tengah 56481, serta lokasi produksi di wilayah Sidorejo, Nganggring, Girikerto, Turi, Kab. Sleman, DI Yogyakarta.',
      'Pemisahan informasi alamat kantor dan titik produksi ini memudahkan mitra bisnis maupun calon pembeli korporat saat melakukan korespondensi atau menjadwalkan pertemuan konsultasi.',
      'Catatan Redaksi: Contoh artikel kategori Informasi Perusahaan. Pastikan konfirmasi jadwal pertemuan langsung dengan tim BMMF sebelum kedatangan.',
    ],
  },
  {
    id: 'art-6',
    slug: 'langkah-mempersiapkan-merek-produk-susu-bubuk-melalui-layanan-maklon',
    title: 'Langkah Mempersiapkan Konsep Produk Sebelum Konsultasi Maklon Susu Bubuk',
    category: 'Layanan Maklon & Kemitraan',
    publishedAt: '2026-07-19',
    readTime: '4 menit baca',
    excerpt:
      'Panduan awal bagi calon pemilik merek mengenai aspek konsep produk, segmentasi distribusi, dan kemasan yang perlu didiskusikan bersama mitra maklon.',
    isExample: true,
    coverImage: companyConfig.media.articleMaklonConcept.src,
    coverImageSrcSet: companyConfig.media.articleMaklonConcept.srcSet,
    coverAlt: companyConfig.media.articleMaklonConcept.alt,
    body: [
      'Memulai produk susu bubuk dengan merek sendiri memerlukan keselarasan antara konsep pemasaran dan kesiapan proses manufaktur. Sebelum berkonsultasi dengan mitra produksi, calon pemilik merek disarankan memetakan segmen konsumen serta kisaran volume pengadaan tahap awal.',
      'Dengan membawa gambaran kebutuhan yang jelas mengenai kemasan dan rencana distribusi, diskusi bersama tim manufaktur dapat berfokus pada peninjauan kelayakan teknis, estimasi pengerjaan, dan penyusunan penawaran kerja sama yang realistis.',
      'Catatan Redaksi: Contoh artikel kategori Layanan Maklon & Kemitraan.',
    ],
  },
];

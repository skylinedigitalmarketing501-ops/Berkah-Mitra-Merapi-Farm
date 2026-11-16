import heroImg from '../assets/images/hero_dairy_processing_1794554419537.jpg';
import introImg from '../assets/images/company_intro_facility_1794554420824.jpg';
import showcaseImg from '../assets/images/production_blending_process_1794554421286.jpg';
import productImg from '../assets/images/product_etawa_powder_1794554421758.jpg';
import teamImg from '../assets/images/team_workplace_bmmf_1794554421773.jpg';
import serviceMaklonImg from '../assets/images/service_maklon_pack_1794812157534.jpg';
import serviceB2bOrderImg from '../assets/images/service_b2b_order_1794812158666.jpg';
import maklonHeaderImg from '../assets/images/maklon_header_desk_1794812159261.jpg';
import productsHeaderImg from '../assets/images/products_header_supply_1794812159142.jpg';
import qualityHeaderImg from '../assets/images/quality_header_inspect_1794812160019.jpg';
import stageMaterialReceiveImg from '../assets/images/stage_material_receive_1794812160659.jpg';
import stagePrecisionWeighImg from '../assets/images/stage_precision_weigh_1794812161325.jpg';
import stageProcessInspectImg from '../assets/images/stage_process_inspect_1794812161735.jpg';
import stagePackageSealImg from '../assets/images/stage_package_seal_1794812162827.jpg';
import stageWarehouseRackImg from '../assets/images/stage_warehouse_rack_1794812162070.jpg';
import articleProcessControlImg from '../assets/images/article_process_control_1794812163198.jpg';
import articleEtawaPowderImg from '../assets/images/article_etawa_powder_1794812162758.jpg';
import articleB2bMeetingImg from '../assets/images/article_b2b_meeting_1794812163908.jpg';
import articleMerapiOfficeImg from '../assets/images/article_merapi_office_1794812164823.jpg';
import articleMaklonConceptImg from '../assets/images/article_maklon_concept_1794812165083.jpg';

export interface MediaAssetConfig {
  src: string;
  alt: string;
  caption: string;
  isPlaceholder: boolean;
}

export interface CompanySocialLink {
  platform: string;
  label: string;
  url: string;
}

export interface CompanyHighlightItem {
  id: string;
  label: string;
  value: string;
  note: string;
  verified: boolean;
}

export const companyConfig = {
  officialName: 'CV. BERKAH MITRA MERAPI FARM',
  displayName: 'Berkah Mitra Merapi Farm',
  shortName: 'Berkah Mitra Merapi Farm',
  webName: 'Berkah Mitra Merapi Farm',
  logo: {
    src: '/assets/bmmf-logo.png',
    alt: 'Logo resmi Berkah Mitra Merapi Farm',
  },
  industryFocus: 'Industri Pengolahan & Maklon Susu Bubuk',
  tagline: 'Mitra Produksi Susu Bubuk untuk Mengembangkan Bisnis Anda',
  domain: 'www.berkahmitramerapifarm.com',
  canonicalBaseUrl: 'https://www.berkahmitramerapifarm.com',
  foundedYear: '2022',
  foundedYearNote: 'Berdasarkan profil publik perusahaan — wajib dikonfirmasi sebelum publikasi final.',
  locations: {
    office: {
      title: 'Alamat Kantor',
      address:
        'Jl. Penggaron - Gn. Lemah No.89, Payakan, Gondowangi, Kec. Sawangan, Kabupaten Magelang, Jawa Tengah 56481',
      city: 'Kec. Sawangan, Kab. Magelang, Jawa Tengah',
      mapsUrl:
        'https://www.google.com/maps/dir/-7.5643411,110.2735528/Masjid+Asy-+Syifa,+Jl.+Penggaron+-+Gn.+Lemah+No.89,+Payakan,+Gondowangi,+Kec.+Sawangan,+Kabupaten+Magelang,+Jawa+Tengah+56481/@-7.5577458,110.2685162,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e7a8b00793e0a97:0xa8e0c5f3cde52a0d!2m2!1d110.2867682!2d-7.5554699?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D',
      mapsQuery:
        'Jl. Penggaron - Gn. Lemah No.89, Payakan, Gondowangi, Kec. Sawangan, Kabupaten Magelang, Jawa Tengah 56481',
      coordinatesVerified: true,
      coordinates: {
        lat: -7.5554699,
        lng: 110.2867682,
      },
    },
    production: {
      title: 'Lokasi Produksi',
      address: 'Wilayah Sidorejo, Nganggring, Girikerto, Turi, Kabupaten Sleman, DI Yogyakarta',
      city: 'Kab. Sleman, DI Yogyakarta',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Sidorejo%2C%20Nganggring%2C%20Girikerto%2C%20Turi%2C%20Sleman%2C%20DI%20Yogyakarta',
      mapsQuery: 'Sidorejo, Nganggring, Girikerto, Turi, Sleman, DI Yogyakarta',
      coordinatesVerified: false,
      coordinates: null as { lat: number; lng: number } | null,
    },
  },
  contact: {
    whatsappDisplay: '+62 822-2133-7499',
    whatsappNumber: '6282221337499',
    email: 'berkahmitramf@gmail.com',
    operationalHours: 'Senin – Sabtu, 08.00 – 16.00 WIB',
    operationalHoursVerified: false,
    operationalHoursNote: 'Jadwal operasional dapat disesuaikan dan memerlukan konfirmasi internal perusahaan.',
  },
  socialLinks: [] as CompanySocialLink[],
  highlights: [
    {
      id: 'founded',
      label: 'Tahun Berdiri (Profil Publik)',
      value: '2022',
      note: 'Menunggu konfirmasi akhir manajemen sebelum publikasi resmi.',
      verified: true,
    },
    {
      id: 'focus',
      label: 'Fokus Produksi Utama',
      value: 'Susu Kambing Etawa Bubuk',
      note: 'Spesialisasi pada pengolahan susu kambing Etawa bubuk untuk mitra B2B.',
      verified: true,
    },
    {
      id: 'services',
      label: 'Model Kerja Sama B2B',
      value: 'Maklon & Pengadaan',
      note: 'Layanan maklon merek sendiri dan pemesanan produk susu bubuk sesuai kesepakatan.',
      verified: true,
    },
    {
      id: 'locations',
      label: 'Titik Operasional',
      value: 'Magelang & Sleman',
      note: 'Kantor administrasi di Sawangan, Kab. Magelang (Jateng) dan kegiatan produksi di Turi, Kab. Sleman (DIY).',
      verified: true,
    },
  ] as CompanyHighlightItem[],
  media: {
    hero: {
      src: heroImg,
      alt: 'Ilustrasi fasilitas pengolahan dan pengemasan susu kambing Etawa bubuk berstandar higienis',
      caption: 'Visual ilustrasi operasional — dokumentasi foto resmi fasilitas BMMF akan diperbarui setelah verifikasi aset.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    heroVideo: {
      src: '/assets/aistudio/Membuat_pabrik_mesin_bekerja_33cb86cc_69cbc6be.mp4',
      alt: 'Video aktivitas pengolahan dan pengemasan susu bubuk di lini produksi Berkah Mitra Merapi Farm',
      caption: 'Visualisasi lini pengolahan dan pengemasan susu bubuk berstandar higienis BMMF.',
    },
    intro: {
      src: introImg,
      alt: 'Ilustrasi pemeriksaan sampel susu bubuk dan pencatatan dokumen produksi',
      caption: 'Visual ilustrasi pengendalian proses dan pencatatan mutu.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    aboutHeroVideo: {
      src: '/assets/aistudio/Pekerja_menghitung_menulis_dan_m__8c4bdf68_59437dc7.mp4',
      alt: 'Video pemeriksaan sampel susu bubuk dan pencatatan dokumen batch produksi Berkah Mitra Merapi Farm',
      caption: 'Visualisasi pemeriksaan sampel dan pencatatan dokumentasi mutu per batch BMMF.',
    },
    serviceMaklon: {
      src: serviceMaklonImg,
      alt: 'Ilustrasi konsep kemasan produk susu bubuk merek sendiri untuk layanan maklon BMMF',
      caption: 'Visual ilustrasi pengembangan kemasan dan sampel layanan maklon susu bubuk.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    serviceB2bOrder: {
      src: serviceB2bOrderImg,
      alt: 'Ilustrasi pengemasan massal susu bubuk dalam kantong foil dan karton siap kirim untuk mitra B2B',
      caption: 'Visual ilustrasi pengadaan dan distribusi susu bubuk B2B.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    maklonHeader: {
      src: maklonHeaderImg,
      alt: 'Ilustrasi konsultasi spesifikasi kemasan, sampel aluminium foil, dan serbuk susu untuk mitra maklon',
      caption: 'Visual ilustrasi sesi pembahasan spesifikasi produk dan kemasan layanan maklon.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    productsHeader: {
      src: productsHeaderImg,
      alt: 'Ilustrasi drum baja tahan karat dan kemasan grosir susu kambing Etawa bubuk siap distribusi',
      caption: 'Visual ilustrasi kesiapan pasokan produk susu kambing Etawa bubuk B2B.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    qualityHeader: {
      src: qualityHeaderImg,
      alt: 'Ilustrasi petugas penjaminan mutu memeriksa kerapatan segel kemasan aluminium foil susu bubuk',
      caption: 'Visual ilustrasi inspeksi ketertiban proses dan pengecekan segel kemasan.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    productionShowcase: {
      src: showcaseImg,
      alt: 'Ilustrasi lini pencampuran dan pengemasan susu bubuk berbahan baja tahan karat',
      caption: 'Visual ilustrasi lingkungan produksi berbahan food-grade.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    productionHero: {
      src: '/assets/aistudio/image_45154022.png',
      alt: 'Tim produksi melakukan penimbangan susu bubuk, pencatatan batch, dan pengoperasian lini pengolahan baja tahan karat',
      caption: 'Visualisasi penimbangan bahan, pencatatan batch, dan pengoperasian lini pengolahan susu bubuk BMMF.',
      isPlaceholder: false,
    } satisfies MediaAssetConfig,
    stageMaterialReceive: {
      src: stageMaterialReceiveImg,
      alt: 'Ilustrasi pemeriksaan fisik bahan baku dan wadah tertutup di area penerimaan yang higienis',
      caption: 'Visual ilustrasi tahap penerimaan dan pemeriksaan awal bahan baku.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    stagePrecisionWeigh: {
      src: stagePrecisionWeighImg,
      alt: 'Ilustrasi penimbangan serbuk susu kambing Etawa menggunakan sendok baja tahan karat dan timbangan digital terkalibrasi',
      caption: 'Visual ilustrasi penimbangan takaran bahan sesuai lembar kerja batch.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    stageProcessInspect: {
      src: stageProcessInspectImg,
      alt: 'Ilustrasi pengecekan keseragaman warna dan kehalusan serbuk susu bubuk pada baki inspeksi',
      caption: 'Visual ilustrasi pemeriksaan organoleptik dan pencatatan kontrol mutu.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    stagePackageSeal: {
      src: stagePackageSealImg,
      alt: 'Ilustrasi pengisian dan penyegelan kemasan aluminium foil susu bubuk di lini pengemasan higienis',
      caption: 'Visual ilustrasi tahap pengemasan dan verifikasi kerapatan segel.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    stageWarehouseRack: {
      src: stageWarehouseRackImg,
      alt: 'Ilustrasi ruang penyimpanan produk jadi yang bersih, kering, dan tertata di rak palet higienis',
      caption: 'Visual ilustrasi pencatatan stok dan penataan penyimpanan produk jadi.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    productSample: {
      src: productImg,
      alt: 'Ilustrasi susu kambing Etawa bubuk dengan kemasan industri tanpa label merek',
      caption: 'Visual ilustrasi produk susu kambing Etawa bubuk.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    teamWorkplace: {
      src: teamImg,
      alt: 'Ilustrasi tim produksi dan penjaminan mutu memeriksa catatan operasional',
      caption: 'Visual ilustrasi kolaborasi tim operasional.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    articleProcessControl: {
      src: articleProcessControlImg,
      alt: 'Ilustrasi mesin pencampur baja tahan karat dan panel kontrol di ruang produksi pangan kering',
      caption: 'Visual ilustrasi tata kelola mesin pengolahan susu bubuk.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    articleEtawaPowder: {
      src: articleEtawaPowderImg,
      alt: 'Ilustrasi serbuk susu kambing Etawa putih krem halus di mangkuk keramik dan kemasan foil pelindung',
      caption: 'Visual ilustrasi karakteristik sediaan kering dan kemasan pelindung kelembapan.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    articleB2bMeeting: {
      src: articleB2bMeetingImg,
      alt: 'Ilustrasi meja pembahasan kemitraan B2B dengan sampel kemasan dan bahan susu bubuk',
      caption: 'Visual ilustrasi diskusi awal kerja sama produksi dan pengadaan B2B.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    articleMerapiOffice: {
      src: articleMerapiOfficeImg,
      alt: 'Ilustrasi bangunan kantor administrasi modern di kawasan kaki gunung berudara sejuk',
      caption: 'Visual ilustrasi lingkungan kantor administrasi di lereng kawasan Merapi.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    articleMaklonConcept: {
      src: articleMaklonConceptImg,
      alt: 'Ilustrasi perencanaan konsep kemasan karton, sachet aluminium foil, dan sampel serbuk susu bubuk',
      caption: 'Visual ilustrasi persiapan konsep produk sebelum konsultasi maklon.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
  },
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${companyConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppMaklonUrl(): string {
  return buildWhatsAppUrl(
    'Halo, tim BMMF. Saya tertarik untuk berkonsultasi mengenai layanan maklon susu bubuk. Mohon informasi lebih lanjut.'
  );
}

export function getWhatsAppProductUrl(productName?: string): string {
  if (productName) {
    return buildWhatsAppUrl(
      `Halo, tim BMMF. Saya ingin menanyakan informasi produk susu bubuk (${productName}) dan melakukan permintaan penawaran.`
    );
  }
  return buildWhatsAppUrl(
    'Halo, tim BMMF. Saya ingin menanyakan informasi produk susu bubuk dan melakukan permintaan penawaran.'
  );
}

import logo96Webp from '../assets/images-webp/bmmf-logo-96.webp';
import logo192Webp from '../assets/images-webp/bmmf-logo-192.webp';

import heroPoster480 from '../assets/images-webp/hero_video_poster-480.webp';
import heroPoster960 from '../assets/images-webp/hero_video_poster-960.webp';
import aboutPoster480 from '../assets/images-webp/about_video_poster-480.webp';
import aboutPoster960 from '../assets/images-webp/about_video_poster-960.webp';
import productionHero480 from '../assets/images-webp/production_hero_45154022-480.webp';
import productionHero960 from '../assets/images-webp/production_hero_45154022-960.webp';

import hero480 from '../assets/images-webp/hero_dairy_processing_1794554419537-480.webp';
import hero960 from '../assets/images-webp/hero_dairy_processing_1794554419537-960.webp';
import hero1440 from '../assets/images-webp/hero_dairy_processing_1794554419537-1440.webp';

import intro480 from '../assets/images-webp/company_intro_facility_1794554420824-480.webp';
import intro960 from '../assets/images-webp/company_intro_facility_1794554420824-960.webp';

import showcase480 from '../assets/images-webp/production_blending_process_1794554421286-480.webp';
import showcase960 from '../assets/images-webp/production_blending_process_1794554421286-960.webp';

import product480 from '../assets/images-webp/product_etawa_powder_1794554421758-480.webp';
import product960 from '../assets/images-webp/product_etawa_powder_1794554421758-960.webp';

import team480 from '../assets/images-webp/team_workplace_bmmf_1794554421773-480.webp';
import team960 from '../assets/images-webp/team_workplace_bmmf_1794554421773-960.webp';

import serviceMaklon480 from '../assets/images-webp/service_maklon_pack_1794812157534-480.webp';
import serviceMaklon960 from '../assets/images-webp/service_maklon_pack_1794812157534-960.webp';

import serviceB2b480 from '../assets/images-webp/service_b2b_order_1794812158666-480.webp';
import serviceB2b960 from '../assets/images-webp/service_b2b_order_1794812158666-960.webp';

import maklonHeader480 from '../assets/images-webp/maklon_header_desk_1794812159261-480.webp';
import maklonHeader960 from '../assets/images-webp/maklon_header_desk_1794812159261-960.webp';

import productsHeader480 from '../assets/images-webp/products_header_supply_1794812159142-480.webp';
import productsHeader960 from '../assets/images-webp/products_header_supply_1794812159142-960.webp';

import qualityHeader480 from '../assets/images-webp/quality_header_inspect_1794812160019-480.webp';
import qualityHeader960 from '../assets/images-webp/quality_header_inspect_1794812160019-960.webp';

import stageReceive480 from '../assets/images-webp/stage_material_receive_1794812160659-480.webp';
import stageReceive960 from '../assets/images-webp/stage_material_receive_1794812160659-960.webp';

import stageWeigh480 from '../assets/images-webp/stage_precision_weigh_1794812161325-480.webp';
import stageWeigh960 from '../assets/images-webp/stage_precision_weigh_1794812161325-960.webp';

import stageInspect480 from '../assets/images-webp/stage_process_inspect_1794812161735-480.webp';
import stageInspect960 from '../assets/images-webp/stage_process_inspect_1794812161735-960.webp';

import stageSeal480 from '../assets/images-webp/stage_package_seal_1794812162827-480.webp';
import stageSeal960 from '../assets/images-webp/stage_package_seal_1794812162827-960.webp';

import stageRack480 from '../assets/images-webp/stage_warehouse_rack_1794812162070-480.webp';
import stageRack960 from '../assets/images-webp/stage_warehouse_rack_1794812162070-960.webp';

import artProcess480 from '../assets/images-webp/article_process_control_1794812163198-480.webp';
import artProcess960 from '../assets/images-webp/article_process_control_1794812163198-960.webp';

import artEtawa480 from '../assets/images-webp/article_etawa_powder_1794812162758-480.webp';
import artEtawa960 from '../assets/images-webp/article_etawa_powder_1794812162758-960.webp';

import artMeeting480 from '../assets/images-webp/article_b2b_meeting_1794812163908-480.webp';
import artMeeting960 from '../assets/images-webp/article_b2b_meeting_1794812163908-960.webp';

import artOffice480 from '../assets/images-webp/article_merapi_office_1794812164823-480.webp';
import artOffice960 from '../assets/images-webp/article_merapi_office_1794812164823-960.webp';

import artConcept480 from '../assets/images-webp/article_maklon_concept_1794812165083-480.webp';
import artConcept960 from '../assets/images-webp/article_maklon_concept_1794812165083-960.webp';

export interface MediaAssetConfig {
  src: string;
  srcSet: string;
  alt: string;
  caption: string;
  isPlaceholder: boolean;
}

export interface VideoAssetConfig {
  src: string;
  poster: string;
  posterSrcSet: string;
  trackSrc: string;
  alt: string;
  caption: string;
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
    src: logo96Webp,
    srcSet: `${logo96Webp} 1x, ${logo192Webp} 2x`,
    ogSrc: '/assets/bmmf-logo.png',
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
      src: hero960,
      srcSet: `${hero480} 480w, ${hero960} 960w, ${hero1440} 1440w`,
      alt: 'Ilustrasi fasilitas pengolahan dan pengemasan susu kambing Etawa bubuk berstandar higienis',
      caption: 'Visual ilustrasi operasional — dokumentasi foto resmi fasilitas BMMF akan diperbarui setelah verifikasi aset.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    heroVideo: {
      src: '/assets/media/hero-production-v1.mp4',
      poster: heroPoster960,
      posterSrcSet: `${heroPoster480} 480w, ${heroPoster960} 960w`,
      trackSrc: '/assets/media/hero-production-id.vtt',
      alt: 'Video aktivitas pengolahan dan pengemasan susu bubuk di lini produksi Berkah Mitra Merapi Farm',
      caption: 'Visualisasi lini pengolahan dan pengemasan susu bubuk berstandar higienis BMMF.',
    } satisfies VideoAssetConfig,
    intro: {
      src: intro960,
      srcSet: `${intro480} 480w, ${intro960} 960w`,
      alt: 'Ilustrasi pemeriksaan sampel susu bubuk dan pencatatan dokumen produksi',
      caption: 'Visual ilustrasi pengendalian proses dan pencatatan mutu.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    aboutHeroVideo: {
      src: '/assets/media/about-qc-v1.mp4',
      poster: aboutPoster960,
      posterSrcSet: `${aboutPoster480} 480w, ${aboutPoster960} 960w`,
      trackSrc: '/assets/media/about-qc-id.vtt',
      alt: 'Video pemeriksaan sampel susu bubuk dan pencatatan dokumen batch produksi Berkah Mitra Merapi Farm',
      caption: 'Visualisasi pemeriksaan sampel dan pencatatan dokumentasi mutu per batch BMMF.',
    } satisfies VideoAssetConfig,
    serviceMaklon: {
      src: serviceMaklon960,
      srcSet: `${serviceMaklon480} 480w, ${serviceMaklon960} 960w`,
      alt: 'Ilustrasi konsep kemasan produk susu bubuk merek sendiri untuk layanan maklon BMMF',
      caption: 'Visual ilustrasi pengembangan kemasan dan sampel layanan maklon susu bubuk.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    serviceB2bOrder: {
      src: serviceB2b960,
      srcSet: `${serviceB2b480} 480w, ${serviceB2b960} 960w`,
      alt: 'Ilustrasi pengemasan massal susu bubuk dalam kantong foil dan karton siap kirim untuk mitra B2B',
      caption: 'Visual ilustrasi pengadaan dan distribusi susu bubuk B2B.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    maklonHeader: {
      src: maklonHeader960,
      srcSet: `${maklonHeader480} 480w, ${maklonHeader960} 960w`,
      alt: 'Ilustrasi konsultasi spesifikasi kemasan, sampel aluminium foil, dan serbuk susu untuk mitra maklon',
      caption: 'Visual ilustrasi sesi pembahasan spesifikasi produk dan kemasan layanan maklon.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    productsHeader: {
      src: productsHeader960,
      srcSet: `${productsHeader480} 480w, ${productsHeader960} 960w`,
      alt: 'Ilustrasi drum baja tahan karat dan kemasan grosir susu kambing Etawa bubuk siap distribusi',
      caption: 'Visual ilustrasi kesiapan pasokan produk susu kambing Etawa bubuk B2B.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    qualityHeader: {
      src: qualityHeader960,
      srcSet: `${qualityHeader480} 480w, ${qualityHeader960} 960w`,
      alt: 'Ilustrasi petugas penjaminan mutu memeriksa kerapatan segel kemasan aluminium foil susu bubuk',
      caption: 'Visual ilustrasi inspeksi ketertiban proses dan pengecekan segel kemasan.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    productionShowcase: {
      src: showcase960,
      srcSet: `${showcase480} 480w, ${showcase960} 960w`,
      alt: 'Ilustrasi lini pencampuran dan pengemasan susu bubuk berbahan baja tahan karat',
      caption: 'Visual ilustrasi lingkungan produksi berbahan food-grade.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    productionHero: {
      src: productionHero960,
      srcSet: `${productionHero480} 480w, ${productionHero960} 960w`,
      alt: 'Tim produksi melakukan penimbangan susu bubuk, pencatatan batch, dan pengoperasian lini pengolahan baja tahan karat',
      caption: 'Visualisasi penimbangan bahan, pencatatan batch, dan pengoperasian lini pengolahan susu bubuk BMMF.',
      isPlaceholder: false,
    } satisfies MediaAssetConfig,
    stageMaterialReceive: {
      src: stageReceive960,
      srcSet: `${stageReceive480} 480w, ${stageReceive960} 960w`,
      alt: 'Ilustrasi pemeriksaan fisik bahan baku dan wadah tertutup di area penerimaan yang higienis',
      caption: 'Visual ilustrasi tahap penerimaan dan pemeriksaan awal bahan baku.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    stagePrecisionWeigh: {
      src: stageWeigh960,
      srcSet: `${stageWeigh480} 480w, ${stageWeigh960} 960w`,
      alt: 'Ilustrasi penimbangan serbuk susu kambing Etawa menggunakan sendok baja tahan karat dan timbangan digital terkalibrasi',
      caption: 'Visual ilustrasi penimbangan takaran bahan sesuai lembar kerja batch.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    stageProcessInspect: {
      src: stageInspect960,
      srcSet: `${stageInspect480} 480w, ${stageInspect960} 960w`,
      alt: 'Ilustrasi pengecekan keseragaman warna dan kehalusan serbuk susu bubuk pada baki inspeksi',
      caption: 'Visual ilustrasi pemeriksaan organoleptik dan pencatatan kontrol mutu.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    stagePackageSeal: {
      src: stageSeal960,
      srcSet: `${stageSeal480} 480w, ${stageSeal960} 960w`,
      alt: 'Ilustrasi pengisian dan penyegelan kemasan aluminium foil susu bubuk di lini pengemasan higienis',
      caption: 'Visual ilustrasi tahap pengemasan dan verifikasi kerapatan segel.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    stageWarehouseRack: {
      src: stageRack960,
      srcSet: `${stageRack480} 480w, ${stageRack960} 960w`,
      alt: 'Ilustrasi ruang penyimpanan produk jadi yang bersih, kering, dan tertata di rak palet higienis',
      caption: 'Visual ilustrasi pencatatan stok dan penataan penyimpanan produk jadi.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    productSample: {
      src: product960,
      srcSet: `${product480} 480w, ${product960} 960w`,
      alt: 'Ilustrasi susu kambing Etawa bubuk dengan kemasan industri tanpa label merek',
      caption: 'Visual ilustrasi produk susu kambing Etawa bubuk.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    teamWorkplace: {
      src: team960,
      srcSet: `${team480} 480w, ${team960} 960w`,
      alt: 'Ilustrasi tim produksi dan penjaminan mutu memeriksa catatan operasional',
      caption: 'Visual ilustrasi kolaborasi tim operasional.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    articleProcessControl: {
      src: artProcess960,
      srcSet: `${artProcess480} 480w, ${artProcess960} 960w`,
      alt: 'Ilustrasi mesin pencampur baja tahan karat dan panel kontrol di ruang produksi pangan kering',
      caption: 'Visual ilustrasi tata kelola mesin pengolahan susu bubuk.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    articleEtawaPowder: {
      src: artEtawa960,
      srcSet: `${artEtawa480} 480w, ${artEtawa960} 960w`,
      alt: 'Ilustrasi serbuk susu kambing Etawa putih krem halus di mangkuk keramik dan kemasan foil pelindung',
      caption: 'Visual ilustrasi karakteristik sediaan kering dan kemasan pelindung kelembapan.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    articleB2bMeeting: {
      src: artMeeting960,
      srcSet: `${artMeeting480} 480w, ${artMeeting960} 960w`,
      alt: 'Ilustrasi meja pembahasan kemitraan B2B dengan sampel kemasan dan bahan susu bubuk',
      caption: 'Visual ilustrasi diskusi awal kerja sama produksi dan pengadaan B2B.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    articleMerapiOffice: {
      src: artOffice960,
      srcSet: `${artOffice480} 480w, ${artOffice960} 960w`,
      alt: 'Ilustrasi bangunan kantor administrasi modern di kawasan kaki gunung berudara sejuk',
      caption: 'Visual ilustrasi lingkungan kantor administrasi di lereng kawasan Merapi.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    articleMaklonConcept: {
      src: artConcept960,
      srcSet: `${artConcept480} 480w, ${artConcept960} 960w`,
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

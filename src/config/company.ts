import heroImg from '../assets/images/hero_dairy_processing_1794554419537.jpg';
import introImg from '../assets/images/company_intro_facility_1794554420824.jpg';
import showcaseImg from '../assets/images/production_blending_process_1794554421286.jpg';
import productImg from '../assets/images/product_etawa_powder_1794554421758.jpg';
import teamImg from '../assets/images/team_workplace_bmmf_1794554421773.jpg';

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
    intro: {
      src: introImg,
      alt: 'Ilustrasi pemeriksaan sampel susu bubuk dan pencatatan dokumen produksi',
      caption: 'Visual ilustrasi pengendalian proses dan pencatatan mutu.',
      isPlaceholder: true,
    } satisfies MediaAssetConfig,
    productionShowcase: {
      src: showcaseImg,
      alt: 'Ilustrasi lini pencampuran dan pengemasan susu bubuk berbahan baja tahan karat',
      caption: 'Visual ilustrasi lingkungan produksi berbahan food-grade.',
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

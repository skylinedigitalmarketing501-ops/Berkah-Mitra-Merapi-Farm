export interface NavItem {
  label: string;
  path: string;
}

export const primaryNavigation: NavItem[] = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang Kami', path: '/tentang-kami' },
  { label: 'Layanan Maklon', path: '/layanan-maklon' },
  { label: 'Produk Susu Bubuk', path: '/produk-susu-bubuk' },
  { label: 'Proses Produksi', path: '/proses-produksi' },
  { label: 'Kualitas', path: '/kualitas' },
  { label: 'Artikel', path: '/artikel' },
  { label: 'Kontak', path: '/kontak' },
];

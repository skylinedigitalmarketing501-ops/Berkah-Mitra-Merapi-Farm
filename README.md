# Website Resmi CV. Berkah Mitra Merapi Farm (BMMF)

Website Company Profile dan Pemasaran B2B resmi **CV. Berkah Mitra Merapi Farm (BMMF)** untuk memperkenalkan kapabilitas pengolahan susu bubuk, **Layanan Maklon Susu Bubuk**, serta pemesanan **Produk Susu Bubuk** B2B.

## Menjalankan Secara Lokal

1. Pasang dependensi:
   ```bash
   npm install
   ```
2. Salin konfigurasi environment contoh:
   ```bash
   cp .env.example .env
   ```
3. Jalankan server pengembangan (Express + Vite middleware pada port 3000):
   ```bash
   npm run dev
   ```
4. Buka `http://localhost:3000`.

## Build & Production

1. Pemeriksaan TypeScript dan build frontend:
   ```bash
   npm run lint
   npm run build
   ```
2. Jalankan server produksi:
   ```bash
   npm start
   ```

## Konfigurasi Konten Perusahaan

- `src/config/company.ts` — nama resmi, alamat kantor & produksi, nomor WhatsApp bisnis, email, highlight profil, serta aset media.
- `src/data/products.ts` — katalog produk B2B, segmen mitra maklon, alur kerja sama maklon, dan FAQ maklon.
- `src/data/production.ts` — 6 tahapan proses produksi, pilar kualitas, dan daftar sertifikasi terverifikasi (`verifiedCertifications`).
- `src/data/articles.ts` — daftar artikel editorial per kategori.

## Endpoint Backend

- `GET /api/health` — status server.
- `POST /api/contact` — validasi permintaan penawaran B2B (Maklon & Pemesanan Susu Bubuk), proteksi spam (*rate-limit* & *honeypot*), penyimpanan di `data/submissions/inquiries.jsonl`, serta dukungan webhook (`CONTACT_NOTIFICATION_WEBHOOK_URL`).
- `GET /sitemap.xml` & `GET /robots.txt` — dihasilkan secara dinamis untuk SEO B2B.
- `/produk-layanan` — redirect permanen (301) ke `/produk-susu-bubuk`.
- `/karier` — ditangani sebagai halaman yang telah dihapus (410).

## Deploy ke Cloudflare Pages

Proyek ini sudah dilengkapi konfigurasi Cloudflare Pages (`wrangler.toml`, `public/_redirects`, `public/_headers`, dan `functions/`):

- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Environment variables (opsional di Dashboard Cloudflare Pages)**:
  - `APP_URL`: URL domain produksi (mis. `https://www.berkahmitramerapifarm.com`).
  - `CONTACT_NOTIFICATION_WEBHOOK_URL`: Webhook (Zapier / Make / n8n / Google Apps Script) untuk meneruskan form B2B.
  - `RESEND_API_KEY` & `CONTACT_EMAIL_TO` (`berkahmitramf@gmail.com`): Untuk mengirim notifikasi email langsung dari `/api/contact`.
- **KV Binding (opsional)**: Tambahkan binding KV dengan nama `INQUIRIES_KV` untuk menyimpan arsip submission formulir kontak di Cloudflare KV.


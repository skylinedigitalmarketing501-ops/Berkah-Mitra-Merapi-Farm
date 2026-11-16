import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';

const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const LayananMaklonPage = lazy(() =>
  import('./pages/LayananMaklonPage').then((m) => ({ default: m.LayananMaklonPage }))
);
const ProductsPage = lazy(() =>
  import('./pages/ProductsPage').then((m) => ({ default: m.ProductsPage }))
);
const ProductionProcessPage = lazy(() =>
  import('./pages/ProductionProcessPage').then((m) => ({
    default: m.ProductionProcessPage,
  }))
);
const QualityPage = lazy(() =>
  import('./pages/QualityPage').then((m) => ({ default: m.QualityPage }))
);
const ArticlesPage = lazy(() =>
  import('./pages/ArticlesPage').then((m) => ({ default: m.ArticlesPage }))
);
const ArticleDetailPage = lazy(() =>
  import('./pages/ArticleDetailPage').then((m) => ({ default: m.ArticleDetailPage }))
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const LegalPage = lazy(() =>
  import('./pages/LegalPage').then((m) => ({ default: m.LegalPage }))
);
const LegacyRemovedPage = lazy(() =>
  import('./pages/LegacyRemovedPage').then((m) => ({ default: m.LegacyRemovedPage }))
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

function RouteLoadingFallback() {
  return (
    <div
      className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 py-16 min-h-[50vh] flex items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <p className="text-sm text-[#57615B]">Memuat halaman...</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang-kami" element={<AboutPage />} />
            <Route path="/layanan-maklon" element={<LayananMaklonPage />} />
            <Route path="/produk-susu-bubuk" element={<ProductsPage />} />
            <Route path="/proses-produksi" element={<ProductionProcessPage />} />
            <Route path="/kualitas" element={<QualityPage />} />
            <Route path="/artikel" element={<ArticlesPage />} />
            <Route path="/artikel/:slug" element={<ArticleDetailPage />} />
            <Route path="/kontak" element={<ContactPage />} />
            <Route path="/kebijakan-privasi" element={<LegalPage mode="privacy" />} />
            <Route path="/ketentuan-penggunaan" element={<LegalPage mode="terms" />} />
            {/* Penanganan URL lama agar tidak menjadi broken link */}
            <Route path="/produk-layanan" element={<Navigate to="/produk-susu-bubuk" replace />} />
            <Route path="/karier" element={<LegacyRemovedPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

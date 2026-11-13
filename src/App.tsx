import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { LayananMaklonPage } from './pages/LayananMaklonPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductionProcessPage } from './pages/ProductionProcessPage';
import { QualityPage } from './pages/QualityPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { LegacyRemovedPage } from './pages/LegacyRemovedPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

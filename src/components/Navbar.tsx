import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { primaryNavigation } from '../data/navigation';
import { companyConfig } from '../config/company';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [drawerOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-[#E3E8E3] shadow-[0_1px_12px_rgba(16,43,36,0.04)]'
          : 'bg-white border-b border-[#E3E8E3]/80'
      }`}
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 h-16 lg:h-[72px] flex items-center justify-between gap-4 xl:gap-6">
        {/* Zone 1: Single-line Brand Wordmark + Official Logo */}
        <Link
          to="/"
          aria-label={companyConfig.webName}
          className="inline-flex items-center gap-2.5 text-[#183D32] font-display font-bold text-[15px] sm:text-base tracking-tight whitespace-nowrap shrink-0"
        >
          <img
            src={companyConfig.logo.src}
            alt={companyConfig.logo.alt}
            width={38}
            height={38}
            className="w-9 h-9 object-contain shrink-0"
          />
          <span>{companyConfig.webName}</span>
        </Link>

        {/* Zone 2: Horizontal Navigation */}
        <nav aria-label="Navigasi utama" className="hidden xl:flex items-center gap-4 2xl:gap-5">
          {primaryNavigation.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`relative py-2 text-[13.5px] font-medium whitespace-nowrap shrink-0 transition-colors duration-200 ${
                  isActive ? 'text-[#183D32]' : 'text-[#737D77] hover:text-[#183D32]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId={prefersReduced ? undefined : 'bmmf-nav-underline'}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 right-0 bottom-0.5 h-[2px] bg-[#183D32] rounded-full"
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Drawer Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/kontak?kebutuhan=Maklon"
            className="hidden xl:inline-flex items-center gap-1.5 px-4 py-2.5 text-[13.5px] font-medium text-white bg-[#183D32] hover:bg-[#102B24] rounded-[10px] transition-colors duration-200 whitespace-nowrap shrink-0"
          >
            <span>Konsultasi Maklon</span>
            <ArrowUpRight className="w-4 h-4 text-[#D3B785]" aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => setDrawerOpen((prev) => !prev)}
            aria-expanded={drawerOpen}
            aria-controls="bmmf-mobile-drawer"
            aria-label={drawerOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="xl:hidden inline-flex items-center justify-center w-11 h-11 rounded-[10px] border border-[#E3E8E3] text-[#183D32] hover:bg-[#F5F3ED] transition-colors"
          >
            {drawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.2 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 top-16 bg-[#102B24]/30 backdrop-blur-[1px] z-40 xl:hidden"
              aria-hidden="true"
            />
            <motion.nav
              id="bmmf-mobile-drawer"
              aria-label="Navigasi seluler"
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
              animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: prefersReduced ? 0 : 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-0 right-0 top-16 bg-white border-b border-[#E3E8E3] shadow-lg z-50 xl:hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="px-4 py-5 space-y-1">
                {primaryNavigation.map((item) => {
                  const isActive =
                    item.path === '/'
                      ? location.pathname === '/'
                      : location.pathname.startsWith(item.path);
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={`flex items-center justify-between px-3 py-3 rounded-[10px] text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[#F5F3ED] text-[#183D32]'
                          : 'text-[#27312D] hover:bg-[#F5F3ED]/60'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="text-xs font-medium text-[#183D32]">Aktif</span>
                      )}
                    </NavLink>
                  );
                })}
                <div className="pt-4 mt-3 border-t border-[#E3E8E3]">
                  <Link
                    to="/kontak?kebutuhan=Maklon"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-[#183D32] hover:bg-[#102B24] rounded-[10px] transition-colors"
                  >
                    <span>Konsultasi Maklon</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D3B785]" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

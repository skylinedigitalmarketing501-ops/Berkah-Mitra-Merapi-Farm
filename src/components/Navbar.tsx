import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { primaryNavigation } from '../data/navigation';
import { companyConfig } from '../config/company';
import { trackConversionEvent } from '../utils/analytics';

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
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 h-[68px] lg:h-[78px] flex items-center justify-between gap-3 xl:gap-5">
        {/* Zone 1: Single-line Brand Wordmark + Official Logo */}
        <Link
          to="/"
          aria-label={companyConfig.webName}
          className="inline-flex items-center gap-2.5 sm:gap-3 text-[#102B24] font-display font-light text-[16.5px] sm:text-[18.5px] lg:text-[20px] tracking-[0.015em] leading-none whitespace-nowrap shrink-0"
        >
          <img
            src={companyConfig.logo.src}
            srcSet={companyConfig.logo.srcSet}
            alt={companyConfig.logo.alt}
            width={48}
            height={48}
            className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 object-contain shrink-0"
          />
          <span>{companyConfig.webName}</span>
        </Link>

        {/* Zone 2: Horizontal Navigation */}
        <nav aria-label="Navigasi utama" className="hidden xl:flex items-center gap-3.5 2xl:gap-5">
          {primaryNavigation.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`relative py-2 text-[13px] 2xl:text-[13.5px] font-medium whitespace-nowrap shrink-0 transition-colors duration-200 ${
                  isActive ? 'text-[#183D32]' : 'text-[#57615B] hover:text-[#183D32]'
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
            onClick={() =>
              trackConversionEvent({
                event: 'cta_maklon_click',
                source: 'navbar_desktop',
                inquiryType: 'Maklon',
                channel: 'route',
              })
            }
            className="bmmf-sheen bmmf-sheen-delay-1 group hidden xl:inline-flex items-center gap-1.5 px-4 py-2.5 text-[13.5px] font-medium text-white bg-[#183D32] hover:bg-[#102B24] rounded-[10px] transition-all duration-200 hover:-translate-y-[1px] whitespace-nowrap shrink-0"
          >
            <span>Konsultasi Maklon</span>
            <ArrowUpRight className="w-4 h-4 text-[#D3B785] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
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
              className="fixed inset-0 top-[68px] bg-[#102B24]/30 backdrop-blur-[1px] z-40 xl:hidden"
              aria-hidden="true"
            />
            <motion.nav
              id="bmmf-mobile-drawer"
              aria-label="Navigasi seluler"
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
              animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: prefersReduced ? 0 : 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-0 right-0 top-[68px] bg-white border-b border-[#E3E8E3] shadow-lg z-50 xl:hidden max-h-[calc(100vh-4.25rem)] overflow-y-auto"
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
                    onClick={() =>
                      trackConversionEvent({
                        event: 'cta_maklon_click',
                        source: 'navbar_mobile',
                        inquiryType: 'Maklon',
                        channel: 'route',
                      })
                    }
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

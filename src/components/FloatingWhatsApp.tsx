import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import { companyConfig, getWhatsAppMaklonUrl, getWhatsAppProductUrl } from '../config/company';

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            id="bmmf-wa-popover"
            role="dialog"
            aria-label="Pilihan konsultasi WhatsApp Berkah Mitra Merapi Farm"
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: prefersReduced ? 0 : 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="w-[290px] sm:w-[320px] bg-white border border-[#E3E8E3] rounded-2xl shadow-xl p-4 space-y-3"
          >
            <div className="flex items-start justify-between gap-2 pb-2.5 border-b border-[#E3E8E3]">
              <div className="flex items-center gap-2.5">
                <img
                  src={companyConfig.logo.src}
                  alt={companyConfig.logo.alt}
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain shrink-0"
                />
                <div>
                  <p className="font-display font-bold text-sm text-[#183D32]">
                    {companyConfig.webName}
                  </p>
                  <p className="text-xs text-[#737D77]">
                    Pilih topik pesan WhatsApp otomatis.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup panel WhatsApp"
                className="p-1 text-[#737D77] hover:text-[#183D32] rounded-lg"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-2">
              <a
                href={getWhatsAppMaklonUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-[#F5F3ED] hover:bg-[#ebe7dc] text-xs font-semibold text-[#183D32] transition-colors"
              >
                <span>Konsultasi Layanan Maklon</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href={getWhatsAppProductUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-[#F5F3ED] hover:bg-[#ebe7dc] text-xs font-semibold text-[#183D32] transition-colors"
              >
                <span>Pemesanan Produk Susu Bubuk</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>

            <div className="pt-2 border-t border-[#E3E8E3]">
              <Link
                to="/kontak"
                onClick={() => setOpen(false)}
                className="block text-center text-xs font-medium text-[#737D77] hover:text-[#183D32] hover:underline"
              >
                Atau isi Formulir Permintaan Penawaran
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="bmmf-wa-popover"
        aria-label="Hubungi via WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-105"
      >
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
          className="w-7 h-7 sm:w-8 sm:h-8"
        >
          <path d="M16.004 3.2C8.94 3.2 3.2 8.938 3.2 16c0 2.256.59 4.46 1.71 6.404L3.09 29.05l6.81-1.786A12.74 12.74 0 0 0 16.004 28.8c7.06 0 12.8-5.738 12.8-12.8 0-7.064-5.74-12.8-12.8-12.8Zm0 23.36a10.52 10.52 0 0 1-5.36-1.466l-.384-.228-4.042 1.06 1.078-3.94-.25-.398A10.52 10.52 0 0 1 5.444 16c0-5.822 4.738-10.56 10.56-10.56 5.822 0 10.56 4.738 10.56 10.56 0 5.822-4.738 10.56-10.56 10.56Zm5.792-7.908c-.318-.16-1.88-.928-2.172-1.034-.29-.106-.502-.16-.714.16-.212.318-.82 1.034-1.006 1.246-.186.212-.37.238-.688.08-.318-.16-1.342-.495-2.556-1.578-.945-.842-1.584-1.882-1.768-2.2-.186-.318-.02-.49.14-.648.143-.142.318-.37.476-.556.16-.186.212-.318.318-.53.106-.212.054-.398-.026-.556-.08-.16-.714-1.72-.978-2.356-.258-.62-.52-.536-.714-.546-.186-.01-.398-.01-.61-.01-.212 0-.556.08-.846.398-.29.318-1.11 1.084-1.11 2.644s1.136 3.068 1.294 3.28c.16.212 2.236 3.414 5.416 4.788.756.326 1.346.522 1.806.668.76.242 1.45.208 1.996.126.61-.09 1.88-.768 2.144-1.51.265-.742.265-1.378.186-1.51-.08-.132-.29-.212-.608-.37Z" />
        </svg>
      </button>
    </div>
  );
}

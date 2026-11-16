import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';

interface HeroVideoPlayerProps {
  src: string;
  posterSrc: string;
  posterSrcSet?: string;
  posterSizes?: string;
  trackSrc: string;
  alt: string;
  caption: string;
  surfaceClassName?: string;
}

export function HeroVideoPlayer({
  src,
  posterSrc,
  posterSrcSet,
  posterSizes = '(max-width: 1024px) 100vw, 50vw',
  trackSrc,
  alt,
  caption,
  surfaceClassName = 'bg-[#F5F3ED]',
}: HeroVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReduced = useReducedMotion();
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || prefersReduced) return;

    let idleHandle: number | null = null;
    let timeoutHandle: ReturnType<typeof setTimeout> | null = null;
    let inView = false;

    const triggerLoad = () => {
      if (!inView) return;
      if ('requestIdleCallback' in window) {
        idleHandle = window.requestIdleCallback(
          () => setShouldLoadVideo(true),
          { timeout: 1200 }
        );
      } else {
        timeoutHandle = setTimeout(() => setShouldLoadVideo(true), 250);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          inView = true;
          triggerLoad();
          observer.disconnect();
        }
      },
      { rootMargin: '80px 0px' }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (idleHandle !== null && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== null) clearTimeout(timeoutHandle);
    };
  }, [prefersReduced]);

  useEffect(() => {
    if (!shouldLoadVideo || prefersReduced || !videoRef.current) return;
    const playPromise = videoRef.current.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        // Fallback aman bila kebijakan browser menunda autoplay
      });
    }
  }, [shouldLoadVideo, prefersReduced]);

  return (
    <figure className="w-full">
      <div className="relative">
        <div
          aria-hidden="true"
          className="bmmf-glow-breathe hidden sm:block absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-[#D3B785] rounded-tr-2xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="bmmf-glow-breathe hidden sm:block absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-[#183D32]/35 rounded-bl-2xl pointer-events-none"
        />
        <div
          ref={containerRef}
          className={`relative overflow-hidden border border-[#E3E8E3] rounded-xl aspect-video ${surfaceClassName}`}
        >
          {/* Poster WebP tampil seketika sebelum video dimuat agar area hero selalu terisi penuh */}
          <img
            src={posterSrc}
            srcSet={posterSrcSet}
            sizes={posterSizes}
            alt={alt}
            width={960}
            height={540}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            referrerPolicy="no-referrer"
            className="block w-full h-full object-contain"
          />

          {(shouldLoadVideo || prefersReduced) && (
            <video
              ref={videoRef}
              src={src}
              poster={posterSrc}
              aria-label={alt}
              autoPlay={!prefersReduced}
              controls={Boolean(prefersReduced)}
              loop
              muted
              playsInline
              preload={prefersReduced ? 'metadata' : 'auto'}
              onCanPlay={() => setVideoReady(true)}
              onPlaying={() => setVideoReady(true)}
              className={`absolute inset-0 block w-full h-full object-contain transition-opacity duration-300 ${
                videoReady || prefersReduced ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <track
                kind="captions"
                src={trackSrc}
                srcLang="id"
                label="Bahasa Indonesia"
                default
              />
              Browser Anda tidak mendukung pemutaran video HTML5.
            </video>
          )}
        </div>
      </div>
      <figcaption className="mt-2.5 text-xs text-[#57615B] leading-relaxed text-center sm:text-left">
        {caption}
      </figcaption>
    </figure>
  );
}

import { useState } from 'react';
import { Factory } from 'lucide-react';

interface SafeImageProps {
  src: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
  aspectClassName?: string;
  caption?: string;
  isPlaceholder?: boolean;
  priority?: boolean;
}

export function SafeImage({
  src,
  srcSet,
  sizes = '(max-width: 768px) 100vw, 50vw',
  width,
  height,
  alt,
  className = '',
  aspectClassName = 'aspect-[4/3]',
  caption,
  isPlaceholder = false,
  priority = false,
}: SafeImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>(
    priority ? 'loaded' : 'loading'
  );

  return (
    <figure className="w-full">
      <div
        className={`relative overflow-hidden bg-[#F5F3ED] border border-[#E3E8E3] rounded-xl ${aspectClassName}`}
      >
        {!priority && status === 'loading' && (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#EFECE3] animate-pulse"
          />
        )}

        {status === 'error' ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#F5F3ED] text-[#57615B]">
            <Factory className="w-8 h-8 text-[#183D32]/50 mb-3" strokeWidth={1.5} />
            <p className="text-sm font-medium text-[#27312D] max-w-xs">{alt}</p>
            <p className="text-xs text-[#57615B] mt-1">
              Dokumentasi visual sedang disiapkan
            </p>
          </div>
        ) : (
          <img
            src={src}
            srcSet={srcSet}
            sizes={srcSet ? sizes : undefined}
            width={width}
            height={height}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : undefined}
            decoding="async"
            referrerPolicy="no-referrer"
            onLoad={() => setStatus('loaded')}
            onError={() => setStatus('error')}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              status === 'loaded' ? 'opacity-100' : 'opacity-0'
            } ${className}`}
          />
        )}
      </div>

      {(caption || isPlaceholder) && (
        <figcaption className="mt-2.5 text-xs text-[#57615B] leading-relaxed">
          {caption || 'Visual ilustrasi operasional — menunggu pembaruan foto resmi perusahaan.'}
        </figcaption>
      )}
    </figure>
  );
}

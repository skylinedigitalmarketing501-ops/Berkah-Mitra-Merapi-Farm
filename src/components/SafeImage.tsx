import { useState } from 'react';
import { Factory } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  caption?: string;
  isPlaceholder?: boolean;
  priority?: boolean;
}

export function SafeImage({
  src,
  alt,
  className = '',
  aspectClassName = 'aspect-[4/3]',
  caption,
  isPlaceholder = false,
  priority = false,
}: SafeImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <figure className="w-full">
      <div
        className={`relative overflow-hidden bg-[#F5F3ED] border border-[#E3E8E3] rounded-xl ${aspectClassName}`}
      >
        {status === 'loading' && (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#EFECE3] animate-pulse"
          />
        )}

        {status === 'error' ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#F5F3ED] text-[#737D77]">
            <Factory className="w-8 h-8 text-[#183D32]/50 mb-3" strokeWidth={1.5} />
            <p className="text-sm font-medium text-[#27312D] max-w-xs">{alt}</p>
            <p className="text-xs text-[#737D77] mt-1">
              Dokumentasi visual sedang disiapkan
            </p>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
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
        <figcaption className="mt-2.5 text-xs text-[#737D77] leading-relaxed">
          {caption || 'Visual ilustrasi operasional — menunggu pembaruan foto resmi perusahaan.'}
        </figcaption>
      )}
    </figure>
  );
}

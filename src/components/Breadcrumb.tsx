import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-3.5">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#57615B]">
        <li>
          <Link to="/" className="hover:text-[#183D32] transition-colors">
            Beranda
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-[#57615B]" aria-hidden="true" />
            {item.path && idx < items.length - 1 ? (
              <Link to={item.path} className="hover:text-[#183D32] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#27312D] font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

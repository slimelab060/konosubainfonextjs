import { ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export const Pagination = ({ href, page, max }: { href: string; page: number; max: number }) => {
  let arr: number[] = [];
  if (max <= 5) {
    arr = [...Array(max)].map((_, i) => i + 1);
  } else {
    if (page <= 3) {
      arr = [1, 2, 3, 4, 5];
    } else if (page >= max - 2) {
      arr = [max - 4, max - 3, max - 2, max - 1, max];
    } else {
      arr = [page - 2, page - 1, page, page + 1, page + 2];
    }
  }
  return (
    <div className="flex w-[100%] flex-wrap justify-center py-2 sm:justify-center">
      {page > 1 ? (
        <Button
          variant="outline"
          size="icon"
          className={cn(
            'hover flex h-[35px] w-[35px] select-none items-center justify-center rounded-md bg-card text-sm font-black'
          )}
        >
          <Link href={`${href}${page > 2 ? `${href.includes('?') ? '&' : '?'}page=${page - 1}` : ''}`}>
            <ChevronLeft size={17} strokeWidth={1.5} className="text-muted-foreground" />
          </Link>
        </Button>
      ) : (
        <Button disabled variant="outline" size="icon" className={cn('select-none h-[35px] w-[35px]')}>
          <ChevronLeft size={17} strokeWidth={1.5} className="text-muted-foreground" />
        </Button>
      )}
      <ul className="mx-3 flex flex-wrap items-center gap-2">
        {arr.map((e: number) => {
          return (
            <li key={e}>
              <Link
                href={`${href}${e > 1 ? `${href.includes('?') ? '&' : '?'}page=${e}` : ''}`}
                className={cn(
                  'hover flex h-[35px] w-[35px] select-none items-center justify-center rounded-md text-sm border',
                  e === page ? 'bg-muted-foreground font-bold text-card' : 'bg-card text-muted-foreground'
                )}
              >
                {e}
              </Link>
            </li>
          );
        })}
      </ul>
      {page < max ? (
        <Button
          variant="outline"
          size="icon"
          className={cn(
            'hover flex h-[35px] w-[35px] select-none items-center justify-center rounded-md bg-card text-sm font-black'
          )}
        >
          <Link href={`${href}${href.includes('?') ? '&' : '?'}page=${page + 1}`}>
            <ChevronRight size={17} strokeWidth={1.5} className="text-muted-foreground" />
          </Link>
        </Button>
      ) : (
        <Button disabled variant="outline" size="icon" className={cn('select-none h-[35px] w-[35px]')}>
          <ChevronRight size={17} strokeWidth={1.5} className="text-muted-foreground" />
        </Button>
      )}
    </div>
  );
};

import { Search } from 'lucide-react';
import { Button } from './button';
import { Input } from '@/components/ui/input';

export function Searchicon() {
  return (
    <div className="w-full flex-1 md:w-auto md:flex-none">
      <Button variant="ghost" size="icon" className="sm:hidden">
        <Search />
      </Button>
      <Input type="search" placeholder="検索..." className="hidden sm:block md:w-[140px] lg:w-[300px]" />
    </div>
  );
}

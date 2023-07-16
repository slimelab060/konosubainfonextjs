import { Input } from '@/components/ui/input';

export function Search() {
  return (
    <div className="w-full flex-1 md:w-auto md:flex-none">
      <Input type="search" placeholder="検索..." className="md:w-[140px] lg:w-[300px]" />
    </div>
  );
}

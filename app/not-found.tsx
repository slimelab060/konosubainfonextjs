import Link from 'next/link';
import { Button } from '../components/ui/button';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center space-y-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">404</h1>
      <Link className="shrink-0" href="/">
        <picture>
          <img src="/icon.svg" alt="chomusuke-icon" width={64} height={64} />
        </picture>
      </Link>
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">ページが見つかりませんでした</h1>
      <Button>
        <Link href={'/'}>戻る</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;

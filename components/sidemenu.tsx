import { Package2 } from 'lucide-react';
import Link from 'next/link';
import { ScrollArea } from './ui/scroll-area';

export const SideMenu = () => {
  return (
    <div className="fixed bottom-0 left-0 top-14 z-[5] w-full lg:sticky lg:left-auto lg:top-[4.55rem] lg:max-h-[calc(100vh-64px)]">
      <ScrollArea className="h-full w-full overflow-x-hidden bg-background p-2 dark:bg-slate-800 lg:h-[calc(100vh-64px)] lg:rounded-lg lg:border lg:shadow-sm">
        <ul className="p-2">
          <li className="flex flex-col py-2">
            <h4 className="pb-2 text-xl font-bold">クイックメニュー</h4>
            <Link
              className="flex rounded-lg p-2 text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <Package2 className="mr-2" />
              ホーム
            </Link>
            <Link
              className="flex rounded-lg p-2 text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <Package2 className="mr-2" />
              イベント
            </Link>
            <Link
              className="flex rounded-lg p-2 text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <Package2 className="mr-2" />
              ガチャ
            </Link>
            <Link
              className="flex rounded-lg p-2 text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <Package2 className="mr-2" />
              初心者
            </Link>
            <Link
              className="flex rounded-lg p-2 text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <Package2 className="mr-2" />
              その他
            </Link>
          </li>
          <li className="flex flex-col py-2">
            <h4 className="pb-2 text-xl font-bold">クエスト</h4>
            <Link
              className="flex rounded-lg p-2 text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <Package2 className="mr-2" />
              アリーナ
            </Link>
            <Link
              className="flex rounded-lg p-2 text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <Package2 className="mr-2" />
              アリーナEX
            </Link>
            <Link
              className="flex rounded-lg p-2 text-foreground duration-100 hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <Package2 className="mr-2" />
              ダンジョン
            </Link>
          </li>
          <li className="flex flex-col py-2">
            <h4 className="pb-2 text-xl font-bold">育成</h4>
            <Link
              className="flex rounded-lg p-2 text-foreground ease-in-out hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <Package2 className="mr-2" />
              名声クエスト
            </Link>
            <Link
              className="flex rounded-lg p-2 text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <Package2 className="mr-2" />
              キャラクター
            </Link>
            <Link
              className="flex rounded-lg p-2 text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <Package2 className="mr-2" />
              アシスト
            </Link>
          </li>
          <li className=" flex flex-col py-2">
            <h4 className="pb-2 text-xl font-bold">鍛冶屋</h4>
            <Link
              className="flex rounded-lg p-2 text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <Package2 className="mr-2" />
              武器
            </Link>
            <Link
              className="flex rounded-lg p-2 text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <Package2 className="mr-2" />
              装飾
            </Link>
          </li>
        </ul>
      </ScrollArea>
    </div>
  );
};

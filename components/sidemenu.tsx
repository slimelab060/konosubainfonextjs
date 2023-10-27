import { Component, Package2, Home, Shield, ShieldPlus, Flag, Sword, Info, Castle, Gem } from 'lucide-react';
import Link from 'next/link';
import { ScrollArea } from './ui/scroll-area';

export const SideMenu = () => {
  return (
    <div className="fixed bottom-0 left-0 top-14 z-[5] w-full lg:sticky lg:left-auto lg:top-[4.55rem] lg:pb-4">
      <ScrollArea className="h-full w-full overflow-x-hidden border bg-card p-2 dark:bg-slate-800 lg:h-[calc(100vh-64px)] lg:rounded-md lg:shadow-sm">
        <ul className="p-2">
          <li className="flex flex-col py-2">
            <h4 className="pb-2 text-lg font-bold">クイックメニュー</h4>
            <Link
              className="flex rounded-md p-2 font-medium text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <Home className="mr-2" />
              ホーム
            </Link>
            <Link
              className="flex rounded-md p-2 font-medium text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <Info className="mr-2" />
              イベント
            </Link>
            <Link
              className="flex rounded-md p-2 font-medium text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <Gem className="mr-2" />
              ガチャ
            </Link>
            <Link
              className="flex rounded-md p-2 font-medium text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <div className="mr-2">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.68 7.257a.5.5 0 00.64 0l6.86-5.69a.5.5 0 01.82.385v14.18a.5.5 0 01-.18.384l-7.5 6.22a.5.5 0 01-.64 0L10 21.342l-5.82-4.826a.5.5 0 01-.18-.384V1.951a.5.5 0 01.82-.385L6 2.546l5.68 4.71zM10 8.696a.5.5 0 00-.18-.385l-3-2.488a.5.5 0 00-.82.385v8.984a.5.5 0 00.18.385l3 2.487a.5.5 0 00.82-.384V8.696z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              初心者
            </Link>
            <Link
              className="flex rounded-md p-2 font-medium text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/other'}
            >
              <Component className="mr-2" />
              その他
            </Link>
          </li>
          <li className="flex flex-col py-2">
            <h4 className="pb-2 text-lg font-bold">クエスト</h4>
            <Link
              className="flex rounded-md p-2 font-medium text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <Shield className="mr-2" />
              アリーナ
            </Link>
            <Link
              className="flex rounded-md p-2 font-medium text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <ShieldPlus className="mr-2" />
              アリーナEX
            </Link>
            <Link
              className="flex rounded-md p-2 font-medium text-foreground duration-100 hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <Castle className="mr-2" />
              ダンジョン
            </Link>
          </li>
          <li className="flex flex-col py-2">
            <h4 className="pb-2 text-lg font-bold">育成</h4>
            <Link
              className="flex rounded-md p-2 font-medium text-foreground ease-in-out hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <Flag className="mr-2" />
              名声クエスト
            </Link>
            <Link
              className="flex rounded-md p-2 font-medium text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/character'}
            >
              <div className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M2.904 9.42L3 9.219V2.493l3.646 2.2.45.271.478-.215c1.33-.6 2.832-.938 4.426-.938 1.594 0 3.057.33 4.376.915l.476.211.447-.269 3.704-2.235v6.503l.105.21a8.36 8.36 0 01.892 3.76C22 17.848 17.605 22 12 22S2 17.85 2 12.905c0-1.22.356-2.324.904-3.484z"
                    stroke="currentColor"
                    strokeWidth={2}
                  />
                  <path d="M16 11v3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                  <path d="M12 7v4M13 8h-2" stroke="currentColor" strokeWidth={2} strokeLinecap="square" />
                  <path d="M8 11v3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                </svg>
              </div>
              キャラクター
            </Link>
            <Link
              className="flex rounded-md p-2 font-medium text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <div className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <circle cx={12} cy={12} r={0.5} stroke="currentColor" />
                  <circle cx={12} cy={12} r={3.4} stroke="currentColor" strokeWidth={1.2} />
                  <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={2} />
                  <path
                    d="M18 18l-5.798-2.483a.52.52 0 00-.404 0L6 18l2.483-5.798a.52.52 0 000-.404L6 6l5.798 2.483a.52.52 0 00.404 0L18 6l-2.483 5.798a.52.52 0 000 .404L18 18z"
                    stroke="currentColor"
                    strokeWidth={1.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 20l-2.209-5.523a.489.489 0 00-.268-.268L4 12l5.523-2.209a.49.49 0 00.268-.268L12 4l2.209 5.523a.489.489 0 00.268.268L20 12l-5.523 2.209a.489.489 0 00-.268.268L12 20z"
                    stroke="currentColor"
                    strokeWidth={1.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              アシスト
            </Link>
          </li>
          <li className=" flex flex-col py-2">
            <h4 className="pb-2 text-lg font-bold">鍛冶屋</h4>
            <Link
              className="flex rounded-md p-2 font-medium text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
              href={'/#'}
            >
              <Sword className="mr-2" />
              武器
            </Link>
            <Link
              className="flex rounded-md p-2 font-medium text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted-foreground"
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

'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isMobileLayout, setIsMobileLayout] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  //スクロールバーの表示切替 イベントはButtonの中に書いてある
  //isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');

  //メディアサイズが1024px以下だった場合、条件反転でFalseになる
  //メニューを開いた状態でサイズを変更し1024px以上になったときにスクロールバーを復活するためのコード
  useEffect(() => {
    const mediaQueryList = window.matchMedia('(min-width: 1024px)');

    const handleChange = () => setIsMobileLayout(!mediaQueryList.matches);
    handleChange(); //リロード時に初期化

    mediaQueryList.addEventListener('change', handleChange);
    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, []);

  return (
    <div>
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </Button>
      {isOpen && (
        <RemoveScroll enabled={isMobileLayout && isOpen}>
          <div className="fixed bottom-0 left-0 top-16 z-10 block h-screen w-full overflow-x-hidden bg-white dark:bg-gray-800">
            <div className="container">
              <ul className="flex flex-col px-2">
                <li className="flex flex-col py-2">
                  <h4 className="text-2xl font-bold">ホーム</h4>
                  <Link
                    className="rounded-lg p-2 text-gray-900 transition-all duration-200 hover:bg-blue-300 dark:text-slate-100 dark:hover:bg-blue-500"
                    href={'/#'}
                  >
                    ホーム
                  </Link>
                  <Link
                    className="rounded-lg p-2 text-gray-900 transition-all duration-200 hover:bg-blue-300 dark:text-slate-100 dark:hover:bg-blue-500"
                    href={'/#'}
                  >
                    イベント
                  </Link>
                  <Link
                    className="rounded-lg p-2 text-gray-900 transition-all duration-200 hover:bg-blue-300 dark:text-slate-100 dark:hover:bg-blue-500"
                    href={'/#'}
                  >
                    ガチャ
                  </Link>
                  <Link
                    className="rounded-lg p-2 text-gray-900 transition-all duration-200 hover:bg-blue-300 dark:text-slate-100 dark:hover:bg-blue-500"
                    href={'/#'}
                  >
                    初心者
                  </Link>
                  <Link
                    className="rounded-lg p-2 text-gray-900 transition-all duration-200 hover:bg-blue-300 dark:text-slate-100 dark:hover:bg-blue-500"
                    href={'/#'}
                  >
                    その他
                  </Link>
                </li>
                <li className="flex flex-col py-2">
                  <h4 className="text-2xl font-bold">クエスト</h4>
                  <Link
                    className="rounded-lg p-2 text-gray-900 transition-all duration-200 hover:bg-blue-300 dark:text-slate-100 dark:hover:bg-blue-500"
                    href={'/#'}
                  >
                    アリーナ
                  </Link>
                  <Link
                    className="rounded-lg p-2 text-gray-900 transition-all duration-200 hover:bg-blue-300 dark:text-slate-100 dark:hover:bg-blue-500"
                    href={'/#'}
                  >
                    アリーナEX
                  </Link>
                  <Link
                    className="rounded-lg p-2 text-gray-900 transition-all duration-200 hover:bg-blue-300 dark:text-slate-100 dark:hover:bg-blue-500"
                    href={'/#'}
                  >
                    ダンジョン
                  </Link>
                </li>
                <li className="flex flex-col py-2">
                  <h4 className="text-2xl font-bold">育成</h4>
                  <Link
                    className="rounded-lg p-2 text-gray-900 transition-all duration-200 hover:bg-blue-300 dark:text-slate-100 dark:hover:bg-blue-500"
                    href={'/#'}
                  >
                    名声クエスト
                  </Link>
                  <Link
                    className="rounded-lg p-2 text-gray-900 transition-all duration-200 hover:bg-blue-300 dark:text-slate-100 dark:hover:bg-blue-500"
                    href={'/#'}
                  >
                    キャラクター
                  </Link>
                  <Link
                    className="rounded-lg p-2 text-gray-900 transition-all duration-200 hover:bg-blue-300 dark:text-slate-100 dark:hover:bg-blue-500"
                    href={'/#'}
                  >
                    アシスト
                  </Link>
                </li>
                <li className=" flex flex-col py-2">
                  <h4 className="text-2xl font-bold">鍛冶屋</h4>
                  <Link
                    className="rounded-lg p-2 text-gray-900 transition-all duration-200 hover:bg-blue-300 dark:text-slate-100 dark:hover:bg-blue-500"
                    href={'/#'}
                  >
                    武器&装飾
                  </Link>
                  <Link
                    className="rounded-lg p-2 text-gray-900 transition-all duration-200 hover:bg-blue-300 dark:text-slate-100 dark:hover:bg-blue-500"
                    href={'/#'}
                  >
                    武器&装飾
                  </Link>
                  <Link
                    className="rounded-lg p-2 text-gray-900 transition-all duration-200 hover:bg-blue-300 dark:text-slate-100 dark:hover:bg-blue-500"
                    href={'/#'}
                  >
                    武器&装飾
                  </Link>
                  <Link
                    className="rounded-lg p-2 text-gray-900 transition-all duration-200 hover:bg-blue-300 dark:text-slate-100 dark:hover:bg-blue-500"
                    href={'/#'}
                  >
                    武器&装飾
                  </Link>
                  <Link
                    className="rounded-lg p-2 text-gray-900 transition-all duration-200 hover:bg-blue-300 dark:text-slate-100 dark:hover:bg-blue-500"
                    href={'/#'}
                  >
                    武器&装飾
                  </Link>
                  <Link
                    className="rounded-lg p-2 text-gray-900 transition-all duration-200 hover:bg-blue-300 dark:text-slate-100 dark:hover:bg-blue-500"
                    href={'/#'}
                  >
                    武器&装飾
                  </Link>
                  <Link
                    className="rounded-lg p-2 text-gray-900 transition-all duration-200 hover:bg-blue-300 dark:text-slate-100 dark:hover:bg-blue-500"
                    href={'/#'}
                  >
                    武器&装飾
                  </Link>
                  <Link
                    className="rounded-lg p-2 text-gray-900 transition-all duration-200 hover:bg-blue-300 dark:text-slate-100 dark:hover:bg-blue-500"
                    href={'/#'}
                  >
                    武器&装飾
                  </Link>
                  <Link
                    className="rounded-lg p-2 text-gray-900 transition-all duration-200 hover:bg-blue-300 dark:text-slate-100 dark:hover:bg-blue-500"
                    href={'/#'}
                  >
                    武器&装飾
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </RemoveScroll>
      )}
    </div>
  );
};

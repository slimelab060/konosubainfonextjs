'use client';

import { Package2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const Topmenu = () => {
  return (
    <div className="grid gap-4 py-2 md:grid-cols-4">
      <Link
        className="flex rounded-lg bg-slate-200 p-4 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700"
        href={'/#'}
      >
        <Package2 className="mr-2" />
        イベント
      </Link>
      <Link
        className="flex rounded-lg bg-slate-200 p-4 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700"
        href={'/#'}
      >
        <Package2 className="mr-2" />
        キャラクター
      </Link>
      <Link
        className="flex rounded-lg bg-slate-200 p-4 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700"
        href={'/#'}
      >
        <Package2 className="mr-2" />
        アリーナ
      </Link>
      <Link
        className="flex rounded-lg bg-slate-200 p-4 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700"
        href={'/#'}
      >
        <Package2 className="mr-2" />
        アリーナEX
      </Link>
      <Link
        className="flex rounded-lg bg-slate-200 p-4 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700"
        href={'/#'}
      >
        <Package2 className="mr-2" />
        ダンジョン
      </Link>
      <Link
        className="flex rounded-lg bg-slate-200 p-4 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700"
        href={'/#'}
      >
        <Package2 className="mr-2" />
        名声クエスト
      </Link>
      <Link
        className="flex rounded-lg bg-slate-200 p-4 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700"
        href={'/#'}
      >
        <Package2 className="mr-2" />
        アシスト
      </Link>
      <Link
        className="flex rounded-lg bg-slate-200 p-4 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700"
        href={'/#'}
      >
        <Package2 className="mr-2" />
        ガチャ
      </Link>
      <Link
        className="flex rounded-lg bg-slate-200 p-4 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700"
        href={'/#'}
      >
        <Package2 className="mr-2" />
        武器
      </Link>
      <Link
        className="flex rounded-lg bg-slate-200 p-4 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700"
        href={'/#'}
      >
        <Package2 className="mr-2" />
        装飾
      </Link>
      <Link
        className="flex rounded-lg bg-slate-200 p-4 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700"
        href={'/#'}
      >
        <Package2 className="mr-2" />
        初心者
      </Link>
      <Link
        className="flex rounded-lg bg-slate-200 p-4 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700"
        href={'/#'}
      >
        <Package2 className="mr-2" />
        その他
      </Link>
    </div>
  );
};

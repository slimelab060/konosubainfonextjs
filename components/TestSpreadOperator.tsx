'use client';

//これはサイズ確認用のテストなのでメインでは使用しない

export default function TestSpreadOperator() {
  return [...Array(50)].map((_, i) => (
    <div key={i} className="rounded-lg bg-slate-200 p-8 dark:bg-slate-600">
      {i + 1}
    </div>
  ));
}

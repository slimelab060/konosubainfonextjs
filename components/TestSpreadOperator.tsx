'use client';

//これはサイズ確認用のテストなのでメインでは使用しない

export default function TestSpreadOperator() {
  return [...Array(28)].map((_, i) => (
    <div key={i} className="rounded-lg bg-slate-50 p-8 shadow-sm dark:bg-slate-700">
      {i + 1}
    </div>
  ));
}

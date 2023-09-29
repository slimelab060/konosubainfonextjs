'use client';

//これはサイズ確認用のテストなのでメインでは使用しない

export default function TestSpreadOperator() {
  return [...Array(12)].map((_, i) => (
    <div
      key={i}
      className="rounded-lg bg-muted p-8 shadow-sm hover:bg-slate-300 dark:bg-muted-foreground dark:hover:bg-slate-500"
    >
      {i + 1}
    </div>
  ));
}

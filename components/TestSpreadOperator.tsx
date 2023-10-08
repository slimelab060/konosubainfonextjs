'use client';
//これはサイズ確認用のテストなのでメインでは使用しない

export const TestSpreadOperator = ({ test }: { test: number }) => {
  return (
    <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {[...Array(test)].map((_, i) => (
        <div
          key={i}
          className=" rounded-lg bg-muted p-4 shadow-sm hover:bg-slate-300 dark:bg-muted-foreground dark:hover:bg-slate-500"
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};

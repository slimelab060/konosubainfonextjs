import TestSpreadOperator from '@/components/TestSpreadOperator';
export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container  max-w-7xl">
        <div className="grid flex-1 gap-4 text-center text-2xl md:grid-cols-4">
          <TestSpreadOperator />
        </div>
      </div>
    </div>
  );
}

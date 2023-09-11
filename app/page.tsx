import Image from 'next/image';
import TestSpreadOperator from '@/components/TestSpreadOperator';
import { EmblaCarousel } from '@/components/carousel';
import { Topmenu } from '@/components/topmenu';
import test from '@/public/2381.jpg';

//<Image className="object-fill" src={test} alt="background-image" />

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl py-4 ">
        <EmblaCarousel
          slides={[
            <Image key={0} src={test} fill className="object-cover" alt="Image" />,
            <Image key={1} src={test} fill className="object-cover" alt="Image" />,
            <Image key={2} src={test} fill className="object-cover" alt="Image" />,
          ]}
          options={{
            align: 'center',
            loop: false,
            inViewThreshold: 0.7,
          }}
        />
      </div>
      <div className="container  max-w-7xl">
        <p className="py-2 text-lg">クイックメニュ</p>
        <Topmenu />
        <div className="grid flex-1 gap-4 py-4 text-center text-2xl md:grid-cols-4">
          <TestSpreadOperator />
        </div>
      </div>
    </div>
  );
}

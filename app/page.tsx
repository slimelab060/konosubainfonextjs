import Image from 'next/image';
import TestSpreadOperator from '@/components/TestSpreadOperator';
import EmblaCarousel from '@/components/carousel';
import { Topmenu } from '@/components/topmenu';

//<Image className="object-fill" src={test} alt="background-image" />
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl py-4 ">
        <EmblaCarousel
          slides={SLIDES}
          options={{
            loop: false,
            duration: 20,
            inViewThreshold: 0,
          }}
        />
      </div>
      <div className="container max-w-7xl">
        <p className="py-2 text-lg">クイックメニュ</p>
        <Topmenu />
        <div className="grid flex-1 gap-4 py-4 text-center text-2xl md:grid-cols-4">
          <TestSpreadOperator />
        </div>
      </div>
    </div>
  );
}

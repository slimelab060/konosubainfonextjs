import testimage8 from '../public/carousel/23101.jpg';
import testimage9 from '../public/carousel/23102.jpg';
import testimage10 from '../public/carousel/23103.jpg';
import testimage5 from '../public/carousel/2341.jpg';
import testimage from '../public/carousel/2391.jpg';
import testimage2 from '../public/carousel/2392.jpg';
import testimage7 from '../public/carousel/2393.jpg';

export const images: string[] = [
  testimage10.src,
  testimage9.src,
  testimage8.src,
  testimage7.src,
  testimage2.src,
  testimage.src,
  testimage5.src,
];
const imageIndex = (index: number): string => images[index % images.length];

export default imageIndex;

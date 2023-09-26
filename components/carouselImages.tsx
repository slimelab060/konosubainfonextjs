import testimage4 from '../public/carousel/2211.webp';
import testimage5 from '../public/carousel/2341.jpg';
import testimage3 from '../public/carousel/2372.jpg';
import testimage from '../public/carousel/2391.jpg';
import testimage2 from '../public/carousel/2392.jpg';
import testimage7 from '../public/carousel/2393.jpg';
import testimage6 from '../public/carousel/bg_pc_top_01.webp';

export const images: string[] = [
  testimage7.src,
  testimage2.src,
  testimage.src,
  testimage3.src,
  testimage4.src,
  testimage5.src,
  testimage6.src,
];
const imageIndex = (index: number): string => images[index % images.length];

export default imageIndex;

import testimage5 from '../public/carousel/2341.jpg';
import testimage10 from '../public/carousel/24011.jpg';
import testimage9 from '../public/carousel/24012.jpg';
import testimage from '../public/carousel/24013.jpg';
import testimage8 from '../public/carousel/24021.jpg';

export const images: string[] = [testimage8.src, testimage.src, testimage9.src, testimage5.src, testimage10.src];
const imageIndex = (index: number): string => images[index % images.length];

export default imageIndex;

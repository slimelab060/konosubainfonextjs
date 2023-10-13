export type timelinelist = {
  title: string;
  start: string;
  end: Date;
  color: string;
  image: string;
  url: string;
};

const gachatimeline: timelinelist[] = [
  {
    title: 'test',
    start: '2023-09-30 15:00:00',
    end: new Date(2023, 9, 10, 21, 59),
    color: 'bg-violet-800',
    image: 'null',
    url: '/',
  },
];

const eventtimeline: timelinelist[] = [
  {
    title: 'testイベント',
    start: '2023-09-30 15:00:00',
    end: new Date(2023, 9, 10, 21, 59),
    color: 'bg-violet-800',
    image: '/carousel/EER.jpg',
    url: '/',
  },
  {
    title: 'testガチャ',
    start: '2023-09-30 15:00:00',
    end: new Date(2023, 9, 21, 14, 59),
    color: 'bg-violet-800',
    image: '/carousel/ER.jpg',
    url: '/',
  },
  {
    title: 'その他',
    start: '2023-09-30 15:00:00',
    end: new Date(2023, 8, 21, 14, 59),
    color: 'bg-violet-800',
    image: '/carousel/2381.jpg',
    url: '/',
  },
  {
    title: 'ポカリ',
    start: '2023-10-20 15:00:00',
    end: new Date(2023, 11, 24, 0, 30),
    color: 'bg-violet-800',
    image: '/carousel/2211.webp',
    url: '/',
  },

  {
    title: '何だが知らんがとにかくよし!',
    start: '2023-09-30 15:00:00',
    end: new Date(2023, 10, 10, 19, 48),
    color: 'bg-violet-800',
    image: '/carousel/2392.jpg',
    url: '/',
  },
  {
    title: '期間限定ガチャ',
    start: '2023-09-30 15:00:00',
    end: new Date(2023, 5, 24, 5, 12),
    color: 'bg-violet-800',
    image: '/carousel/2393.jpg',
    url: '/',
  },
  {
    title: 'な～',
    start: '2023-09-30 15:00:00',
    end: new Date(2023, 11, 29, 10, 5),
    color: 'bg-violet-800',
    image: '/carousel/2391.jpg',
    url: '/',
  },
  {
    title: 'Minecraft',
    start: '2023-11-11 15:00:00',
    end: new Date(2023, 10, 20, 23, 25),
    color: 'bg-violet-800',
    image: '/carousel/2341.jpg',
    url: '/',
  },
  {
    title: '何ガチャ',
    start: '2023-09-30 15:00:00',
    end: new Date(2023, 11, 25, 12, 0),
    color: 'bg-violet-800',
    image: '/carousel/2372.jpg',
    url: '/',
  },
];

export { gachatimeline, eventtimeline };

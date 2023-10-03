type timelinelist = {
  title: string;
  start: string;
  end: string;
  color: string;
  image: string;
};

const gachatimeline: timelinelist[] = [
  {
    title: 'test',
    start: '2023-09-30 15:00:00',
    end: '2023-10-10 21:59:59',
    color: 'bg-violet-800',
    image: 'null',
  },
];

const eventtimeline: timelinelist[] = [
  {
    title: 'testevent',
    start: '2023-09-30 15:00:00',
    end: '2023-10-20 14:59:59',
    color: 'bg-violet-800',
    image: 'null',
  },
];

export { gachatimeline, eventtimeline };

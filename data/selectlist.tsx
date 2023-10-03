type list = {
  value: string;
  label: string;
};

type element = {
  value: string;
  label: string;
  color: string;
};

const characterlist: list[] = [
  {
    value: 'カズマ',
    label: 'カズマ',
  },
  {
    value: 'アクア',
    label: 'アクア',
  },
  {
    value: 'めぐみん',
    label: 'めぐみん',
  },
  {
    value: 'ダクネス',
    label: 'ダクネス',
  },
  {
    value: 'クリス',
    label: 'クリス',
  },
  {
    value: 'ウィズ',
    label: 'ウィズ',
  },
  {
    value: 'ゆんゆん',
    label: 'ゆんゆん',
  },
  {
    value: 'アイリス',
    label: 'アイリス',
  },
  {
    value: 'セシリー',
    label: 'セシリー',
  },
  {
    value: 'あるえ',
    label: 'あるえ',
  },
  {
    value: 'ミツルギ',
    label: 'ミツルギ',
  },
  {
    value: 'ダスト',
    label: 'ダスト',
  },
  {
    value: 'リーン',
    label: 'リーン',
  },
  {
    value: 'リア',
    label: 'リア',
  },
  {
    value: 'シエロ',
    label: 'シエロ',
  },
  {
    value: 'エーリカ',
    label: 'エーリカ',
  },
  {
    value: 'メリッサ',
    label: 'メリッサ',
  },
  {
    value: 'ミーア',
    label: 'ミーア',
  },
  {
    value: 'エイミー',
    label: 'エイミー',
  },
  {
    value: 'こめっこ',
    label: 'こめっこ',
  },
  {
    value: 'メル',
    label: 'メル',
  },
  {
    value: 'バニル',
    label: 'バニル',
  },
  {
    value: 'ロリーサ',
    label: 'ロリーサ',
  },
  {
    value: 'クレア',
    label: 'クレア',
  },
  {
    value: 'ふにふら＆どどんこ',
    label: 'ふにふら＆どどんこ',
  },
  {
    value: 'ゼスタ',
    label: 'ゼスタ',
  },
];

const characterkorabolist: list[] = [
  {
    value: 'スバル',
    label: 'スバル',
  },
  {
    value: 'エミリア',
    label: 'エミリア',
  },
  {
    value: 'ラム',
    label: 'ラム',
  },
  {
    value: 'レム',
    label: 'レム',
  },
  {
    value: 'ベアトリス',
    label: 'ベアトリス',
  },
  {
    value: 'エキドナ',
    label: 'エキドナ',
  },
  {
    value: 'ベル',
    label: 'ベル',
  },
  {
    value: 'アイズ',
    label: 'アイズ',
  },
  {
    value: 'アルベド',
    label: 'アルベド',
  },
  {
    value: 'アインズ',
    label: 'アインズ',
  },
  {
    value: 'シャルティア',
    label: 'シャルティア',
  },
  {
    value: '御坂美琴',
    label: '御坂美琴',
  },
  {
    value: '白井黒子',
    label: '白井黒子',
  },
  {
    value: 'アクセラレータ',
    label: 'アクセラレータ',
  },
  {
    value: '御坂妹',
    label: '御坂妹',
  },
  {
    value: '岩谷尚文',
    label: '岩谷尚文',
  },
  {
    value: 'ラフタリア',
    label: 'ラフタリア',
  },
  {
    value: 'フィーロ',
    label: 'フィーロ',
  },
  {
    value: 'メイプル',
    label: 'メイプル',
  },
  {
    value: 'サリー',
    label: 'サリー',
  },
  {
    value: 'カスミ',
    label: 'カスミ',
  },
  {
    value: 'ルーデウス',
    label: 'ルーデウス',
  },
  {
    value: 'エリス',
    label: 'エリス',
  },
  {
    value: 'ロキシー',
    label: 'ロキシー',
  },
  {
    value: 'キョン',
    label: 'キョン',
  },
  {
    value: '涼宮ハルヒ',
    label: '涼宮ハルヒ',
  },
  {
    value: '朝比奈みくる',
    label: '朝比奈みくる',
  },
  {
    value: '長門有希',
    label: '長門有希',
  },
];

const elementlist: element[] = [
  {
    value: '火属性',
    label: '火属性',
    color: 'bg-red-400',
  },
  {
    value: '水属性',
    label: '水属性',
    color: 'bg-blue-400',
  },
  {
    value: '雷属性',
    label: '雷属性',
    color: 'bg-yellow-400',
  },
  {
    value: '地属性',
    label: '地属性',
    color: 'bg-orange-400',
  },
  {
    value: '風属性',
    label: '風属性',
    color: 'bg-green-400',
  },
  {
    value: '光属性',
    label: '光属性',
    color: 'bg-slate-200',
  },
  {
    value: '闇属性',
    label: '闇属性',
    color: 'bg-violet-400',
  },
  {
    value: '無属性',
    label: '無属性',
    color: 'bg-slate-400',
  },
];

const menulist = [
  {
    value: 'ホーム',
    label: 'ホーム',
  },
  {
    value: 'イベント',
    label: 'イベント',
  },
  {
    value: 'ガチャ',
    label: 'ガチャ',
  },
  {
    value: '初心者',
    label: '初心者',
  },
  {
    value: 'その他',
    label: 'その他',
  },
];

const raritylist: list[] = [
  {
    value: '★',
    label: '★',
  },
  {
    value: '★★',
    label: '★★',
  },
  {
    value: '★★★',
    label: '★★★',
  },
  {
    value: '★★★★',
    label: '★★★★',
  },
];

export { characterlist, characterkorabolist, elementlist, menulist, raritylist };

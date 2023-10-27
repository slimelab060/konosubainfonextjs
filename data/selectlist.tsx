import Dark from '../public/icon/element/DarkIndi.webp';
import Earth from '../public/icon/element/EarthIndi.webp';
import Fire from '../public/icon/element/FireIndi.webp';
import Light from '../public/icon/element/LightIndi.webp';
import Thunder from '../public/icon/element/ThunderIndi.webp';
import Water from '../public/icon/element/WaterIndi.webp';
import Wind from '../public/icon/element/WindIndi.webp';
import Non from '../public/icon/element/non-attribute.webp';
import Accessory from '../public/icon/weapon/accessory.webp';
import Cane from '../public/icon/weapon/cane.webp';
import Daga from '../public/icon/weapon/daga.webp';
import Spear from '../public/icon/weapon/spear.webp';
import Stick from '../public/icon/weapon/stick.webp';
import Sword from '../public/icon/weapon/sword.webp';

type list = {
  value: string;
  label: string;
};
type listicon = {
  value: string;
  label: string;
  image: string;
};

type element = {
  value: string;
  label: string;
  color: string;
  image: string;
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
    color: '#ef4444',
    image: Fire.src,
  },
  {
    value: '水属性',
    label: '水属性',
    color: '#2563eb',
    image: Water.src,
  },
  {
    value: '雷属性',
    label: '雷属性',
    color: '#f59e0b',
    image: Thunder.src,
  },
  {
    value: '地属性',
    label: '地属性',
    color: '#c2410c',
    image: Earth.src,
  },
  {
    value: '風属性',
    label: '風属性',
    color: '#16a34a',
    image: Wind.src,
  },
  {
    value: '光属性',
    label: '光属性',
    color: '#cbd5e1',
    image: Light.src,
  },
  {
    value: '闇属性',
    label: '闇属性',
    color: '#7c3aed',
    image: Dark.src,
  },
  {
    value: '無属性',
    label: '無属性',
    color: '#475569',
    image: Non.src,
  },
];

const weaponlist: listicon[] = [
  {
    value: '剣',
    label: '剣',
    image: Sword.src,
  },
  {
    value: '短剣',
    label: '短剣',
    image: Daga.src,
  },
  {
    value: '杖',
    label: '杖',
    image: Cane.src,
  },
  {
    value: 'ステッキ',
    label: 'ステッキ',
    image: Stick.src,
  },
  {
    value: '槍',
    label: '槍',
    image: Spear.src,
  },
  {
    value: '装飾',
    label: '装飾',
    image: Accessory.src,
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

const costumelist: list[] = [
  {
    value: 'リゼロ',
    label: 'リゼロ',
  },
  {
    value: 'ダンまち',
    label: 'ダンまち',
  },
  {
    value: 'オーバーロード',
    label: 'オーバーロード',
  },
  {
    value: '超電磁砲',
    label: '超電磁砲',
  },
  {
    value: '盾の勇者',
    label: '盾の勇者',
  },
  {
    value: '防振り',
    label: '防振り',
  },
  {
    value: '無職転生',
    label: '無職転生',
  },
  {
    value: 'SOS団',
    label: 'SOS団',
  },
  {
    value: 'タオル',
    label: 'タオル',
  },
  {
    value: '冬服',
    label: '冬服',
  },
  {
    value: 'パジャマ',
    label: 'パジャマ',
  },
  {
    value: 'カジノ',
    label: 'カジノ',
  },
  {
    value: '演劇',
    label: '演劇',
  },
  {
    value: 'メイド',
    label: 'メイド',
  },
  {
    value: '紅伝説',
    label: '紅伝説',
  },
  {
    value: 'ステージ',
    label: 'ステージ',
  },
  {
    value: '舞踏会',
    label: '舞踏会',
  },
  {
    value: '水着',
    label: '水着',
  },
  {
    value: 'オアシス',
    label: 'オアシス',
  },
  {
    value: 'ウェイトレス',
    label: 'ウェイトレス',
  },
  {
    value: '忍者',
    label: '忍者',
  },
  {
    value: 'ハロウィン',
    label: 'ハロウィン',
  },
  {
    value: '拳法',
    label: '拳法',
  },
  {
    value: 'クリスマス',
    label: 'クリスマス',
  },
  {
    value: '振袖',
    label: '振袖',
  },
  {
    value: 'バレンタイン',
    label: 'バレンタイン',
  },
  {
    value: '伝説の冒険者',
    label: '伝説の冒険者',
  },
  {
    value: '学生服',
    label: '学生服',
  },
  {
    value: 'サムイドー',
    label: 'サムイドー',
  },
  {
    value: '浴衣',
    label: '浴衣',
  },
  {
    value: '私服',
    label: '私服',
  },
  {
    value: '謎の腕利き冒険者',
    label: '謎の腕利き冒険者',
  },
  {
    value: 'ラッパー',
    label: 'ラッパー',
  },
  {
    value: '禁断の冒険者',
    label: '禁断の冒険者',
  },
  {
    value: 'リアルTOKYO',
    label: 'リアルTOKYO',
  },
  {
    value: 'レッドプリズン',
    label: 'レッドプリズン',
  },
  {
    value: '探偵団',
    label: '探偵団',
  },
  {
    value: '猫耳巫女',
    label: '猫耳巫女',
  },
  {
    value: '幻想の冒険者',
    label: '幻想の冒険者',
  },
  {
    value: '運動会',
    label: '運動会',
  },
  {
    value: '天使隊',
    label: '天使隊',
  },
];

const traitlist: list[] = [
  {
    value: '火属性攻撃アップ',
    label: '火属性攻撃アップ',
  },
  {
    value: '水属性攻撃アップ',
    label: '水属性攻撃アップ',
  },
  {
    value: '雷属性攻撃アップ',
    label: '雷属性攻撃アップ',
  },
  {
    value: '地属性攻撃アップ',
    label: '地属性攻撃アップ',
  },
  {
    value: '風属性攻撃アップ',
    label: '風属性攻撃アップ',
  },
  {
    value: '光属性攻撃アップ',
    label: '光属性攻撃アップ',
  },
  {
    value: '闇属性攻撃アップ',
    label: '闇属性攻撃アップ',
  },
  {
    value: '無属性攻撃アップ',
    label: '無属性攻撃アップ',
  },
  {
    value: '物理攻撃アップ',
    label: '物理攻撃アップ',
  },
  {
    value: '魔法攻撃アップ',
    label: '魔法攻撃アップ',
  },
  {
    value: '毒体制アップ',
    label: '毒体制アップ',
  },
  {
    value: '暗闇耐性アップ',
    label: '暗闇耐性アップ',
  },
  {
    value: '封印耐性アップ',
    label: '封印耐性アップ',
  },
  {
    value: 'バインド耐性アップ',
    label: 'バインド耐性アップ',
  },
  {
    value: '行動ごとに回復',
    label: '行動ごとに回復',
  },
  {
    value: 'ダメージ吸収',
    label: 'ダメージ吸収',
  },
  {
    value: '必殺ゲージ上昇アップ',
    label: '必殺ゲージ上昇アップ',
  },
  {
    value: 'バインド耐性アップ',
    label: 'バインド耐性アップ',
  },
  {
    value: '物理ダメージ軽減',
    label: '物理ダメージ軽減',
  },
  {
    value: '魔法ダメージ軽減',
    label: '魔法ダメージ軽減',
  },
  {
    value: 'デバフ時物攻アップ',
    label: 'デバフ時物攻アップ',
  },
  {
    value: 'デバフ時魔攻アップ',
    label: 'デバフ時魔攻アップ',
  },
  {
    value: '高HP時物攻アップ',
    label: '高HP時物攻アップ',
  },
  {
    value: '高HP時魔攻アップ',
    label: '高HP時魔攻アップ',
  },
  {
    value: 'デバフ時闇功アップ',
    label: 'デバフ時闇功アップ',
  },
  {
    value: '高HP時水攻アップ',
    label: '高HP時水攻アップ',
  },
  {
    value: '高HP時地攻アップ',
    label: '高HP時地攻アップ',
  },
  {
    value: '高HP時風攻アップ',
    label: '高HP時風攻アップ',
  },
  {
    value: '高HP時魔攻アップ',
    label: '高HP時魔攻アップ',
  },
  {
    value: '高HP時光攻アップ',
    label: '高HP時光攻アップ',
  },
  {
    value: '必殺時攻撃アップ',
    label: '必殺時攻撃アップ',
  },
];

export { characterlist, characterkorabolist, costumelist, elementlist, menulist, raritylist, traitlist, weaponlist };

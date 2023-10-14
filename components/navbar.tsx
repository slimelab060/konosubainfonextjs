'use client';

import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { SideMenu } from '@/components/sidemenu';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isMobileLayout, setIsMobileLayout] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  //スクロールバーの表示切替 イベントはButtonの中に書いてある
  //isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');

  //メディアサイズが1024px以下だった場合、条件反転でFalseになる
  //メニューを開いた状態でサイズを変更し1024px以上になったときにスクロールバーを復活するためのコード
  useEffect(() => {
    const mediaQueryList = window.matchMedia('(min-width: 1024px)');

    const handleChange = () => setIsMobileLayout(!mediaQueryList.matches);
    handleChange(); //リロード時に初期化

    mediaQueryList.addEventListener('change', handleChange);
    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, []);

  return (
    <div>
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </Button>
      {isOpen && (
        <RemoveScroll enabled={isMobileLayout && isOpen}>
          <SideMenu />
        </RemoveScroll>
      )}
    </div>
  );
};

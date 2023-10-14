'use client';

import { Check, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const frameworks = [
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

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {value ? frameworks.find((framework) => framework.value === value)?.label : 'キャラクタ選択'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" w-[200px] p-0">
        <Command>
          <CommandInput placeholder="キャラクタ検索..." />
          <CommandEmpty>見つかりませんでした</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                <Check className={cn('mr-2 h-4 w-4', value === framework.value ? 'opacity-100' : 'opacity-0')} />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

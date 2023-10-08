'use client';

import { Command as CommandPrimitive } from 'cmdk';
import { X } from 'lucide-react';
import * as React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

type Framework = Record<'value' | 'label', string>;

const FRAMEWORKS = [
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
] satisfies Framework[];

export function MultiSelect() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState([{ value: '', label: '' }]);
  const [inputValue, setInputValue] = React.useState('');

  const handleUnselect = React.useCallback((framework: Framework) => {
    setSelected((prev) => prev.filter((s) => s.value !== framework.value));
  }, []);

  const handleKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const input = inputRef.current;
    if (input) {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (input.value === '') {
          setSelected((prev) => {
            const newSelected = [...prev];
            newSelected.pop();
            return newSelected;
          });
        }
      }
      // This is not a default behaviour of the <input /> field
      if (e.key === 'Escape') {
        input.blur();
      }
    }
  }, []);

  const selectables = FRAMEWORKS.filter((framework) => !selected.includes(framework));

  return (
    <Command onKeyDown={handleKeyDown} className="overflow-visible ">
      <div className="group w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1">
          {selected.map((framework) => {
            if (framework.value === '' && framework.label === '') return null;

            return (
              <Badge key={framework.value} variant="secondary">
                {framework.label}
                <button
                  className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleUnselect(framework);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(framework)}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            );
          })}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder="キャラクター選択"
            className="ml-2 w-full flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="relative w-full">
        {open && selectables.length > 0 ? (
          <div className="absolute top-0 z-10 w-40 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
            <CommandGroup className="h-40 overflow-auto">
              {selectables.map((framework) => {
                return (
                  <CommandItem
                    key={framework.value}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onSelect={(value) => {
                      setInputValue('');
                      setSelected((prev) => [...prev, framework]);
                    }}
                    className={'cursor-pointer'}
                  >
                    {framework.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </div>
        ) : null}
      </div>
    </Command>
  );
}

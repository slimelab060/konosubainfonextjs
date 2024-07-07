'use client';

import { format, formatDuration, intervalToDuration, isBefore } from 'date-fns';
import { ja } from 'date-fns/locale';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { eventtimeline, timelinelist } from '@/data/timeline';

const Timer = (items: timelinelist) => {
  //const endOfToday = endOfDay(now);
  const endDate = items.end;
  const [countdown, setCountdown] = useState(format(endDate, 'MM-dd HH:mm')); //ここは後で日付を変更&データからDate使用しないように変更
  const [countdownEnded, setCountdownEnded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const duration = intervalToDuration({ start: now, end: endDate });

      if (isBefore(endDate, now)) {
        setCountdownEnded(true);
        clearInterval(interval);
      } else {
        setCountdown(
          `${formatDuration(duration, {
            locale: ja,
            format: ['weeks', 'days', 'hours', 'minutes'],
            zero: true,
          })}`
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <div className="rounded-lg">
      <Link href={items.url}>
        <Card
          className="bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(15,23,42,0.9) 0%, rgba(0, 0, 0, 0.0) 100%), url('${items.image}')`,
          }}
        >
          <CardHeader>
            <CardTitle className="text-white">{items.title}</CardTitle>
            <CardDescription className="text-white">
              {endDate && <h3>期限: {format(endDate, 'yyyy/MM/dd HH:mm')}</h3>}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-white">
            {!countdownEnded && <h4>残り時間: {countdown}</h4>}
            {countdownEnded && <h4>このイベントは終了しました</h4>}
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default function CountDownTimer() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 text-2xl">
      {eventtimeline.map((items, i) => (
        <Timer key={i} {...items} />
      ))}
    </div>
  );
}

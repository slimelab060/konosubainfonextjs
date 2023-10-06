'use client';
import { format, formatDuration, intervalToDuration, isBefore } from 'date-fns';
import { ja } from 'date-fns/locale';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface TimerProps {
  startdate: Date;
}

const Timer: React.FC<TimerProps> = ({ startdate }) => {
  //const endOfToday = endOfDay(now);
  const endDate = startdate;
  const [countdown, setCountdown] = useState('');
  const [countdownEnded, setCountdownEnded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const duration = intervalToDuration({ start: now, end: endDate });

      if (isBefore(endDate, now)) {
        setCountdownEnded(true);
        clearInterval(interval);
      } else {
        setCountdown(`${formatDuration(duration, { locale: ja })}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <div className="rounded-lg">
      <Card className=" rounded-lg bg-[url('/carousel/EER.jpg')] bg-cover">
        <CardHeader>
          <CardTitle>カウントダウン</CardTitle>
          <CardDescription>{endDate && <h3>期限: {format(endDate, 'yyyy-MM-dd HH:mm')}</h3>}</CardDescription>
        </CardHeader>
        <CardContent>
          {!countdownEnded && <h4>残り時間: {countdown}</h4>}
          {countdownEnded && <h4>終了</h4>}
        </CardContent>
      </Card>
    </div>
  );
};

export default function CountDownTimer() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 text-2xl">
      <Timer startdate={new Date(2023, 9, 10, 21, 59)} />
    </div>
  );
}

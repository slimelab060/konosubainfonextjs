'use client';
import { format, differenceInSeconds } from 'date-fns';
import { useState, useMemo, useEffect } from 'react';

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimerProps {
  startdate: Date;
}

const Timer: React.FC<TimerProps> = ({ startdate }) => {
  const ONE_DAY = 60 * 60 * 24;
  const ONE_HOUR = 60 * 60;
  const ONE_MINUTE = 60;
  const [currentTime, setCurrentTime] = useState<number>(new Date().getTime());
  const diffInSeconds = differenceInSeconds(startdate, currentTime);
  console.log(format(startdate, 'yyyy-MM-dd'), format(diffInSeconds, 'yyyy-MM-dd'));
  const getCountdown = (): Countdown => {
    if (diffInSeconds <= 1) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    const days = Math.floor(diffInSeconds / ONE_DAY);
    const hours = Math.floor((diffInSeconds - days * ONE_DAY) / ONE_HOUR);
    const minutes = Math.floor((diffInSeconds - days * ONE_DAY - hours * ONE_HOUR) / ONE_MINUTE);
    const seconds = diffInSeconds - days * ONE_DAY - hours * ONE_HOUR - minutes * ONE_MINUTE;
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const countdown = useMemo<Countdown>(getCountdown, [ONE_DAY, ONE_HOUR, diffInSeconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      //console.log(format(now, 'yyyy-MM-dd HH:mm:ss'));
      setCurrentTime(now);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>カウントダウン</p>
      <span>{countdown.days}日</span>
      <span>{countdown.hours}時間</span>
      <span>{countdown.minutes}分</span>
      <span>{countdown.seconds}秒</span>
    </div>
  );
};

export default function CountDownTimer() {
  return (
    <div className="container text-2xl">
      <Timer startdate={new Date(2023, 10, 10)} />
    </div>
  );
}

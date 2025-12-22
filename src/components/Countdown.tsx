import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownState {
  mounted: boolean;
  timeLeft: TimeLeft;
}

const Countdown = () => {
  const calculateTimeLeft = (): TimeLeft => {
    // Target: Jan 31, 2026
    const targetDate = new Date('2026-01-31T23:59:59');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [state, setState] = useState<CountdownState>({
    mounted: false,
    timeLeft: { days: 0, hours: 0, minutes: 0, seconds: 0 },
  });

  useEffect(() => {
    // Delay setting state to avoid synchronous update warning and hydration mismatch
    const timeout = setTimeout(() => {
      setState({ mounted: true, timeLeft: calculateTimeLeft() });
    }, 0);

    const timer = setInterval(() => {
      setState((prevState) => ({
        ...prevState,
        timeLeft: calculateTimeLeft(),
      }));
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(timer);
    };
  }, []);

  if (!state.mounted) {
    return null; // Avoid hydration mismatch
  }

  const timeUnits = [
    { label: 'Days', value: state.timeLeft.days },
    { label: 'Hours', value: state.timeLeft.hours },
    { label: 'Minutes', value: state.timeLeft.minutes },
    { label: 'Seconds', value: state.timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="bg-[#ffd9f0] text-[#f847b4] w-20 h-20 md:w-24 md:h-24 rounded-lg flex items-center justify-center text-3xl md:text-4xl font-bold shadow-md">
            {unit.value < 10 ? `0${unit.value}` : unit.value}
          </div>
          <span className="mt-2 text-sm uppercase tracking-widest text-black/60 font-medium">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;

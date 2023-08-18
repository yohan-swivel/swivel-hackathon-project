"use client";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

interface CountDownProps {
  countDownTime: string | number | Date;
  completedText: string;
}

const CountDownCard: React.FC<CountDownProps> = (props) => {
  const [hydrated, setHydrated] = useState(false);
  const [timerCompleted, setTimerCompleted] = useState(false);

  console.log(props);


  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      setTimerCompleted(completed);
      return <>{props.completedText}</>;
    } else {
      return (
        <span>
          {days}: {hours}: {minutes}: {seconds}
        </span>
      );
    }
  };

  return (
    <div className="flex-1 bg-glass-bg h-[142px] overflow-hidden flex flex-col py-[3px] px-8 box-border items-center justify-center gap-[16px] text-center text-lg text-white font-para-medium">
      <div className="flex flex-row items-center justify-center gap-[6px]">
        <img
          className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
          alt=""
          src="/ritimeline.svg"
        />
        <div className="relative">
          {timerCompleted ? <></> : <>Starts In</>}
        </div>
      </div>
      <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-gray-200" />
      <div className="flex flex-row items-center justify-center text-5xl">
        <div className="relative">
          <Countdown
            date={new Date(props.countDownTime)}
            renderer={renderer}
          />
        </div>
      </div>
    </div>
  );
};

export default CountDownCard;

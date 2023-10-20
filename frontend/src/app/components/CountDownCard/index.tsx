"use client";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

interface CountDownProps {
  countDownTime: string | number | Date;
  completedText: string;
  label: string
  icon: any
}

const CountDownCard: React.FC<CountDownProps> = (props) => {
  const [hydrated, setHydrated] = useState(false);
  const [timerCompleted, setTimerCompleted] = useState(false);

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
    <div className="box_style">
      <div className="row">
        <img alt="countdown" src={props.icon} />
        {timerCompleted ? <></> : <p className="sm_txt">{props.label}</p>}
      </div>
      <div className="line" />
      <div className="normal_txt">
        <Countdown date={new Date(props.countDownTime)} renderer={renderer} />
      </div>
    </div>
  );
};

export default CountDownCard;

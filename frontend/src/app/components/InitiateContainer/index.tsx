"use client";
import CountDownCard from "../CountDownCard";
import VenueCard from "../VenueCard";
import DateCard from "../DateCard";
import React from "react";

interface InitiateContainerProps {
  id: number;
  __component: string;
  countdownDateTime: string;
  venue: string;
  commencement: string;
  countdownCompletedMessage: string;
}

const InitiateContainer: React.FC<{ data: InitiateContainerProps }> = ({
  data,
}) => {
  return (
    <section className="px-16 grid grid-cols-1 [@media(min-width:1079px)]:grid-cols-3 gap-[20px] text-center text-lg text-white font-para-medium">
      <CountDownCard
        completedText={data.countdownCompletedMessage}
        countDownTime={data.countdownDateTime}
      />
      <DateCard date={data.commencement} />
      <VenueCard venue={data.venue} />
    </section>
  );
};

export default InitiateContainer;

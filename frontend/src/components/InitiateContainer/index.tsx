"use client";
import CountDownCard from "../CountDownCard";
import VenueCard from "../VenueCard";
import DateCard from "../DateCard";
import React from "react";
import _ from "lodash";

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
    <div className="container_inner init_row">
      {_.isNull(data.countdownDateTime) ||
      _.isUndefined(data.countdownDateTime) ? (
        <></>
      ) : (
        <CountDownCard
          completedText={data.countdownCompletedMessage}
          countDownTime={data.countdownDateTime}
        />
      )}
      <DateCard date={data.commencement} />
      <VenueCard venue={data.venue} />
    </div>
  );
};

export default InitiateContainer;

"use client";
import CountDownCard from "../CountDownCard";
import VenueCard from "../VenueCard";
import DateCard from "../DateCard";
import React from "react";
import _ from "lodash";
import { Logo } from "../Navbar";
import { getStrapiMedia } from "@/app/utils/api-helpers";

interface InitiateItemType {
  id: number,
  headerText: string,
  description: string,
  category: 'COUNTDOWN' | 'DESCRIPTION',
  countDowntime: string,
  countdownCompletedMessage: string,
  componentEnableState: boolean,
  componentIcon: Logo
}
interface InitiateContainerProps {
  id: number;
  __component: string;
  initiateItems: Array<InitiateItemType>
}

const InitiateItem: React.FC<InitiateItemType> = (props) => {
  const icon = getStrapiMedia(
    props.componentIcon.data.attributes.url
  );
  if (props.componentEnableState) {
    switch (props.category) {
      case 'COUNTDOWN':
        return <CountDownCard
          completedText={props.countdownCompletedMessage}
          countDownTime={props.countDowntime}
          label={props.headerText}
          icon={icon}
        />
      case 'DESCRIPTION':
        return <DateCard date={props.description} icon={icon} label={props.headerText} />
      case 'DESCRIPTION':
        return <VenueCard venue={props.description} icon={icon} label={props.headerText} />
      default:
        return null
    }
  } else {
    return <></>
  }
}

const InitiateContainer: React.FC<{ data: InitiateContainerProps }> = ({
  data,
}) => {
  return (
    <div className="container_inner init_row">
      {data.initiateItems && data.initiateItems.map((initiateItem: InitiateItemType) => <InitiateItem {...initiateItem} />)}
      {/* {_.isNull(data.countdownDateTime) ||
        _.isUndefined(data.countdownDateTime) ? (
        <></>
      ) : (
        <CountDownCard
          completedText={data.countdownCompletedMessage}
          countDownTime={data.countdownDateTime}
        />
      )}
      <DateCard date={data.commencement} />
      <VenueCard venue={data.venue} /> */}
    </div>
  );
};

export default InitiateContainer;

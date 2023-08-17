import CountDownCard from "../CountDownCard";
import VenueCard from "../VenueCard";
import DateCard from "../DateCard";
import React from "react";

interface InitiateContainerProps {
    
}

const InitiateContainer: React.FC = () => {
  return (
    <section className="absolute top-[841px] left-[0px] right-[0px] mx-auto w-[1330px] flex flex-row items-start justify-start gap-[20px] text-center text-lg text-white font-para-medium">
      <CountDownCard />
      <DateCard />
      <VenueCard />
    </section>
  );
};

export default InitiateContainer;

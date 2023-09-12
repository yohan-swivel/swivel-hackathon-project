import React from "react";
import HeaderText from "../HeaderText";
import "react-image-lightbox/style.css";
import WinnerItem from "./WinnerItem";

const WinnersContainer: React.FC<{ data: any }> = ({ data }) => {
  console.log(data.winnerItems);

  return (
    <div className="container_inner">
      <section className="section" id={data?.dataScrollTo}>
        <HeaderText
          headerText={data?.headerText}
          headerDescription={data?.headerDescription}
        />
        <div className="winner_grid">
          {data?.winnerItems &&
            data?.winnerItems.map((item: any, index: number) => (
              <WinnerItem {...item} key={index} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default WinnersContainer;

import React from "react";
import { getStrapiMedia } from "@/app/utils/api-helpers";

const WinnerItem = (props: any) => {
  const thumbImageUrl: any = getStrapiMedia(
    props?.winnerImage?.data?.attributes?.url
  );
  return (
    <>
      <div className="gallery_box">
        <img
          alt={props?.winnerImage?.data?.attributes?.alternativeText}
          src={thumbImageUrl}
        />
        <div className="gallery_box_content">
          <h3>{props?.headerText}</h3>
          <p>{props?.headerDescription}</p>
        </div>
      </div>
    </>
  );
};

export default WinnerItem;

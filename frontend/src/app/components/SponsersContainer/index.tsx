"use client";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import { Logo } from "../Navbar";
import HeaderText from "../HeaderText";

interface SponsersType {
  id: number;
  sponserName: string;
  sponserLogo: Logo;
}

interface SponsersContainerProps {
  id: number;
  __component: string;
  headerText: string;
  sponsors: Array<SponsersType>;
}

const SponsersContainer: React.FC<{ data: SponsersContainerProps }> = ({
  data,
}) => {
  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="custom-glow flex flex-row justify-center items-center w-[125px] h-[125px] opacity-100" />
      </div>
      <div className="mx-16 !mt-[-100px]">
        <HeaderText headerText={data.headerText} />
      </div>
      <div className=" flex flex-col [@media(min-width:1079px)]:flex-row  items-center justify-center gap-[48px]">
        {data.sponsors &&
          data.sponsors.map((sponsor: SponsersType) => {
            const sponsorLogoUrl: any = getStrapiMedia(
              sponsor.sponserLogo.data.attributes.url
            );
            return (
              <img
                alt={sponsor.sponserLogo.data.attributes.alternativeText}
                src={sponsorLogoUrl}
              />
            );
          })}
      </div>
    </>
  );
};

export default SponsersContainer;

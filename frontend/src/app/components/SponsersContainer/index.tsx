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
      <div className="mx-auto flex flex-col  items-center justify-center gap-[48px]">
        <div className="custom-glow flex flex-row justify-center items-center  w-[250px] h-[250px] opacity-40" />
      </div>
      <div className="mx-auto flex flex-col  items-center justify-center gap-[48px]">
        <HeaderText headerText={data.headerText} />
        <div className="flex flex-row items-center justify-center gap-[50px]">
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
      </div>
    </>
  );
};

export default SponsersContainer;

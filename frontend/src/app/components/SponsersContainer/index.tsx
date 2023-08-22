"use client";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import { Logo } from "../Navbar";

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
      <div className="absolute top-[4443px] w-[100%] flex flex-col p-2.5 items-center justify-center gap-[48px]">
        <b className="relati  ve">{data.headerText}</b>
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

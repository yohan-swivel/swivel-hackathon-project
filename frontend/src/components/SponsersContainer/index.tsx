"use client";
import { getStrapiMedia } from "@/utils/api-helpers";
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
    <div className="container_inner">
      <section className="section">
        <HeaderText headerText={data.headerText} />
        <div className="partner_row">
          {data.sponsors &&
            data.sponsors.map((sponsor: SponsersType, index: number) => {
              const sponsorLogoUrl: any = getStrapiMedia(
                sponsor.sponserLogo.data.attributes.url
              );
              return (
                <img
                  key={index}
                  alt={sponsor.sponserLogo.data.attributes.alternativeText}
                  src={sponsorLogoUrl}
                />
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default SponsersContainer;

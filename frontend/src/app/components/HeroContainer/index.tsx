"use client";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import BottemScrollButton from "../BottemScrollButton";
import GlitterButton from "../GlitterButton";
import { Logo, LogoItem, NavbarLink } from "../Navbar";
import { useCallback } from "react";

export interface ButtonLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  type: string;
}

interface Button {
  dataScrollTo: string;
  name: string;
}

interface HeroContainerProps {
  id: number;
  __component: string;
  headerText: string;
  headerYear: string;
  headerDescription: string;
  mainBackgroundFluidmark: Logo;
  subBackgroundFluidmark: { data: Array<LogoItem> };
  heroButton: Button;
  bottemScrollButton: NavbarLink;
  dataScrollTo: string;
}

const HeroContainer: React.FC<{ data: HeroContainerProps }> = ({ data }) => {
  const mainBackgroundFluidmark: any = getStrapiMedia(
    data.mainBackgroundFluidmark.data.attributes.url
  );
  const subBackgroundFluidmark1: any = getStrapiMedia(
    data.subBackgroundFluidmark.data[0].attributes.url
  );
  const subBackgroundFluidmark2: any = getStrapiMedia(
    data.subBackgroundFluidmark.data[1].attributes.url
  );

  const handleButtonScrollTo = useCallback((dataScrollTo: string) => {
    const anchor = document.querySelector(`[data-scroll-to=${dataScrollTo}]`);
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className="hero_bg" data-scroll-to={data.dataScrollTo}>
        <div className="container">
          <div className="hero_center">
            <div className="hero_center_img">
              <img
                alt={
                  data.mainBackgroundFluidmark.data.attributes.alternativeText
                }
                src={mainBackgroundFluidmark}
                className="hero_bg_img"
              />
            </div>
            <div className="hero_center_content">
              <h1>{data.headerText}</h1>
              <span> {data.headerYear}</span>
              <p>{data.headerDescription}</p>
              <div>
                <GlitterButton
                  buttonText={data.heroButton.name}
                  iconUrl="/materialsymbolsarrowrightaltrounded1.svg"
                  onClick={() =>
                    handleButtonScrollTo(data.heroButton.dataScrollTo)
                  }
                  type="button"
                />
              </div>
              <BottemScrollButton onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
      <div className="ft_gradient" />
      <div className="hero_bg_icons">
        <div>
          <img
            className="opacity-[0.7]"
            alt={data.subBackgroundFluidmark.data[1].attributes.alternativeText}
            src={subBackgroundFluidmark2}
          />
        </div>
        <div>
          <img
            className="opacity-[0.7]"
            alt={data.subBackgroundFluidmark.data[0].attributes.alternativeText}
            src={subBackgroundFluidmark1}
          />
        </div>
      </div>
    </>
  );
};

export default HeroContainer;

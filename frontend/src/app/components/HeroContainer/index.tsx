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

interface HeroContainerProps {
  id: number;
  __component: string;
  headerText: string;
  headerYear: string;
  headerDescription: string;
  mainBackgroundFluidmark: Logo;
  subBackgroundFluidmark: { data: Array<LogoItem> };
  buttonLink: ButtonLink;
  bottemScrollButton: NavbarLink;
  dataScrollTo: string;
}

const HeroContainer: React.FC<{ data: HeroContainerProps }> = ({ data }) => {
  const mainBackgroundFluidmark: any = getStrapiMedia(
    data.mainBackgroundFluidmark.data.attributes.url
  );
  return (
    <>
      <div className="custom-glow left-0 right-0 absolute top-48 mx-auto w-[600px] h-[600px] opacity-10"></div>
      <img
        className="absolute top-[140px] mx-auto	right-[0px] left-[0px] w-[530px] h-[574px] object-cover"
        alt={data.mainBackgroundFluidmark.data.attributes.alternativeText}
        src={mainBackgroundFluidmark}
      />
      <section
        className="absolute top-[276px] left-[0px] right-[0px] mx-auto flex flex-col items-center justify-start gap-[64px]"
        data-scroll-to={data.dataScrollTo}
      >
        <div className="flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-center gap-[32px] text-center text-45xl text-white font-para-medium">
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-[386px] h-[74px]">
                <b className="absolute h-[156%] w-[105.18%] top-[0%] left-[-2.59%] inline-block">
                  {data.headerText}
                </b>
              </div>
              <b className="relative tracking-[0.11em]">{data.headerYear}</b>
            </div>
            <div className="relative text-xl leading-[26px] font-semibold">
              {data.headerDescription}
            </div>
            <GlitterButton
              buttonText={data.buttonLink.text}
              iconUrl="/materialsymbolsarrowrightaltrounded1.svg"
              // have to add the redirect path
              onClick={() => {}}
              style={{ width: "60%", height: "60%", position: "unset" }}
              type="button"
            />
          </div>
        </div>
        <BottemScrollButton
          onClick={() =>
            useCallback(() => {
              const anchor = document.querySelector(
                "[data-scroll-to= contactUsContainer]"
              );
              if (anchor) {
                anchor.scrollIntoView({ block: "start", behavior: "smooth" });
              }
            }, [])
          }
        />
      </section>
    </>
  );
};

export default HeroContainer;

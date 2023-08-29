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
  const subBackgroundFluidmark1: any = getStrapiMedia(
    data.subBackgroundFluidmark.data[0].attributes.url
  );
  const subBackgroundFluidmark2: any = getStrapiMedia(
    data.subBackgroundFluidmark.data[1].attributes.url
  );
  return (
    <div className="flex min-h-[841px] relative">
      <div className="custom-glow left-0 right-0 absolute top-48 mx-auto w-[600px] h-[600px] min-w-0 opacity-10" />
      <img
        alt={data.mainBackgroundFluidmark.data.attributes.alternativeText}
        src={mainBackgroundFluidmark}
        style={{
          width: "100%",
          height: "auto",
          maxWidth: 530,
          margin: "auto",
        }}
      />
      <section
        className="absolute top-[276px] left-[0px] right-[0px] mx-auto flex flex-col items-center justify-start"
        data-scroll-to={data.dataScrollTo}
      >
        <div className="flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-center gap-[32px] text-center text-45xl text-white font-para-medium">
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-[386px] h-[74px]">
                <b className="absolute h-[156%] w-[105.18%] top-[0%] left-[-2.59%] inline-block text-[40px] md:text-[60px]">
                  {data.headerText}
                </b>
              </div>
              {/* <div className={styles.stroketextcontainer}>
                <h1 className={styles.stroketext}>Your Stroke Text</h1>
              </div> */}
              <b className={`relative tracking-[0.11em] text-[40px] md:text-[60px]`}>{data.headerYear}</b>
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

        <div className="flex justify-between w-[1330px]">
          <div>
            <img
              className="opacity-[0.7]"
              alt={
                data.subBackgroundFluidmark.data[0].attributes.alternativeText
              }
              src={subBackgroundFluidmark1}
            />
          </div>
          <div>
            <img
              className="opacity-[0.7]"
              alt={
                data.subBackgroundFluidmark.data[1].attributes.alternativeText
              }
              src={subBackgroundFluidmark2}
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
    </div>
  );
};

export default HeroContainer;

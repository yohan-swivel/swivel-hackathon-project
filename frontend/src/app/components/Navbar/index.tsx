"use client";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import GlitterButton from "../GlitterButton";
import { useCallback, useState } from "react";
import styles from "./navbar.module.css";

export interface LogoItem {
  id: string;
  attributes: {
    url: string;
    name: string;
    alternativeText: string;
    formats: any;
  };
}

export interface Logo {
  data: LogoItem;
}

interface NavbarLogo {
  id: number;
  logoText: string;
  logoImg: Logo;
}

interface NavbarButton {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  type: "primary" | "secondary";
}

export interface NavbarLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  dataScrollTo: string;
}

export interface NavbarProps {
  navbarLogo: NavbarLogo;
  button: NavbarButton;
  links: Array<NavbarLink>;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const navbarLogoUrl: any = getStrapiMedia(
    props.navbarLogo.logoImg.data.attributes.url
  );

  const handleDataScrollTo = useCallback(
    (dataScrollTo: string, tabId: number) => {
      setActiveTab(tabId);
      const anchor = document.querySelector(`[data-scroll-to=${dataScrollTo}]`);
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    },
    []
  );

  return (
    <>
      <div className="fixed top-[0px] right-[0px] [background:linear-gradient(90deg,_#15141a,_#111516_12.36%,_#111819_23.28%,_#11191b_34.69%,_#13161b_52.4%,_#15151b_68.54%,_#131213)] w-[100%] h-[101px] flex flex-row py-0 px-16 box-border items-center justify-between text-left text-base text-whitesmoke font-para-medium">
        <div className="w-[247px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
          <img
            className="relative w-[121px] h-[66px] object-cover"
            alt={props.navbarLogo.logoImg.data.attributes.alternativeText}
            src={navbarLogoUrl}
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[32px]">
          {props.links &&
            props.links.map((link: NavbarLink) => {
              return (
                <>
                  <div
                    key={link.id}
                    className={`flex flex-row p-2.5 items-start justify-start cursor-pointer font-semibold ${
                      styles.navbar
                    } ${link.id === activeTab ? styles.selectedTab : ""}`}
                    onClick={() =>
                      handleDataScrollTo(link.dataScrollTo, link.id)
                    }
                  >
                    {link.text}
                  </div>
                </>
              );
            })}
        </div>
        <GlitterButton
          buttonText={props.button.text}
          iconUrl="/materialsymbolsarrowrightaltrounded1.svg"
          onClick={() => {}}
          style={{ width: 247, height: 44, position: "unset" }}
          type="button"
        />
      </div>
    </>
  );
};

export default Navbar;

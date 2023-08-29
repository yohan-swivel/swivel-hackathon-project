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
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="shadow-md w-full fixed top-0 left-0 z-10">
        <div className="md:flex items-center justify-between  [background:linear-gradient(90deg,_#15141a,_#111516_12.36%,_#111819_23.28%,_#11191b_34.69%,_#13161b_52.4%,_#15151b_68.54%,_#131213)] py-4 md:px-10 px-7 text-whitesmoke font-para-medium text-center">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
            <img
              className="relative max-w-[121px] object-cover"
              alt={props.navbarLogo.logoImg.data.attributes.alternativeText}
              src={navbarLogoUrl}
            />
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            Menu
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-10 absolute bg-black md:bg-transparent md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              isOpen ? "top-20" : "top-[-490px]"
            }`}
          >
            {props.links &&
              props.links.map((link: NavbarLink) => {
                return (
                  <>
                    <li
                      key={link.id}
                      className={` md:ml-8 text-xl md:my-0 my-7 list-none  items-start justify-start cursor-pointer font-semibold ${
                        styles.navbar
                      } ${link.id === activeTab ? styles.selectedTab : ""}`}
                      onClick={() =>
                        handleDataScrollTo(link.dataScrollTo, link.id)
                      }
                    >
                      {link.text}
                    </li>
                  </>
                );
              })}
            <GlitterButton
              buttonText={props.button.text}
              iconUrl="/materialsymbolsarrowrightaltrounded1.svg"
              onClick={() => {}}
              style={{ width: 247, height: 44, position: "unset" }}
              type="button"
              className="py-2 px-6 md:invisible"
            />
          </ul>
          <GlitterButton
            buttonText={props.button.text}
            iconUrl="/materialsymbolsarrowrightaltrounded1.svg"
            onClick={() => {}}
            style={{ width: 247, height: 44, position: "unset" }}
            type="button"
            className="py-2 px-6 rounded invisible md:visible"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;

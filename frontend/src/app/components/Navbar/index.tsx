"use client";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import GlitterButton from "../GlitterButton";
import { useCallback, useState } from "react";
import styles from "./navbar.module.css";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

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

export interface NavbarButton {
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
  navButton: NavbarLink;
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

  const handleButtonScrollTo = useCallback((dataScrollTo: string) => {
    const anchor = document.querySelector(`[data-scroll-to=${dataScrollTo}]`);
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 z-10">
        <div className="[@media(min-width:1079px)]:flex items-center justify-between  [background:linear-gradient(90deg,_#15141a,_#111516_12.36%,_#111819_23.28%,_#11191b_34.69%,_#13161b_52.4%,_#15151b_68.54%,_#131213)] py-4 [@media(min-width:1079px)]:px-10 px-7 text-whitesmoke font-para-medium text-center">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
            <img
              className="relative max-w-[121px] object-cover"
              alt={props.navbarLogo.logoImg.data.attributes.alternativeText}
              src={navbarLogoUrl}
            />
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl absolute right-8 top-6 cursor-pointer [@media(min-width:1079px)]:hidden"
          >
            {isOpen ? <IoMdClose /> : <FaBars />}
          </div>
          <ul
            className={`[@media(min-width:1079px)]:flex [@media(min-width:1079px)]:items-center mt-14 [@media(min-width:1079px)]:mt-5 [@media(min-width:1079px)]:pb-0 pb-10 [@media(min-width:1079px)]:w-fit absolute justify-end [background:linear-gradient(90deg,_#15141a,_#111516_12.36%,_#111819_23.28%,_#11191b_34.69%,_#13161b_52.4%,_#15151b_68.54%,_#131213)] [@media(min-width:1079px)]:bg-transparent [@media(min-width:1079px)]:static [@media(min-width:1079px)]:z-auto z-[-1] left-0 w-full  [@media(min-width:1079px)]:pl-0 pl-9 transition-all duration-500 ease-in ${
              isOpen ? "top-20" : "top-[-490px]"
            }`}
          >
            {props.links &&
              props.links.map((link: NavbarLink) => {
                return (
                  <>
                    <li
                      key={link.id}
                      className={` [@media(min-width:1079px)]:ml-8 text-base [@media(min-width:1079px)]:my-0 my-7 list-none  items-start justify-start cursor-pointer font-para-medium text-sm ${
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
            <div className="flex flex-row flex-wrap content-center justify-center [@media(min-width:1079px)]:hidden">
              <GlitterButton
                buttonText={props.navButton.text}
                iconUrl="/materialsymbolsarrowrightaltrounded1.svg"
                onClick={() =>
                  handleButtonScrollTo(props.navButton.dataScrollTo)
                }
                style={{ width: 247, height: 44 }}
                type="button"
                className="py-2  [@media(min-width:1079px)]:invisible"
              />
            </div>
          </ul>
          <GlitterButton
            buttonText={props.navButton.text}
            iconUrl="/materialsymbolsarrowrightaltrounded1.svg"
            onClick={() => handleButtonScrollTo(props.navButton.dataScrollTo)}
            style={{ width: "100%", maxWidth: 300, height: 44 }}
            type="button"
            className="py-2 px-6 rounded invisible [@media(min-width:1079px)]:visible"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;

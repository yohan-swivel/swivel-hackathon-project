"use client";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import GlitterButton from "../GlitterButton";
import { useCallback, useState } from "react";
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
  dataScrollTo: string;
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
  const [activeTab, setActiveTab] = useState<number>(16);
  const [isOpen, setIsOpen] = useState(false);

  const navbarLogoUrl: any = getStrapiMedia(
    props.navbarLogo.logoImg.data.attributes.url
  );

  const handleDataScrollTo = useCallback(
    (dataScrollTo: string, tabId: number) => {
      setActiveTab(tabId);
      const anchor = document.querySelector(`[data-scroll-to=${dataScrollTo}]`);
      if (anchor) {
        console.log(anchor);
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        setIsOpen(false);
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
    <div className="top_navBar">
      <div className="container">
        <div className="top_navBar_items">
          <img
            className="logo_img "
            alt={props.navbarLogo.logoImg.data.attributes.alternativeText}
            src={navbarLogoUrl}
            onClick={() => handleButtonScrollTo(props.navbarLogo.dataScrollTo)}
          />
          <ul className="nav_item_list">
            {props.links &&
              props.links.map((link: NavbarLink) => {
                console.log(link);
                return (
                  <li key={link.id}>
                    <a
                      href={`#${
                        link.dataScrollTo === "heroContentContainer"
                          ? ""
                          : link.dataScrollTo
                      }`}
                      className={`nav_item ${
                        link.id === activeTab ? "nav_item_active" : ""
                      }`}
                      onClick={() => setActiveTab(link.id)}
                    >
                      {link.text}
                    </a>
                  </li>
                );
              })}
          </ul>
          <div className="nav_btn">
            <GlitterButton
              buttonText={props.navButton.text}
              iconUrl="/materialsymbolsarrowrightaltrounded1.svg"
              onClick={() => handleButtonScrollTo(props.navButton.dataScrollTo)}
              style={{ width: 250 }}
              type="button"
            />
          </div>
          <div className="nav_btn_mobile">
            <div onClick={() => setIsOpen(!isOpen)} className="bred-icon">
              {isOpen ? <IoMdClose /> : <FaBars />}
            </div>
            <div className={`nav_item_list_mobile ${isOpen ? "open" : ""}`}>
              <div
                onClick={() => setIsOpen(false)}
                className="bred-icon cl_icon"
              >
                <IoMdClose />
              </div>
              <ul className="nav_item_mm">
                {props.links &&
                  props.links.map((link: NavbarLink) => {
                    return (
                      <li
                        key={link.id}
                        className={`nav_item_m ${
                          link.id === activeTab ? "nav_item_active_m" : ""
                        }`}
                        onClick={() =>
                          handleDataScrollTo(link.dataScrollTo, link.id)
                        }
                      >
                        <p>{link.text}</p>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

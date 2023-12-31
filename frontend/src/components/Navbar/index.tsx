"use client";
import { getStrapiMedia } from "@/utils/api-helpers";
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
  const [activeTab, setActiveTab] = useState<number>(props.links[0].id);
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
        setIsOpen(false);
      }
    },
    []
  );

  return (
    <div className="top_navBar">
      <div className="container">
        <div className="top_navBar_items">
          <a href={`/#${props.navbarLogo.dataScrollTo}`}>
            <img
              className="logo_img "
              alt={props.navbarLogo.logoImg.data.attributes.alternativeText}
              src={navbarLogoUrl}
            />
          </a>
          <ul className="nav_item_list">
            {props.links &&
              props.links.map((link: NavbarLink) => {
                return (
                  <li key={link.id}>
                    <a
                      href={`/#${link.dataScrollTo}`}
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
              style={{ width: 250 }}
              type="link"
              href={`/#${props.navButton.dataScrollTo}`}
              fontSize={15}
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
                      <a
                        key={link.id}
                        href={`/#${link.dataScrollTo}`}
                        onClick={() => setIsOpen(false)}
                        style={{textDecoration:'none'}}
                      >
                        <li
                          key={link.id}
                          className={`nav_item_m ${
                            link.id === activeTab ? "nav_item_active_m" : ""
                          }`}
                        >
                          <p>{link.text}</p>
                        </li>
                      </a>
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

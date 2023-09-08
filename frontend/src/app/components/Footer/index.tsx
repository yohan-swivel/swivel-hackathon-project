"use client";

import { getStrapiMedia } from "@/app/utils/api-helpers";
import { Logo, NavbarLink } from "../Navbar";
import { useCallback } from "react";
import styles from "./footer.module.css";
import {
  RenderSocialIcon,
  SocialType,
} from "@/app/utils/social-media-icon-renderer";

interface SoicalLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social: SocialType;
}

interface PolicyLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  dataScrollTo: string;
}

export interface FooterProps {
  id: number;
  copyrights: string;
  socials: Array<SoicalLink>;
  policyLinks: Array<PolicyLink>;
  navLinks: Array<NavbarLink>;
  footerLogo: Logo;
}

const Footer: React.FC<FooterProps> = (props) => {
  const footerLogoUrl: any = getStrapiMedia(
    props.footerLogo.data.attributes.url
  );

  const handleDataScrollTo = useCallback((dataScrollTo: string) => {
    const anchor = document.querySelector(`[data-scroll-to=${dataScrollTo}]`);
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="container">
      <div className="">
        <div className="footer_top_bar">
          <img
            alt={props.footerLogo.data.attributes.alternativeText}
            src={footerLogoUrl}
          />
          <div className="footer_navBar">
            {props.navLinks &&
              props.navLinks.map((link: NavbarLink, index: number) => (
                <div
                  key={index}
                  className="footer_navBar_link"
                  onClick={() => handleDataScrollTo(link.dataScrollTo)}
                >
                  {link.text}
                </div>
              ))}
          </div>

          <div className="social_bar">
            {props.socials &&
              props.socials.map((social: SoicalLink, index: number) => (
                <a href={social.url} key={index}>
                  <RenderSocialIcon social={social.social} />
                </a>
              ))}
          </div>
        </div>


        <hr className="hr-line"/>

        <div className="footer_bottom">
          <div className="normal_txt">
            © {new Date().getFullYear()} {props.copyrights}
          </div>
          <div className="footer_bottom_link">
            {props.policyLinks &&
              props.policyLinks.map((policyLink: PolicyLink, index: number) => (
                <a
                  key={index}
                  href={policyLink.url}
                  className=""
                >
                  {policyLink.text}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

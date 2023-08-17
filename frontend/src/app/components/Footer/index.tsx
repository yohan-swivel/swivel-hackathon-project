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
    <>
      <div className="absolute bottom-[47px] left-0 right-0 m-auto w-[98%] flex flex-col items-center justify-start text-left text-base text-whitesmoke font-para-medium">
        <div className="box-border w-[100%] flex flex-row pt-0 px-0 pb-10 items-center justify-between border-b-[1px] ">
          <img
            className="relative w-[121px] h-[66.4px] object-cover"
            alt={props.footerLogo.data.attributes.alternativeText}
            src={footerLogoUrl}
          />
          <div className="flex flex-row items-start justify-start gap-[32px]">
            {props.navLinks &&
              props.navLinks.map((link: NavbarLink) => (
                <>
                  <div
                    className={`flex flex-row p-2.5 items-start justify-start cursor-pointer font-semibold ${styles.footer}`}
                    onClick={() => handleDataScrollTo(link.dataScrollTo)}
                  >
                    {link.text}
                  </div>
                </>
              ))}
          </div>

          <div className="flex flex-row items-start justify-start gap-[24px]">
            {props.socials &&
              props.socials.map((social: SoicalLink) => (
                <>
                  <a href={social.url}>
                    <RenderSocialIcon social={social.social} />
                  </a>
                </>
              ))}
          </div>
        </div>
        <hr style={{ width: "100%" }} />
        <div className="flex flex-col p-2.5 items-center justify-center gap-[10px]">
          <div className="relative font-medium">
            © {new Date().getFullYear()} {props.copyrights}
          </div>
          <div className="relative font-medium ">
            {props.policyLinks &&
              props.policyLinks.map((policyLink: PolicyLink) => (
                <>
                  <a
                    style={{ marginLeft: 10, textDecoration: "none" }}
                    href={policyLink.url}
                    className="text-white"
                  >
                    {policyLink.text}
                  </a>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

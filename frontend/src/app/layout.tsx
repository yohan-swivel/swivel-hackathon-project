import type { Metadata } from "next";
import "./globals.css";
import { getStrapiURL } from "./utils/api-helpers";
import { fetchAPI } from "./utils/fetch-api";
import { FALLBACK_SEO } from "./utils/constants";
import Navbar, { NavbarProps } from "./components/Navbar";
import Footer from "./components/Footer";
import { FooterProps } from "./components/Footer";

async function getGlobal(): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/global`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    populate: [
      "metadata",
      "favicon",
      "navbar.links",
      "navbar.button",
      "navbar.navbarLogo.logoImg",
      "footer.navLinks",
      "footer.policyLinks",
      "footer.socials",
      "footer.footerLogo",
      "backgroundFluidmark",
    ],
  };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getGlobal();

  if (!meta.data) return FALLBACK_SEO;

  const { metadata, favicon } = meta.data.attributes;
  const { url } = favicon.data.attributes;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    icons: {
      icon: [new URL(url, getStrapiURL())],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const global = await getGlobal();
  const navbarData: NavbarProps = global.data.attributes.navbar;
  const footerData: FooterProps = global.data.attributes.footer;

  return (
    <html>
      <body>
        <Navbar {...navbarData} />
        <main style={{ overflowY: "hidden" }}>{children}</main>
        <Footer {...footerData} />
      </body>
    </html>
  );
}

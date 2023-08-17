// import LangRedirect from "./components/LangRedirect";
// import { sectionRenderer } from "./utils/section-renderer";
// import { getPageBySlug } from "@/app/[lang]/utils/get-page-by-slug";

import HeroContainer from "./components/HeroContainer";

export default async function RootRoute({
  params,
}: {
  params: { lang: string };
}) {
  // const page = await getPageBySlug("home", params.lang);
  // // if (page.data.length == 0 && params.lang !== "en") return <LangRedirect/>
  // // if (page.data.length === 0) return null;
  // const contentSections = page.data.attributes.contentSection;
  // return contentSections.map((section: any, index: number) =>
  //   sectionRenderer(section, index)
  // );
  return <><HeroContainer/> </>;
}

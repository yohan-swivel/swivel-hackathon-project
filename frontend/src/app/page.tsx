import { getPageBySlug } from "@/utils/get-page-by-slug";
import { sectionRenderer } from "@/utils/section-renderer";

export default async function RootRoute() {
  const mainPageId: string = process.env.NEXT_MAIN_PAGE_ID || "3";

  const page = await getPageBySlug(mainPageId);
  if (page.data.length === 0) return null;
  const contentSections = page.data.attributes.contentSection;
  return contentSections.map((section: any, index: number) =>
    sectionRenderer(section, index)
  );
}

import EventHighlightsContainer from "@/components/EventHighlightsContainer";
import { getPageBySlug } from "@/utils/get-page-by-slug";

export default async function PageRoute() {
  const pageID: string = process.env.NEXT_EVENT_HIGH_LIGHT_ID || "17";
  const page = await getPageBySlug(pageID);
  const contentSections = page.data.attributes.contentSection[0];

  return (
    <>
      <div className="bg_privacy">
        <EventHighlightsContainer data={contentSections} isPage={true} />
      </div>
    </>
  );
}

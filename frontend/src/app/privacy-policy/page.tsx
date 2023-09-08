import { getPageBySlug } from "../utils/get-page-by-slug";
import parse from "html-react-parser";

interface RenderMainSectionParams {
  contentName: string;
  headerText: string;
  headerDescription: string;
}

const renderMainSection = (params: RenderMainSectionParams[]) => {
  return (
    params &&
    params.map((params: RenderMainSectionParams) => {
      switch (params.contentName) {
        case "main.content":
          return (
            <div className="section_block">
              <h1>{params.headerText}</h1>
              {parse(params.headerDescription)}
            </div>
          );
        case "main.content.two":
          return (
            <div className="section_block">
              <h2>{params.headerText}</h2>
              {parse(params.headerDescription)}
            </div>
          );
        default:
          return null;
      }
    })
  );
};

const renderSubSection = (params: RenderMainSectionParams[]) => {
  return (
    params &&
    params.map((params: RenderMainSectionParams) => {
      if (
        params.contentName === "sub.content.two" ||
        params.contentName === "sub.content.three" ||
        params.contentName === "sub.content.four" ||
        params.contentName === "sub.content.five" ||
        params.contentName === "sub.content.six" ||
        params.contentName === "sub.content.seven" ||
        params.contentName === "sub.content.eight"
      ) {
        return (
          <div className="section_block">
            <h2>{params.headerText}</h2>
            {parse(params.headerDescription)}
          </div>
        );
      }
    })
  );
};

export default async function PageRoute() {
  const privacyPolicyPageId: string = process.env.NEXT_PRIVACY_POLICY_ID || "7";

  const page = await getPageBySlug(privacyPolicyPageId);
  if (page.data.length === 0) return null;
  const contentSections = page.data.attributes.contentSection;
  return (
    <>
      <div className="bg_privacy">
        <div className="container_inner">
          <div className="section_privacy">
            {renderMainSection(contentSections)}
          </div>
        </div>
      </div>
      {/* <div className="ft_gradient_2" /> */}
      <div className="section_privacy_bottom">
        <div className="container_inner">
          {renderSubSection(contentSections)}
        </div>
      </div>
    </>
  );
}

import HeroContainer from "@/app/components/HeroContainer";
import InitiateContainer from "@/app/components/InitiateContainer";

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.hero-container":
      return <HeroContainer key={index} data={section} />;
    case "sections.initiate-container":
      return <InitiateContainer key={index} data={section} />;
    default:
      return null;
  }
}

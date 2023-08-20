import HeroContainer from "@/app/components/HeroContainer";
import InitiateContainer from "@/app/components/InitiateContainer";
import GlanceContainer from "../components/GlanceContainer";
import TeamContainer from "../components/TeamContainer";

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.hero-container":
      return <HeroContainer key={index} data={section} />;
    case "sections.initiate-container":
      return <InitiateContainer key={index} data={section} />;
    case "sections.glance-container":
      return <GlanceContainer key={index} data={section} />;
    case "sections.team-grid":
      return <TeamContainer key={index} data={section} />;
    default:
      return null;
  }
}

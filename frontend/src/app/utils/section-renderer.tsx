import HeroContainer from "@/app/components/HeroContainer";
import InitiateContainer from "@/app/components/InitiateContainer";
import GlanceContainer from "../components/GlanceContainer";
import TeamContainer from "../components/TeamContainer";
import ThemeContainer from "../components/ThemeContainer";
import SponsersContainer from "../components/SponsersContainer";
import FaqContainer from "../components/FaqContainer";
import ContactUsContainer from "../components/ContactUsContainer";
import EventHighlightsContainer from "../components/EventHighlightsContainer";
import WinnersContainer from "../components/WinnersContainer";

export function sectionRenderer(section: any, index: number) {
  // console.log(section);

  switch (section.__component) {
    case "sections.hero-container":
      return <HeroContainer key={index} data={section} />;
    case "sections.initiate-container":
      return <InitiateContainer key={index} data={section} />;
    case "sections.glance-container":
      return <GlanceContainer key={index} data={section} />;
    case "sections.team-grid":
      return <TeamContainer key={index} data={section} />;
    case "sections.theme-stack":
      return <ThemeContainer key={index} data={section} />;
    case "sections.event-highlights-container":
      return <EventHighlightsContainer key={index} data={section} isPage={false} />;
    case "sections.winners-container":
      return <WinnersContainer key={index} data={section} />;
    case "sections.home-sponsers":
      return <SponsersContainer key={index} data={section} />;
    case "sections.faqs":
      return <FaqContainer key={index} data={section} />;
    case "sections.contact-us-container":
      return <ContactUsContainer key={index} data={section} />;
    default:
      return null;
  }
}

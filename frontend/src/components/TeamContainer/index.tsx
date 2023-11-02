"use client";
import { getStrapiMedia } from "@/utils/api-helpers";
import HeaderText from "../HeaderText";
import { LogoItem } from "../Navbar";
import TeamGrid, { TeamsGridProps } from "../TeamGrid";

interface TeamContainerProps {
  id: number;
  __component: string;
  headerText: string;
  headerDescription: string;
  teams: Array<TeamsGridProps>;
  dataScrollTo: string;
  fluidmarks: { data: Array<LogoItem> };
}

const TeamContainer: React.FC<{ data: TeamContainerProps }> = ({ data }) => {
  
  const fluidmark1: any = getStrapiMedia(
    data.fluidmarks.data[0].attributes.url
  );
  const fluidmark2: any = getStrapiMedia(
    data.fluidmarks.data[1].attributes.url
  );
  const fluidmark3: any = getStrapiMedia(
    data.fluidmarks.data[2].attributes.url
  );
  const fluidmark4: any = getStrapiMedia(
    data.fluidmarks.data[3].attributes.url
  );

  return (
    <div className="container_inner">
      <section className="section" id={data.dataScrollTo}>
        <HeaderText
          headerText={data.headerText}
          headerDescription={data.headerDescription}
          descriptionPadding="px-16"
        />
        <div className="icon_row2">
          <img
            className="opacity-[0.7] invisible [@media(min-width:1079px)]:visible"
            alt={data.fluidmarks.data[0].attributes.alternativeText}
            src={fluidmark4}
          />
          <img
            className="opacity-[0.7] invisible [@media(min-width:1079px)]:visible"
            alt={data.fluidmarks.data[1].attributes.alternativeText}
            src={fluidmark3}
          />
        </div>
        <div>
          {data.teams &&
            data.teams.map((team: TeamsGridProps, index: number) => (
              <TeamGrid key={index} {...team} />
            ))}
        </div>
        <div className="icon_row3">
          <img
            className="opacity-[0.7] invisible [@media(min-width:1079px)]:visible"
            alt={data.fluidmarks.data[0].attributes.alternativeText}
            src={fluidmark1}
          />
          <img
            className="opacity-[0.7] invisible [@media(min-width:1079px)]:visible"
            alt={data.fluidmarks.data[1].attributes.alternativeText}
            src={fluidmark2}
          />
        </div>
      </section>
    </div>
  );
};

export default TeamContainer;

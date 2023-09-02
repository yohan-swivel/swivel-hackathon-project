"use client";
import { getStrapiMedia } from "@/app/utils/api-helpers";
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
      <section className="section" data-scroll-to={data.dataScrollTo}>
        <HeaderText
          headerText={data.headerText}
          headerDescription={data.headerDescription}
          descriptionPadding="px-16"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div>
            <img
              className="opacity-[0.7] invisible [@media(min-width:1079px)]:visible"
              alt={data.fluidmarks.data[0].attributes.alternativeText}
              src={fluidmark4}
            />
          </div>
          <div>
            <img
                className="opacity-[0.7] invisible [@media(min-width:1079px)]:visible"
                alt={data.fluidmarks.data[1].attributes.alternativeText}
                src={fluidmark3}
            />
          </div>
        </div>
        <div>
          {data.teams &&
            data.teams.map((team: TeamsGridProps, index: number) => (
              <TeamGrid key={index} {...team} fluidmark1={fluidmark1} fluidmark2={fluidmark2}/>
            ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >

        </div>
      </section>
    </div>
  );
};

export default TeamContainer;

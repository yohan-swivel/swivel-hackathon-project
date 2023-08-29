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
    <>
      <section
        className="flex flex-col items-center justify-center gap-[48px] text-center text-lg text-white font-para-medium px-16"
        data-scroll-to={data.dataScrollTo}
      >
        <HeaderText
          headerText={data.headerText}
          headerDescription={data.headerDescription}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            // width: "80%",
          }}
        >
          <div>
            <img
              className="opacity-[0.7] "
              alt={data.fluidmarks.data[0].attributes.alternativeText}
              src={fluidmark4}
            />
          </div>
          <div>
            {data.teams &&
              data.teams.map((team: TeamsGridProps, index: number) => (
                <TeamGrid key={index} {...team} />
              ))}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
              className="absolute mx-auto left-20 right-20"
            >
              <div>
                <img
                  className="opacity-[0.7] "
                  alt={data.fluidmarks.data[0].attributes.alternativeText}
                  src={fluidmark1}
                />
              </div>
              <div>
                <img
                  className="opacity-[0.7]"
                  alt={data.fluidmarks.data[1].attributes.alternativeText}
                  src={fluidmark2}
                />
              </div>
            </div>
          </div>
          <div>
            <img
              className="opacity-[0.7]"
              alt={data.fluidmarks.data[1].attributes.alternativeText}
              src={fluidmark3}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamContainer;

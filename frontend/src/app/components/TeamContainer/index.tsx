"use client";
import HeaderText from "../HeaderText";
import TeamGrid, { TeamsGridProps } from "../TeamGrid";

interface TeamContainerProps {
  id: number;
  __component: string;
  headerText: string;
  headerDescription: string;
  teams: Array<TeamsGridProps>;
  dataScrollTo: string;
}

const TeamContainer: React.FC<{ data: TeamContainerProps }> = ({ data }) => {
  return (
    <>
      <section
        className="absolute top-[1991px] w-[100%] flex flex-col items-center justify-center gap-[48px] text-center text-lg text-white font-para-medium"
        data-scroll-to={data.dataScrollTo}
      >
        <HeaderText
          headerText={data.headerText}
          headerDescription={data.headerDescription}
        />
        {data.teams &&
          data.teams.map((team: TeamsGridProps, index: number) => (
            <TeamGrid key={index} {...team} />
          ))}
      </section>
    </>
  );
};

export default TeamContainer;

import TeamGridItem, { TeamGridItemProps } from "../TeamGridItem";

export interface TeamsGridProps {
  id: number;
  teamName: string;
  members: Array<TeamGridItemProps>;
}

const TeamGrid: React.FC<TeamsGridProps> = (props) => {
  return (
    <>
      <div className="relative text-13xl mt-10">{props.teamName}</div>
      <div className="self-stretch flex flex-row items-center justify-center mt-10">
        <div className="flex-1 flex flex-row items-center justify-center gap-[32px]">
          {props.members &&
            props.members.map((member: TeamGridItemProps, index: number) => (
              <TeamGridItem key={index} {...member} />
            ))}
        </div>
      </div>
    </>
  );
};

export default TeamGrid;

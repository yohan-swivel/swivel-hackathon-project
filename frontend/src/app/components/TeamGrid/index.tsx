import TeamGridItem, { TeamGridItemProps } from "../TeamGridItem";

export interface TeamsGridProps {
  id: number;
  teamName: string;
  members: Array<TeamGridItemProps>;
}

const TeamGrid: React.FC<TeamsGridProps> = (props) => {
  return (
    <>
      <div className="relative text-13xl">{props.teamName}</div>
      <div className="self-stretch flex flex-row items-center justify-center">
        <div className="flex-1 flex flex-row items-center justify-center gap-[32px]">
          {props.members &&
            props.members.map((member: TeamGridItemProps, index: number) => (
              <TeamGridItem key={index} {...member} />
            ))}
        </div>
      </div>
      <div className="absolute top-[650px] w-[100%]">
        <div className="custom-glow float-left  w-[250px] h-[250px] opacity-20" />
      </div>
    </>
  );
};

export default TeamGrid;

import TeamGridItem, { TeamGridItemProps } from "../TeamGridItem";

export interface TeamsGridProps {
  id: number;
  teamName: string;
  members: Array<TeamGridItemProps>;
}

const TeamGrid: React.FC<TeamsGridProps> = (props) => {
  return (
    <div className="teams_board">
      <h6>{props.teamName}</h6>
        <div className="team_box_row">
          {props.members &&
            props.members.map((member: TeamGridItemProps, index: number) => (
              <TeamGridItem key={index} {...member} />
            ))}
        </div>
    </div>
  );
};

export default TeamGrid;

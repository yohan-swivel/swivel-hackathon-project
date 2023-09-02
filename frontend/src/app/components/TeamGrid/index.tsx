import React from "react";
import TeamGridItem, { TeamGridItemProps } from "../TeamGridItem";

export interface TeamsGridProps {
    id: number;
    teamName: string;
    members: Array<TeamGridItemProps>;
    fluidmark1?: any;
    fluidmark2?: any;
}

const TeamGrid: React.FC<TeamsGridProps> = (props) => {
    return (
        <div className="teams_board">
            <h6>{props.teamName}</h6>
            <div className="team_box_row">
                {props.members &&
                    props.members.map((member: TeamGridItemProps, index: number) => (
                        <React.Fragment key={index}>
                            {props.members.length === 3 && index === 0 && (
                                <div className='teams_icon'>
                                    <img
                                        className="opacity-[0.7] invisible [@media(min-width:1079px)]:visible"
                                        alt={props.fluidmark1}
                                        src={props.fluidmark1}
                                    />
                                </div>

                            )}
                            <TeamGridItem {...member} />
                            {props.members.length === 3 && index === props.members.length - 1 && (
                                <div>
                                    <div className='teams_icon'>
                                        <img
                                            className="opacity-[0.7] invisible [@media(min-width:1079px)]:visible"
                                            alt={props.fluidmark2}
                                            src={props.fluidmark2}
                                        />
                                    </div>
                                </div>

                            )}
                        </React.Fragment>
                    ))}
            </div>
        </div>
    );
};

export default TeamGrid;

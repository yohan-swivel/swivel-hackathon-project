import { getStrapiMedia } from "@/app/utils/api-helpers";
import { Logo } from "../Navbar";

export interface TeamGridItemProps {
  id: number;
  memberName: string;
  memberDesignation: string;
  memberImage: Logo;
}

const TeamGridItem: React.FC<TeamGridItemProps> = (props) => {
  const memberImageUrl: any = getStrapiMedia(
    props.memberImage.data.attributes.url
  );
  return (
    <div className="team_box">
      <img
        alt={props.memberImage.data.attributes.alternativeText}
        src={memberImageUrl}
      />
      <div className="team_box_content">
        <p>{props.memberName}<br/><span>{props.memberDesignation}</span></p>
        
      </div>
    </div>
  );
};

export default TeamGridItem;

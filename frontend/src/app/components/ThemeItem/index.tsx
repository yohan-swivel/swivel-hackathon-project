import { getStrapiMedia } from "@/app/utils/api-helpers";
import { Logo } from "../Navbar";

export interface ThemeItemProps {
  id: number;
  themeTitle: string;
  themeDescription: string;
  themeIcon: Logo;
}

const ThemeItem: React.FC<ThemeItemProps> = (props) => {
  const themeIconUrl: any = getStrapiMedia(props.themeIcon.data.attributes.url);
  return (
    <div className="theme_box">
      <img
        alt={props.themeIcon.data.attributes.alternativeText}
        src={themeIconUrl}
      />
      <h5>{props.themeTitle}</h5>
      <p>{props.themeDescription}</p>
    </div>
  );
};

export default ThemeItem;

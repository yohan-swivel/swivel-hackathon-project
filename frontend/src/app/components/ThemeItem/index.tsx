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
    <>
      <div className="self-stretch flex-1 bg-glass-bg flex flex-col p-8 items-start justify-start gap-[32px]">
        <img
          className="relative w-[67px] h-[67px] overflow-hidden shrink-0"
          alt={props.themeIcon.data.attributes.alternativeText}
          src={themeIconUrl}
        />
        <b className="self-stretch relative">
          <p className="m-0">{props.themeTitle}</p>
        </b>
        <div className="self-stretch relative text-base leading-[26px] font-medium">
          {props.themeDescription}
        </div>
      </div>
    </>
  );
};

export default ThemeItem;

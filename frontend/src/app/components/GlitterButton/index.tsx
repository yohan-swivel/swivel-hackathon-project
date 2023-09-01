import { CSSProperties, MouseEventHandler } from "react";
import _ from "lodash";

interface GlitterButtonProps {
  type: "submit" | "button";
  iconUrl?: string;
  buttonText: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  className?: string;
}

const GlitterButton: React.FC<GlitterButtonProps> = (props) => {
  return (
    <button
      className="gradientButton"
      onClick={props.onClick}
      style={props.style}
      type={props.type}
    >
      <b>{props.buttonText}</b>
      {!_.isEmpty(props.iconUrl) && (
        <img alt="arrow right" src={props.iconUrl} />
      )}
    </button>
  );
};

export default GlitterButton;

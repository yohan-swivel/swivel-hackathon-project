import { CSSProperties, MouseEventHandler } from "react";
import styles from "./glitterbutton.module.css";
import _ from "lodash";

interface GlitterButtonProps {
  type: "submit" | "button";
  iconUrl: string;
  buttonText: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style: CSSProperties;
}

const GlitterButton: React.FC<GlitterButtonProps> = (props) => {
  return (
    <>
      <button
        className={` p-1 relative flex flex-row py-2.5 px-4 items-center justify-center center   ${styles.gradientButton} hover:${styles.gradientButtonHover}`}
        onClick={props.onClick}
        style={props.style}
        type={props.type}
      >
        <b className="relative block">{props.buttonText}</b>
        {!_.isEmpty(props.iconUrl) ? (
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src={props.iconUrl}
          />
        ) : (
          <></>
        )}
      </button>
    </>
  );
};

export default GlitterButton;
